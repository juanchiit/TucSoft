import { BrainCircuit, Cloud, CodeXml, Cpu, Headset, Workflow } from 'lucide-react';

export const services = [
  {
    icon: CodeXml,
    title: 'Desarrollo a Medida',
    description: 'Construimos aplicaciones web y móviles robustas y escalables, integrando frontend, backend y bases de datos.',
  },
  {
    icon: Cpu,
    title: 'IoT y Telemetría',
    description: 'Conectamos equipos físicos con sensores inteligentes para registrar su rendimiento en tiempo real.',
  },
  {
    icon: BrainCircuit,
    title: 'Datos e IA',
    description: 'Transformamos datos crudos en diagnósticos y alertas predictivas mediante modelos de inteligencia artificial.',
  },
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description: 'Digitalizamos flujos de trabajo manuales y burocráticos para eliminar tiempos muertos y errores humanos.',
  },
  {
    icon: Cloud,
    title: 'Infraestructura Cloud y DevOps',
    description: 'Desplegamos y operamos plataformas seguras y de alta disponibilidad con integración y entrega continua.',
  },
  {
    icon: Headset,
    title: 'Mantenimiento y Soporte',
    description: 'Acompañamos a nuestros clientes después de la entrega con soporte técnico y mantenimiento preventivo y correctivo.',
  },
];

export const serviceTitles = ['Solución ColdTrack IoT', ...services.map((service) => service.title)];
