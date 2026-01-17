import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function AssetsPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Ativos & Predial</h1>
                    <p className="text-sm text-muted-foreground">
                        Gerencie os ativos e equipamentos do prédio.
                    </p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Novo Ativo
                </Button>
            </div>

            <Card className="flex flex-col items-center justify-center py-12 text-center">
                <CardHeader>
                    <CardTitle>Nenhum ativo cadastrado</CardTitle>
                    <CardDescription>
                        Comece adicionando os equipamentos e áreas do prédio.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="outline">Adicionar Manualmente</Button>
                </CardContent>
            </Card>
        </div>
    )
}
