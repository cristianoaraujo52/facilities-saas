import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BarChart3, TrendingUp } from "lucide-react"

export default function ReportsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-lg font-semibold md:text-2xl">Relatórios</h1>
                <p className="text-sm text-muted-foreground">
                    Visualize métricas e indicadores de desempenho.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Eficiência Operacional
                        </CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">94%</div>
                        <p className="text-xs text-muted-foreground">
                            +2% em relação ao mês anterior
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Custo de Manutenção
                        </CardTitle>
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">R$ 12.450</div>
                        <p className="text-xs text-muted-foreground">
                            Dentro do orçamento previsto
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="flex flex-col items-center justify-center py-20 bg-muted/10 border-dashed">
                <div className="text-center">
                    <BarChart3 className="mx-auto h-10 w-10 text-muted-foreground opacity-50 mb-4" />
                    <h3 className="text-lg font-medium">Gráficos Detalhados</h3>
                    <p className="text-sm text-muted-foreground max-w-sm mt-2">
                        Em breve você poderá gerar relatórios personalizados e exportar dados em PDF/Excel.
                    </p>
                </div>
            </Card>
        </div>
    )
}
