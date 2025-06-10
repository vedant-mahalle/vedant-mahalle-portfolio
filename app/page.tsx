import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Brain, Database, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-16 animate-fade-in">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Available for new opportunities
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up">
                  Hi, I'm Vedant Mahalle
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground animate-fade-in-up animation-delay-200">
                  Computer Science Student & Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up animation-delay-400">
                  I'm a passionate CS student at VIT Pune who loves crafting digital experiences, solving complex
                  algorithms, and building intelligent systems that make a difference.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Web Development
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Data Structures & Algorithms
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Machine Learning
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>

              <div className="flex gap-4 animate-fade-in-up animation-delay-600">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/vedant-mahalle/" target="_blank">
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/mahalle-vedant/" target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:vedantmahalle39@gmail.com">
                    <Mail className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Image
                  src="https://avatars.githubusercontent.com/u/151418599?v=4?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="relative z-10 rounded-full border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-muted/30 animate-slide-in-bottom">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating digital solutions that combine technical excellence with user-centered design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Building responsive, performant web applications using modern frameworks like React, Next.js, and
                Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Node.js</Badge>
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DSA & Problem Solving</h3>
              <p className="text-muted-foreground mb-6">
                Passionate about algorithmic problem solving with 500+ problems solved across various platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">LeetCode</Badge>
                <Badge variant="outline">Algorithms</Badge>
                <Badge variant="outline">System Design</Badge>
                <Badge variant="outline">Optimization</Badge>
              </div>
            </div>

            <div className="group p-8 rounded-2xl bg-background border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-muted-foreground mb-6">
                Developing intelligent systems and predictive models using Python, TensorFlow, and scikit-learn.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Pandas</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
