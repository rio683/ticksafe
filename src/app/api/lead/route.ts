import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// The user will need to provide RESEND_API_KEY, RESEND_FROM, and RESEND_TO in their .env file/Vercel settings

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json({ message: 'Email service misconfigured' }, { status: 500 });
        }
        
        const resend = new Resend(apiKey);
        const body = await request.json();
        const { first_name, last_name, email, phone, message, source_url } = body;

        // Validation
        if (!first_name || !last_name || !phone || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        const fromAddress = process.env.RESEND_FROM || 'TickSafe Leads <leads@ticksafenews.com>';
        const toAddressInput = process.env.RESEND_TO || 'rio@mindsheep.com.au';
        const toAddresses = toAddressInput.split(',').map(email => email.trim());

        const { data, error } = await resend.emails.send({
            from: fromAddress,
            to: toAddresses,
            subject: 'New TickSafe Lead',
            html: `
                <h2>New Lead Received from TickSafe News</h2>
                <p><strong>Name:</strong> ${first_name} ${last_name}</p>
                <p><strong>Email:</strong> ${email || 'Not provided'}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
                <hr />
                <p><strong>Source URL:</strong> <a href="${source_url}">${source_url}</a></p>
                <p><strong>Submitted At:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ message: 'Email service error', detail: error.message }, { status: 502 });
        }

        return NextResponse.json({ message: 'Success', id: data?.id }, { status: 200 });

    } catch (error) {
        console.error('Error in lead submission:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

