"use client"
import { Navbar } from "@/components/navbar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const portfolioItems = [
  {
    title: "Kariok Club",
    description:
      "A dynamic dashboard application built with Next.js that empowers administrators to control and customize the frontend experience in real time. Features include modular analytics, user management, and seamless integration for live updates.",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    githubUrl: "https://github.com/vedant-mahalle/swaravishkar",
    liveUrl: "https://www.swaravishkarmusicals.in/",
    category: "Web Development",
    type: "Sponsored",
  },
  {
    title: "Vithai Enterprises(Sponser)",
    description: "A website for a local business that sells a variety of engine products.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/vedant-mahalle/Vithai-Enterprises",
    liveUrl: "https://vithai-enterprises.vercel.app/",
    category: "Web Development",
    type: "Sponsored",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer service chatbot using natural language processing and machine learning.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
    liveUrl: "https://chat-gpt-clone-eight-eta.vercel.app/",
    githubUrl: "https://github.com/vedant-mahalle/ChatGPT-Clone",
    category: "Machine Learning",
    type: "Hobby",
  },
  // {
  //   title: "Movie Stremer",
  //   description: "A responsive movie streaming platform built with Next.js and integrated with TMDB API for movie data.",
  //   image: "https://placehold.co/600x400/2563eb/ffffff?text=Movie+Stremer",
  //   tags: ["Next.js", "React", "Tailwind CSS", "TMDB API", "Video.js"],
  //   githubUrl: "https://github.com/vedant-mahalle/movie-stremer",
  //   liveUrl: "https://movie-stremer.vercel.app/",
  //   category: "Web Development",
  // },
  {
    title: "Food Recommendation System",
    description: "An intelligent system that recommends personalized meal plans based on BMI calculations and nutritional requirements. Built with Flask and machine learning algorithms.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Food+Recommendation",
    tags: ["Python", "Flask", "Machine Learning", "CSV Data Processing", "BMI Analysis"],
    githubUrl: "https://github.com/vedant-mahalle/foodrecomendation",
    liveUrl: "https://github.com/vedant-mahalle/foodrecomendation",
    category: "Machine Learning",
    type: "Hobby",
  },
  {
    title: "Web Chess-Platform",
    description: "Interactive chess platform with real-time gameplay, move validation, and multiplayer support. Features include game state management, piece movement animations, and checkmate detection.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Chess",
    tags: ["React", "JavaScript", "Chess.js", "Socket.io", "CSS3"],
    githubUrl: "https://github.com/vedant-mahalle/web-chess",
    liveUrl: "https://github.com/vedant-mahalle/web-chess",
    category: "DSA & Algorithms",
    type: "Hobby",
  },
  // {
  //   title: "Code Editor",
  //   description: "Browser-based code editor with syntax highlighting, auto-completion, and live preview.",
  //   image: "/placeholder.svg?height=300&width=400",
  //   tags: ["React", "Monaco Editor", "WebSockets", "Docker"],
  //   liveUrl: "0.0.0.0",
  //   githubUrl: "#",
  //   category: "Web Development",
  // },
]

const categories = ["All", "Web Development", "Machine Learning", "Gen AI", "DSA"]
const projectTypes = ["All", "Sponsored Projects", "Hobby Projects"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  const filteredItems = portfolioItems.filter((item) => {
    // Filter by type
    const typeMatch =
      selectedType === "All"
        ? true
        : selectedType === "Sponsored Projects"
        ? item.type === "Sponsored"
        : item.type === "Hobby"
    // Filter by category
    const categoryMatch =
      selectedCategory === "All"
        ? true
        : selectedCategory === "DSA"
        ? item.category === "DSA" || item.category === "DSA & Algorithms"
        : item.category === selectedCategory
    return typeMatch && categoryMatch
  })

  return (
    <div className="min-h-screen pt-20 pb-16">
      <Navbar/>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in web development, machine learning, and algorithmic
            problem solving
          </p>
        </div>

        {/* Project Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 animate-slide-in-bottom animation-delay-150">
          {projectTypes.map((type) => (
            <Button
              key={type}
              variant={type === selectedType ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-bottom animation-delay-200">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in animation-delay-400">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 card-hover hover-lift h-full flex flex-col"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="flex gap-2 justify-center mt-4 mb-4">
                <Button size="sm" asChild>
                  <Link href={item.liveUrl} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href={item.githubUrl} target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

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
