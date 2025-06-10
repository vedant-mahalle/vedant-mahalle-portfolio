"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Award, BookOpen, Code, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import avatard from '@/public/avatar_dark.png'

const skills = [
  { name: "JavaScript/TypeScript", level: 95 },
  { name: "React/Next.js", level: 90 },
  { name: "Python", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Machine Learning", level: 82 },
  { name: "Data Structures & Algorithms", level: 90 },
  { name: "SQL/NoSQL", level: 80 },
  { name: "Cloud Platforms (AWS/Vercel)", level: 75 },
]

const experience = [
  {
    title: "Computer Science Student",
    company: "VIT Pune",
    period: "2022 - Present",
    location: "Pune, Maharashtra",
    description:
      "Pursuing Bachelor's in Computer Science with focus on Data Structures, Algorithms, Web Development, and Machine Learning. Maintaining excellent academic performance while working on practical projects.",
    technologies: ["C++", "Python", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Full Stack Development Intern",
    company: "Tech Startup",
    period: "Summer 2024",
    location: "Remote",
    description:
      "Developed responsive web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing codebase.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "Freelance Web Developer",
    company: "Vihtai-Enterprises",
    period: "2023 - Present",
    location: "Pune, Maharashtra",
    description:
      "Developed a responsive business website for Vithai Enterprise in Loni Kalbhor, Pune, using React.js for the frontend and Node.js for backend functionality. Collaborated with senior developers to implement key features, optimize performance, and ensure seamless user experience across devices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
]

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "VIT Pune",
    period: "2023 - 2027",
    description:
      "Currently pursuing B.Tech in Computer Science with specialization in Software Engineering. Relevant coursework includes Data Structures, Algorithms, Database Management, Web Technologies, and Machine Learning.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Maharashtra State Board",
    period: "2021 - 2023",
    description:
      "Completed HSC with distinction in Science stream. Strong foundation in Mathematics and Physics which supports my programming and problem-solving skills.",
  },
]

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional ML Engineer",
  "Meta React Developer Certificate",
  "MongoDB Certified Developer",
]
const DownloadCV = () => {
  try {
    // Simulate a download link click (better than window.open for some cases)
    const link = document.createElement('a');
    link.href = './public/vedant-mahalle-CV.pdf';
    link.download = 'Vedant_Mahalle_Resume.pdf'; // Forces download with a clean filename
    link.target = '_blank'; // Open in new tab if download fails
    link.rel = 'noopener noreferrer'; // Security best practice
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Toast notification (if your app has a notification system)
    // toast.success('Resume downloaded successfully!');
  } catch (error) {
    console.error('Failed to download resume:', error);
    // Fallback: Open in new tab if download fails
    window.open('./vedant-mahalle-CV.pdf', '_blank');
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">About Me</h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                Computer Science student at VIT Pune passionate about technology and innovation
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in-up animation-delay-400">
              <p>
                I'm a dedicated Computer Science student at VIT Pune with a passion for full-stack development and
                machine learning. My journey in tech started with curiosity about how software works, which led me to
                dive deep into programming, algorithms, and AI technologies.
              </p>
              <p>
                When I'm not studying or working on projects, you'll find me solving algorithmic challenges on LeetCode,
                contributing to open-source projects, or exploring the latest developments in web technologies and
                machine learning. I believe in learning by doing and constantly challenging myself with new
                technologies.
              </p>
              <p>
                I'm currently based in Pune and actively seeking internship opportunities and exciting projects that
                will help me grow as a developer while making meaningful contributions to innovative solutions.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground animate-fade-in-up animation-delay-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Pune, Maharashtra
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Available for internships
              </div>
            </div>

            <Button asChild>
              <Link href="/vedant-mahalle-CV.pdf" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  View Resume
                </span>
              </Link>
            </Button>

            <Button className="ml-5" onClick={DownloadCV}>
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>

          </div>

          <div className="relative">
            <div className="sticky top-24">
              <div className="relative w-full max-w-sm mx-auto">
                <Image
                  // src="/placeholder.svg?height=400&width=300"
                  src= {avatard}
                  // src="../../public/image.png"
                  alt="Profile"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{edu.school}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </section> */}

        {/* Fun Facts */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Fun Facts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-bounce-in animation-delay-200">
              <CardHeader>
                <Code className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle>100+</CardTitle>
                <CardDescription>LeetCode problems solved</CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-bounce-in animation-delay-400">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>15+</CardTitle>
                <CardDescription>Projects completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-bounce-in animation-delay-600">
              <CardHeader>
                <Award className="w-8 h-8 text-purple-500 mb-2" />
                <CardTitle>2</CardTitle>
                <CardDescription>Hackathon participations</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
