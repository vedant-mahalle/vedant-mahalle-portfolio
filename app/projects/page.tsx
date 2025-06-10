import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, ExternalLink, Github, Star, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = {
  web: [
    {
      title: "SaaS Dashboard Platform",
      description:
        "A comprehensive dashboard platform for SaaS applications with analytics, user management, and billing integration.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      stats: { stars: 124, contributors: 8, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with real-time messaging, file sharing, and video calling capabilities.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["React", "Socket.io", "WebRTC", "Redis"],
      stats: { stars: 89, contributors: 5, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Content Management System",
      description: "Headless CMS with drag-and-drop page builder, multi-language support, and SEO optimization.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Vue.js", "Node.js", "GraphQL", "MongoDB"],
      stats: { stars: 67, contributors: 12, status: "Completed" },
      date: "2023",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  ml: [
    {
      title: "Computer Vision Object Detection",
      description: "Real-time object detection system using YOLO algorithm for security and surveillance applications.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Python", "PyTorch", "OpenCV", "YOLO"],
      stats: { stars: 156, contributors: 6, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Natural Language Processing API",
      description:
        "RESTful API for text analysis including sentiment analysis, entity recognition, and text summarization.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Python", "spaCy", "FastAPI", "Docker"],
      stats: { stars: 203, contributors: 9, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering recommendation system for e-commerce platforms with A/B testing framework.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["Python", "Scikit-learn", "Apache Spark", "MLflow"],
      stats: { stars: 78, contributors: 4, status: "Completed" },
      date: "2023",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  dsa: [
    {
      title: "Algorithm Complexity Analyzer",
      description:
        "Tool for analyzing time and space complexity of algorithms with visual representations and benchmarking.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["JavaScript", "D3.js", "Web Workers", "Chart.js"],
      stats: { stars: 92, contributors: 7, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Data Structure Visualizer",
      description: "Interactive visualizations for common data structures including trees, graphs, and hash tables.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["React", "TypeScript", "Canvas API", "Algorithms"],
      stats: { stars: 145, contributors: 11, status: "Active" },
      date: "2024",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Competitive Programming Solutions",
      description: "Collection of optimized solutions for competitive programming problems with detailed explanations.",
      image: "/placeholder.svg?height=250&width=400",
      tags: ["C++", "Python", "Algorithms", "Mathematics"],
      stats: { stars: 234, contributors: 15, status: "Active" },
      date: "2023-2024",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed showcase of my technical projects across web development, machine learning, and algorithmic problem
            solving
          </p>
        </div>

        {/* Project Tabs */}
        <Tabs defaultValue="web" className="w-full animate-slide-in-bottom animation-delay-200">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="ml">Machine Learning</TabsTrigger>
            <TabsTrigger value="dsa">DSA & Algorithms</TabsTrigger>
          </TabsList>

          <TabsContent value="web">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.web.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ml">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.ml.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dsa">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.dsa.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <div className="mt-20 p-8 bg-muted/30 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Statistics</h2>
            <p className="text-muted-foreground">Overview of my development activity</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-bounce-in animation-delay-200">
              <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="animate-bounce-in animation-delay-400">
              <div className="text-3xl font-bold text-green-500 mb-2">200+</div>
              <div className="text-sm text-muted-foreground">GitHub Commits</div>
            </div>
            <div className="animate-bounce-in animation-delay-600">
              <div className="text-3xl font-bold text-purple-500 mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="animate-bounce-in animation-delay-800">
              <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={project.stats.status === "Active" ? "default" : "secondary"}>{project.stats.status}</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {project.date}
          </div>
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                {project.stats.stars}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {project.stats.contributors}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" asChild className="flex-1">
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild className="flex-1">
              <Link href={project.githubUrl} target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
