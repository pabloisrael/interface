/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/aWHgRx8Mg76
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ContractPending(props) {
  console.log(props)
  return (
    <div key="1" className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contrato</h1>
        <p className="text-gray-500 dark:text-gray-400">Por favor, leer el contrato antes de firmarlo</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Descripción</Label>
          <Input id="name" readOnly value={props.description}/>
        </div>
        <Button>Descargar contrato</Button>
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="space-y-2">
            <Label htmlFor="start-date">Start Date</Label>
            <Input id="start-date" readOnly type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="end-date">End Date</Label>
            <Input id="end-date" readOnly type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" placeholder="$0.00" readOnly step="0.01" type="number" />
          </div>
        </div>
        <Button onClick={props.onSignContractButtonClick}>Firmar Documento</Button>
      </div>
    </div>
  )
}
