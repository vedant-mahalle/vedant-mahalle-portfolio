import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Vedant Mahalle</h3>
            <p className="text-sm text-muted-foreground">
              Computer Science Student at VIT Pune passionate about creating innovative digital solutions through code.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/vedant-mahalle/" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/mahalle-vedant/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/VedantMaha31875" target="_blank">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:vedantmahalle39@gmail.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>Web Development</span>
              <span>Mobile Apps</span>
              <span>Machine Learning</span>
              <span>Algorithm Optimization</span>
              <span>Technical Consulting</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>Pune, Maharashtra</span>
              <Link href="mailto:vedantmahalle39@gmail.com" className="hover:text-foreground transition-colors">
                vedantmahalle39@gmail.com
              </Link>
              <Link href="tel:+919730665390" className="hover:text-foreground transition-colors">
                +91 97306 65390
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vedant Mahalle. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
