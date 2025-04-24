"use client";

import { FormEvent, useRef } from "react";
import Button from "../common/Buttton";
import { useContactForm } from "../../../lib/hooks/useContactForm";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { submitForm, status, isLoading } = useContactForm();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    await submitForm(data);
    if (status === "success") {
      formRef.current?.reset();
    }
  };

  return (
    <>
      <div className="px-4">
        <div className="text-center mb-8 ">
          <p className="text-lg text-gray-700">
            Si deseas ponerte en contacto con nosotros, escríbenos a{" "}
            <a
              href="mailto:fundacion@nice.com.mx"
              className="text-[#FDB913] font-semibold hover:underline"
            >
              fundacion@nice.com.mx
            </a>
          </p>
          <p className="mt-2 text-gray-600">o bien déjanos tu mensaje:</p>
        </div>

        {status === "success" && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
            Mensaje enviado correctamente. ¡Gracias por contactarnos!
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-[#00295c] font-medium mb-2"
            >
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:outline-none transition-colors duration-200"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[#00295c] font-medium mb-2"
            >
              Tu correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:outline-none transition-colors duration-200"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[#00295c] font-medium mb-2"
            >
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:outline-none transition-colors duration-200"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#00295c] font-medium mb-2"
            >
              Tu mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FDB913] focus:outline-none transition-colors duration-200 resize-none"
              disabled={isLoading}
            />
          </div>

          <div className="text-center pt-6">
            <Button
              text={isLoading ? "Enviando..." : "Enviar"}
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
