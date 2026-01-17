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
import { Plus, Search, CalendarClock } from "lucide-react"
import Link from "next/link"

// Mock Data
const plans = [
    {
        id: "PLAN-001",
        name: "PMOC - Ar Condicionado Central",
        frequency: "Mensal",
        nextExecution: "2024-02-01",
        lastExecution: "2024-01-02",
        status: "ACTIVE",
        complianceRate: "100%",
    },
    {
        id: "PLAN-002",
        name: "Manutenção Elevadores (Otis)",
        frequency: "Mensal",
        nextExecution: "2024-02-05",
        lastExecution: "2024-01-05",
        status: "ACTIVE",
        complianceRate: "95%",
    },
    {
        id: "PLAN-003",
        name: "Limpeza Caixa d'Água",
        frequency: "Semestral",
        nextExecution: "2024-06-15",
        lastExecution: "2023-12-15",
        status: "PENDING",
        complianceRate: "80%",
    },
    {
        id: "PLAN-004",
        name: "Inspeção Elétrica QGBT",
        frequency: "Anual",
        nextExecution: "2024-03-10",
        lastExecution: "2023-03-10",
        status: "ACTIVE",
        complianceRate: "100%",
    },
]

export default function PreventivePage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Manutenção Preventiva</h1>
                    <p className="text-muted-foreground text-sm">Gestão de planos recorrentes (PMOC, Elétrica, Civil).</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/preventive/new">
                        <Plus className="mr-2 h-4 w-4" /> Novo Plano
                    </Link>
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Planos Ativos</CardTitle>
                        <CalendarClock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">3 agendados para esta semana</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Planos de Manutenção</CardTitle>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar planos..."
                                className="w-64 pl-8 h-9"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Plano</TableHead>
                                <TableHead>Frequência</TableHead>
                                <TableHead>Última Execução</TableHead>
                                <TableHead>Próxima Execução</TableHead>
                                <TableHead>Compliance</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {plans.map((plan) => (
                                <TableRow key={plan.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell className="font-medium">
                                        <div className="flex flex-col">
                                            <span>{plan.name}</span>
                                            <span className="text-xs text-muted-foreground">{plan.id}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{plan.frequency}</TableCell>
                                    <TableCell>{plan.lastExecution}</TableCell>
                                    <TableCell className="font-medium text-blue-600">{plan.nextExecution}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium">{plan.complianceRate}</span>
                                            <div className="h-1.5 w-16 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500" style={{ width: plan.complianceRate }} />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={plan.status === 'ACTIVE' ? "default" : "secondary"}>
                                            {plan.status === 'ACTIVE' ? 'Ativo' : 'Pendente'}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
