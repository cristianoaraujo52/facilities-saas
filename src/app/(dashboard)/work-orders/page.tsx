"use client"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock Data
const workOrders = [
    {
        id: "OS-2024-001",
        title: "Vazamento no banheiro do 3º andar",
        status: "OPEN",
        priority: "HIGH",
        building: "Torre Norte",
        assignee: "João Silva",
        createdAt: "2024-01-15",
    },
    {
        id: "OS-2024-002",
        title: "Manutenção preventiva Chiller A",
        status: "IN_PROGRESS",
        priority: "NORMAL",
        building: "Central",
        assignee: "TechCool Ltda",
        createdAt: "2024-01-14",
    },
    {
        id: "OS-2024-003",
        title: "Troca de lâmpadas recepção",
        status: "DONE",
        priority: "LOW",
        building: "Torre Sul",
        assignee: "Maria Souza",
        createdAt: "2024-01-12",
    },
    {
        id: "OS-2024-004",
        title: "Porta de vidro travada",
        status: "CRITICAL",
        priority: "CRITICAL",
        building: "Térreo",
        assignee: "Vidros Express",
        createdAt: "2024-01-16",
    },
]

const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
    OPEN: { label: "Aberto", variant: "default" },
    IN_PROGRESS: { label: "Em Andamento", variant: "secondary" },
    DONE: { label: "Concluído", variant: "outline" },
    CRITICAL: { label: "Crítico", variant: "destructive" },
}

const priorityMap: Record<string, string> = {
    CRITICAL: "text-red-600 font-bold",
    HIGH: "text-orange-500 font-medium",
    NORMAL: "text-blue-500",
    LOW: "text-gray-500",
}

export default function WorkOrdersPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Ordens de Serviço</h1>
                    <p className="text-muted-foreground text-sm">Gerencie todas as manutenções corretivas e preventivas.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/work-orders/new">
                        <Plus className="mr-2 h-4 w-4" /> Nova OS
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Chamados</CardTitle>
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Filtrar..."
                                    className="w-64 pl-8 h-9"
                                />
                            </div>
                            <Button variant="outline" size="sm" className="h-9 gap-1">
                                <Filter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Filtros
                                </span>
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>ID</TableHead>
                                <TableHead>Título</TableHead>
                                <TableHead>Local</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Prioridade</TableHead>
                                <TableHead>Responsável</TableHead>
                                <TableHead className="text-right">Abertura</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {workOrders.map((os) => (
                                <TableRow key={os.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell className="font-medium">{os.id}</TableCell>
                                    <TableCell>{os.title}</TableCell>
                                    <TableCell>{os.building}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusMap[os.status]?.variant as any}>
                                            {statusMap[os.status]?.label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className={priorityMap[os.priority]}>{os.priority}</span>
                                    </TableCell>
                                    <TableCell>{os.assignee}</TableCell>
                                    <TableCell className="text-right">{os.createdAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
