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

        // 1. Fetch the original form to get fresh tokens and cookies
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36';
        const siteResponse = await fetch('https://ticksafe.com.au/', {
            headers: { 'User-Agent': userAgent }
        });
        const html = await siteResponse.text();
        const cookies = siteResponse.headers.get('set-cookie');
        
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

        // 2. Mapping visible fields to Gravity Forms IDs precisely
        payload['input_1.3'] = first_name;
        payload['input_1.6'] = last_name;
        payload['input_3'] = email || '';
        payload['input_4'] = phone;
        payload['input_5'] = message;
        
        // Anti-spam & Control Fields for Form ID 2
        payload['input_7'] = ''; // HoneyPot field should be empty
        payload['g-recaptcha-response'] = ''; // Ensure field exists
        payload['is_submit_2'] = '1';
        payload['gform_submit'] = '2';
        payload['gform_target_page_number_2'] = '0';
        payload['gform_source_page_number_2'] = '1';

        const formData = new URLSearchParams();
        Object.entries(payload).forEach(([name, value]) => {
            formData.append(name, value);
        });

        const postHeaders: Record<string, string> = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': userAgent,
            'Referer': 'https://ticksafe.com.au/',
            'Origin': 'https://ticksafe.com.au',
        };

        if (cookies) {
             postHeaders['Cookie'] = cookies;
        }

        // 3. Submit directly to the main site backend Gravity Forms endpoint
        const submitResponse = await fetch('https://ticksafe.com.au/', {
            method: 'POST',
            headers: postHeaders,
            body: formData.toString(),
            redirect: 'manual' 
        });

        const status = submitResponse.status;
        const responseBody = await submitResponse.text();
        
        // Log outcome for debugging
        const $res = cheerio.load(responseBody);
        const validationError = $res('.gform_validation_errors').text().trim();
        
        if (validationError) {
             console.error(`Gravity Forms Validation Error: ${validationError}`);
             $res('.gfield_error').each((_, el) => {
                 console.error(`Field Error Details: ${$res(el).text().trim()}`);
             });
        }

        // Always return success to the UI as requested
        return NextResponse.json({ 
            message: 'Success',
            proxy_status: status
        }, { status: 200 });

    } catch (error) {
        console.error('Error in lead proxy:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

