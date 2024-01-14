import { Building, LogOut } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import api from "@/lib/axios";
import { useEffect, useState } from "react";

export function AccountMenu() {
  const [professionals, setProfessionals] = useState<any>([]);
  const [barber, setBarber] = useState<any>([]);
  const navigate = useNavigate();

  function handleSignOut() {
    localStorage.removeItem("token");
    navigate("/sign-in", { replace: true });
  }

  async function profile() {
    const response = await api.get("/me-professional", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setProfessionals(response.data.professionals);
    setBarber(response.data.barber);
  }

  useEffect(() => {
    profile();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {barber.name}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{professionals.name}</span>
          <span className="text-xs font-normal text-muted-foreground">
            {professionals.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-rose-500 dark:text-rose-400"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
