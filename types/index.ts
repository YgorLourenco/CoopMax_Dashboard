export interface ProdutoAtual {
  id: string
  nome: string
  dataContratacao: string
  status: "Ativo" | "Inativo"
  valorLimite?: string
}

export interface ProdutoDisponivel {
  id: string
  nome: string
  descricaoBreve: string
  beneficiosPrincipais: string[]
  categoria: "Crédito" | "Investimentos" | "Seguros" | "Serviços"
}

export interface Recomendacao {
  id: string
  nomeProduto: string
  scorePropensao: number // Percentage 0-100
  motivo: string
  melhorMomento: string
  scriptSugerido: string
}

export interface IndicadoresFinanceiros {
  quantidadeProdutos: number
  ultimaMovimentacao: string
  scoreRelacionamento: number // 0-100
}

export type CooperadoTipo = "PF" | "PJ" | "Rural"

export interface Cooperado {
  id: string
  nome: string
  cpfCnpj: string
  tipo: CooperadoTipo
  idade?: number
  sexo?: "Masculino" | "Feminino"
  telefone: string
  tempoCooperativa: string
  profissaoAtividade: string
  cidade: string
  produtosAtuais: ProdutoAtual[]
  recomendacoes: Recomendacao[]
  indicadoresFinanceiros: IndicadoresFinanceiros
}

export interface MetricasGerais {
  iapAtual: number
  iapPotencial: number
  oportunidadeReceita: string
  proximaAcaoSugerida: string
}
