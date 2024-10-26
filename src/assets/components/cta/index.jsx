export default function CallToAction() {
  return (
    <section className="bg-blue-600 py-16 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Listo para transformar tu gestión de personal?
        </h2>
        <p className="text-lg text-blue-200 mb-8">
          Descubre cómo nuestra solución puede hacer una diferencia en tu
          empresa.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-white text-blue-600 font-semibold rounded-lg py-2 px-6 transition duration-300 hover:bg-gray-100"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}
