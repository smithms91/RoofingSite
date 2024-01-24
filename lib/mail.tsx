import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate/TemplateOne";

const resend = new Resend(process.env.RESEND_KEY);

export const sendEmail = async (name: string, email: string, phone: string, address: string) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: 'smithms91@gmail.com',
      subject: 'Hello world',
      html:
        `<div>
        <h1>Quote</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
      </div>`,
      // react: EmailTemplate({ name: quote.name, email: quote.email, phone: quote.phone, address: quote.address }) as React.ReactElement,
    });

    if (error) {
      return error
    }

    return data
  } catch (error) {
    return error
  }
}

