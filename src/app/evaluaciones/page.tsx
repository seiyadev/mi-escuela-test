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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import AddEvaluacion from "@/components/evaluaciones/AddEvaluacion";

const columnHelper = createColumnHelper<ColumnDefType>();

const columns: ColumnDef<ColumnDefType>[] = [
  {
    accessorKey: "date",
    header: () => (
      <div className="flex flex-col items-center">
        <span>Fecha de registro</span>
        <span className="text-xs mb-1">(AA-MM-DD)</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-[150px]">
        <span>{row.getValue("date")}</span>
      </div>
    ),
  },
  {
    id: "student",
    header: () => (
      <div className="flex items-center justify-center">
        <span>Estudiante</span>
      </div>
    ),
    columns: [
      columnHelper.accessor("photo", {
        header: "Foto",
        cell: ({ row }) => (
          <div className="w-[64px] h-full flex items-center justify-center">
            <img
              src={row.getValue("photo")}
              alt={row.getValue("student")}
              className="size-12 rounded-full"
            />
          </div>
        ),
      }),
      columnHelper.accessor("student_name", {
        header: "Nombre",
        cell: ({ row }) => (
          <div className="w-[200px]">
            <span>{row.getValue("student_name")}</span>
          </div>
        ),
      }),
    ],
  },
  {
    id: "c1",
    header: () => (
      <div className="flex items-center justify-center">
        <span>C1: Comunicativa</span>
      </div>
    ),
    columns: [
      columnHelper.accessor("photo", {
        header: "Calificación",
      }),
      columnHelper.accessor("student_name", {
        header: "Recuperación pedagógica	",
      }),
      columnHelper.accessor("student_name", {
        header: "Comentarios",
      }),
    ],
  },
  {
    id: "c2",
    header: () => (
      <div className="flex items-center justify-center">
        <span>
          C2: Pensamiento lógico, creativo y crítico; resolución de problemas
        </span>
      </div>
    ),
    columns: [
      columnHelper.accessor("photo", {
        header: "Calificación",
        size: 0.1,
      }),
      columnHelper.accessor("student_name", {
        header: "Recuperación pedagógica	",
      }),
      columnHelper.accessor("student_name", {
        header: "Comentarios",
      }),
    ],
  },
  {
    id: "c3",
    header: () => (
      <div className="flex items-center justify-center">
        <span>C3: Científica y tecnológica; ambiental y de la salud</span>
      </div>
    ),
    columns: [
      columnHelper.accessor("photo", {
        header: "Calificación",
        size: 0.1,
      }),
      columnHelper.accessor("student_name", {
        header: "Recuperación pedagógica	",
      }),
      columnHelper.accessor("student_name", {
        header: "Comentarios",
      }),
    ],
  },
];

const data: ColumnDefType[] = [
  {
    date: "2025-01-01",
    student_name: "Juan Pérez",
    photo: "https://placehold.co/64", // URL de ejemplo para foto
  },
  {
    date: "2025-01-02",
    student_name: "María López",
    photo: "https://placehold.co/64",
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
                  <BreadcrumbPage className="hover:text-primary">
                    Evaluaciones
                  </BreadcrumbPage>
                  <Icon
                    icon="akar-icons:chevron-down"
                    className="size-3 text-primary"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem className="cursor-pointer" asChild>
                    <Link href="/asistencia" className="hover:text-primary">
                      Asistencia
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
              Asignatura cualquiera - Registro de evaluaciones
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Observa y registra las asistencias de los alumnos. Además de
              generar los libros correspondientes.
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
        AddComponent={<AddEvaluacion />}
      />
    </div>
  );
}

export default AsistenciaPage;
