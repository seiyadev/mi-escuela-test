"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ColumnDefType, DataTable } from "@/components/DataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  // MoreHorizontal
} from "lucide-react";
import AddAssistance from "@/components/asistencia/AddAssistance";

const columns: ColumnDef<ColumnDefType>[] = [
  {
    accessorKey: "date",
    header: "Fecha (AA-MM-DD)",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "student",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estudiante
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("student")}</div>,
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      // const amount = parseFloat(row.getValue("status"));

      // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      return <div className="font-medium">{row.getValue("status")}</div>;
    },
  },
  {
    accessorKey: "delay_time",
    header: "Tiempo de retraso",
    cell: ({ row }) => {
      const delay_time = row.getValue("delay_time");

      if (delay_time === null) {
        return <div className="font-medium text-muted-foreground">------</div>;
      }

      if (delay_time === 0) {
        return <div className="font-medium text-green-500">A tiempo</div>;
      }

      return <div className="font-medium">{delay_time as string} minutos</div>;
    },
  },
  {
    accessorKey: "excuse",
    header: "Excusa",
    cell: ({ row }) => {
      const excuse = row.getValue("excuse");

      if (excuse === null) {
        return <div className="font-medium text-muted-foreground">------</div>;
      }

      return <div className="font-medium">{excuse as string}</div>;
    },
  },
  {
    accessorKey: "grade",
    header: "Grado",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("grade")}</div>;
    },
  },
  {
    accessorKey: "school_season",
    header: "Temporada escolar",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("school_season")}</div>;
    },
  },
  {
    accessorKey: "section",
    header: "Sección",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("section")}</div>;
    },
  },
  {
    accessorKey: "teacher",
    header: "Docente",
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("teacher")}</div>;
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   header: () => (
  //     <div className="relative">
  //       <div className="absolute right-2 top-1/2 -translate-y-1/2">
  //         Acciones
  //       </div>
  //     </div>
  //   ),
  //   cell: () =>
  //     // { row }
  //     {
  //       // const payment = row.original;

  //       return (
  //         <div className="flex items-center justify-end">
  //           <DropdownMenu>
  //             <DropdownMenuTrigger asChild>
  //               <Button variant="ghost" className="h-8 w-8 p-0">
  //                 <span className="sr-only">Abrir menú</span>
  //                 <MoreHorizontal />
  //               </Button>
  //             </DropdownMenuTrigger>
  //             <DropdownMenuContent align="end">
  //               <DropdownMenuLabel>Acciones</DropdownMenuLabel>
  //               <DropdownMenuItem
  //                 onClick={() => {
  //                   // navigator.clipboard.writeText(payment.id);
  //                 }}
  //                 className="cursor-pointer"
  //               >
  //                 <Icon icon="tabler:edit" />
  //                 Editar
  //               </DropdownMenuItem>
  //             </DropdownMenuContent>
  //           </DropdownMenu>
  //         </div>
  //       );
  //     },
  // },
];

const data: ColumnDefType[] = [
  {
    date: "2025-01-01",
    status: "Presente",
    delay_time: 5,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Juan Pérez",
  },
  {
    date: "2025-01-01",
    status: "Ausente",
    delay_time: null,
    excuse: "Enfermedad",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Ana López",
  },
  {
    date: "2025-01-02",
    status: "Presente",
    delay_time: 3,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Luis García",
  },
  {
    date: "2025-01-02",
    status: "Presente",
    delay_time: 0,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "María Herrera",
  },
  {
    date: "2025-01-03",
    status: "Ausente",
    delay_time: null,
    excuse: "Viaje familiar",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Pedro Martínez",
  },
  {
    date: "2025-01-03",
    status: "Presente",
    delay_time: 15,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Lucía Fernández",
  },
  {
    date: "2025-01-04",
    status: "Presente",
    delay_time: 8,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Carlos Rodríguez",
  },
  {
    date: "2025-01-04",
    status: "Ausente",
    delay_time: null,
    excuse: "Consulta médica",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Marta Jiménez",
  },
  {
    date: "2025-01-05",
    status: "Presente",
    delay_time: 12,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Sofía Méndez",
  },
  {
    date: "2025-01-05",
    status: "Presente",
    delay_time: 6,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "José Torres",
  },
  {
    date: "2025-01-06",
    status: "Ausente",
    delay_time: null,
    excuse: "Problema de transporte",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Clara Morales",
  },
  {
    date: "2025-01-06",
    status: "Presente",
    delay_time: 4,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Diego Vargas",
  },
  {
    date: "2025-01-07",
    status: "Presente",
    delay_time: 10,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Laura Ruiz",
  },
  {
    date: "2025-01-07",
    status: "Ausente",
    delay_time: null,
    excuse: "Fallecimiento familiar",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "David Castillo",
  },
  {
    date: "2025-01-08",
    status: "Presente",
    delay_time: 7,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Isabel Vega",
  },
  {
    date: "2025-01-08",
    status: "Presente",
    delay_time: 2,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Raúl Rivera",
  },
  {
    date: "2025-01-09",
    status: "Ausente",
    delay_time: null,
    excuse: "Enfermedad",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Emilia Mendoza",
  },
  {
    date: "2025-01-09",
    status: "Presente",
    delay_time: 9,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Andrés Núñez",
  },
  {
    date: "2025-01-10",
    status: "Presente",
    delay_time: 5,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Estudiante 20",
  },
  {
    date: "2025-01-11",
    status: "Ausente",
    delay_time: null,
    excuse: "Emergencia familiar",
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Estudiante 21",
  },
  {
    date: "2025-01-12",
    status: "Presente",
    delay_time: 7,
    excuse: null,
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Estudiante 22",
  },
  {
    date: "2025-01-13",
    status: "Ausente",
    delay_time: null,
    excuse: "Consulta médica",
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Estudiante 23",
  },
  {
    date: "2025-01-14",
    status: "Presente",
    delay_time: 9,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Estudiante 24",
  },
  {
    date: "2025-01-15",
    status: "Ausente",
    delay_time: null,
    excuse: "Fallecimiento familiar",
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Estudiante 25",
  },
  {
    date: "2025-01-16",
    status: "Presente",
    delay_time: 11,
    excuse: null,
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Estudiante 26",
  },
  {
    date: "2025-01-17",
    status: "Ausente",
    delay_time: null,
    excuse: "Problema de transporte",
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Estudiante 27",
  },
  {
    date: "2025-01-18",
    status: "Presente",
    delay_time: 13,
    excuse: null,
    grade: "Preprimario",
    section: "B",
    school_season: "2024-2025",
    teacher: "Carlos Ramírez",
    student: "Estudiante 28",
  },
  {
    date: "2025-01-19",
    status: "Ausente",
    delay_time: null,
    excuse: "Consulta médica",
    grade: "Preprimario",
    section: "C",
    school_season: "2024-2025",
    teacher: "Ana Pérez",
    student: "Estudiante 29",
  },
  {
    date: "2025-01-20",
    status: "Presente",
    delay_time: 14,
    excuse: null,
    grade: "Preprimario",
    section: "A",
    school_season: "2024-2025",
    teacher: "María González",
    student: "Estudiante 30",
  },
];

function AsistenciaPage() {
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium hover:text-primary">
                Menú principal
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium hover:text-primary">
                Centro educativo
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbPage className="font-medium hover:text-primary">
                    Asistencia
                  </BreadcrumbPage>
                  <Icon
                    icon="akar-icons:chevron-down"
                    className="size-3 text-primary"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/evaluaciones" className="hover:text-primary">
                      Evaluaciones
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="font-medium text-primary hover:text-primary">
                Asignatura cualquiera
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2">
              Asignatura cualquiera - Registro de asistencia
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Observa un historial de asistencias de los estudiantes, y registra
              y/o edita asistencias.
              <br />
              Además de generar los libros correspondientes.
            </p>
          </div>
          <p className="font-semibold text-right text-sm">
            Año escolar 2024-2025
            <br />
            1° de Secundaria
          </p>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        AddComponent={<AddAssistance />}
      />
    </div>
  );
}

export default AsistenciaPage;
