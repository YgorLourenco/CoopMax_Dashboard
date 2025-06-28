"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Cooperado } from "@/types"

interface CooperadoSearchProps {
  cooperados: Cooperado[]
  onSelectCooperado: (id: string | null) => void
  isLoading: boolean
}

export function CooperadoSearch({ cooperados, onSelectCooperado, isLoading }: CooperadoSearchProps) {
  const handleSelect = (value: string) => {
    onSelectCooperado(value === "none" ? null : value)
  }

  return (
    <div className="p-4 md:p-6 bg-gray-50 rounded-lg shadow">
      <div className="grid md:grid-cols-3 gap-4 items-end">
        <div className="md:col-span-2">
          <label htmlFor="search-cooperado" className="block text-sm font-medium text-gray-700 mb-1">
            Buscar Cooperado
          </label>
          <Input
            id="search-cooperado"
            type="text"
            placeholder="Digite CPF/CNPJ ou nome do cooperado"
            className="bg-white"
            disabled={isLoading}
          />
        </div>
        <Button className="w-full md:w-auto bg-primary-cooperativo hover:bg-blue-700" disabled={isLoading}>
          <SearchIcon className="mr-2 h-4 w-4" />
          Buscar
        </Button>
      </div>
      <div className="mt-4">
        <label htmlFor="select-cooperado" className="block text-sm font-medium text-gray-700 mb-1">
          Ou selecione um cooperado exemplo:
        </label>
        <Select onValueChange={handleSelect} disabled={isLoading}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Selecione um cooperado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">Nenhum selecionado</SelectItem>
            {cooperados.map((cooperado) => (
              <SelectItem key={cooperado.id} value={cooperado.id}>
                {cooperado.nome} - {cooperado.cpfCnpj}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
