"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastContainer, toast } from "react-toastify";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import StudentItem from "./StudentItem";

function AddAssistance() {
  const [showAddAssistance, setShowAddAssistance] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = React.useState<Date>(
    new Date(new Date().setHours(0, 0, 0, 0))
  );

  return (
    <>
      <Dialog
        modal
        open={modalOpen}
        onOpenChange={(open) => {
          if (loading) return;

          if (showAddAssistance && open) {
            setShowAddAssistance(false);
          }
          setModalOpen(open);
        }}
      >
        <DialogTrigger asChild>
          <Button
            className="ml-auto md:w-fit w-full"
            title="Registrar asistencia"
          >
            Registrar asistencia
          </Button>
        </DialogTrigger>
        {!showAddAssistance ? (
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Comprobación de asistencia</DialogTitle>
              <DialogDescription>
                ¿Todos los estudiantes están presentes?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setShowAddAssistance(true)}
              >
                No
              </Button>
              <Button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setModalOpen(false);
                    toast.success("Asistencias guardadas con éxito.");
                  }, 2000);
                }}
                disabled={loading}
              >
                {loading ? "Guardando..." : "Sí"}
              </Button>
            </DialogFooter>
          </DialogContent>
        ) : (
          <DialogContent className="max-w-7xl">
            <DialogHeader>
              <DialogTitle>Registrar asistencia </DialogTitle>
              <DialogDescription>
                Crea un registro de asistencia para los estudiantes
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <small className="text-sm font-medium leading-none">
                  Fecha
                </small>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "md:max-w-xs w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(day) => day && setDate(day)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <small className="text-sm font-medium leading-none">
                  Alumnos
                </small>
                <Input
                  placeholder="Filtrar alumnos..."
                  className="md:max-w-xs w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2 overflow-y-auto h-full max-h-[500px]">
                  {[...Array(20)].map((_, i) => (
                    <StudentItem key={i} />
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" disabled={loading}>
                  Cancelar
                </Button>
              </DialogClose>
              <Button>Registrar</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
      <ToastContainer />
    </>
  );
}

export default AddAssistance;
