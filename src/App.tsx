import React from 'react';
import { ProcessStepCard } from '../Componentes/ProcessStepCard';
import DiagramaImg from '/src/imagenes/Diagrama.png';
import Paso1Img from '/src/imagenes/paso1.png';
import Paso2Img from '/src/imagenes/paso2.png';
import Paso3Img from '/src/imagenes/paso3.png';
import Paso4Img from '/src/imagenes/paso4.png';
import { Link } from 'react-router-dom';

import {
  CpuChipIcon,
  FireIcon,
  BoltIcon,
  SparklesIcon,
  FunnelIcon,
  SquaresPlusIcon,
  ScaleIcon,
  BellAlertIcon,
  InformationCircleIcon,
  EyeIcon
} from '../Componentes/Iconos';

interface StepDetail {
  id: number;
  title: string;
  icons: React.ReactNode[];
  description: string;
  details: { label: string; value: string }[];
  inlineImageSrc?: string;
  inlineImageAlt?: string;
}

const stepsData: StepDetail[] = [
  {
    id: 1,
    title: "Paso 1: Detección y Activación Automática",
    icons: [<CpuChipIcon className="w-10 h-10 text-sky-400" />, <FireIcon className="w-10 h-10 text-orange-400" />],
    description:
      "La placa ESP32 monitorea constantemente la temperatura mediante un sensor PT100. Al superar los 50°C, el sistema activa el dispositivo ionizador.",
    details: [
      { label: "Sensor de Temperatura", value: "PT100" },
      { label: "Controlador Lógico", value: "ESP32 con código Arduino" },
      { label: "Umbral de Activación", value: "> 50°C" },
      { label: "Inicio del Proceso", value: "Activación automática del ionizador" }
    ],
    inlineImageSrc: Paso1Img,
    inlineImageAlt: "Sensor PT100 conectado a ESP32"
  },
  {
    id: 2,
    title: "Paso 2: Ionización de Partículas MP2.5",
    icons: [<BoltIcon className="w-10 h-10 text-yellow-400" />, <SparklesIcon className="w-10 h-10 text-purple-400" />],
    description:
      "El electrodo de aguja ioniza negativamente las partículas MP2.5 detectadas en el aire, preparándolas para su recolección.",
    details: [
      { label: "Componente Ionizante", value: "Electrodo de aguja" },
      { label: "Sensor de Partículas", value: "Detector MP2.5" },
      { label: "Mecanismo", value: "Emisión de iones negativos" },
      { label: "Efecto", value: "Las partículas se cargan negativamente" }
    ],
    inlineImageSrc: Paso2Img,
    inlineImageAlt: "Electrodo de aguja ionizando partículas PM2.5"
  },
  {
    id: 3,
    title: "Paso 3: Recolección Mediante Succión",
    icons: [<FunnelIcon className="w-10 h-10 text-green-400" />, <SquaresPlusIcon className="w-10 h-10 text-blue-400" />],
    description:
      "Un ventilador dirige las partículas cargadas hacia una rejilla positiva donde se adhieren y se acumulan.",
    details: [
      { label: "Sistema de Succión", value: "Ventilador de 10V" },
      { label: "Dirección del Flujo", value: "Hacia la rejilla recolectora" },
      { label: "Carga de la Rejilla", value: "Positiva" },
      { label: "Resultado", value: "Las partículas negativas quedan atrapadas" }
    ],
    inlineImageSrc: Paso3Img,
    inlineImageAlt: "Ventilador succionando partículas hacia la rejilla recolectora"
  },
  {
    id: 4,
    title: "Paso 4: Alerta por Saturación de Rejilla",
    icons: [<ScaleIcon className="w-10 h-10 text-red-400" />, <BellAlertIcon className="w-10 h-10 text-amber-400" />],
    description:
      "Un sensor monitorea la presión diferencial para detectar la saturación de la rejilla. Al detectarse, se activa una alerta sonora.",
    details: [
      { label: "Sensor de Presión Diferencial", value: "MPX5010DP" },
      { label: "Criterio de Saturación", value: "Cambio en presión diferencial" },
      { label: "Sistema de Alerta", value: "Buzzer activo" },
      { label: "Acción Requerida", value: "Limpieza de la rejilla recolectora" }
    ],
    inlineImageSrc: Paso4Img,
    inlineImageAlt: "Sensor de presión diferencial monitoreando la saturación de la rejilla"
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-slate-100 p-4 md:p-8 selection:bg-sky-500 selection:text-white">
      <header className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-4">
          Funcionamiento del Dispositivo Ionizador ESP32
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          Sistema automatizado basado en ESP32 que purifica el aire por medio de ionización y recolección de partículas MP2.5.
        </p>
      </header>

      <section className="max-w-5xl mx-auto mb-16 p-6 bg-slate-800/70 rounded-xl shadow-2xl border border-slate-700">
        <div className="flex items-center mb-6">
          <EyeIcon className="w-8 h-8 text-sky-400 mr-3 shrink-0" />
          <h2 className="text-3xl font-semibold text-sky-300">Diagrama General del Sistema</h2>
        </div>
        <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 shadow-inner">
          <img
            src={DiagramaImg}
            alt="Diagrama del funcionamiento del dispositivo ionizador ESP32"
            className="w-full max-w-4xl mx-auto rounded-md shadow-lg"
            aria-describedby="diagram-description"
          />
        </div>
        <p id="diagram-description" className="mt-4 text-sm text-slate-400 text-center italic">
          Representación visual del proceso completo de purificación.
        </p>
      </section>

      <main className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {stepsData.map((step, index) => (
            <ProcessStepCard
              key={step.id}
              stepNumber={index + 1}
              title={step.title}
              icons={step.icons}
              description={step.description}
              details={step.details}
              inlineImageSrc={step.inlineImageSrc}
              inlineImageAlt={step.inlineImageAlt}
            />
          ))}
        </div>

        <section className="mt-16 p-6 bg-slate-800 rounded-xl shadow-2xl border border-slate-700">
          <div className="flex items-center mb-4">
            <InformationCircleIcon className="w-8 h-8 text-sky-400 mr-3 shrink-0" />
            <h2 className="text-2xl font-semibold text-sky-300">Resumen General</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Este dispositivo integra sensores precisos, componentes electrónicos y lógica programada en una placa ESP32. Realiza el monitoreo, ionización, recolección y alerta de saturación de forma completamente autónoma para garantizar aire más limpio en espacios interiores.
          </p>
        </section>

        {/* Botón fuera del resumen y centrado */}
        <div className="flex justify-center mt-8">
          <Link
            to="/monitoreo"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold rounded-full bg-sky-500 hover:bg-sky-600 text-white transition duration-300 shadow-lg"
          >
            Ver Monitoreo en Tiempo Real
          </Link>
        </div>
      </main>

      <footer className="text-center py-12 text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Sistema Ionizador ESP32. Todos los derechos reservados.</p>
        <p>Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;