const cheerio = require('cheerio');

async function run() {
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';
    const res1 = await fetch('https://ticksafe.com.au/', { headers: { 'User-Agent': userAgent } });
    const html = await res1.text();
    const $ = cheerio.load(html);
    const form = $('#gform_2');

    const payload = {};
    form.find('input[type="hidden"]').each((_, el) => {
        const name = $(el).attr('name');
        const value = $(el).attr('value');
        if (name) payload[name] = value || '';
    });

    // Populate fields
    payload['input_1.3'] = 'Diagnostic';
    payload['input_1.6'] = 'Test';
    payload['input_3'] = 'diag@test.com';
    payload['input_4'] = '0400000000';
    payload['input_5'] = 'Test from diagnostic script';
    payload['input_7'] = ''; // honeypot
    
    // Attempting to bypass by not sending a g-recaptcha-response if not present,
    // or leaving it empty if we don't have a token.
    payload['g-recaptcha-response'] = '';
    
    payload['is_submit_2'] = '1';
    payload['gform_submit'] = '2';

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

    console.log("Submitting payload...");
    const res2 = await fetch('https://ticksafe.com.au/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': userAgent,
            'Referer': 'https://ticksafe.com.au/',
            'Origin': 'https://ticksafe.com.au'
        },
        body: formData.toString(),
        redirect: 'manual'
    });

    console.log("Response status:", res2.status);
    const res2Text = await res2.text();
    const $res2 = cheerio.load(res2Text);
    
    const errorMsg = $res2('.gform_validation_errors').text().trim();
    if (errorMsg) {
        console.log("General Error Context:", errorMsg);
        
        $res2('.gfield_error').each((_, el) => {
            const fieldId = $res2(el).closest('.gfield').attr('id');
            const fieldLabel = $res2(el).closest('.gfield').find('.gfield_label').text().trim();
            const validationMsg = $res2(el).find('.gfield_validation_message, .validation_message').text().trim() || $res2(el).text().trim();
            console.log(`Field Error -> ID: ${fieldId}, Label: ${fieldLabel}, Msg: ${validationMsg}`);
        });
    } else if (res2.status === 302 || $res2('.gform_confirmation_message').length > 0) {
       console.log("Truly successful submission!");
    } else {
       console.log("No validation errors, but no success confirmation found either.");
       console.log("Form HTML snippet:", $res2('#gform_wrapper_2').html()?.substring(0, 500));
    }
}
run();
