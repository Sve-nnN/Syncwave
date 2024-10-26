import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import Icon1 from "../../img/lupa.png";
import Icon2 from "../../img/reporte.png";
import Icon3 from "../../img/escudo.png";
import Icon4 from "../../img/leyes.png";
import Icon5 from "../../img/tuerca.png";

export default function Characteristics() {
  const features = [
    {
      icon: Icon1,
      title: "Registro de Asistencia mediante NFC",
      description:
        "Monitorea y controla la asistencia de tus empleados mediante tecnología NFC.",
    },
    {
      icon: Icon2,
      title: "Generación automática de reportes",
      description:
        "Crea y gestiona informes detallados sobre la actividad de tus empleados.",
    },
    {
      icon: Icon3,
      title: "Cumplimiento de guardias",
      description:
        "Verifica que las guardias y turnos de trabajo se cumplan correctamente.",
    },
    {
      icon: Icon4,
      title: "Cumplimiento normativo",
      description:
        "Asegúrate de que todos los procesos cumplen con las normativas locales y nacionales.",
    },
    {
      icon: Icon5,
      title: "Generación automática de diario de EPC",
      description:
        "Automatiza la generación del diario de EPC para un control más eficiente.",
    },
  ];

  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Conoce sobre nosotros
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          ¿En que nos destacamos?
        </Typography>
        <Typography variant="lead" className="mx-auto max-w-lg !text-gray-500">
          Nos orientamos en ofrecer el mejor servicio de automatizacion. Ahorra
          tiempo y dinero con nosotros.{" "}
        </Typography>
      </div>
      <div className="container flex flex-wrap flex-grow-0 justify-center items-center gap-4 items-stretch">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-100/50 overflow-hidden">
            <CardBody className="text-center p-6">
              <img
                src={feature.icon}
                alt={`Icono ${index + 1}`}
                className="mx-auto mb-6 h-16 w-16 rounded-lg object-cover"
              />
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-medium"
              >
                {feature.title}
              </Typography>
              <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
                {feature.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
