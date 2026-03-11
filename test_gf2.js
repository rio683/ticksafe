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

    payload['input_1.3'] = 'Test';
    payload['input_1.6'] = 'Proxy';
    payload['input_3'] = 'proxytest@test.com';
    payload['input_4'] = '0400000000';
    payload['input_5'] = 'Test from script';
    payload['input_7'] = ''; // honeypot
    payload['g-recaptcha-response'] = '';
    payload['is_submit_2'] = '1';
    payload['gform_submit'] = '2';

    const formData = new URLSearchParams();
    Object.entries(payload).forEach(([k, v]) => formData.append(k, v));

    const res2 = await fetch('https://ticksafe.com.au/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': userAgent,
            'Referer': 'https://ticksafe.com.au/',
            'Origin': 'https://ticksafe.com.au'
        },
        body: formData.toString()
    });

    const res2Text = await res2.text();
    const $res2 = cheerio.load(res2Text);
    const errorMsg = $res2('.gform_validation_errors').text().trim();
    if (errorMsg) {
        console.log("Validation Error Form:", errorMsg);
        $res2('.gfield_error').each((_, el) => {
            console.log("Field error:", $res2(el).text().trim());
        });
        
        $res2('.validation_message').each((_, el) => {
            console.log("Validation message:", $res2(el).text().trim());
        });
    }
}
run();
