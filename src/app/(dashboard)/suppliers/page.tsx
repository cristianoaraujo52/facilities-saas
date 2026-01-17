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
import { Plus, Search, Star, Phone, Mail } from "lucide-react"
import Link from "next/link"

// Mock Data
const suppliers = [
    {
        id: "SUP-001",
        name: "CleanMaster Serviços Gerais",
        category: "Limpeza",
        contactName: "Roberto Alves",
        phone: "(11) 99999-1234",
        email: "contato@cleanmaster.com",
        rating: 4.8,
        status: "APPROVED",
    },
    {
        id: "SUP-002",
        name: "TechCool Climatização",
        category: "HVAC",
        contactName: "Ana Silva",
        phone: "(11) 98888-5678",
        email: "comercial@techcool.com.br",
        rating: 3.5,
        status: "WARNING",
    },
    {
        id: "SUP-003",
        name: "Elevadores S.A.",
        category: "Manutenção Vertical",
        contactName: "Carlos Oliveira",
        phone: "(11) 3333-0000",
        email: "suporte@elevadores.sa",
        rating: 4.2,
        status: "APPROVED",
    },
    {
        id: "SUP-004",
        name: "Segurança Total",
        category: "Segurança",
        contactName: "Marcos Dias",
        phone: "(11) 97777-1111",
        email: "gerencia@segurancatotal.com",
        rating: 5.0,
        status: "APPROVED",
    },
]

export default function SuppliersPage() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold md:text-2xl">Gestão de Fornecedores</h1>
                    <p className="text-muted-foreground text-sm">Base de prestadores qualificados e avaliações.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/suppliers/new">
                        <Plus className="mr-2 h-4 w-4" /> Novo Fornecedor
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <CardTitle>Fornecedores Cadastrados</CardTitle>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar fornecedor..."
                                className="w-64 pl-8 h-9"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Empresa</TableHead>
                                <TableHead>Categoria</TableHead>
                                <TableHead>Contato Principal</TableHead>
                                <TableHead>Avaliação</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {suppliers.map((sup) => (
                                <TableRow key={sup.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell className="font-medium">{sup.name}</TableCell>
                                    <TableCell>{sup.category}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="text-sm">{sup.contactName}</span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Phone className="h-3 w-3" /> {sup.phone}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1 font-medium">
                                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                            <span>{sup.rating.toFixed(1)}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={sup.status === 'APPROVED' ? "default" : sup.status === 'WARNING' ? "destructive" : "secondary"}>
                                            {sup.status === 'APPROVED' ? 'Homologado' : sup.status === 'WARNING' ? 'Atenção' : 'Pendente'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="sm">Ver Detalhes</Button>
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
