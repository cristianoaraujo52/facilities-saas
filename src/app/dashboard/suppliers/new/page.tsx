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
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowLeft, Save, Mail } from "lucide-react"

export default function NewSupplierPage() {
    return (
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/suppliers">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-lg font-semibold md:text-2xl">Novo Fornecedor</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Cadastro de Empresa</CardTitle>
                    <CardDescription>
                        Adicione um novo prestador de serviços à base homologada.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Razão Social / Nome Fantasia</Label>
                        <Input id="name" placeholder="Ex: TechCool Climatização Ltda" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cnpj">CNPJ</Label>
                            <Input id="cnpj" placeholder="00.000.000/0001-00" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="category">Categoria de Serviço</Label>
                            <Select>
                                <SelectTrigger id="category">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="hvac">Ar Condicionado (HVAC)</SelectItem>
                                    <SelectItem value="civil">Engenharia Civil</SelectItem>
                                    <SelectItem value="cleaning">Limpeza e Conservação</SelectItem>
                                    <SelectItem value="security">Segurança Patrimonial</SelectItem>
                                    <SelectItem value="vertical">Transporte Vertical (Elevadores)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label>Informações de Contato</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input placeholder="Nome do Responsável" />
                            <Input placeholder="Telefone / WhatsApp" />
                        </div>
                        <Input placeholder="E-mail Comercial" type="email" />
                    </div>

                    <div className="flex items-center space-x-2 border p-4 rounded-lg bg-muted/20">
                        <Checkbox id="invite" defaultChecked />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="invite" className="flex items-center gap-2">
                                <Mail className="h-3 w-3" /> Enviar convite de acesso ao portal
                            </Label>
                            <p className="text-xs text-muted-foreground">
                                O fornecedor receberá um link para enviar documentos e visualizar ordens de serviço.
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                    <Button variant="ghost" asChild>
                        <Link href="/dashboard/suppliers">Cancelar</Link>
                    </Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Cadastrar Fornecedor
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
