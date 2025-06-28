import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ProdutoAtual } from "@/types"
import { ListChecks } from "lucide-react"

interface ProdutosAtuaisTableProps {
  produtos: ProdutoAtual[]
}

export function ProdutosAtuaisTable({ produtos }: ProdutosAtuaisTableProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-primary-cooperativo">
          <ListChecks className="mr-2 h-6 w-6" />
          Produtos que o cooperado possui
        </CardTitle>
      </CardHeader>
      <CardContent>
        {produtos.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-700 font-semibold">Nome do Produto</TableHead>
                <TableHead className="text-gray-700 font-semibold">Data de Contratação</TableHead>
                <TableHead className="text-gray-700 font-semibold">Status</TableHead>
                <TableHead className="text-gray-700 font-semibold">Valor/Limite</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produtos.map((produto) => (
                <TableRow key={produto.id} className="hover:bg-gray-50">
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.dataContratacao}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        produto.status === "Ativo" ? "bg-green-100 text-verde-cooperativo" : "bg-red-100 text-red-600"
                      }`}
                    >
                      {produto.status}
                    </span>
                  </TableCell>
                  <TableCell>{produto.valorLimite || "N/A"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center text-gray-500 py-4">Nenhum produto contratado.</p>
        )}
      </CardContent>
    </Card>
  )
}
