"use client"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Code, Terminal, Cpu, Database, Network, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { useTheme } from "next-themes"

export default function AdminPage() {
  const [contacts, setContacts] = useState<any[]>([])
  const [filteredContacts, setFilteredContacts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const { theme } = useTheme()
  // Dynamic colors for light/dark theme
  const COLORS = theme === "dark"
    ? ["#6366f1", "#10b981", "#f59e42", "#a78bfa", "#f43f5e", "#fbbf24"]
    : ["#4338ca", "#059669", "#ea580c", "#7c3aed", "#be123c", "#ca8a04"]

  // Get unique project types for filter tabs
  const projectTypes = ["all", ...Array.from(new Set(contacts.map(c => c.projectType || "General")))]

  useEffect(() => {
    async function fetchContacts() {
      setLoading(true)
      setError("")
      try {
        const res = await fetch("/api/admin-contacts")
        const data = await res.json()
        if (data.success) {
          setContacts(data.contacts)
          setFilteredContacts(data.contacts)
        } else {
          setError(data.error || "Failed to fetch contacts")
        }
      } catch (err) {
        setError("Failed to fetch contacts")
      } finally {
        setLoading(false)
      }
    }
    fetchContacts()
  }, [])

  useEffect(() => {
    let results = contacts
    if (activeTab !== "all") {
      results = results.filter(contact => (contact.projectType || "General") === activeTab)
    }
    setFilteredContacts(results)
  }, [searchTerm, activeTab, contacts])

  const getProjectTypeCount = (type: string) => {
    return contacts.filter(contact => contact.projectType === type).length
  }

  // Prepare data for the pie chart
  const projectTypeCounts = contacts.reduce((acc, contact) => {
    const type = contact.projectType || "General"
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  const chartData = Object.entries(projectTypeCounts).map(([type, count]) => ({ type, count }))

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Contact Submissions
            </h1>
          </div>
          <Badge variant="outline" className="border-primary text-primary">
            <Database className="w-4 h-4 mr-2" />
            {contacts.length} records
          </Badge>
        </div>

        {/* Chart Section */}
        <div className="w-full h-[420px] bg-muted/40 rounded-2xl shadow-2xl mb-12 p-8 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={140}
                fill="#6366f1"
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip wrapperClassName="!bg-background !border !rounded-lg !shadow-lg" />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="bg-gray-900 border border-gray-800">
              {projectTypes.map((type) => (
                <TabsTrigger key={type} value={type} className="capitalize">
                  {type === "all" ? "All" : type}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </motion.div>

      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center h-64"
        >
          <div className="text-center">
            <Loader2 className="animate-spin w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground font-mono">Loading contact data...</p>
            <div className="mt-2 h-1 w-48 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      ) : error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 bg-red-900/20 border border-red-900 rounded-lg"
        >
          <div className="text-red-400 font-mono">
            <Terminal className="w-8 h-8 mx-auto mb-3" />
            <p>ERROR: {error}</p>
            <p className="text-sm mt-2 text-red-300">Failed to fetch contact submissions</p>
          </div>
        </motion.div>
      ) : filteredContacts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-12 bg-gray-900/50 border border-gray-800 rounded-lg"
        >
          <Mail className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-mono text-muted-foreground">
            No contact submissions found
          </h3>
          <p className="text-sm mt-2 text-muted-foreground/70">
            {searchTerm ? "Try a different search term" : "Check back later for new submissions"}
          </p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredContacts.map((contact, idx) => (
              <motion.div
                key={contact._id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  delay: idx * 0.04
                }}
                whileHover={{
                  y: -8,
                  scale: 1.025,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                  filter: "brightness(1.03)"
                }}
                className="relative group"
              >
                <Card className="relative z-10 bg-background border border-gray-800 shadow-lg overflow-hidden rounded-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg font-mono tracking-tight">
                        {contact.name}
                      </CardTitle>
                      <Badge variant="outline" className="border px-3 py-1 rounded-full font-bold text-xs">
                        {contact.projectType || "General"}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground font-mono">
                      {contact.email}
                    </CardDescription>
                    <div className="mt-1 text-sm font-semibold text-primary">
                      {contact.subject}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 text-sm text-foreground bg-muted/40 p-4 rounded font-mono shadow-inner">
                      {contact.message}
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>
                        {contact.createdAt ? new Date(contact.createdAt).toLocaleString() : ""}
                      </span>
                      <a
                        href={`mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject || "Contact Form Submission")}`}
                        className="ml-auto"
                      >
                        <button
                          className="bg-primary text-primary-foreground px-3 py-1 rounded font-semibold text-xs hover:bg-primary/90 transition"
                          title="Reply via Email"
                        >
                          Reply
                        </button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}