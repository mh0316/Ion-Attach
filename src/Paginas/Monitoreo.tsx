import React from 'react';

const Monitoreo: React.FC = () => {
  const datos = {
    temperatura: '52.3 °C',
    pm25: '35.7 µg/m³',
    ionizador: 'Activo',
    presion: '1.2 kPa',
    saturacion: '75%',
    alerta: 'Activa'
  };

  const estadoColor = (valor: string) =>
    valor === 'Activo' || valor === 'Activa'
      ? 'text-green-400'
      : 'text-red-400';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-sky-400">Monitoreo en Tiempo Real</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-sky-300">Temperatura</h2>
          <p className="text-2xl">{datos.temperatura}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-purple-300">Partículas PM2.5</h2>
          <p className="text-2xl">{datos.pm25}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-yellow-300">Estado del Electrodo</h2>
          <p className={`text-2xl ${estadoColor(datos.ionizador)}`}>{datos.ionizador}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-orange-300">Presión Diferencial</h2>
          <p className="text-2xl">{datos.presion}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-cyan-300">Saturación de la Rejilla</h2>
          <p className="text-2xl">{datos.saturacion}</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
          <h2 className="text-xl font-semibold mb-2 text-red-300">Alerta de Buzzer</h2>
          <p className={`text-2xl ${estadoColor(datos.alerta)}`}>{datos.alerta}</p>
        </div>
      </section>

      <footer className="text-center py-12 text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Sistema Ionizador ESP32. Todos los derechos reservados.</p>
        <p>Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Monitoreo;