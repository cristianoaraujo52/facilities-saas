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
import { Plus, Search, FileCheck, AlertTriangle, Upload } from "lucide-react"
import Link from "next/link"

// Mock Data
const documents = [
    {
        id: "DOC-001",
        name: "AVCB - Auto de Vistoria do Corpo de Bombeiros",
        category: "Bombeiros",
        validUntil: "2024-06-30",
        status: "VALID",
        building: "Todas as Torres",
    },
    {
        id: "DOC-002",
        name: "PMOC - Plano de Manutenção e Controle",
        category: "Anvisa",
        validUntil: "2024-02-15",
        status: "WARNING",
        building: "Torre Norte",
    },
    {
        id: "DOC-003",
        name: "Laudo SPDA (Pára-raios)",
        category: "Elétrica",
        validUntil: "2023-12-31",
        status: "EXPIRED",
        building: "Complexo",
    },
    {
        id: "DOC-004",
        name: "Seguro de Responsabilidade Civil",
        category: "Legal",
        validUntil: "2024-12-01",
        status: "VALID",
        building: "Shopping",
    },
]

const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" | "warning" }> = {
    VALID: { label: "Vigente", variant: "default" }, // Using default (black/primary) for good
    WARNING: { label: "A Vencer", variant: "secondary" }, // Secondary usually gray/yellowish depending on theme, or we force style
    EXPIRED: { label: "Vencido", variant: "destructive" },
}

export default function CompliancePage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Compliance e Regulatório</h1>
                    <p className="text-muted-foreground text-sm">Monitoramento de documentos obrigatórios e licenças.</p>
                </div>
                <Button>
                    <Upload className="mr-2 h-4 w-4" /> Novo Documento
                </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Documentos Críticos</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-500">1</div>
                        <p className="text-xs text-muted-foreground">Laudo SPDA Vencido</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Biblioteca de Documentos</CardTitle>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar documento..."
                                className="w-64 pl-8 h-9"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Documento</TableHead>
                                <TableHead>Categoria</TableHead>
                                <TableHead>Vencimento</TableHead>
                                <TableHead>Prédio</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Arquivo</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {documents.map((doc) => (
                                <TableRow key={doc.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell className="font-medium">
                                        <div className="flex flex-col">
                                            <span>{doc.name}</span>
                                            <span className="text-xs text-muted-foreground">{doc.id}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{doc.category}</TableCell>
                                    <TableCell className={doc.status === 'EXPIRED' ? 'text-red-500 font-bold' : doc.status === 'WARNING' ? 'text-orange-500 font-medium' : ''}>
                                        {doc.validUntil}
                                    </TableCell>
                                    <TableCell>{doc.building}</TableCell>
                                    <TableCell>
                                        <Badge variant={statusMap[doc.status]?.variant as any} className={doc.status === 'WARNING' ? 'bg-orange-100 text-orange-700 hover:bg-orange-100' : ''}>
                                            {statusMap[doc.status]?.label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">
                                            <FileCheck className="h-4 w-4 text-blue-500" />
                                        </Button>
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
