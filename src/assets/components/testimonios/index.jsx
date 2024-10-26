import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Gerente de Recursos Humanos",
      text: "La solución ha transformado nuestra gestión de personal. La asistencia mediante NFC es extremadamente eficiente.",
      img: "https://via.placeholder.com/80?text=Juan", // Placeholder para la imagen
    },
    {
      name: "María López",
      role: "Directora de Operaciones",
      text: "Gracias a la generación automática de reportes, ahora tenemos un mejor control sobre la productividad del equipo.",
      img: "https://via.placeholder.com/80?text=María", // Placeholder para la imagen
    },
    {
      name: "Carlos Fernández",
      role: "Jefe de Seguridad",
      text: "La capacidad de monitorear guardias nos ha permitido mejorar la seguridad y el cumplimiento en el trabajo.",
      img: "https://via.placeholder.com/80?text=Carlos", // Placeholder para la imagen
    },
  ];

  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 !text-2xl lg:!text-4xl"
        >
          Testimonios
        </Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              shadow={false}
              className="bg-gray-100/50 rounded-2xl p-6 transition-transform transform hover:scale-105"
            >
              <CardHeader color="transparent" floated={false} shadow={false}>
                <Typography
                  color="blue-gray"
                  className="lg:mb-20 mb-4 text-2xl font-bold"
                >
                  &quot;{testimonial.text}&quot;
                </Typography>
              </CardHeader>
              <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-normal !text-gray-500"
                  >
                    {testimonial.role}
                  </Typography>
                </div>
                <img
                  src={testimonial.img}
                  className="max-w-[8rem]"
                  alt={testimonial.name}
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
