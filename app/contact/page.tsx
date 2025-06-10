"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter, Code } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with email services like EmailJS, Resend, etc.
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select onValueChange={(value) => handleChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Prefer to reach out directly? Here are my contact details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Email</div>
                    <Link
                      href="mailto:vedantmahalle39@gmail.com"
                      className="text-sm text-muted-foreground hover:underline"
                    >
                      vedantmahalle39@gmail.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <Link href="tel:+919730665390" className="text-sm text-muted-foreground hover:underline">
                      +91 97306 65390
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Pune, Maharashtra</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>Connect with me on social media and professional platforms.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="https://github.com/vedant-mahalle/" target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="https://www.linkedin.com/in/mahalle-vedant/" target="_blank">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="https://twitter.com/VedantMaha31875" target="_blank">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="justify-start">
                    <Link href="https://leetcode.com/u/vedant_mahalle/" target="_blank">
                      <Code className="w-4 h-4 mr-2" />
                      LeetCode
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" asChild className="justify-start">
                    <Link href="/portfolio">View Portfolio</Link>
                  </Button>
                  <Button variant="ghost" asChild className="justify-start">
                    <Link href="/projects">Browse Projects</Link>
                  </Button>
                  <Button variant="ghost" asChild className="justify-start">
                    <Link href="/about">About Me</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's your typical project timeline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications
                  can take 2-6 months. I'll provide a detailed timeline after our initial discussion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I work with clients worldwide and am comfortable with different time zones. I use modern communication
                  tools to ensure smooth collaboration regardless of location.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What technologies do you specialize in?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I specialize in React, Next.js, Node.js, Python, and various ML frameworks. I'm always learning new
                  technologies to provide the best solutions for each project.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide ongoing support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! I offer maintenance and support packages to keep your applications running smoothly. This
                  includes updates, bug fixes, and feature enhancements as needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
