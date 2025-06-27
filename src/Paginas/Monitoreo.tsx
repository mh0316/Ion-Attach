import React from 'react';

const Monitoreo: React.FC = () => {
  const fecha = '27 de junio de 2025';
  const hora = '11:20:52'; // dato artificial fijo

  const datos = [
    {
      titulo: 'Temperatura',
      valor: '52.3 °C',
      sensor: 'Sensor PT100',
      color: 'text-sky-300',
      imagen: '/src/imagenes/Temperatura.png',
      alt: 'Sensor de temperatura PT100',
    },
    {
      titulo: 'Partículas PM2.5',
      valor: '35.7 µg/m³',
      sensor: 'Plantower PMS5003',
      color: 'text-purple-300',
      imagen: '/src/imagenes/MaterialParticulado.png',
      alt: 'Sensor de partículas en aire',
    },
    {
      titulo: 'Estado del Ionizador',
      valor: 'Activo',
      sensor: 'Electrodo de aguja',
      color: 'text-yellow-300',
      imagen: '/src/imagenes/Electrodo.png',
      alt: 'Electrodo ionizador',
    },
    {
      titulo: 'Presión Diferencial',
      valor: '1.2 kPa',
      sensor: 'MPX5010DP',
      color: 'text-orange-300',
      imagen: '/src/imagenes/PresionDiferencial.png',
      alt: 'Sensor de presión diferencial',
    },
    {
      titulo: 'Saturación de Rejilla',
      valor: '75%',
      sensor: 'Sensor de flujo',
      color: 'text-cyan-300',
      imagen: '/src/imagenes/Rejilla.png',
      alt: 'Rejilla colectora de partículas',
    },
    {
      titulo: 'Alerta de Buzzer',
      valor: 'Activa',
      sensor: 'Buzzer conectado a ESP32',
      color: 'text-red-300',
      imagen: '/src/imagenes/Buzzer.png',
      alt: 'Alerta por saturación de rejilla',
    }
  ];

  const estadoColor = (valor: string) =>
    valor === 'Activo' || valor === 'Activa' ? 'text-green-400' : 'text-red-400';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white p-8">
      <header className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-sky-400">Monitoreo en Tiempo Real</h1>
      </header>

      {/* Fecha y hora alineadas al borde izquierdo del contenido principal */}
      <div className="max-w-5xl mx-auto mb-6 text-left flex flex-col gap-1 pt-6">
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-white">Fecha:</span> {fecha}
        </p>
        <p className="text-sm text-slate-400">
          <span className="font-semibold text-white">Hora:</span> {hora}
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {datos.map((dato, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 flex flex-col md:flex-row items-center gap-4"
          >
            <img
              src={dato.imagen}
              alt={dato.alt}
              className="w-24 h-24 rounded-md object-contain border border-slate-600 shadow"
            />
            <div>
              <h2 className={`text-xl font-semibold mb-1 ${dato.color}`}>{dato.titulo}</h2>
              <p className={`text-2xl font-bold ${estadoColor(dato.valor)}`}>{dato.valor}</p>
              <p className="text-sm text-slate-400 mt-1">Sensor: {dato.sensor}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center py-12 text-slate-400 text-sm mt-16">
        <p>&copy; {new Date().getFullYear()} Sistema Ionizador ESP32. Todos los derechos reservados.</p>
        <p>Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Monitoreo;