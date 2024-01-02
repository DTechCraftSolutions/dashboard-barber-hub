import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'



// interface OrderTableRowProps {}

export function ProfessionalTableRow() {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell>qway21-32123</TableCell>
      <TableCell className="font-medium">Diego Schell Fernandes</TableCell>
      <TableCell className="font-medium">29/11/2023</TableCell>
      <TableCell className="font-medium">20</TableCell>
    </TableRow>
  )
}
