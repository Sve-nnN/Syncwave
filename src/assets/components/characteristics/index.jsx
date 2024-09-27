import Icon1 from "../../img/lupa.png"; // Reemplaza con la imagen correspondiente
import Icon2 from "../../img/reporte.png"; // Reemplaza con la imagen correspondiente
import Icon3 from "../../img/escudo.png"; // Reemplaza con la imagen correspondiente
import Icon4 from "../../img/leyes.png"; // Reemplaza con la imagen correspondiente
import Icon5 from "../../img/tuerca.png"; // Reemplaza con la imagen correspondiente

export default function Characteristics() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Características de la solución
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Descripción general de las características clave que automatizan la
            gestión y el control del personal en tiempo real.
          </p>
        </div>

        {/* Contenedor de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Característica 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={Icon1} alt="Icono 1" className="mx-auto mb-6 h-50% w-50% rounded-lg object-cover" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Registro de Asistencia mediante NFC
            </h3>
            <p className="text-gray-600">
              Monitorea y controla la asistencia de tus empleados mediante
              tecnología NFC.
            </p>
          </div>

          {/* Característica 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={Icon2} alt="Icono 2" className="mx-auto mb-6 h-50% w-50% rounded-lg object-cover" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Generación automática de reportes
            </h3>
            <p className="text-gray-600">
              Crea y gestiona informes detallados sobre la actividad de tus
              empleados.
            </p>
          </div>

          {/* Característica 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={Icon3} alt="Icono 3" className="mx-auto mb-6 h-50% w-50% rounded-lg object-cover" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Cumplimiento de guardias
            </h3>
            <p className="text-gray-600">
              Verifica que las guardias y turnos de trabajo se cumplan
              correctamente.
            </p>
          </div>

          {/* Característica 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={Icon4} alt="Icono 4" className="mx-auto mb-6 h-50% w-50% rounded-lg object-cover"/>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Cumplimiento normativo
            </h3>
            <p className="text-gray-600">
              Asegúrate de que todos los procesos cumplen con las normativas
              locales y nacionales.
            </p>
          </div>

          {/* Característica 5 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={Icon5} alt="Icono 5" className="mx-auto mb-6 h-50% w-50% rounded-lg object-cover" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Generación automática de diario de EPC
            </h3>
            <p className="text-gray-600">
              Automatiza la generación del diario de EPC para un control más
              eficiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
