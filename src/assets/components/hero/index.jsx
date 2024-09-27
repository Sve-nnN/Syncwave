import CallToAction from "../calltoaction";
import HeroImg from "../../img/hero.jpg";
export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-16 md:px-16">
      <div className="w-full md:w-1/2 text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Optimiza y automatiza a tus empleados en tiempo real
        </h1>
        <p className="text-lg text-gray-600">
          Somos la solución ideal para empresas que buscan automatizar y
          optimizar la gestión de sus empleados.
        </p>
        <div>
          <CallToAction
            estilos="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            text="Conocer más"
            variant="filled"
          />
          <CallToAction text="Contactanos" variant="outlined" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src={HeroImg} alt="hero" className="w-full h-auto" />
      </div>
    </section>
  );
}
