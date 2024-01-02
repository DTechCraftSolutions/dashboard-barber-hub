import * as Radio from "@radix-ui/react-radio-group"
import { AvaliablActions, AvaliableContent, AvaliableRatio, AvaliableTime } from "./avaliable-row";
import { RadioItem } from "@/components/ui/Radio";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MdAdd } from "react-icons/md";

interface Props {
  day: "segunda-feira" | "terça-feira" | "quarta-feira" | "quinta-feira" | "sexta-feira" | "sabado" | "domingo"
}

export function AvailableDay({ day }: Props) {
  return (
    <Radio.Root>
      <AvaliableContent className="space-y-3">
        <AvaliableRatio>
          <RadioItem weekDay={day} />
        </AvaliableRatio>
        <AvaliableTime>
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[95px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">10:00</SelectItem>
              <SelectItem value="canceled">10:30</SelectItem>
              <SelectItem value="processing">11:00</SelectItem>
              <SelectItem value="delivering">11:30</SelectItem>
              <SelectItem value="delivered">12:00</SelectItem>
            </SelectContent>
          </Select>
          <p>-</p>
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[95px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">10:00</SelectItem>
              <SelectItem value="canceled">10:30</SelectItem>
              <SelectItem value="processing">11:00</SelectItem>
              <SelectItem value="delivering">11:30</SelectItem>
              <SelectItem value="delivered">12:00</SelectItem>
            </SelectContent>
          </Select>

        </AvaliableTime>
        <AvaliablActions>
          <MdAdd className="cursor-pointer  "  />
        </AvaliablActions>
      </AvaliableContent>

    </Radio.Root>
  )
}