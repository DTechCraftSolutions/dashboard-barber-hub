import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/axios";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const navigate = useNavigate();
  async function handleSignIn(data: SignInForm) {
    try {
      const response = await api.post("/professionals/authenticate", data);
      localStorage.setItem("token", response.data.token);
      toast.success("Login realizado com sucesso.", {});
      navigate("/", { replace: true });
    } catch (error: any) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Novo estabelecimento</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Sua senha</Label>
              <Input id="password" type="password" {...register("password")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
