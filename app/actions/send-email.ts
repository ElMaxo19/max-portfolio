"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const result = await resend.emails.send({
      from: process.env.DOMINIO_VERIFICADO || "onboarding@resend.dev", // Cambia esto a tu dominio verificado en Resend
      to: process.env.CONTACT_EMAIL || "delivered@resend.dev",
      replyTo: data.email,
      subject: `Nuevo mensaje de ${data.name}, viene fresquesito del portafolio...`,
      html: `
        <p><strong>Nombre:</strong> ${data.name}.</p>
        <p><strong>Email:</strong> ${data.email}.</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (result.error) {
      return { success: false, error: result.error.message };
    }
    return { success: true, data: result.data };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Error al enviar el email",
    };
  }
}
