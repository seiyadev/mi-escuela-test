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
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

function AddEvaluacion() {
  const [showAddAssistance, setShowAddAssistance] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
//   const [date, setDate] = React.useState<Date>(
//     new Date(new Date().setHours(0, 0, 0, 0))
//   );

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
            title="Registrar evaluación"
          >
            Registrar evaluación
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Registrar Evaluación</DialogTitle>
            <DialogDescription>
              Crea un registro de evaluación para un estudiante.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <small className="text-sm font-medium leading-none">Alumno</small>
              <Select>
                <SelectTrigger className="w-full h-16">
                  <SelectValue placeholder="Selecciona un alumno" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="enfermedad" className="cursor-pointer">
                      <div className="flex items-center gap-2 ">
                        <img
                          src={"https://placehold.co/64"}
                          className="size-10 rounded-full"
                        />
                        <span className="font-medium">Name</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="flex flex-col w-full gap-4 mt-2 overflow-y-auto h-full max-h-[500px]">
                <small className="text-sm font-medium leading-none">
                  Evaluación
                </small>
                <section className="border-[1px] p-4 rounded-lg flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      C1: Comunicativa
                    </small>
                    <p className="text-xs text-muted-foreground">
                      Comprueba la autoría de informaciones sobre la geografía,
                      su clasificación e importancia, así como los aspectos
                      geográficos e históricos de las civilizaciones antiguas y
                      modernas; con la finalidad de producir valoraciones e
                      Informaciones científicas y comunicarlas.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Calificación
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Recuperación pedagógica
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label>Comentarios</Label>
                    <Textarea placeholder="Escribe un comentario..." />
                    <p className="text-sm text-muted-foreground">Opcional</p>
                  </div>
                </section>
                <section className="border-[1px] p-4 rounded-lg flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      C2: Pensamiento lógico, creativo y crítico; resolución de
                      problemas
                    </small>
                    <p className="text-xs text-muted-foreground">
                      Con las civilizaciones antiguas y modernas, la historia de
                      América durante los siglos XVIII y XIX, situaciones
                      políticas, sociales, económicas y culturales del mundo y
                      de la República Dominicana ocurridos durante la primera y
                      segunda mitad del siglo XIX y XX; con la finalidad de
                      comprender las causas que dieron origen a estos
                      acontecimientos y expresar su opinión en base a ello.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Calificación
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Recuperación pedagógica
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label>Comentarios</Label>
                    <Textarea placeholder="Escribe un comentario..." />
                    <p className="text-sm text-muted-foreground">Opcional</p>
                  </div>
                </section>
                <section className="border-[1px] p-4 rounded-lg flex flex-col gap-4">
                  <div className={cn("flex flex-col gap-2")}>
                    <small className="text-sm font-medium leading-none">
                      C3: Científica y tecnológica; ambiental y de la salud
                    </small>
                    <p className="text-xs text-muted-foreground">
                      Promueve en sus actuaciones, relaciones democráticas, sus
                      deberes y derechos y los de los demás, la conservación del
                      patrimonio histórico, natural y cultural dominicano y del
                      mundo; con la finalidad de construir una ciudadanía
                      defensora de un estado de derecho, la interculturalidad y
                      la cultura de paz en diferentes contextos.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Calificación
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <small className="text-sm font-medium leading-none">
                      Recuperación pedagógica
                    </small>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecciona una calificación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid w-full gap-1.5">
                    <Label>Comentarios</Label>
                    <Textarea placeholder="Escribe un comentario..." />
                    <p className="text-sm text-muted-foreground">Opcional</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" disabled={loading}>
                Cancelar
              </Button>
            </DialogClose>
            <Button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  toast.success("Evaluación guardada con éxito.");
                }, 2000);
              }}
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <ToastContainer />
    </>
  );
}

export default AddEvaluacion;
