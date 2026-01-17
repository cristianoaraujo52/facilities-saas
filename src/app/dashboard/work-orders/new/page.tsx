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
import { ArrowLeft, Save } from "lucide-react"

export default function NewWorkOrderPage() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/work-orders">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-lg font-semibold md:text-2xl">Nova Ordem de Serviço</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Detalhes do Chamado</CardTitle>
                    <CardDescription>
                        Preencha as informações abaixo para solicitar uma manutenção.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Título do Problema</Label>
                        <Input id="title" placeholder="Ex: Ar condicionado pingando" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="building">Prédio / Torre</Label>
                            <Select>
                                <SelectTrigger id="building">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="north">Torre Norte</SelectItem>
                                    <SelectItem value="south">Torre Sul</SelectItem>
                                    <SelectItem value="mall">Shopping Center</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="priority">Prioridade</Label>
                            <Select>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Baixa</SelectItem>
                                    <SelectItem value="normal">Normal</SelectItem>
                                    <SelectItem value="high">Alta</SelectItem>
                                    <SelectItem value="critical">Crítica</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Descrição Detalhada</Label>
                        <Textarea
                            id="description"
                            placeholder="Descreva o problema com o máximo de detalhes possível..."
                            className="min-h-[120px]"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="photo">Evidência (Foto)</Label>
                        <Input id="photo" type="file" />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                    <Button variant="ghost" asChild>
                        <Link href="/dashboard/work-orders">Cancelar</Link>
                    </Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Salvar Chamado
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
