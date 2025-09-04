export const createEmailTemplate = (formType: string, data: any) => {
	const formatTags = (tags: string[]) => {
		return tags
			.map((tag) => `[${tag.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}]`)
			.join(' ');
	};

	const createSeparator = (char: string = '=', length: number = 50) => {
		return char.repeat(length);
	};

	switch (formType) {
		case 'general':
			return {
				subject: `🎯 New Client Inquiry from ${data.name}`,
				text: `
${createSeparator('=')}
🎯 NEW CLIENT INQUIRY
${createSeparator('=')}

First Name:
${data.firstName}
${data.lastName}

EMAIL:
${data.email}

PROJECT NAME:
${data.project || 'Not specified'}

SERVICES INTERESTED IN:
${data.description || 'Not specified'}

HOW THEY HEARD ABOUT US:
${formatTags(data.sources)}

PROJECT DESCRIPTION:
${data.projectDescription || 'Not provided'}

PRICE RANGE:
${data.priceRange || 'Not specified'}

				`.trim()
			};

		case 'partner':
			return {
				subject: `🤝 New Partnership Inquiry from ${data.name}`,
				text: `
${createSeparator('=')}
🤝 NEW PARTNERSHIP INQUIRY
${createSeparator('=')}

NAME:
${data.name}

EMAIL:
${data.email}

PORTFOLIO LINK:
${data.portfolioLink || 'Not provided'}

INTERESTED IN:
${formatTags(data.interests)}

				`.trim()
			};

		case 'other':
			return {
				subject: `💬 New General Inquiry from ${data.name}`,
				text: `
${createSeparator('=')}
💬 NEW GENERAL INQUIRY
${createSeparator('=')}

NAME:
${data.name}

EMAIL:
${data.email}

MESSAGE:
${data.message}

				`.trim()
			};

		default:
			return {
				subject: 'New Contact Form Submission',
				text: `
${createSeparator('=')}
📧 NEW CONTACT FORM SUBMISSION
${createSeparator('=')}

A new form submission has been received.
Please check your form handling system for details.

${createSeparator('-')}
				`.trim()
			};
	}
};
