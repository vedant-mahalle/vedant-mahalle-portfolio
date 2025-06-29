"use client"
import {ThemeToggle} from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function AdminNavbar() {
  const router = useRouter()
  const handleLogout = () => {
    // Remove the token cookie by expiring it and redirect
    document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    router.push("/admin-login")
  }
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 border-b bg-background">
      <span className="text-xl font-bold">Admin Dashboard</span>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AdminNavbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
} 