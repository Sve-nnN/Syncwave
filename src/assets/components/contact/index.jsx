import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

export function ContactSection() {
  return (
    <section className="px-8 py-8 lg:py-16">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Atención al Cliente
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Estamos Aquí para Ayudar
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Ya sea que tengas una pregunta sobre nuestros servicios, una solicitud
          de asistencia técnica o sugerencias de mejora, nuestro equipo está
          ansioso por escucharte.
        </Typography>

        {/* Opciones de Engagement */}
        <div className="flex gap-4 mb-6 items-center justify-center">
          <Button variant="outlined" className="max-w-fit">
            Consulta General
          </Button>
          <Button variant="outlined" className="max-w-fit">
            Soporte de Producto
          </Button>
        </div>

        {/* Formulario de Contacto */}
        <form action="#" className="flex flex-col gap-4 lg:max-w-sm mx-auto">
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Nombre
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="First Name"
              name="first-name"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Apellido
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="Tu Apellido"
              name="last-name"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Tu Correo Electrónico
            </Typography>
            <Input
              color="gray"
              size="lg"
              placeholder="nombre@correo.com"
              name="email"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div>
            <Typography
              variant="small"
              className="mb-2 text-left font-medium !text-gray-900"
            >
              Tu Mensaje
            </Typography>
            <Textarea
              rows={6}
              color="gray"
              placeholder="Escribe tu mensaje aquí"
              name="message"
              className="focus:border-t-gray-900"
              containerProps={{
                className: "!min-w-full",
              }}
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <Button className="w-full bg-blue-400" color="black">
            Enviar Mensaje
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
