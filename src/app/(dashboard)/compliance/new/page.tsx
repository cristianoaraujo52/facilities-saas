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
import Link from "next/link"
import { ArrowLeft, Save, Upload } from "lucide-react"

export default function NewComplianceDocPage() {
    return (
        <div className="max-w-xl mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon" asChild>
                    <Link href="/dashboard/compliance">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                </Button>
                <h1 className="text-lg font-semibold md:text-2xl">Novo Documento</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Upload de Documento</CardTitle>
                    <CardDescription>
                        Armazene certificados e laudos regulatórios com data de validade.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nome do Documento</Label>
                        <Input id="name" placeholder="Ex: AVCB Torre Norte 2024" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="category">Categoria</Label>
                        <Select>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="fire">Bombeiros (AVCB)</SelectItem>
                                <SelectItem value="anvisa">Anvisa / PMOC</SelectItem>
                                <SelectItem value="electric">Elétrica (SPDA/Laudos)</SelectItem>
                                <SelectItem value="legal">Jurídico / Seguros</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="validity">Válido Até</Label>
                        <Input id="validity" type="date" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="file">Arquivo (PDF/Img)</Label>
                        <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                            <Upload className="h-8 w-8 text-muted-foreground" />
                            <span className="text-sm font-medium">Clique para selecionar ou arraste aqui</span>
                            <span className="text-xs text-muted-foreground">Max 10MB</span>
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                    <Button variant="ghost" asChild>
                        <Link href="/dashboard/compliance">Cancelar</Link>
                    </Button>
                    <Button>
                        <Save className="mr-2 h-4 w-4" /> Salvar Documento
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
