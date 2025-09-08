import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

const createEmailTemplate = (formType: string, data: any) => {
	const baseStyle = `
		<style>
			body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
			.container { max-width: 600px; margin: 0 auto; padding: 20px; }
			.header { background: #000; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
			.content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
			.field { margin-bottom: 15px; }
			.label { font-weight: bold; color: #555; }
			.value { margin-top: 5px; }
			.tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px; }
			.tag { background: #000; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
		</style>
	`;

	switch (formType) {
		case 'client':
			return {
				subject: `🎯 New Client Inquiry from ${data.name}`,
				html: `
					${baseStyle}
					<div class="container">
						<div class="header">
							<h2>🎯 New Client Inquiry</h2>
						</div>
						<div class="content">
							<div class="field">
								<div class="label">Name:</div>
								<div class="value">${data.name}</div>
							</div>
							<div class="field">
								<div class="label">Email:</div>
								<div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
							</div>
							<div class="field">
								<div class="label">Project Name:</div>
								<div class="value">${data.project || 'Not specified'}</div>
							</div>
							<div class="field">
								<div class="label">Services Interested In:</div>
								<div class="value">${data.description || 'Not specified'}</div>
							</div>
							<div class="field">
								<div class="label">How they heard about us:</div>
								<div class="tags">
									${data.sources.map((source: string) => `<span class="tag">${source.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</span>`).join('')}
								</div>
							</div>
							<div class="field">
								<div class="label">Project Description:</div>
								<div class="value">${data.projectDescription || 'Not provided'}</div>
							</div>
							<div class="field">
								<div class="label">Price Range:</div>
								<div class="value">${data.priceRange || 'Not specified'}</div>
							</div>
						</div>
					</div>
				`
			};

		case 'partner':
			return {
				subject: `🤝 New Partnership Inquiry from ${data.name}`,
				html: `
					${baseStyle}
					<div class="container">
						<div class="header">
							<h2>🤝 New Partnership Inquiry</h2>
						</div>
						<div class="content">
							<div class="field">
								<div class="label">Name:</div>
								<div class="value">${data.name}</div>
							</div>
							<div class="field">
								<div class="label">Email:</div>
								<div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
							</div>
							<div class="field">
								<div class="label">Portfolio Link:</div>
								<div class="value">
									${data.portfolioLink ? `<a href="${data.portfolioLink}" target="_blank">${data.portfolioLink}</a>` : 'Not provided'}
								</div>
							</div>
							<div class="field">
								<div class="label">Interested In:</div>
								<div class="tags">
									${data.interests.map((interest: string) => `<span class="tag">${interest.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}</span>`).join('')}
								</div>
							</div>
						</div>
					</div>
				`
			};

		case 'other':
			return {
				subject: `💬 New General Inquiry from ${data.name}`,
				html: `
					${baseStyle}
					<div class="container">
						<div class="header">
							<h2>💬 New General Inquiry</h2>
						</div>
						<div class="content">
							<div class="field">
								<div class="label">Name:</div>
								<div class="value">${data.name}</div>
							</div>
							<div class="field">
								<div class="label">Email:</div>
								<div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
							</div>
							<div class="field">
								<div class="label">Message:</div>
								<div class="value">${data.message.replace(/\n/g, '<br>')}</div>
							</div>
						</div>
					</div>
				`
			};

		default:
			return {
				subject: 'New Contact Form Submission',
				html: '<p>New form submission received.</p>'
			};
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { formType, data } = await request.json();

		if (!data.name || !data.email) {
			return json({ error: 'Name and email are required' }, { status: 400 });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}

		if (formType === 'other' && !data.message) {
			return json({ error: 'Message is required' }, { status: 400 });
		}

		const emailTemplate = createEmailTemplate(formType, data);
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ ...emailTemplate, access_key: env.W3_EMAIL_ACCESS_KEY })
		});

		// if (error) {
		// 	console.error('Resend error:', error);
		// 	return json({ error: 'Failed to send email' }, { status: 500 });
		// }

		// console.log('Email sent successfully:', emailData);
		return json({ success: true, message: 'Email sent successfully', response });
	} catch (error) {
		console.error('Error sending email:', error);
		return json({ error: 'Failed to send email' }, { status: 500 });
	}
};
