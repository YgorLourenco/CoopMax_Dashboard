import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { ProdutoDisponivel } from "@/types"
import { ShoppingBag, Landmark, ShieldCheck, Handshake } from "lucide-react"

interface ProdutosDisponiveisGridProps {
  produtos: ProdutoDisponivel[]
}

const getCategoryIcon = (categoria: ProdutoDisponivel["categoria"]) => {
  switch (categoria) {
    case "Crédito":
      return <Landmark className="h-5 w-5 text-primary-cooperativo" />
    case "Investimentos":
      return <ShoppingBag className="h-5 w-5 text-primary-cooperativo" />
    case "Seguros":
      return <ShieldCheck className="h-5 w-5 text-primary-cooperativo" />
    case "Serviços":
      return <Handshake className="h-5 w-5 text-primary-cooperativo" />
    default:
      return null
  }
}

export function ProdutosDisponiveisGrid({ produtos }: ProdutosDisponiveisGridProps) {
  const categorias = Array.from(new Set(produtos.map((p) => p.categoria)))

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-primary-cooperativo">Produtos disponíveis na cooperativa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {categorias.map((categoria) => (
          <div key={categoria}>
            <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center">
              {getCategoryIcon(categoria)}
              <span className="ml-2">{categoria}</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {produtos
                .filter((p) => p.categoria === categoria)
                .map((produto) => (
                  <Card key={produto.id} className="flex flex-col justify-between hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-md">{produto.nome}</CardTitle>
                      <CardDescription className="text-xs">{produto.descricaoBreve}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="list-disc list-inside text-xs space-y-1 text-gray-600">
                        {produto.beneficiosPrincipais.map((beneficio, idx) => (
                          <li key={idx}>{beneficio}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary-cooperativo text-primary-cooperativo hover:bg-blue-50 hover:text-primary-cooperativo"
                      >
                        Ver detalhes
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
