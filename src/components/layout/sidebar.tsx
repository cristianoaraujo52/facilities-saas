"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Building2, 
  LayoutDashboard, 
  Wrench, 
  CalendarClock, 
  Users, 
  FileCheck, 
  BarChart3, 
  Settings 
} from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Ordens de Serviço", href: "/dashboard/work-orders", icon: Wrench },
  { name: "Preventivas", href: "/dashboard/preventive", icon: CalendarClock },
  { name: "Ativos & Predial", href: "/dashboard/assets", icon: Building2 },
  { name: "Fornecedores", href: "/dashboard/suppliers", icon: Users },
  { name: "Compliance", href: "/dashboard/compliance", icon: FileCheck },
  { name: "Relatórios", href: "/dashboard/reports", icon: BarChart3 },
  { name: "Configurações", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block w-64 h-full fixed left-0 top-0">
      <div className="flex h-14 items-center border-b px-6 lg:h-[60px]">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Building2 className="h-6 w-6 text-primary" />
          <span>Facility<span className="text-primary">OS</span></span>
        </Link>
      </div>
      <ScrollArea className="h-[calc(100vh-60px)]">
        <div className="flex flex-col gap-2 p-4">
          <nav className="grid items-start gap-2 text-sm font-medium">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn("justify-start gap-3", pathname === item.href && "text-primary bg-primary/10")}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
           <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
               <h3 className="font-semibold text-sm">Status do Prédio</h3>
               <div className="mt-2 text-xs text-muted-foreground flex justify-between">
                   <span>Segurança</span>
                   <span className="text-green-500 font-bold">100%</span>
               </div>
               <div className="mt-1 h-2 w-full bg-secondary rounded-full overflow-hidden">
                   <div className="h-full bg-green-500 w-full" />
               </div>
           </div>
        </div>
      </ScrollArea>
    </div>
  )
}
