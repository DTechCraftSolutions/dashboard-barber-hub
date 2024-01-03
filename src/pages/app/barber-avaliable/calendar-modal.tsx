
import { DialogContent,  DialogHeader } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
;


interface ModalCalendarProps { }

export function ModalCalendar() {
    return (
        <DialogContent className='flex flex-col justify-center'>
            <DialogHeader className='mx-auto'>
                Escolha uma data específica
            </DialogHeader>
            <div className='ml-20'>
            <Calendar />
            </div>
        </DialogContent>

    )
}