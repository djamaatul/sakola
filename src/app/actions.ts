"use server";

import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
		user: process.env.GMAIL_SMTP_USER,
    pass: process.env.GMAIL_SMTP_PASS
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function sendEmail(to: string, _: any, form: FormData) {
  try {
    const { name, email, content } = Object.fromEntries(form.entries());

    transporter.sendMail({
      from: email as string,
      to: to as string,
      replyTo: email as string,
      subject: "Pesan",
      html: `
		<div>
			<h2 style="margin-bottom: 10px">Dari: ${name}<h2>
			<pre>${content}</pre>
		</div>
		`,
    });
    return {
      message: "Sukses mengirim",
      status: 1,
    };
  } catch {
    return {
      message: "gagal Mengirim",
      status: 0,
    };
  }
}
