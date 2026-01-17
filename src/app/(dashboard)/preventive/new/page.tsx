"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowLeft, Save, PlusCircle, Trash2 } from "lucide-react"

export default function NewMaintenancePlanPage() {
    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/preventive">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-lg font-semibold md:text-2xl">Novo Plano Preventivo</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <Card>
                    <CardHeader>
                        <CardTitle>Dados do Plano</CardTitle>
                        <CardDescription>
                            Defina a recorrência e o ativo alvo.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nome do Plano</Label>
                            <Input id="name" placeholder="Ex: PMOC Mensal - Torre Norte" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="asset">Ativo / Equipamento</Label>
                                <Select>
                                    <SelectTrigger id="asset">
                                        <SelectValue placeholder="Selecione..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="hvac-01">Chiller Central 01</SelectItem>
                                        <SelectItem value="elev-01">Elevador Social 01</SelectItem>
                                        <SelectItem value="dg-01">QGBT Principal</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="frequency">Frequência</Label>
                                <Select>
                                    <SelectTrigger id="frequency">
                                        <SelectValue placeholder="Selecione..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="weekly">Semanal</SelectItem>
                                        <SelectItem value="monthly">Mensal</SelectItem>
                                        <SelectItem value="quarterly">Trimestral</SelectItem>
                                        <SelectItem value="yearly">Anual</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="supplier">Fornecedor Responsável (Opcional)</Label>
                            <Select>
                                <SelectTrigger id="supplier">
                                    <SelectValue placeholder="Interno ou Externo..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="internal">Equipe Interna</SelectItem>
                                    <SelectItem value="ext-01">TechCool Ltda</SelectItem>
                                    <SelectItem value="ext-02">Elevadores S.A.</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Checklist Técnico</CardTitle>
                        <CardDescription>Itens a verificar em cada visita.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Input placeholder="Novo item..." className="h-9" />
                            <Button size="icon" className="h-9 w-9 shrink-0">
                                <PlusCircle className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded text-sm">
                                <span className="flex-1">Verificar pressão do gás</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-red-500">
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded text-sm">
                                <span className="flex-1">Limpar filtros de ar</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-red-500">
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 bg-muted/50 p-2 rounded text-sm">
                                <span className="flex-1">Medir amperagem motor</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-red-500">
                                    <Trash2 className="h-3 w-3" />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">
                            <Save className="mr-2 h-4 w-4" /> Salvar Plano
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
