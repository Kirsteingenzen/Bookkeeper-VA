"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  MessageCircle,
  Calculator,
  TrendingUp,
  FileText,
  Scale,
  Laptop,
  BarChart3,
  DollarSign,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      e.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping Services",
      description:
        "Complete bookkeeping solutions using QuickBooks and Xero, including financial record maintenance, categorization, and monthly reconciliation.",
      features: ["Financial record management", "Monthly reconciliation", "Data entry and categorization"],
    },
    {
      icon: DollarSign,
      title: "Invoicing & Billing",
      description:
        "Professional invoicing and billing services to streamline your payment processes and improve cash flow management.",
      features: ["Invoice creation and management", "Payment tracking", "Accounts receivable management"],
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description:
        "Comprehensive financial reports including profit & loss statements, balance sheets, and cash flow management reports.",
      features: ["P&L statements", "Balance sheet preparation", "Cash flow analysis"],
    },
    {
      icon: Laptop,
      title: "Virtual Assistance",
      description:
        "General virtual assistance services including email management, lead generation, and administrative support.",
      features: ["Email management", "Lead generation", "Administrative support"],
    },
  ]

  const experience = [
    {
      date: "Present",
      title: "Bookkeeper VA",
      company: "Imperishable Seeds",
      description:
        "Proficient with financial management using QuickBooks and NetSuite. Capabilities encompass bank feed clearing, invoicing, payroll, and overall accounts receivable/accounts payable management.",
    },
    {
      date: "2022-2024",
      title: "Assistant Bookkeeper VA",
      company: "Eloquent Company",
      description:
        "Financial services include profit and loss statements, balance sheet preparation, and cash flow management, along with monthly reconciliation and data entry. Expertise in email campaigns and lead generation, as well as proficiency in WooCommerce for e-commerce solutions.",
    },
    {
      date: "2023",
      title: "Website Designing",
      company: "Creatives Company",
      description: "Web Designs (WordPress, GHL, Webflow), Content Writing (various styles)",
    },
    {
      date: "2020-2021",
      title: "Website Expert",
      company: "The Hundredfold Company",
      description: "Website designing, Website builder, Lead Generation, WordPress, Coding (JS, HTML, CSS)",
    },
  ]

  const skills = [
    { icon: Calculator, name: "QuickBooks" },
    { icon: TrendingUp, name: "Xero" },
    { icon: FileText, name: "Invoicing" },
    { icon: Scale, name: "Reconciliation" },
    { icon: Laptop, name: "Virtual Assistance" },
    { icon: Mail, name: "Email Support" },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gradient-to-br from-slate-900 via-gray-900 to-black" : "bg-gradient-to-br from-gray-50 via-white to-gray-100"}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              KGN
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Portfolio", "Services", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Portfolio", "Services", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span>Let's meet!</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-400">
                  Virtual Assistant & Bookkeeper
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Helping businesses stay organized with accurate, reliable bookkeeping using QuickBooks & Xero. I bring
                  nearly four years of experience keeping financials clean, clear, and client-ready.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  <Link href="#contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Let's Talk
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">Follow me on:</p>
                <div className="flex space-x-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/kirstein-genzen-nojapa-9814832aa" },
                    { icon: Instagram, href: "https://www.instagram.com/nojapakrstngnzn?igsh=dTljeHhxcXN1bWlt" },
                    { icon: Facebook, href: "https://facebook.com" },
                    { icon: Mail, href: "mailto:genzennojapa@gmail.com" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    >
                      <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="flex justify-center">
              <Card className="w-full max-w-sm bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-4">
                    <div className="w-32 h-32 mx-auto relative">
                      <Image
                        src="/placeholder.svg?height=128&width=128"
                        alt="Kirstein Genzen Nojapa"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-orange-500 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Kirstein Genzen Nojapa</h3>
                      <p className="text-gray-600 dark:text-gray-400">Bookkeeper VA</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Specialization:</p>
                      <p className="font-medium">Virtual Assistant & Bookkeeper</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Based in:</p>
                      <p className="font-medium">Ampayon, Butuan City</p>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Linkedin, href: "https://www.linkedin.com/in/kirstein-genzen-nojapa-9814832aa" },
                      { icon: Instagram, href: "https://www.instagram.com/nojapakrstngnzn?igsh=dTljeHhxcXN1bWlt" },
                      { icon: Facebook, href: "https://facebook.com" },
                      { icon: Mail, href: "mailto:genzennojapa@gmail.com" },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href={social.href}
                        target="_blank"
                        className="p-2 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <social.icon className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    <Link href="#contact">Let's Work Together!</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Get to know me better</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-2xl font-semibold">Professional Virtual Assistant & Bookkeeper</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm a dedicated Virtual Assistant and Bookkeeper with nearly four years of experience helping
                  businesses maintain accurate financial records. Currently pursuing a Bachelor's degree in Computer
                  Science at Caraga State University, I combine technical expertise with financial acumen.
                </p>
                <p>
                  My expertise spans across QuickBooks, Xero, financial management, and various digital tools that help
                  streamline business operations. I'm passionate about helping businesses grow by keeping their finances
                  organized and transparent.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "50+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                >
                  <a
                    href="https://drive.google.com/file/d/1A3nxkdxrrfFHE5ZJbOth4vGgk8-eWy95/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Core Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <skill.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              My Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Recent projects and achievements</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Featured Projects</h3>

              <div className="grid gap-6">
                {[
                  {
                    title: "E-commerce Bookkeeping System",
                    description:
                      "Complete financial management system for online retail business using QuickBooks integration.",
                    tech: ["QuickBooks", "Excel", "Financial Analysis"],
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Restaurant Chain Financial Reports",
                    description:
                      "Monthly P&L statements and cash flow management for multi-location restaurant business.",
                    tech: ["Xero", "Financial Reporting", "Cash Flow"],
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    title: "Startup Financial Setup",
                    description:
                      "Complete bookkeeping setup and training for tech startup, including payroll and tax preparation.",
                    tech: ["NetSuite", "Payroll", "Tax Prep"],
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((project, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={120}
                          height={80}
                          className="rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg">{project.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Achievements & Stats</h3>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "4+", label: "Years Experience", icon: "📅" },
                  { number: "50+", label: "Completed Projects", icon: "✅" },
                  { number: "45+", label: "Happy Customers", icon: "😊" },
                  { number: "15+", label: "Awards Won", icon: "🏆" },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800"
                  >
                    <CardContent className="p-0">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">Client Testimonial</h4>
                  <blockquote className="text-lg italic mb-4">
                    "Kirstein transformed our chaotic financial records into a well-organized system. Her attention to
                    detail and expertise in QuickBooks saved us countless hours."
                  </blockquote>
                  <cite className="text-orange-100">- Sarah Johnson, CEO of TechStart Inc.</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">What I can do for your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 to-orange-600"></div>

              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                    <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <h4 className="text-orange-500 font-medium mb-3">{exp.company}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Let's work together</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: Mail, title: "Email", info: "genzennojapa@gmail.com" },
                { icon: Phone, title: "Phone", info: "+639703517425" },
                { icon: MapPin, title: "Location", info: "Ampayon, Butuan City" },
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your Name" required className="bg-white/50 dark:bg-slate-700/50" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      required
                      className="bg-white/50 dark:bg-slate-700/50"
                    />
                  </div>
                  <Input name="subject" placeholder="Subject" required className="bg-white/50 dark:bg-slate-700/50" />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="bg-white/50 dark:bg-slate-700/50"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/50 dark:bg-slate-800/50 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400">© 2024 Kirstein Genzen Nojapa. All rights reserved.</p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/kirstein-genzen-nojapa-9814832aa" },
                { icon: Instagram, href: "https://www.instagram.com/nojapakrstngnzn?igsh=dTljeHhxcXN1bWlt" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Mail, href: "mailto:genzennojapa@gmail.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="p-2 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                >
                  <social.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
