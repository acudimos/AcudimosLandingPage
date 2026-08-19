import {
  Activity,
  Bandage,
  Droplets,
  GraduationCap,
  HeartHandshake,
  Stethoscope,
  Syringe,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  /** Identificador estable usado en el hash de la URL (#servicio-<slug>). */
  slug: string;
  title: string;
  description: string;
  features: string[];
  /** Opcional: si no se define, se usa la imagen de la categoría. */
  image?: string;
  /** Opcional: si no se define, se arma un mensaje por defecto. */
  whatsappMessage?: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  tagline: string;
  icon: LucideIcon;
  image: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "consulta-medica",
    label: "Consulta médica y procedimientos",
    tagline: "Valoración médica y procedimientos en casa o por telemedicina",
    icon: Stethoscope,
    image: "/hero/national-cancer-institute-BxXgTQEw1M4-unsplash.jpg",
    services: [
      {
        slug: "consulta-medica-general-domiciliaria",
        title: "Consulta médica general domiciliaria",
        description:
          "Un médico general te visita en tu casa para hacer una valoración completa, resolver dudas y definir un plan de manejo claro. Incluye un seguimiento virtual posterior para verificar tu evolución.",
        features: [
          "Valoración médica completa sin salir de casa",
          "Revisión de antecedentes y medicamentos actuales",
          "Plan de manejo y recomendaciones por escrito",
          "Incluye un seguimiento virtual posterior",
        ],
      },
      {
        slug: "consulta-medica-general-virtual",
        title: "Consulta médica general virtual",
        description:
          "Atención médica por videollamada para orientarte, revisar síntomas y definir conductas sin necesidad de desplazarte. Incluye un seguimiento virtual posterior.",
        features: [
          "Videollamada con médico general",
          "Ideal para orientación y control de síntomas",
          "Sin desplazamientos ni salas de espera",
          "Incluye un seguimiento virtual posterior",
        ],
      },
      {
        slug: "seguimiento-medico-presencial-domiciliario",
        title: "Seguimiento médico presencial domiciliario",
        description:
          "Visita médica adicional en el domicilio para revisar la evolución del paciente, ajustar el tratamiento y resolver nuevas inquietudes de la familia.",
        features: [
          "Visita de control en el domicilio",
          "Revisión de evolución y ajuste del tratamiento",
          "Resolución de dudas del paciente y su cuidador",
        ],
      },
      {
        slug: "bomba-de-analgesia-domiciliaria",
        title: "Bomba de analgesia domiciliaria",
        description:
          "Paquete completo para el manejo del dolor en casa mediante bomba de infusión, con instalación, control y acompañamiento del equipo asistencial.",
        features: [
          "Manejo continuo del dolor en el domicilio",
          "Instalación y control por personal entrenado",
          "Educación al cuidador sobre signos de alarma",
          "Requiere orden médica y valoración previa",
        ],
      },
      {
        slug: "suero-de-analgesia-domiciliario",
        title: "Suero de analgesia domiciliario",
        description:
          "Paquete completo de analgesia intravenosa en casa para controlar el dolor de forma segura, con vigilancia del personal de enfermería durante la administración.",
        features: [
          "Control del dolor por vía intravenosa en casa",
          "Vigilancia de enfermería durante la infusión",
          "Educación sobre cuidados posteriores",
          "Requiere orden médica y valoración previa",
        ],
      },
      // {
      //   slug: "desbridamiento-menor",
      //   title: "Desbridamiento menor (enfermería)",
      //   description:
      //     "Retiro del tejido no viable de una herida por parte de enfermería, para favorecer la cicatrización y reducir el riesgo de infección.",
      //   features: [
      //     "Realizado por personal de enfermería entrenado",
      //     "Favorece la cicatrización de la herida",
      //     "Técnica estéril y manejo del dolor durante el procedimiento",
      //     "Requiere valoración previa de la herida",
      //   ],
      // },
      {
        slug: "sutura-de-herida-simple",
        title: "Sutura de herida simple",
        description:
          "Cierre de heridas simples en el domicilio con técnica estéril, incluyendo limpieza previa e indicaciones de cuidado y control posterior.",
        features: [
          "Limpieza y cierre de la herida con técnica estéril",
          "Indicaciones de cuidado en casa",
          "Programación del retiro de puntos",
        ],
      },
    ],
  },
  {
    id: "medicamentos",
    label: "Medicamentos y terapia intravenosa",
    tagline: "Aplicación segura de medicamentos y accesos venosos en casa",
    icon: Syringe,
    image: "/services/service1.jpg",
    services: [
      {
        slug: "medicamento-intramuscular",
        title: "Aplicación de medicamento intramuscular",
        description:
          "Administración de medicamentos por vía intramuscular en tu casa, con técnica estéril y verificación de la orden médica antes de aplicar.",
        features: [
          "Verificación de la orden médica y del medicamento",
          "Técnica estéril y manejo seguro de insumos",
          "Observación posterior a la aplicación",
        ],
      },
      {
        slug: "medicamento-subcutaneo",
        title: "Aplicación de medicamento subcutáneo",
        description:
          "Aplicación de medicamentos por vía subcutánea con rotación adecuada de los sitios de punción y educación al cuidador sobre el cuidado de la piel.",
        features: [
          "Rotación adecuada de los sitios de punción",
          "Cuidado y valoración de la piel",
          "Educación al cuidador sobre el procedimiento",
        ],
      },
      {
        slug: "medicamento-intravenoso",
        title: "Aplicación de medicamento intravenoso",
        description:
          "Administración de medicamentos por vía intravenosa en el domicilio, con vigilancia del paciente durante y después de la aplicación.",
        features: [
          "Preparación y administración con técnica estéril",
          "Vigilancia durante la administración",
          "Identificación oportuna de reacciones adversas",
        ],
      },
      {
        slug: "medicamento-via-oral",
        title: "Administración de medicamento por vía oral",
        description:
          "Apoyo profesional para la toma de medicamentos orales según la prescripción, especialmente útil en pacientes con múltiples fármacos o dificultad para deglutir.",
        features: [
          "Administración según la prescripción médica",
          "Apoyo en pacientes con polimedicación",
          "Registro de la toma y de la tolerancia",
        ],
      },
      {
        slug: "antibiotico-ambulatorio",
        title: "Administración ambulatoria de antibiótico prescrito",
        description:
          "Continuación del esquema antibiótico ordenado por tu médico en la comodidad de tu casa, evitando desplazamientos y hospitalizaciones innecesarias.",
        features: [
          "Continuidad del esquema antibiótico en casa",
          "Vigilancia de reacciones adversas",
          "Registro de cada dosis administrada",
          "Requiere orden médica vigente",
        ],
      },
      {
        slug: "medicamentos-paliativos",
        title: "Administración de medicamentos paliativos prescritos",
        description:
          "Administración de medicamentos para el control de síntomas en cuidado paliativo, con un enfoque centrado en el confort del paciente y el apoyo a la familia.",
        features: [
          "Enfoque en el confort y la dignidad del paciente",
          "Control de síntomas según la prescripción",
          "Acompañamiento y orientación a la familia",
          "Requiere orden médica vigente",
        ],
      },
      {
        slug: "analgesia-puntual",
        title: "Aplicación de analgesia puntual",
        description:
          "Aplicación de una dosis de analgésico prescrito para aliviar el dolor de forma oportuna, con valoración del alivio obtenido tras la administración.",
        features: [
          "Alivio oportuno del dolor en casa",
          "Valoración del dolor antes y después",
          "Recomendaciones de manejo posterior",
        ],
      },
      {
        slug: "canalizacion-venosa-periferica",
        title: "Canalización venosa periférica",
        description:
          "Instalación de un acceso venoso periférico con técnica estéril, dejando el catéter listo y rotulado para la administración de líquidos o medicamentos.",
        features: [
          "Instalación con técnica estéril",
          "Fijación y rotulado del catéter",
          "Educación sobre el cuidado del acceso venoso",
        ],
      },
      {
        slug: "retiro-cateter-venoso",
        title: "Retiro de catéter venoso periférico",
        description:
          "Retiro seguro del catéter venoso al terminar el tratamiento, con valoración del sitio de punción y cuidados posteriores de la piel.",
        features: [
          "Retiro seguro al finalizar el tratamiento",
          "Valoración del sitio de punción",
          "Curación y cuidados posteriores",
        ],
      },
      {
        slug: "hidratacion-intravenosa",
        title: "Hidratación intravenosa con consulta médica por telemedicina",
        description:
          "Terapia de hidratación intravenosa en casa, respaldada por una valoración médica por telemedicina que define la pertinencia y el esquema a administrar.",
        features: [
          "Valoración médica previa por telemedicina",
          "Administración y vigilancia por enfermería",
          "Recomendaciones de hidratación posteriores",
        ],
      },
      {
        slug: "vigilancia-post-medicamento",
        title: "Vigilancia presencial posterior a la administración de medicamentos",
        description:
          "Acompañamiento presencial después de aplicar un medicamento para vigilar la tolerancia, detectar reacciones adversas y actuar a tiempo si se requiere.",
        features: [
          "Observación presencial tras la administración",
          "Detección temprana de reacciones adversas",
          "Toma de signos vitales de control",
        ],
      },
    ],
  },
  {
    id: "heridas",
    label: "Curaciones y cuidado de heridas",
    tagline: "Curaciones con técnica estéril para una cicatrización segura",
    icon: Bandage,
    image: "/services/service2.jpg",
    services: [
      {
        slug: "curacion-simple",
        title: "Curación simple",
        description:
          "Limpieza y cubrimiento de heridas de baja complejidad con técnica estéril, para mantenerlas protegidas y favorecer la cicatrización.",
        features: [
          "Limpieza y cubrimiento con técnica estéril",
          "Valoración del estado de la herida",
          "Indicaciones de cuidado entre curaciones",
        ],
      },
      {
        slug: "curacion-avanzada",
        title: "Curación avanzada",
        description:
          "Manejo de heridas complejas o de difícil cicatrización con apósitos especializados, seleccionados según las características de cada lesión.",
        features: [
          "Apósitos especializados según el tipo de herida",
          "Seguimiento de la evolución de la lesión",
          "Manejo del dolor durante el procedimiento",
        ],
      },
      {
        slug: "curacion-herida-quirurgica",
        title: "Curación de herida quirúrgica",
        description:
          "Cuidado del sitio quirúrgico durante el posoperatorio en casa, vigilando signos de infección y facilitando una recuperación tranquila.",
        features: [
          "Cuidado del sitio quirúrgico en el posoperatorio",
          "Vigilancia de signos de infección",
          "Educación sobre el cuidado en casa",
        ],
      },
      {
        slug: "curacion-lesion-por-presion",
        title: "Curación de lesión por presión",
        description:
          "Manejo integral de las úlceras por presión, con curación especializada y recomendaciones de posicionamiento para prevenir nuevas lesiones.",
        features: [
          "Curación especializada de úlceras por presión",
          "Recomendaciones de cambios de posición",
          "Prevención de nuevas lesiones en la piel",
        ],
      },
      {
        slug: "limpieza-de-herida",
        title: "Limpieza de herida",
        description:
          "Aseo de la herida con soluciones adecuadas para retirar residuos y disminuir el riesgo de infección, sin necesidad de desplazarte.",
        features: [
          "Aseo con soluciones adecuadas",
          "Reducción del riesgo de infección",
          "Valoración del estado de la piel alrededor",
        ],
      },
      {
        slug: "cambio-de-apositos",
        title: "Cambio de apósitos",
        description:
          "Recambio del apósito en el momento indicado, cuidando la piel perilesional y verificando que la herida siga evolucionando bien.",
        features: [
          "Recambio oportuno del apósito",
          "Cuidado de la piel alrededor de la herida",
          "Registro de la evolución",
        ],
      },
      {
        slug: "retiro-de-puntos",
        title: "Retiro de puntos",
        description:
          "Retiro de suturas en el momento indicado por tu médico, con limpieza previa y verificación del cierre completo de la herida.",
        features: [
          "Retiro en el tiempo indicado por el médico",
          "Limpieza previa y posterior de la zona",
          "Verificación del cierre de la herida",
        ],
      },
      {
        slug: "retiro-de-grapas",
        title: "Retiro de grapas",
        description:
          "Extracción de grapas quirúrgicas con instrumental adecuado, cuidando la piel y dejando la zona limpia y protegida.",
        features: [
          "Extracción con instrumental adecuado",
          "Cuidado de la piel durante el procedimiento",
          "Curación posterior de la zona",
        ],
      },
    ],
  },
  {
    id: "sondas-ostomias",
    label: "Sondas y ostomías",
    tagline: "Manejo y cuidado de sondas, drenajes y ostomías",
    icon: Droplets,
    image: "/hero/professional-care.webp",
    services: [
      {
        slug: "cambio-de-sonda",
        title: "Cambio de sonda vesical o nasal",
        description:
          "Recambio de sonda vesical o nasogástrica con técnica estéril, verificando su correcta ubicación y funcionamiento antes de terminar la visita.",
        features: [
          "Recambio con técnica estéril",
          "Verificación de la ubicación y el funcionamiento",
          "Educación al cuidador sobre el manejo diario",
          "Requiere orden médica vigente",
        ],
      },
      {
        slug: "retiro-de-sonda-vesical",
        title: "Retiro de sonda vesical",
        description:
          "Retiro de la sonda vesical cuando ya no es necesaria, con valoración posterior de la micción y señales de alarma a tener en cuenta.",
        features: [
          "Retiro seguro y sin dolor",
          "Valoración posterior de la micción",
          "Indicaciones sobre signos de alarma",
        ],
      },
      {
        slug: "cuidado-sonda-drenaje",
        title: "Cuidado de sonda y sistema de drenaje",
        description:
          "Mantenimiento del sistema de drenaje: aseo, verificación de permeabilidad y registro, para prevenir obstrucciones e infecciones.",
        features: [
          "Aseo y verificación de permeabilidad",
          "Prevención de obstrucciones e infecciones",
          "Registro de características del drenaje",
        ],
      },
      {
        slug: "cuidado-basico-ostomia",
        title: "Cuidado básico de ostomía",
        description:
          "Aseo y valoración del estoma y la piel que lo rodea, para mantenerlos sanos y detectar a tiempo cualquier complicación.",
        features: [
          "Aseo y valoración del estoma",
          "Cuidado de la piel periestomal",
          "Detección temprana de complicaciones",
        ],
      },
      {
        slug: "cambio-bolsa-ostomia",
        title: "Cambio de bolsa de ostomía",
        description:
          "Recambio del dispositivo de ostomía con la técnica adecuada, cuidando el sello y la comodidad del paciente durante el día.",
        features: [
          "Recambio con técnica adecuada",
          "Ajuste correcto del dispositivo",
          "Mayor comodidad y seguridad para el paciente",
        ],
      },
      {
        slug: "educacion-sondas-ostomias",
        title: "Educación para el cuidado de sondas y ostomías",
        description:
          "Sesión práctica para que el paciente y su cuidador aprendan a manejar sondas y ostomías en casa con confianza y seguridad.",
        features: [
          "Entrenamiento práctico paso a paso",
          "Resolución de dudas del cuidador",
          "Identificación de signos de alarma",
        ],
      },
    ],
  },
  {
    id: "respiratorio",
    label: "Cuidado respiratorio",
    tagline: "Apoyo respiratorio y educación en el uso de dispositivos",
    icon: Wind,
    image: "/hero/commitment-to-wellbeing.webp",
    services: [
      {
        slug: "nebulizacion-domiciliaria",
        title: "Nebulización domiciliaria",
        description:
          "Aplicación de la terapia inhalada prescrita en tu casa, con vigilancia de la respuesta respiratoria durante y después del procedimiento.",
        features: [
          "Terapia inhalada según prescripción",
          "Vigilancia de la respuesta respiratoria",
          "Educación sobre el uso del nebulizador",
        ],
      },
      {
        slug: "oxigenoterapia-transitoria",
        title: "Oxigenoterapia transitoria prescrita",
        description:
          "Administración de oxígeno de forma transitoria según la orden médica, con control de la saturación y recomendaciones de seguridad en casa.",
        features: [
          "Administración según la orden médica",
          "Control de la saturación de oxígeno",
          "Recomendaciones de seguridad en el hogar",
          "El oxígeno y los dispositivos se cotizan aparte",
        ],
      },
      {
        slug: "educacion-inhaladores",
        title: "Educación sobre inhaladores y dispositivos respiratorios",
        description:
          "Enseñamos la técnica correcta para usar inhaladores, inhalocámaras y otros dispositivos, para que el medicamento realmente llegue a donde debe.",
        features: [
          "Técnica correcta paso a paso",
          "Uso de inhalocámara y otros dispositivos",
          "Corrección de errores frecuentes",
        ],
      },
    ],
  },
  {
    id: "monitoreo",
    label: "Monitoreo y cuidado básico",
    tagline: "Controles rápidos para seguir de cerca tu estado de salud",
    icon: Activity,
    image: "/hero/personalized-attention.webp",
    services: [
      {
        slug: "signos-vitales",
        title: "Medición y registro de signos vitales",
        description:
          "Toma y registro de presión arterial, frecuencia cardiaca, temperatura y frecuencia respiratoria, con reporte claro para tu médico tratante.",
        features: [
          "Toma completa de signos vitales",
          "Registro escrito para el médico tratante",
          "Identificación de valores fuera de rango",
        ],
      },
      {
        slug: "oximetria-de-pulso",
        title: "Oximetría de pulso",
        description:
          "Medición de la saturación de oxígeno en sangre para vigilar la función respiratoria y detectar a tiempo cualquier deterioro.",
        features: [
          "Medición de la saturación de oxígeno",
          "Vigilancia de la función respiratoria",
          "Orientación sobre cuándo consultar",
        ],
      },
      {
        slug: "glucometria-capilar",
        title: "Glucometría capilar",
        description:
          "Control del nivel de glucosa en sangre en casa, con registro del resultado y recomendaciones básicas de manejo y alimentación.",
        features: [
          "Control de glucosa en casa",
          "Registro del resultado para seguimiento",
          "Recomendaciones básicas de manejo",
        ],
      },
    ],
  },
  {
    id: "educacion",
    label: "Educación para pacientes y cuidadores",
    tagline: "Formación práctica para cuidar mejor y con más confianza",
    icon: GraduationCap,
    image: "/hero/centre-for-ageing-better-4x_zAS82rqo-unsplash.jpg",
    services: [
      {
        slug: "educacion-medicamentos-seguros",
        title: "Educación en administración segura de medicamentos",
        description:
          "Sesión práctica para organizar horarios, entender cada medicamento y evitar errores frecuentes en la administración en casa.",
        features: [
          "Organización de horarios y dosis",
          "Prevención de errores frecuentes",
          "Manejo de la polimedicación",
        ],
      },
      {
        slug: "educacion-medicamentos-paliativos",
        title: "Educación sobre medicamentos paliativos",
        description:
          "Acompañamos al paciente y a su cuidador para comprender el manejo de los medicamentos paliativos y responder con calma ante los síntomas.",
        features: [
          "Comprensión del esquema paliativo",
          "Manejo de síntomas y dosis de rescate",
          "Apoyo emocional al cuidador",
        ],
      },
      {
        slug: "educacion-general-cuidador",
        title: "Educación general para paciente y cuidador",
        description:
          "Orientación integral sobre cuidados diarios, movilización, higiene, alimentación y signos de alarma que no se deben pasar por alto.",
        features: [
          "Cuidados diarios, higiene y movilización",
          "Recomendaciones de alimentación",
          "Signos de alarma y cuándo pedir ayuda",
        ],
      },
    ],
  },
  {
    id: "cuidadora",
    label: "Servicio de cuidadora",
    tagline: "Jornadas de acompañamiento con cuidadoras capacitadas",
    icon: HeartHandshake,
    image: "/hero/age-cymru-krSBI6OVRLM-unsplash.jpg",
    services: [
      {
        slug: "cuidadora-3-horas",
        title: "Cuidadora diurna por 3 horas",
        description:
          "Una jornada corta para apoyar en momentos puntuales del día: el baño, la comida, la toma de medicamentos o simplemente hacer compañía.",
        features: [
          "Ideal para apoyos puntuales del día",
          "Acompañamiento en baño, alimentación y rutinas",
          "Reporte de la jornada a la familia",
        ],
      },
      {
        slug: "cuidadora-6-horas",
        title: "Cuidadora diurna por 6 horas",
        description:
          "Media jornada de acompañamiento para cubrir la mañana o la tarde, con apoyo en las actividades diarias y compañía constante.",
        features: [
          "Cobertura de media jornada",
          "Apoyo en actividades básicas cotidianas",
          "Compañía y estimulación durante la jornada",
        ],
      },
      {
        slug: "cuidadora-8-horas",
        title: "Cuidadora diurna por 8 horas",
        description:
          "Jornada completa de cuidado diurno, pensada para familias que necesitan tranquilidad mientras trabajan o atienden otras responsabilidades.",
        features: [
          "Jornada completa de cuidado diurno",
          "Rutinas, alimentación y recordatorio de medicamentos",
          "Reporte detallado al cierre de la jornada",
        ],
      },
      {
        slug: "cuidadora-12-horas",
        title: "Cuidadora diurna por 12 horas",
        description:
          "Acompañamiento diurno extendido para pacientes que requieren supervisión permanente durante todo el día.",
        features: [
          "Supervisión permanente durante el día",
          "Apoyo integral en todas las rutinas",
          "Comunicación continua con la familia",
        ],
      },
    ],
  },
  {
    id: "acompanamiento",
    label: "Acompañamiento y bienestar",
    tagline: "Compañía, estimulación y calidad de vida para el adulto mayor",
    icon: Users,
    image: "/hero/age-cymru-bSXk1lOp8T0-unsplash.jpg",
    services: [
      {
        slug: "acompanamiento-en-el-hogar",
        title: "Acompañamiento en el hogar",
        description:
          "Atención profesional en la comodidad del hogar, manteniendo el entorno familiar y las rutinas que dan seguridad al adulto mayor.",
        features: [
          "Conversación, lectura y actividades recreativas",
          "Estimulación cognitiva con juegos de memoria y ejercicios mentales",
          "Organización y recordatorio de rutinas diarias",
          "Supervisión en horarios de alimentación y hábitos saludables",
        ],
      },
      {
        slug: "compania-actividades-sociales",
        title: "Compañía en actividades sociales y cotidianas",
        description:
          "Acompañamiento personal en el día a día: desde gestiones rutinarias hasta actividades sociales, siempre con una compañía que apoya y motiva.",
        features: [
          "Acompañamiento a citas médicas, procedimientos médicos o estéticos",
          "Asistencia a reuniones con amigos o familiares",
          "Salidas seguras para compras, diligencias, trámites o supermercado",
          "Disfrutar de un café o paseo fuera del hogar",
          "Promoción de la integración social para evitar el aislamiento",
        ],
        image: "/hero/centre-for-ageing-better-4x_zAS82rqo-unsplash.jpg",
      },
      {
        slug: "bienestar-y-salud",
        title: "Bienestar y salud",
        description:
          "Cuidado integral no médico: actividad física, bienestar emocional y hábitos saludables para mejorar la calidad de vida.",
        features: [
          "Recordatorio y supervisión en la toma de medicamentos",
          "Acompañamiento a procedimientos ambulatorios",
          "Promoción de hábitos saludables: ejercicio suave, hidratación y descanso",
          "Monitoreo básico de signos vitales, solo si es necesario",
        ],
        image: "/hero/commitment-to-wellbeing.webp",
      },
      {
        slug: "apoyo-a-la-familia",
        title: "Apoyo a la familia",
        description:
          "Tu enlace de confianza: reportes periódicos, orientación profesional y comunicación constante para la tranquilidad familiar.",
        features: [
          "Reportes periódicos sobre el estado general del adulto",
          "Orientación en rutinas y hábitos saludables",
          "Canales de comunicación abiertos para fortalecer la confianza familia–Acudimos",
        ],
        image: "/hero/personalized-attention.webp",
      },
      {
        slug: "club-de-experiencias",
        title: "Club de experiencias",
        description:
          "Revivimos momentos especiales y creamos nuevos recuerdos con talleres creativos, sesiones de cine en casa y la preservación digital de las historias familiares más valiosas.",
        features: [
          "Talleres de arte, música, manualidades o escritura",
          "Cine en casa y lecturas compartidas",
          "Creación de álbumes digitales de recuerdos familiares",
        ],
      },
      {
        slug: "conexion-digital",
        title: "Conexión digital",
        description:
          "Acortamos distancias y fortalecemos lazos familiares. Apoyamos en videollamadas, enseñamos el uso de dispositivos y creamos diarios digitales para mantener viva la conexión.",
        features: [
          "Apoyo en videollamadas y redes sociales",
          "Enseñanza básica de celular o tablet",
          "Elaboración de un 'diario digital' con fotos y mensajes de la familia",
        ],
      },
      {
        slug: "vida-activa-y-recreativa",
        title: "Vida activa y recreativa",
        description:
          "Mantenemos el cuerpo y la mente en movimiento con caminatas al aire libre, clases de baile suaves y juegos que despiertan la creatividad.",
        features: [
          "Caminatas en parques y espacios seguros",
          "Clases suaves de baile y estiramientos",
          "Juegos de mesa y retos cognitivos divertidos",
        ],
      },
      {
        slug: "bienestar-emocional",
        title: "Bienestar emocional",
        description:
          "Fortalecemos la salud emocional con conversaciones significativas, música relajante, risoterapia y ejercicios de gratitud.",
        features: [
          "Conversaciones significativas sobre historias y recuerdos",
          "Música terapéutica o risoterapia",
          "Espacios de gratitud y relajación ligera",
        ],
      },
      {
        slug: "estimulacion-y-talentos",
        title: "Estimulación y talentos compartidos",
        description:
          "Cada persona tiene una historia y un talento que merece seguir vivo. Resaltamos las capacidades e intereses del adulto y su cuidador, convirtiendo cada visita en un espacio de disfrute y conexión.",
        features: [
          "Manualidades, pintura y artes plásticas",
          "Cocina compartida o preparación de recetas familiares",
          "Música, canto o instrumentos",
          "Lectura en voz alta, escritura o poesía",
          "Cuidado de plantas o jardinería terapéutica",
          "Ejercicios de motricidad fina y estimulación cognitiva",
        ],
      },
    ],
  },
];

/** Aclaraciones generales mostradas al pie de la sección de servicios. */
export const servicesDisclaimer =
  "Todos los procedimientos requieren valoración de pertinencia y, cuando corresponda, orden médica vigente. Los medicamentos, insumos especiales, oxígeno y dispositivos no incluidos se cotizan según la necesidad de cada paciente. La atención nocturna, dominical o festiva y el desplazamiento según la distancia pueden generar recargo.";

export type FlatService = Service & {
  categoryId: string;
  categoryLabel: string;
  icon: LucideIcon;
  image: string;
};

/** Lista plana de todos los servicios, con la categoría y la imagen ya resueltas. */
export const allServices: FlatService[] = serviceCategories.flatMap((category) =>
  category.services.map((service) => ({
    ...service,
    categoryId: category.id,
    categoryLabel: category.label,
    icon: category.icon,
    image: service.image ?? category.image,
  }))
);

export function serviceWhatsappMessage(service: FlatService) {
  return (
    service.whatsappMessage ??
    `Hola, quiero más información sobre el servicio de ${service.title} (${service.categoryLabel}).`
  );
}
