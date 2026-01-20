export interface ProjectDetail {
    slug: string;
    client: string;
    description: string;
    status: 'Activo' | 'Estrategia' | 'Finalizado';
    progress?: number;
    stack: string[];
    metric?: {
        label: string;
        value: string;
    };
    content: {
        chaos: string;
        structure: string[];
        velocity: string;
    };
}

export const PROJECTS_DATA: ProjectDetail[] = [
    {
        slug: "carnes-del-piedemonte",
        client: "CARNES DEL PIEDEMONTE",
        description: "Reestructuración integral de marca y diseño de ecosistema comercial digital. Implementación de control de inventarios en tiempo real.",
        status: "Activo",
        progress: 17,
        stack: ["Brand Strategy", "Next.js", "System Design"],
        metric: {
            label: "Fase Actual",
            value: "Estructuración"
        },
        content: {
            chaos: "Una operación tradicional basada en procesos manuales y visibilidad fragmentada. El crecimiento estaba limitado por una estructura que dependía de la presencia física y la memoria operativa.",
            structure: [
                "Unificación de identidad visual bajo principios de Brutalismo Moderno.",
                "Arquitectura de software centralizada para gestión de inventarios.",
                "Automatización de flujo de pedidos y sincronización con puntos de venta."
            ],
            velocity: "Integración total de 4 unidades de negocio y visibilidad del 100% del stock en tiempo real. Preparados para escalabilidad nacional."
        }
    },
    {
        slug: "grupo-herra",
        client: "GRUPO HERRA",
        description: "Arquitectura de información para holding familiar. Unificación de 4 unidades de negocio bajo una misma directriz visual y operativa.",
        status: "Estrategia",
        stack: ["Info Architecture", "Corporate Governance"],
        metric: {
            label: "Mapa Activos",
            value: "100% Completado"
        },
        content: {
            chaos: "Dispersión de activos y falta de coherencia narrativa entre las diferentes empresas del holding. La toma de decisiones era lenta debido a la falta de una arquitectura de información unificada.",
            structure: [
                "Auditoría técnica de activos digitales.",
                "Creación de sistema de diseño compartido.",
                "Protocolo de comunicación interna basado en datos."
            ],
            velocity: "Coherencia total del portafolio. Reducción en tiempos de análisis estratégico."
        }
    },
    {
        slug: "vector-logistics",
        client: "VECTOR LOGISTICS",
        description: "Desarrollo de sistema operativo de control de flota y dashboard de analítica logística para optimización de rutas.",
        status: "Finalizado",
        stack: ["IoT Integration", "Real-time Dashboards", "Fletex API"],
        metric: {
            label: "KPI Impact",
            value: "-18% Tiempos"
        },
        content: {
            chaos: "Latencia en el seguimiento de flota y opacidad en los costos operativos por ruta. El sistema anterior no permitía reacciones en tiempo real ante eventos logísticos.",
            structure: [
                "Integración de sensores IoT para telemetría avanzada.",
                "Dashboard de control con actualización cada 5 segundos.",
                "Algoritmo de optimización de rutas dinámico."
            ],
            velocity: "Reducción del 18% en tiempos muertos y optimización del 12% en consumo de combustible."
        }
    },
    {
        slug: "territorios-saravena",
        client: "TERRITORIOS SARAVENA",
        description: "Sistema de gestión geográfica y control de campo para territorios extensos. Implementación de mapas offline y sincronización inteligente.",
        status: "Finalizado",
        stack: ["Leaflet.js", "Service Workers (PWA)", "GeoJSON Optimization"],
        metric: {
            label: "Autonomy",
            value: "100% Offline"
        },
        content: {
            chaos: "Gestión de territorios basada en mapas de papel y reportes verbales. Imposibilidad de trabajar en zonas rurales sin conectividad móvil.",
            structure: [
                "Implementación de motor de mapas con soporte Leaflet y Tiles locales.",
                "Sistema de caché agresivo vía Service Workers para autonomía total offline.",
                "Procesamiento robusto de GeoJSON para renderizado de polígonos complejos sin latencia."
            ],
            velocity: "Digitalización total del territorio. Los agentes operan sin internet con sincronización automática al recuperar señal. Un éxito rotundo en control territorial."
        }
    }
];
