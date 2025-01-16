"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
// import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { Asistencia } from "@/interfaces/asistencia.interface";
import { Evaluacion } from "@/interfaces/evaluacion.interface";
import { usePathname } from "next/navigation";
// import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
// import { Calendar } from "./ui/calendar";

export type ColumnDefType = Asistencia | Evaluacion;

export function DataTable({
  columns,
  data,
  AddComponent,
}: {
  columns: ColumnDef<ColumnDefType>[];
  data: ColumnDefType[];
  AddComponent?: React.ReactNode;
}) {
  const [pageSize] = React.useState<number>(8);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const pathname = usePathname();
  // const [date, setDate] = React.useState<Date>();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    pageCount: Math.ceil(data.length / pageSize),
  });

  return (
    <div className="min-w-full">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center w-full md:justify-between py-4">
        <div className="flex items-center space-x-2 w-full">
          <Input
            placeholder="Filtrar alumnos..."
            value={
              (table.getColumn("student")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("student")?.setFilterValue(event.target.value)
            }
            className="md:max-w-sm w-full"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="ml-auto"
                title="Filtrar columnas"
              >
                <Icon icon="tabler:settings" className="size-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center space-x-2 w-full md:w-fit">
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-fit justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                title="Seleccionar fecha"
              >
                <Icon icon="tabler:calendar-month" className="size-8" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover> */}
          {pathname === "/asistencia" && (
            <Button
              variant={"outline"}
              className={cn(
                "w-full md:w-fit justify-start text-left font-normal"
              )}
              title="Vista previa"
              onClick={() => {
                console.log("Do something with the total data");
              }}
            >
              <Icon icon="tabler:file" className="size-8" />
              <span>Vista previa</span>
            </Button>
          )}
          {AddComponent}
        </div>
      </div>
      <div className="rounded-lg border overflow-x-auto w-full">
        <Table className="w-screen">
          <TableHeader className="bg-primary">
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <TableRow
                  key={headerGroup.id}
                  className={`hover:bg-primary/50`}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className={`text-white w-fit ${
                          header.index === 0 &&
                          !header.column.parent &&
                          header.depth === 1
                            ? "rounded-tl-lg"
                            : ""
                        } ${
                          header.index === columns.length - 1 &&
                          !header.column.parent
                            ? "rounded-tr-lg"
                            : ""
                        } ${
                          header.column.parent &&
                          header.index !== headerGroup.headers.length - 1
                            ? "border-[1px]"
                            : ""
                        } ${
                          header.depth === 1 &&
                          header.index !== headerGroup.headers.length - 1
                            ? "border-r-[1px]"
                            : ""
                        }`}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="w-fit">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="w-fit">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center w-fit"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm">
            Página&nbsp;
            <strong>
              {table.getState().pagination.pageIndex + 1} de{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <div className="text-sm text-muted-foreground">
            Mostrando {table.getState().pagination.pageIndex * pageSize + 1}
            &nbsp;-&nbsp;
            {Math.min(
              (table.getState().pagination.pageIndex + 1) * pageSize,
              table.getFilteredRowModel().rows.length
            )}
            &nbsp; de {table.getFilteredRowModel().rows.length} registros
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </Button>
        </div>
      </div>
    </div>
  );
}
