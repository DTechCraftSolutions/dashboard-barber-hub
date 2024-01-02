import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { AvailableDay } from './available-day'
import { useState } from 'react'
import { ModalCalendar } from './calendar-modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'




export function AvaliableBarberShop() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Helmet title="Agendamentos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Disponibiliade da barbearia</h1>
        <div className="items-center justify-between flex ">
          <div className="w-1/2 min-h-[60vh] ">
            <h2 className="font-bold tracking-tight">
              Horarios semanais
            </h2>
            <div className='mt-1'>
              <AvailableDay day='domingo' />
              <AvailableDay day='segunda-feira' />
              <AvailableDay day='terça-feira' />
              <AvailableDay day='quarta-feira' />
              <AvailableDay day='quinta-feira' />
              <AvailableDay day='sexta-feira' />
              <AvailableDay day='sabado' />
            </div>


          </div>
          <div className='w-1/2 min-h-[60vh] '>
            <h2 className="font-bold  tracking-tight">
              Datas específicas
            </h2>
            <Dialog>
              <DialogTrigger>
                <Button>
                  Adicionar data específica
                </Button>
              </DialogTrigger>
              <ModalCalendar />
            </Dialog>

          </div>
        </div>
      </div>
    </>
  )
}
