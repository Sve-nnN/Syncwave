import React from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/outline";

function PricingCard({ title, desc, price, options }) {
  return (
    <Card variant="gradient" className="bg-gray-100/50 rounded-2xl shadow-lg">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="!m-0 p-6"
      >
        <Typography
          variant="h6"
          color="blue-gray"
          className="capitalize font-bold mb-1"
        >
          {title}
        </Typography>
        <Typography variant="small" className="font-normal !text-gray-500">
          {desc}
        </Typography>
        <Typography
          variant="h3"
          color="blue-gray"
          className="!mt-4 flex gap-1 !text-4xl"
        >
          {price[0]}
          {price[1]}
          <Typography
            as="span"
            color="blue-gray"
            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
          >
            /{price[2]}
          </Typography>
        </Typography>
      </CardHeader>
      <CardBody className="pt-0">
        <ul className="flex flex-col gap-3 mb-6">
          {options.map((option, key) => (
            <li key={key} className="flex items-center gap-3 text-gray-700">
              {option.icon}
              <Typography variant="small" className="font-normal text-inherit">
                {option.info}
              </Typography>
            </li>
          ))}
        </ul>
        <Button
          fullWidth
          variant="gradient"
          className=" bg-blue-500"
          color="gray"
        >
          Comenzar
        </Button>
      </CardBody>
    </Card>
  );
}

export function PricingSection() {
  const cards = [
    {
      title: "Básico",
      desc: "Acceso gratuito para 2 empleados",
      price: ["$", "129", "año"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Registro de asistencia mediante NFC",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Generación automática de reportes",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento de guardias",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento normativo",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Generación automática de diario de EPC",
        },
      ],
    },
    {
      title: "Premium",
      desc: "Acceso gratuito para 30 empleados",
      price: ["$", "299", "año"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Registro de asistencia mediante NFC",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Generación automática de reportes",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento de guardias",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento normativo",
        },
        {
          icon: (
            <MinusCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Generación automática de diario de EPC",
        },
      ],
    },
    {
      title: "Empresarial",
      desc: "Acceso gratuito para 200 empleados",
      price: ["$", "399", "año"],
      options: [
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Registro de asistencia mediante NFC",
        },
        {
          icon: <CheckCircleIcon className="h-5 w-5 text-blue-gray-900" />,
          info: "Generación automática de reportes",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento de guardias",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Cumplimiento normativo",
        },
        {
          icon: (
            <CheckCircleIcon
              strokeWidth={2.5}
              className="h-5 w-5 text-blue-gray-900"
            />
          ),
          info: "Generación automática de diario de EPC",
        },
      ],
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !leading-snug lg:!text-4xl !text-2xl max-w-2xl"
          >
            Optimiza y automatiza a tus empleados en tiempo real.
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 font-normal !text-gray-500 max-w-xl"
          >
            Somos la solución ideal para empresas que buscan automatizar y
            optimizar la gestión de sus empleados.
          </Typography>
        </div>

        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
          {cards.map(({ title, desc, options, price }, key) => (
            <PricingCard
              key={key}
              title={title}
              desc={desc}
              price={price}
              options={options}
            />
          ))}
        </div>
        <Typography
          variant="small"
          className="mt-10 font-normal !text-gray-500"
        >
          Tienes actualizaciones ilimitadas gratuitas y soporte premium en cada
          paquete. También tienes 30 días para solicitar un reembolso.
        </Typography>
      </div>
    </section>
  );
}

export default PricingSection;
