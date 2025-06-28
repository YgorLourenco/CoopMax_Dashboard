import type { Cooperado, ProdutoDisponivel, MetricasGerais } from "@/types"

export const COOPERADOS_DATA: Cooperado[] = [
  {
    id: "1",
    nome: "João Silva Santos",
    cpfCnpj: "123.456.789-00",
    tipo: "Rural",
    idade: 45,
    sexo: "Masculino",
    telefone: "(62) 99999-9999",
    tempoCooperativa: "8 anos e 4 meses",
    profissaoAtividade: "Produtor Rural",
    cidade: "Mineiros - GO",
    produtosAtuais: [
      { id: "p1", nome: "Conta Corrente", dataContratacao: "01/03/2016", status: "Ativo" },
      { id: "p2", nome: "Poupança", dataContratacao: "15/07/2017", status: "Ativo", valorLimite: "R$ 15.420,00" },
      { id: "p3", nome: "Cartão de Débito", dataContratacao: "01/03/2016", status: "Ativo" },
    ],
    recomendacoes: [
      {
        id: "r1",
        nomeProduto: "Crédito Rural Custeio",
        scorePropensao: 92,
        motivo: "Baseado no perfil rural e histórico de safras.",
        melhorMomento: "Durante período de colheita",
        scriptSugerido:
          "João, considerando sua atividade rural e o período de safra que se aproxima, temos uma linha de Crédito Rural Custeio com condições especiais para você.",
      },
      {
        id: "r2",
        nomeProduto: "Seguro Agrícola",
        scorePropensao: 87,
        motivo: "Proteção para sua lavoura contra imprevistos climáticos.",
        melhorMomento: "Início do plantio",
        scriptSugerido:
          "Para garantir a tranquilidade da sua produção, João, o Seguro Agrícola é fundamental. Podemos simular?",
      },
      {
        id: "r3",
        nomeProduto: "CDB Rural",
        scorePropensao: 71,
        motivo: "Rentabilidade atrativa para seus investimentos.",
        melhorMomento: "Após a venda da safra",
        scriptSugerido: "João, pensou em rentabilizar o lucro da sua safra? O CDB Rural oferece ótimas taxas.",
      },
    ],
    indicadoresFinanceiros: {
      quantidadeProdutos: 3,
      ultimaMovimentacao: "28/05/2025",
      scoreRelacionamento: 85,
    },
  },
  {
    id: "2",
    nome: "Maria Oliveira Ltda",
    cpfCnpj: "12.345.678/0001-90",
    tipo: "PJ",
    telefone: "(64) 98888-8888",
    tempoCooperativa: "12 anos",
    profissaoAtividade: "Comércio de Insumos Agrícolas",
    cidade: "Rio Verde - GO",
    produtosAtuais: [
      { id: "p4", nome: "Conta Empresarial", dataContratacao: "10/01/2013", status: "Ativo" },
      {
        id: "p5",
        nome: "Cartão Empresarial",
        dataContratacao: "10/01/2013",
        status: "Ativo",
        valorLimite: "R$ 25.000,00",
      },
    ],
    recomendacoes: [
      {
        id: "r4",
        nomeProduto: "Crédito Capital de Giro",
        scorePropensao: 89,
        motivo: "Ideal para fluxo de caixa da sua empresa.",
        melhorMomento: "Início do mês",
        scriptSugerido:
          "Maria, para manter a saúde financeira da sua empresa, o Capital de Giro pode ser um grande aliado. Vamos conversar?",
      },
      {
        id: "r5",
        nomeProduto: "Conta Investimento PJ",
        scorePropensao: 76,
        motivo: "Diversifique os investimentos da sua empresa.",
        melhorMomento: "Recebimento de grandes pagamentos",
        scriptSugerido:
          "Notamos um bom volume em sua conta. Que tal conhecer nossa Conta Investimento PJ para rentabilizar esses valores?",
      },
      {
        id: "r6",
        nomeProduto: "Seguro Empresarial",
        scorePropensao: 68,
        motivo: "Proteção completa para seu patrimônio.",
        melhorMomento: "Aniversário do CNPJ",
        scriptSugerido:
          "Maria, a segurança do seu negócio é primordial. O Seguro Empresarial oferece coberturas completas. Podemos detalhar?",
      },
    ],
    indicadoresFinanceiros: {
      quantidadeProdutos: 2,
      ultimaMovimentacao: "30/05/2025",
      scoreRelacionamento: 92,
    },
  },
  {
    id: "3",
    nome: "Pedro Costa (Rural)",
    cpfCnpj: "987.654.321-00",
    tipo: "Rural",
    idade: 58,
    sexo: "Masculino",
    telefone: "(62) 97777-7777",
    tempoCooperativa: "5 anos e 2 meses",
    profissaoAtividade: "Pecuarista",
    cidade: "Jataí - GO",
    produtosAtuais: [
      { id: "p6", nome: "Conta Corrente", dataContratacao: "10/04/2020", status: "Ativo" },
      {
        id: "p7",
        nome: "Financiamento de Máquinas",
        dataContratacao: "05/08/2022",
        status: "Ativo",
        valorLimite: "R$ 150.000,00",
      },
    ],
    recomendacoes: [
      {
        id: "r7",
        nomeProduto: "Crédito Rural Investimento",
        scorePropensao: 90,
        motivo: "Expansão da sua atividade pecuária.",
        melhorMomento: "Planejamento de novas aquisições",
        scriptSugerido:
          "Pedro, pensando em ampliar seu rebanho ou melhorar a infraestrutura? O Crédito Rural Investimento é perfeito para isso.",
      },
      {
        id: "r8",
        nomeProduto: "Seguro Pecuário",
        scorePropensao: 82,
        motivo: "Proteção para seu rebanho.",
        melhorMomento: "Período de vacinação",
        scriptSugerido: "A saúde do seu rebanho é um investimento. Com o Seguro Pecuário, você fica mais tranquilo.",
      },
    ],
    indicadoresFinanceiros: {
      quantidadeProdutos: 2,
      ultimaMovimentacao: "01/06/2025",
      scoreRelacionamento: 78,
    },
  },
  {
    id: "4",
    nome: "Fazenda Boa Vista",
    cpfCnpj: "98.765.432/0001-10",
    tipo: "PJ", // Rural PJ
    telefone: "(64) 96666-6666",
    tempoCooperativa: "15 anos",
    profissaoAtividade: "Agricultura e Pecuária",
    cidade: "Montividiu - GO",
    produtosAtuais: [
      { id: "p9", nome: "Conta Empresarial Rural", dataContratacao: "01/01/2010", status: "Ativo" },
      {
        id: "p10",
        nome: "CPR Financeira",
        dataContratacao: "15/02/2024",
        status: "Ativo",
        valorLimite: "R$ 500.000,00",
      },
      { id: "p11", nome: "Consórcio Agro", dataContratacao: "20/11/2023", status: "Ativo" },
    ],
    recomendacoes: [
      {
        id: "r9",
        nomeProduto: "LCI/LCA",
        scorePropensao: 85,
        motivo: "Investimento isento de IR com foco no agronegócio.",
        melhorMomento: "Pós-colheita, com capital disponível",
        scriptSugerido: "Para diversificar seus investimentos com segurança e rentabilidade, já consideraram LCI/LCA?",
      },
      {
        id: "r10",
        nomeProduto: "Seguro Frota Agrícola",
        scorePropensao: 79,
        motivo: "Proteção para todos os seus veículos e máquinas.",
        melhorMomento: "Renovação de seguro individual",
        scriptSugerido:
          "Notamos que possuem diversas máquinas. O Seguro Frota Agrícola pode otimizar custos e garantir cobertura total.",
      },
    ],
    indicadoresFinanceiros: {
      quantidadeProdutos: 3,
      ultimaMovimentacao: "02/06/2025",
      scoreRelacionamento: 95,
    },
  },
]

export const PRODUTOS_DISPONIVEIS_DATA: ProdutoDisponivel[] = [
  // Crédito
  {
    id: "pd1",
    nome: "Crédito Pessoal",
    descricaoBreve: "Dinheiro rápido para suas necessidades.",
    beneficiosPrincipais: ["Liberação ágil", "Taxas competitivas"],
    categoria: "Crédito",
  },
  {
    id: "pd2",
    nome: "Crédito Rural Custeio",
    descricaoBreve: "Financie os custos da sua produção agrícola.",
    beneficiosPrincipais: ["Prazos flexíveis", "Alinhado ao ciclo produtivo"],
    categoria: "Crédito",
  },
  {
    id: "pd3",
    nome: "Crédito Imobiliário",
    descricaoBreve: "Realize o sonho da casa própria ou invista em imóveis.",
    beneficiosPrincipais: ["Financiamento de até 90%", "Use seu FGTS"],
    categoria: "Crédito",
  },
  {
    id: "pd4",
    nome: "Crédito Capital de Giro",
    descricaoBreve: "Mantenha o fluxo de caixa da sua empresa saudável.",
    beneficiosPrincipais: ["Flexibilidade de pagamento", "Fortalece seu negócio"],
    categoria: "Crédito",
  },
  // Investimentos
  {
    id: "pd5",
    nome: "CDB",
    descricaoBreve: "Invista com segurança e boa rentabilidade.",
    beneficiosPrincipais: ["Garantia do FGC", "Diversas opções de prazo"],
    categoria: "Investimentos",
  },
  {
    id: "pd6",
    nome: "LCI/LCA",
    descricaoBreve: "Invista no setor imobiliário ou agronegócio com isenção de IR.",
    beneficiosPrincipais: ["Isenção de Imposto de Renda", "Lastro em setores fortes"],
    categoria: "Investimentos",
  },
  {
    id: "pd7",
    nome: "Tesouro Direto",
    descricaoBreve: "Invista em títulos públicos federais com baixo risco.",
    beneficiosPrincipais: ["Segurança do Tesouro Nacional", "Acessível"],
    categoria: "Investimentos",
  },
  // Seguros
  {
    id: "pd8",
    nome: "Seguro de Vida",
    descricaoBreve: "Proteja quem você ama em caso de imprevistos.",
    beneficiosPrincipais: ["Tranquilidade para sua família", "Coberturas personalizadas"],
    categoria: "Seguros",
  },
  {
    id: "pd9",
    nome: "Seguro Auto",
    descricaoBreve: "Proteção completa para o seu veículo.",
    beneficiosPrincipais: ["Cobertura contra roubo, furto e colisão", "Assistência 24h"],
    categoria: "Seguros",
  },
  {
    id: "pd10",
    nome: "Seguro Agrícola",
    descricaoBreve: "Garanta sua lavoura contra perdas climáticas.",
    beneficiosPrincipais: ["Minimiza prejuízos", "Estabilidade para o produtor"],
    categoria: "Seguros",
  },
  {
    id: "pd11",
    nome: "Seguro Empresarial",
    descricaoBreve: "Proteja o patrimônio da sua empresa.",
    beneficiosPrincipais: ["Cobertura para danos, roubo", "Continuidade dos negócios"],
    categoria: "Seguros",
  },
  // Serviços
  {
    id: "pd12",
    nome: "Consórcio",
    descricaoBreve: "Planeje a compra de bens e serviços sem juros.",
    beneficiosPrincipais: ["Parcelas acessíveis", "Poder de compra à vista"],
    categoria: "Serviços",
  },
  {
    id: "pd13",
    nome: "Cartões de Crédito",
    descricaoBreve: "Facilidade e benefícios para suas compras.",
    beneficiosPrincipais: ["Programa de pontos", "Aceitação internacional"],
    categoria: "Serviços",
  },
]

export const METRICAS_GERAIS_DATA: MetricasGerais = {
  iapAtual: 2.3,
  iapPotencial: 4.1,
  oportunidadeReceita: "R$ 2.850/mês",
  proximaAcaoSugerida: "Agendar visita técnica rural",
}
