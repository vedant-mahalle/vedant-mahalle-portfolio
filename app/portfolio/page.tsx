import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    title: "Vithai Enterprises(Sponser)",
    description: "A website for a local business that sells a variety of engine products.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com/vedant-mahalle/Vithai-Enterprises",
    liveUrl: "https://vithai-enterprises.vercel.app/",
    category: "Web Development",
  },
  {
    title: "AI-Powered Chatbot",
    description: "Intelligent customer service chatbot using natural language processing and machine learning.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
    liveUrl: "https://chat-gpt-clone-six-pi.vercel.app/",
    githubUrl: "https://github.com/vedant-mahalle/ChatGPT-Clone",
    category: "Machine Learning",
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
  },
  {
    title: "Web Chess-Platform",
    description: "Interactive chess platform with real-time gameplay, move validation, and multiplayer support. Features include game state management, piece movement animations, and checkmate detection.",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Chess",
    tags: ["React", "JavaScript", "Chess.js", "Socket.io", "CSS3"],
    githubUrl: "https://github.com/vedant-mahalle/web-chess",
    liveUrl: "https://github.com/vedant-mahalle/web-chess",
    category: "DSA & Algorithms",
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

const categories = ["All", "Web Development", "Machine Learning", "DSA"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my expertise in web development, machine learning, and algorithmic
            problem solving
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-bottom animation-delay-200">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in animation-delay-400">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 card-hover hover-lift h-full flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video bg-gray-100 flex-1">
                {item.liveUrl ? (
                  <>
                    <iframe
                      src={item.liveUrl}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                      title={`Demo of ${item.title}`}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">No preview available</span>
                  </div>
                )}
              </div>
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
      </div>
    </div>
  )
}
