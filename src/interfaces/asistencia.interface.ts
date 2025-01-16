export interface Asistencia {
  date: string; // Fecha en formato AA-MM-DD
  status: "Presente" | "Ausente"; // Estado de asistencia
  delay_time: number | null; // Tiempo en minutos, nulo si está ausente
  excuse: string | null; // Justificación de la ausencia
  grade: "Preprimario"; // Grado fijo
  section: "A" | "B" | "C"; // Sección dentro del grado
  school_season: string; // Año escolar (ejemplo: "2024-2025")
  teacher: string; // Nombre del docente
  student: string; // Nombre completo del estudiante
}
