import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { first_name, last_name, email, phone, message } = body;

        // Validation
        if (!first_name || !last_name || !phone || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // 1. Fetch the original form to get fresh tokens
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';
        const siteResponse = await fetch('https://ticksafe.com.au/', {
            headers: { 'User-Agent': userAgent }
        });
        const html = await siteResponse.text();
        const $ = cheerio.load(html);

        // Find the form with ID 2
        const form = $('#gform_2');
        if (!form.length) {
            console.error('Gravity Form #2 not found on target site');
            return NextResponse.json({ message: 'Target form not found' }, { status: 502 });
        }

        const payload: Record<string, string> = {};
        
        // Capture ALL hidden inputs from the scraped form
        form.find('input[type="hidden"]').each((_: any, el: any) => {
            const name = $(el).attr('name');
            const value = $(el).attr('value');
            if (name) payload[name] = value || '';
        });

        // Mapping visible fields to Gravity Forms IDs
        payload['input_1.3'] = first_name;
        payload['input_1.6'] = last_name;
        payload['input_3'] = email || '';
        payload['input_4'] = phone;
        payload['input_5'] = message;
        
        // HoneyPot field (should be empty)
        payload['input_7'] = ''; 
        
        // Placeholder for reCAPTCHA (Presence might be required even if token is invalid/empty)
        payload['g-recaptcha-response'] = '';

        // Essential Gravity Forms control fields (ensuring they exist)
        payload['is_submit_2'] = '1';
        payload['gform_submit'] = '2';
        payload['gform_target_page_number_2'] = '0';
        payload['gform_source_page_number_2'] = '1';
        payload['gform_submission_method'] = payload['gform_submission_method'] || 'postback';
        payload['gform_theme'] = payload['gform_theme'] || 'gravity-theme';

        // 2. Prepare the payload for submission
        const formData = new URLSearchParams();
        Object.entries(payload).forEach(([name, value]) => {
            formData.append(name, value);
        });

        // 3. Submit to the main site backend
        const submitResponse = await fetch('https://ticksafe.com.au/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': userAgent,
                'Referer': 'https://ticksafe.com.au/',
                'Origin': 'https://ticksafe.com.au',
            },
            body: formData.toString(),
            redirect: 'manual' 
        });

        const status = submitResponse.status;
        const responseBody = await submitResponse.text();

        // Gravity Forms usually redirects (302) to a thank you page on success
        // or returns 200 with the form rendered again (indicating validation error)
        const isSuccess = status === 302 || (status === 200 && (responseBody.includes('thank-you') || responseBody.includes('gform_confirmation_message')));

        if (isSuccess) {
            console.log(`Submission successful. Status: ${status}`);
            return NextResponse.json({ 
                message: 'Success',
                debug_status: status,
                // debug_body: responseBody.substring(0, 500) 
            }, { status: 200 });
        } else {
            // Log full response for debugging in Vercel
            console.error(`Submission failed. Status: ${status}. Body Snippet: ${responseBody.substring(0, 1000)}`);
            
            // If we find evidence of reCAPTCHA failure in the body
            if (responseBody.includes('grecaptcha') || responseBody.includes('reCAPTCHA')) {
                 return NextResponse.json({ 
                    message: 'reCAPTCHA blocked', 
                    details: 'The target site requires a valid reCAPTCHA token.' 
                }, { status: 403 });
            }

            return NextResponse.json({ 
                message: 'External submission failed',
                status: status,
                debug_body: responseBody.substring(0, 500)
            }, { status: 502 });
        }

    } catch (error) {
        console.error('Error in lead proxy:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

