import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProfessionalTableRow } from "./professional-table-row";

export function RegisterProfessional() {
    return (
        <div className="w-full ">
            <h1 className="text-3xl font-bold tracking-tight">Cadastrar profissionais</h1>
            <Button className="my-4">Cadastrar novo</Button>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[64px]"></TableHead>
                        <TableHead className="w-[140px]">Identificador</TableHead>
                        <TableHead className="w-[140px]">Nome</TableHead>
                        <TableHead className="w-[140px]">Data de cadastro</TableHead>
                        <TableHead className="w-[140px]">Total de serviços</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                   {Array.from({ length: 2 }).map((_, i) => {
                       return <ProfessionalTableRow key={i} />
                   })}
                </TableBody>
            </Table>
        </div>
    );
}