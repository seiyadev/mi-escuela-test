import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

function Navbar() {
  return (
    <div className="flex justify-center w-full fixed bg-background border-b-2">
      <div className="max-w-[1440px] w-full h-24 px-4 flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={48}
          height={48}
          className="object-contain"
        />
        <div className="flex-1 flex flex-col justify-center items-center gap-1">
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-primary">
            Centro Educativo Juan Pablo Duarte
          </h4>
          <small className="text-sm font-medium leading-none">
            Año escolar 2024-2025
          </small>
          <div className="flex items-center">
            <small className="text-sm font-medium leading-none">
              Preprimario
            </small>
            &nbsp;|&nbsp;
            <small className="text-sm font-medium leading-none">
              Sección A
            </small>
          </div>
        </div>
        <Avatar>
          <AvatarFallback>OS</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
