import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { MetricasGerais } from "@/types"
import { TrendingUp, Target, DollarSign, CalendarCheck } from "lucide-react"

interface MetricasFooterProps {
  metricas: MetricasGerais
}

const MetricCard: React.FC<{ title: string; value: string | number; icon: React.ElementType; colorClass: string }> = ({
  title,
  value,
  icon: Icon,
  colorClass,
}) => (
  <Card className="shadow-md hover:shadow-lg transition-shadow">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      <Icon className={`h-4 w-4 ${colorClass}`} />
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
    </CardContent>
  </Card>
)

export function MetricasFooter({ metricas }: MetricasFooterProps) {
  return (
    <footer className="p-4 md:p-6 bg-gray-100 mt-8">
      <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="IAP Atual"
          value={`${metricas.iapAtual} produtos`}
          icon={TrendingUp}
          colorClass="text-primary-cooperativo"
        />
        <MetricCard
          title="IAP Potencial"
          value={`${metricas.iapPotencial} produtos`}
          icon={Target}
          colorClass="text-verde-cooperativo"
        />
        <MetricCard
          title="Oportunidade de Receita"
          value={metricas.oportunidadeReceita}
          icon={DollarSign}
          colorClass="text-yellow-500"
        />
        <MetricCard
          title="Próxima Ação Sugerida"
          value={metricas.proximaAcaoSugerida}
          icon={CalendarCheck}
          colorClass="text-purple-600"
        />
      </div>
    </footer>
  )
}
