"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { CooperadoSearch } from "@/components/cooperado-search"
import { CooperadoProfile } from "@/components/cooperado-profile"
import { ProdutosAtuaisTable } from "@/components/produtos-atuais-table"
import { ProdutosDisponiveisGrid } from "@/components/produtos-disponiveis-grid"
import { RecomendacoesInteligentes } from "@/components/recomendacoes-inteligentes"
import { MetricasFooter } from "@/components/metricas-footer"
import { COOPERADOS_DATA, PRODUTOS_DISPONIVEIS_DATA, METRICAS_GERAIS_DATA } from "@/lib/data"
import type { Cooperado } from "@/types"
import { Loader2 } from "lucide-react"

export default function DashboardPage() {
  const [selectedCooperadoId, setSelectedCooperadoId] = useState<string | null>(null)
  const [selectedCooperado, setSelectedCooperado] = useState<Cooperado | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (selectedCooperadoId) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const cooperado = COOPERADOS_DATA.find((c) => c.id === selectedCooperadoId) || null
        setSelectedCooperado(cooperado)
        setIsLoading(false)
      }, 1000)
    } else {
      setSelectedCooperado(null)
    }
  }, [selectedCooperadoId])

  const handleSelectCooperado = (id: string | null) => {
    setSelectedCooperadoId(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DashboardHeader />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <CooperadoSearch cooperados={COOPERADOS_DATA} onSelectCooperado={handleSelectCooperado} isLoading={isLoading} />

        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-12 w-12 animate-spin text-primary-cooperativo" />
            <p className="ml-4 text-lg text-gray-600">Carregando dados do cooperado...</p>
          </div>
        )}

        {!isLoading && selectedCooperado && (
          <>
            <CooperadoProfile cooperado={selectedCooperado} />
            <div className="mt-6 grid lg:grid-cols-3 gap-6 items-start">
              {/* Coluna Esquerda: Produtos Atuais */}
              <div className="lg:col-span-1 space-y-6">
                <ProdutosAtuaisTable produtos={selectedCooperado.produtosAtuais} />
              </div>

              {/* Coluna Central: Produtos Disponíveis */}
              <div className="lg:col-span-1 space-y-6">
                <ProdutosDisponiveisGrid produtos={PRODUTOS_DISPONIVEIS_DATA} />
              </div>

              {/* Coluna Direita: Recomendações */}
              <div className="lg:col-span-1 space-y-6">
                <RecomendacoesInteligentes recomendacoes={selectedCooperado.recomendacoes} />
              </div>
            </div>
          </>
        )}

        {!isLoading && !selectedCooperado && !selectedCooperadoId && (
          <div className="text-center py-10 mt-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700">Bem-vindo ao CoopMax Dashboard!</h2>
            <p className="text-gray-500 mt-2">
              Por favor, selecione um cooperado na lista acima para visualizar as informações e recomendações.
            </p>
          </div>
        )}
      </main>
      <MetricasFooter metricas={METRICAS_GERAIS_DATA} />
    </div>
  )
}
