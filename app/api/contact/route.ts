import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialiser Resend med API-nøkkel
const resend = new Resend(process.env.RESEND_API_KEY);

// Midlertidig deaktivering av kontaktskjemaet
const CONTACT_FORM_ENABLED = false;

export async function POST(request: Request) {
	// Returner feilmelding hvis kontaktskjemaet er deaktivert
	if (!CONTACT_FORM_ENABLED) {
		return NextResponse.json(
			{
				error:
					'Kontaktskjemaet er midlertidig utilgjengelig. Vennligst prøv igjen senere eller kontakt oss direkte på post@padelco.no',
			},
			{ status: 503 }
		);
	}

	try {
		const { name, email, subject, message } = await request.json();

		// Valider input
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: 'Alle felt er påkrevd' },
				{ status: 400 }
			);
		}

		// Send e-post med Resend
		await resend.emails.send({
			from: 'Padel Co Kontaktskjema <post@padelco.no>',
			to: 'post@padelco.no',
			replyTo: email,
			subject: `Kontaktskjema: ${subject}`,
			text: `
Navn: ${name}
E-post: ${email}
Emne: ${subject}

Melding:
${message}
            `,
			html: `
                <h2>Ny henvendelse fra kontaktskjema</h2>
                <p><strong>Navn:</strong> ${name}</p>
                <p><strong>E-post:</strong> ${email}</p>
                <p><strong>Emne:</strong> ${subject}</p>
                <h3>Melding:</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
		});

		return NextResponse.json(
			{ message: 'Meldingen din er sendt!' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Feil ved sending av e-post:', error);
		return NextResponse.json(
			{ error: 'Kunne ikke sende meldingen. Vennligst prøv igjen senere.' },
			{ status: 500 }
		);
	}
}
