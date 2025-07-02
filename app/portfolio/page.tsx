"use client"
import ContributionCalendar from "@/components/github-calendar"
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
      "A dynamic dashboard application built with Next.js for Swaravishkar Kariok Club in Akola, enabling administrators to control and customize the frontend experience in real time. Features include modular analytics, user management, and seamless integration for live updates, tailored specifically for the company's needs. (Sponsored Project)",
    image: "/placeholder.svg?height=250&width=400",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    githubUrl: "https://github.com/vedant-mahalle/swaravishkar",
    liveUrl: "https://www.swaravishkarmusicals.in/",
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
  {
    title: "StreamFlix",
    description: "A technical exploration project demonstrating how torrent protocols work, built with Next.js. This platform simulates peer-to-peer file sharing for educational purposes, focusing on understanding torrent technology, distributed networking, and data transfer mechanisms.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Movie+Stremer",
    tags: ["Next.js", "React", "Tailwind CSS", "OMDB API", "Torrent Protocol"],
    githubUrl: "https://github.com/vedant-mahalle/movie-stremer",
    liveUrl: "https://github.com/vedant-mahalle/movie-stremer",
    category: "Web Development",
    type: "Hobby",
  },
  {
    title: "Food Recommendation System",
    description: "An intelligent system that recommends personalized meal plans based on BMI calculations and nutritional requirements. Built with Flask and machine learning algorithms.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Food+Recommendation",
    tags: ["Python", "Flask", "Machine Learning", "CSV Data Processing", "BMI Analysis"],
    githubUrl: "https://github.com/vedant-mahalle/foodrecomendation",
    liveUrl: "https://nutriplan-623r.onrender.com/",
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
  {
    title: "Talknitive",
    description: "Online meeting Platform With AI Feature  ",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "MongoDB", "WebSockets", "WebRTC",],
    liveUrl: "https://talknitive.vercel.app/",
    githubUrl: "https://github.com/vedant-mahalle/Talknitive",
    category: "Web Development",
    type: "Hobby"
  },
]

const categories = ["All", "Web Development", "Machine Learning", "Gen AI", "DSA"]
const projectTypes = ["All", "Sponsored Projects", "Hobby Projects"]

const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

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
      <Navbar />
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
        <div className="sm:hidden mb-6 w-full flex flex-col items-center">
          {/* Pyramid: 1 on top, 2 below */}
          <div className="flex justify-center mb-2 w-full">
            <Button
              key={projectTypes[0]}
              variant={projectTypes[0] === selectedType ? "default" : "outline"}
              className="rounded-full whitespace-nowrap w-2/3 px-2 py-1 text-xs font-medium border-2 border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-150 shadow-sm"
              onClick={() => setSelectedType(projectTypes[0])}
            >
              {projectTypes[0]}
            </Button>
          </div>
          <div className="flex justify-center gap-2 w-full">
            {projectTypes.slice(1).map((type) => (
              <Button
                key={type}
                variant={type === selectedType ? "default" : "outline"}
                className="rounded-full whitespace-nowrap w-1/2 px-2 py-1 text-xs font-medium border-2 border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-150 shadow-sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex flex-col sm:flex-row flex-wrap sm:justify-center gap-2 sm:gap-4 mb-6 overflow-x-auto w-full">
          {projectTypes.map((type) => (
            <Button
              key={type}
              variant={type === selectedType ? "default" : "outline"}
              className="rounded-full whitespace-nowrap"
              onClick={() => setSelectedType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Category Filter */}
        <div className="sm:hidden mb-12 w-full flex flex-col items-center">
          {/* Diamond: 2 on top, 3 below */}
          <div className="flex justify-center gap-2 mb-2 w-full">
            {categories.slice(0, 2).map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="rounded-full whitespace-nowrap w-1/2 px-2 py-1 text-xs font-medium border-2 border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-150 shadow-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex justify-center gap-2 w-full">
            {categories.slice(2).map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="rounded-full whitespace-nowrap w-1/3 px-2 py-1 text-xs font-medium border-2 border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-150 shadow-sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex flex-col sm:flex-row flex-wrap sm:justify-center gap-2 sm:gap-4 mb-12 overflow-x-auto w-full">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className="rounded-full whitespace-nowrap"
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
                  {item.title === "Talknitive" && (
                    <Badge className="ml-2 bg-yellow-400 text-black animate-pulse" variant="outline">Under Work</Badge>
                  )}
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
              <div className="text-3xl font-bold text-green-500 mb-2">300+</div>
              <div className="text-sm text-muted-foreground">GitHub Commits</div>
            </div>
            <div className="animate-bounce-in animation-delay-600">
              <div className="text-3xl font-bold text-purple-500 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Problems Solved</div>
            </div>
            <div className="animate-bounce-in animation-delay-800">
              <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg overflow-x-auto">
              <ContributionCalendar />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
