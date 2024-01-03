import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const signUpForm = z.object({
  BarberShopName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string().min(6),

})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState('anual');
  const [showCards, setShowCards] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Barbearia cadastrada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar barbearia!')
    }
  }

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
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('BarberShopName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Cpf</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Endereço</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Número</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Complemento</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Cidade</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Cidade</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
              />
            </div>
            <div>
              <Label htmlFor="password">Confirme sua senha</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
              />
              <Select onValueChange={(value) => setShowCards(value)}>
                <div className='mt-2'>
                  <label
                    className='text-sm'
                    htmlFor="">
                    Plano
                  </label>
                  <SelectTrigger className=' h-11'>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gratis">Testar grátis por 7 dias</SelectItem>
                    <SelectItem value="showCards">Escolher um plano personalizado</SelectItem>
                  </SelectContent>
                </div>
              </Select>
            </div>
            {
              showCards === 'showCards' &&        <div className='flex w-full justify-between'>
              <div
                onClick={() => setSelectedPlan('trimestral')}
                className={`w-[30%] cursor-pointer ${selectedPlan === 'trimestral' ? 'bg-[#C72323] shadow-lg shadow-[#C72323]' : ''} h-40 border rounded-sm'`}>
                <h2 className='w-full text-center pt-2'>
                  Trimestral
                </h2>
                <p className='w-full text-center font-bold'>
                  R$79,90
                </p>
                <p className='text-xs text-center px-2 mt-2'>
                  Fidelidade de 3 meses
                </p>
              </div>
              <div
                onClick={() => setSelectedPlan('semestral')}
                className={`w-[30%]  cursor-pointer ${selectedPlan === 'semestral' ? 'bg-[#C72323] shadow-lg shadow-[#C72323]' : ''} h-40 border rounded-sm'`}>
                <h2 className='w-full text-center pt-2'>
                  Semestral
                </h2>
                <p className='w-full text-center font-bold'>
                  R$64,90
                </p>
                <p className='text-xs text-center px-2 mt-2'>
                  Fidelidade de 6 meses
                </p>
              </div>
              <div
                onClick={() => setSelectedPlan('anual')}
                className={`w-[30%] cursor-pointer ${selectedPlan === 'anual' ? 'bg-[#C72323] shadow-lg shadow-[#C72323]' : ''} h-40 border rounded-sm'`}>
                <h2 className='w-full text-center pt-2'>
                  Anual
                </h2>
                <p className='w-full text-center font-bold'>
                  R$49,90
                </p>
                <p className='text-xs text-center px-2 mt-2'>
                  Fidelidade de 12 meses
                </p>
              </div>

            </div> ||  null
            }

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
