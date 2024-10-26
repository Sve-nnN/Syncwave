import Card from "../card"
import Lupa from "../../img/lupa.png"
import Escudo from "../../img/escudo.png"
import Reporte from "../../img/reporte.png"
import Tuerca from "../../img/tuerca.png"


export default function Cards() {
    const cardData = [
        { img: Lupa, title: "Registro de asistencia mediante tecnología NFC", paragraph: "Monitorea y controla la asistencia de tus empleados mediante tecnología NFC." }, 
        { img: Tuerca, title: "Generación automática de diario de EPC", paragraph: "Automatiza la generación del diario de EPC para un control más eficiente." },
        { img: Escudo, title: "Cumplimiento de guardias", paragraph: "Verifica que las guardias y turnos de trabajo se cumplan corrrectamente." },
        { img: Reporte, title: "Generación automática de reportes", paragraph: "Crea y gestiona informes detallados sobre la actividad de tus empleados." },
    ]
    return(
        <section className="flex flex-col items-center justify-center px-8 py-16 md:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Funcionalidades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {cardData.map((card, index) => (
                    <Card key={index} img={card.img} title={card.title} paragraph={card.paragraph} />
                ))}
            </div>
        </section>
    )
}