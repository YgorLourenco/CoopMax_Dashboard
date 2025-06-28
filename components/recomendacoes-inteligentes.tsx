import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Recomendacao } from "@/types"
import { Star, MessageSquare, Clock } from "lucide-react"

interface RecomendacoesInteligentesProps {
  recomendacoes: Recomendacao[]
}

const getPropensityColor = (score: number) => {
  if (score >= 90) return "bg-propensao-alta-forte" // Strong Green
  if (score >= 80) return "bg-propensao-alta" // Green
  if (score >= 70) return "bg-propensao-media" // Yellow
  return "bg-propensao-baixa" // Red (though not in example, good for <70)
}

export function RecomendacoesInteligentes({ recomendacoes }: RecomendacoesInteligentesProps) {
  return (
    <Card className="shadow-lg border-2 border-verde-cooperativo">
      <CardHeader>
        <CardTitle className="flex items-center text-xl text-verde-cooperativo">
          <Star className="mr-2 h-6 w-6 text-yellow-500 fill-yellow-400" />
          Produtos Recomendados para este Cooperado
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recomendacoes.length > 0 ? (
          recomendacoes.map((rec) => (
            <TooltipProvider key={rec.id} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-gray-50 hover:shadow-lg transition-shadow cursor-default">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg text-primary-cooperativo">{rec.nomeProduto}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Propensão:</span>
                        <span
                          className={`text-sm font-bold ${
                            rec.scorePropensao >= 90
                              ? "text-propensao-alta-forte"
                              : rec.scorePropensao >= 80
                                ? "text-propensao-alta"
                                : rec.scorePropensao >= 70
                                  ? "text-propensao-media"
                                  : "text-propensao-baixa"
                          }`}
                        >
                          {rec.scorePropensao}%
                        </span>
                      </div>
                      <Progress
                        value={rec.scorePropensao}
                        className={`h-2 ${getPropensityColor(rec.scorePropensao)}`}
                      />
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Motivo:</span> {rec.motivo}
                      </p>
                    </CardContent>
                    <CardFooter className="text-xs text-gray-500 flex flex-col items-start space-y-1 pt-2">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1.5" />
                        <span>
                          <span className="font-semibold">Melhor momento:</span> {rec.melhorMomento}
                        </span>
                      </div>
                      <div className="flex items-start">
                        <MessageSquare className="h-3 w-3 mr-1.5 mt-0.5 shrink-0" />
                        <span>
                          <span className="font-semibold">Script:</span> {rec.scriptSugerido}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white rounded-md p-2 text-xs">
                  <p>Score de Propensão: {rec.scorePropensao}%</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">Nenhuma recomendação disponível para este cooperado.</p>
        )}
      </CardContent>
    </Card>
  )
}
