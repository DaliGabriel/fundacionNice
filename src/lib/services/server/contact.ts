import { ContactFormData } from "../../types/contactForm";
import { create } from "../../database/repositories/contact";
import nodemailer from "nodemailer";

/**
 * Validates contact form data.
 *
 * @param {ContactFormData} data - The contact form data to validate
 * @throws {Error} If validation fails
 */
const validateContactData = (data: ContactFormData) => {
  if (!data.name || !data.name.trim()) {
    throw new Error("Name is required");
  }
  if (!data.email || !data.email.trim()) {
    throw new Error("Email is required");
  }
  if (!data.subject || !data.subject.trim()) {
    throw new Error("Subject is required");
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }

  return {
    ...data,
    name: data.name.trim(),
    email: data.email.trim(),
    subject: data.subject.trim(),
    message: data.message?.trim() || null,
  };
};

/**
 * Sends an email notification for a new contact message.
 *
 * @param {ContactFormData} data - The contact message data
 * @throws {Error} If email sending fails
 */
const sendEmailNotification = async (data: ContactFormData) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email configuration missing");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.verify();

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "gahumada@nice.com.mx",
    subject: `Nuevo mensaje de contacto: ${data.subject}`,
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong> ${
        data.message || "No se proporcionó mensaje"
      }</p>
    `,
  });
};

/**
 * Creates a new contact message and sends email notification.
 *
 * @param {ContactFormData} contactData - The contact form data
 * @returns {Promise<{ success: boolean, message?: string, error?: string }>}
 */
export const createContactMessage = async (contactData: ContactFormData) => {
  try {
    // Validate the contact data
    const validatedData = validateContactData(contactData);

    // Save to database
    const savedMessage = await create(validatedData);

    // Send email notification
    try {
      await sendEmailNotification(validatedData);
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Return success even if email fails, but include a warning
      return {
        success: true,
        message: "Message saved but email notification failed",
        savedId: savedMessage.id,
      };
    }

    return {
      success: true,
      message: "Message saved and notification sent",
      savedId: savedMessage.id,
    };
  } catch (error) {
    console.error("Contact message creation failed:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Failed to process contact message",
    };
  }
};
