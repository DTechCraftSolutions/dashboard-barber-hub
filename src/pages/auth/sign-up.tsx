import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/axios";
import { AxiosError } from "axios";

const signUpForm = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password_hash: z.string(),
  role: z.enum(["ADMIN", "WORKER"]),
  cpf: z.string().refine((cpf) => cpf.length === 11, {
    message: "CPF must have 11 digits",
  }),
  address: z.string(),
  city: z.string(),
  plan: z.string(),
  logo_url: z.string().url(),
  nameBarber: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("gratis");
  const [showCards, setShowCards] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      const newData = { ...data, role: "ADMIN", plan: selectedPlan };

      await api.post("/professionals", newData);

      toast.success("Barbearia cadastrada com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });
    } catch (error: AxiosError<any> | any) {
      toast.error(error.message);
    }
  }

  function handleSelectPlan(plan: string) {
    setSelectedPlan(plan);
    setShowCards(plan);
  }

  useEffect(() => {
    console.log(selectedPlan);
  }, [selectedPlan]);
  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece a gerenciar sua barbearia!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="barberName">Nome do estabelecimento</Label>
              <Input id="barberName" type="text" {...register("nameBarber")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input id="name" type="text" {...register("name")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf">Cpf</Label>
              <Input id="cpf" type="cpf" {...register("cpf")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" type="address" {...register("address")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="">Logo_url</Label>
              <Input id="logo_url" type="logo_url" {...register("logo_url")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" type="city" {...register("city")} />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password_hash")}
              />
            </div>
            <div>
              <Label htmlFor="password">Confirme sua senha</Label>
              <Input
                id="passwordConfirmation"
                type="password"
                autoComplete="current-password"
                {...register("password_hash")}
              />
              <Select onValueChange={(value) => handleSelectPlan(value)}>
                <div className="mt-2">
                  <label className="text-sm" htmlFor="">
                    Plano
                  </label>
                  <SelectTrigger className=" h-11">
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gratis">
                      Testar grátis por 7 dias
                    </SelectItem>
                    <SelectItem value="showCards">
                      Escolher um plano personalizado
                    </SelectItem>
                  </SelectContent>
                </div>
              </Select>
            </div>
            {(showCards === "showCards" && (
              <div className="flex w-full justify-between">
                <div
                  onClick={() => setSelectedPlan("trimestral")}
                  className={`w-[30%] cursor-pointer ${
                    selectedPlan === "trimestral"
                      ? "bg-[#C72323] shadow-lg shadow-[#C72323]"
                      : ""
                  } rounded-sm' h-40 border`}
                >
                  <h2 className="w-full pt-2 text-center">Trimestral</h2>
                  <p className="w-full text-center font-bold">R$79,90</p>
                  <p className="mt-2 px-2 text-center text-xs">
                    Fidelidade de 3 meses
                  </p>
                </div>
                <div
                  onClick={() => setSelectedPlan("semestral")}
                  className={`w-[30%]  cursor-pointer ${
                    selectedPlan === "semestral"
                      ? "bg-[#C72323] shadow-lg shadow-[#C72323]"
                      : ""
                  } rounded-sm' h-40 border`}
                >
                  <h2 className="w-full pt-2 text-center">Semestral</h2>
                  <p className="w-full text-center font-bold">R$64,90</p>
                  <p className="mt-2 px-2 text-center text-xs">
                    Fidelidade de 6 meses
                  </p>
                </div>
                <div
                  onClick={() => setSelectedPlan("anual")}
                  className={`w-[30%] cursor-pointer ${
                    selectedPlan === "anual"
                      ? "bg-[#C72323] shadow-lg shadow-[#C72323]"
                      : ""
                  } rounded-sm' h-40 border`}
                >
                  <h2 className="w-full pt-2 text-center">Anual</h2>
                  <p className="w-full text-center font-bold">R$49,90</p>
                  <p className="mt-2 px-2 text-center text-xs">
                    Fidelidade de 12 meses
                  </p>
                </div>
              </div>
            )) ||
              null}

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
