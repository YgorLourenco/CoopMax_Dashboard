import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Cooperado, CooperadoTipo } from "@/types"
import { User, Building, Tractor, TrendingUp, Briefcase, MapPin, Phone, Cake, Users } from "lucide-react"

interface CooperadoProfileProps {
  cooperado: Cooperado
}

const getBadgeVariant = (tipo: CooperadoTipo) => {
  switch (tipo) {
    case "PF":
      return "bg-blue-100 text-blue-700 border-blue-300"
    case "PJ":
      return "bg-purple-100 text-purple-700 border-purple-300"
    case "Rural":
      return "bg-green-100 text-verde-cooperativo border-green-300"
    default:
      return "bg-gray-100 text-gray-700 border-gray-300"
  }
}

const ProfileItem: React.FC<{ icon: React.ElementType; label: string; value?: string | number }> = ({
  icon: Icon,
  label,
  value,
}) => {
  if (!value) return null
  return (
    <div className="flex items-center text-sm text-gray-700">
      <Icon className="h-4 w-4 mr-2 text-primary-cooperativo" />
      <span className="font-medium">{label}:&nbsp;</span>
      <span>{value}</span>
    </div>
  )
}

export function CooperadoProfile({ cooperado }: CooperadoProfileProps) {
  return (
    <div className="mt-6 grid md:grid-cols-3 gap-4">
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg text-primary-cooperativo">
            Dados Pessoais/Empresariais
            {cooperado.tipo === "PF" && <User className="h-5 w-5" />}
            {cooperado.tipo === "PJ" && !cooperado.profissaoAtividade.toLowerCase().includes("rural") && (
              <Building className="h-5 w-5" />
            )}
            {(cooperado.tipo === "Rural" ||
              (cooperado.tipo === "PJ" && cooperado.profissaoAtividade.toLowerCase().includes("rural"))) && (
              <Tractor className="h-5 w-5" />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <h3 className="font-semibold text-gray-800">{cooperado.nome}</h3>
          <ProfileItem icon={User} label="CPF/CNPJ" value={cooperado.cpfCnpj} />
          {cooperado.idade && <ProfileItem icon={Cake} label="Idade" value={`${cooperado.idade} anos`} />}
          {cooperado.sexo && <ProfileItem icon={Users} label="Sexo" value={cooperado.sexo} />}
          <ProfileItem icon={Phone} label="Telefone" value={cooperado.telefone} />
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg text-primary-cooperativo">Perfil Cooperativista</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge variant="outline" className={`text-sm ${getBadgeVariant(cooperado.tipo)}`}>
            {cooperado.tipo}
          </Badge>
          <ProfileItem icon={Briefcase} label="Profissão/Atividade" value={cooperado.profissaoAtividade} />
          <ProfileItem icon={Users} label="Tempo na Cooperativa" value={cooperado.tempoCooperativa} />
          <ProfileItem icon={MapPin} label="Cidade" value={cooperado.cidade} />
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg text-primary-cooperativo">Indicadores Financeiros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-baseline">
            <TrendingUp className="h-4 w-4 mr-2 text-primary-cooperativo" />
            <span className="font-medium text-gray-700">Produtos Contratados:&nbsp;</span>
            <span className="text-2xl font-bold text-verde-cooperativo">
              {cooperado.indicadoresFinanceiros.quantidadeProdutos}
            </span>
          </div>
          <ProfileItem
            icon={TrendingUp}
            label="Última Movimentação"
            value={cooperado.indicadoresFinanceiros.ultimaMovimentacao}
          />
          <ProfileItem
            icon={TrendingUp}
            label="Score de Relacionamento"
            value={`${cooperado.indicadoresFinanceiros.scoreRelacionamento}/100`}
          />
        </CardContent>
      </Card>
    </div>
  )
}
