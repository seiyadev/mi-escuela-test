import Image from "next/image";
import React, { useState } from "react";
import AttendanceCheckboxGroup from "./AttendanceCheckBoxGroup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function StudentItem() {
  const [selectedStatus, setSelectedStatus] = useState("present");

  const handleSelect = (option: string) => {
    setSelectedStatus(selectedStatus === option ? "" : option);
  };

  return (
    <div className="w-full rounded-lg p-4 border-[1px] flex flex-col  gap-4">
      <div className="flex flex-col items-center gap-3">
        <Image src="/logo.png" width={100} height={100} alt="Avatar" />
        <small className="text-sm font-bold leading-none">Name</small>
      </div>
      <div className="flex flex-col gap-2">
        <small className="text-sm font-medium leading-none">Estado</small>
        <AttendanceCheckboxGroup
          selected={selectedStatus}
          handleSelect={handleSelect}
        />
      </div>
      <div className="flex flex-col gap-2">
        <small className="text-sm font-medium leading-none">
          Excusa (opcional)
        </small>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una excusa" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="enfermedad">Enfermedad</SelectItem>
              <SelectItem value="viaje_familiar">Viaje familiar</SelectItem>
              <SelectItem value="consulta_medica">Consulta médica</SelectItem>
              <SelectItem value="problema_transporte">
                Problema de transporte
              </SelectItem>
              <SelectItem value="fallecimiento_familiar">
                Fallecimiento familiar
              </SelectItem>
              <SelectItem value="emergencia_familiar">
                Emergencia familiar
              </SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <small className="text-sm font-medium leading-none">
          Retraso (opcional)
        </small>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona un tiempo de retraso" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5">5 minutos</SelectItem>
              <SelectItem value="10">10 minutos</SelectItem>
              <SelectItem value="15">15 minutos</SelectItem>
              <SelectItem value="20">20 minutos</SelectItem>
              <SelectItem value="25">25 minutos</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default StudentItem;
