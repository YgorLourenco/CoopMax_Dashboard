import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="bg-primary-cooperativo text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">CoopMax Dashboard</h1>
          <p className="text-sm opacity-90">Sistema de Recomendação Inteligente para Cooperativas</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verde-cooperativo opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-verde-cooperativo"></span>
            </span>
            <span>Online</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-blue-700">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
