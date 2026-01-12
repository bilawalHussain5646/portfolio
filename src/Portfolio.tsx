import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Home,
  User,
  Wrench,
  MessageSquare,
  ChevronRight,
  Database,
  Cloud,
  Zap,
  Globe,
  BarChart,
  Bot,
  Server,
  Laptop,
  CheckCircle,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", name: "Home", icon: Home },
    { id: "about", name: "About", icon: User },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "skills", name: "Skills", icon: Wrench },
    { id: "projects", name: "Projects", icon: Code },
    { id: "contact", name: "Contact", icon: MessageSquare },
  ];

  const skills = [
    {
      name: "Python",
      icon: Code,
      level: 95,
      color: "from-yellow-400 to-yellow-600",
      details: ["Flask", "Django", "Web Scraping", "Automation"],
    },
    {
      name: "PHP",
      icon: Server,
      level: 90,
      color: "from-purple-400 to-purple-600",
      details: ["Laravel", "CMS Development", "API Integration"],
    },
    {
      name: "React",
      icon: Laptop,
      level: 92,
      color: "from-blue-400 to-blue-600",
      details: ["Next.js", "Vue.js", "GSAP Animations"],
    },
    {
      name: "Node.js",
      icon: Zap,
      level: 88,
      color: "from-green-400 to-green-600",
      details: ["Express.js", "REST APIs", "Real-time Apps"],
    },
    {
      name: "Databases",
      icon: Database,
      level: 90,
      color: "from-orange-400 to-orange-600",
      details: ["MySQL", "MongoDB", "MSSQL"],
    },
    {
      name: "AWS Cloud",
      icon: Cloud,
      level: 85,
      color: "from-cyan-400 to-cyan-600",
      details: ["EC2", "S3", "Lambda"],
    },
    {
      name: "Automation",
      icon: Bot,
      level: 93,
      color: "from-pink-400 to-pink-600",
      details: ["Selenium", "Beautiful Soup", "Desktop Apps"],
    },
    {
      name: "Analytics",
      icon: BarChart,
      level: 80,
      color: "from-indigo-400 to-indigo-600",
      details: ["Google Analytics", "Power BI", "Data Insights"],
    },
  ];

  const projects = [
    {
      title: "LG Electronics Web Platform",
      company: "HS AD MEA (LG)",
      description:
        "Developed and maintained multiple web applications and microsites for LG brand across Middle East and Africa region",
      technologies: ["React", "Laravel", "MySQL", "AWS"],
      highlights: [
        "Custom CMS Development",
        "Multi-language Support",
        "High Traffic Management",
      ],
      icon: Globe,
    },
    {
      title: "E-commerce Automation Suite",
      company: "HS AD MEA (LG)",
      description:
        "Created comprehensive automation bots for managing LG stores on Amazon and Noon platforms with data scraping and analysis",
      technologies: ["Python", "Selenium", "Beautiful Soup", "Desktop App"],
      highlights: [
        "Automated Reporting",
        "Data Scraping",
        "Inventory Management",
      ],
      icon: Bot,
    },
    {
      title: "Analytics Dashboard System",
      company: "HS AD MEA (LG)",
      description:
        "Built custom analytics and reporting system integrated with Google Analytics for real-time traffic insights and business intelligence",
      technologies: ["Python", "Google Analytics API", "Power BI", "MongoDB"],
      highlights: [
        "Real-time Analytics",
        "Custom Reports",
        "Data Visualization",
      ],
      icon: BarChart,
    },
    {
      title: "Bragging Rights Platform",
      company: "Bragging Rights",
      description:
        "Developed complete business website with responsive design and seamless backend integration for Canadian agency",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      highlights: [
        "Responsive Design",
        "Agile Development",
        "Client Collaboration",
      ],
      icon: Laptop,
    },
  ];

  const certifications = [
    {
      name: "Python Certification",
      icon: Code,
      issuer: "Professional",
      year: "2022",
    },
    {
      name: "React Certification",
      icon: Laptop,
      issuer: "Professional",
      year: "2022",
    },
    {
      name: "Project Management",
      icon: CheckCircle,
      issuer: "Professional",
      year: "2023",
    },
  ];

  const renderHome = () => (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                BH
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full text-sm font-semibold">
            Available for Work
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 mt-12">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bilawal Hussain
          </span>
        </h1>

        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500"></div>
          <p className="text-3xl md:text-4xl text-slate-300 font-light">
            Full Stack Web Developer
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>

        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting scalable web applications and intelligent automation
          solutions with{" "}
          <span className="text-blue-400 font-semibold">4+ years</span> of
          expertise. Currently building innovative digital experiences for{" "}
          <span className="text-purple-400 font-semibold">LG Electronics</span>{" "}
          in Dubai.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 px-6 py-3 rounded-full flex items-center space-x-2">
            <MapPin size={18} className="text-blue-400" />
            <span>Dubai, UAE</span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 px-6 py-3 rounded-full flex items-center space-x-2">
            <Briefcase size={18} className="text-purple-400" />
            <span>4+ Years Experience</span>
          </div>
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 px-6 py-3 rounded-full flex items-center space-x-2">
            <GraduationCap size={18} className="text-pink-400" />
            <span>BS Software Engineering</span>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/bilawalHussain5646"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 hover:border-blue-500 flex items-center justify-center transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bilawal-hussain/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 hover:border-blue-500 flex items-center justify-center transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:bilawal.hussain350@gmail.com"
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 hover:border-blue-500 flex items-center justify-center transition-all transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+971582326874"
            className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 hover:border-blue-500 flex items-center justify-center transition-all transform hover:scale-110"
          >
            <Phone size={24} />
          </a>
        </div>

        <button
          onClick={() => setActiveSection("contact")}
          className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
        >
          Let's Collaborate
          <ChevronRight
            className="ml-2 group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </button>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="h-screen flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6">
              <User size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with over 4 years of
              experience building enterprise-level web applications and
              automation solutions. Currently based in Dubai, I work with HS AD
              MEA FZ-LLC, developing innovative digital solutions for LG
              Electronics.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My expertise lies in creating scalable architectures, implementing
              complex automation workflows, and delivering data-driven insights
              that drive business growth.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
              <Code size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              I specialize in full-stack development with advanced proficiency
              in Python (Flask, Django), PHP (Laravel), and modern JavaScript
              frameworks including React, Vue, and Next.js.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My skill set extends to cloud infrastructure (AWS), database
              management (MySQL, MongoDB), automation engineering, and AI
              implementation for cutting-edge solutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-6 text-center">
            <GraduationCap className="mx-auto mb-4 text-blue-400" size={40} />
            <h4 className="text-xl font-bold mb-2">Education</h4>
            <p className="text-slate-300">BS Software Engineering</p>
            <p className="text-slate-400 text-sm">
              Riphah International University
            </p>
            <p className="text-blue-400 font-semibold mt-2">GPA: 3.7/4.0</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-2xl p-6 text-center">
            <Briefcase className="mx-auto mb-4 text-purple-400" size={40} />
            <h4 className="text-xl font-bold mb-2">Experience</h4>
            <p className="text-slate-300">4+ Years Professional</p>
            <p className="text-slate-400 text-sm">Full Stack Development</p>
            <p className="text-purple-400 font-semibold mt-2">50+ Projects</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/30 rounded-2xl p-6 text-center">
            <Globe className="mx-auto mb-4 text-pink-400" size={40} />
            <h4 className="text-xl font-bold mb-2">Location</h4>
            <p className="text-slate-300">Dubai, UAE</p>
            <p className="text-slate-400 text-sm">Residence Visa Holder</p>
            <p className="text-pink-400 font-semibold mt-2">Remote Ready</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="h-screen flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Work Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border-2 border-blue-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-400">
                      Specialist - Full Stack Web Developer
                    </h3>
                    <p className="text-xl text-slate-300 mt-1">
                      HS AD MEA FZ-LLC (An LG Company)
                    </p>
                    <p className="text-slate-400 flex items-center mt-1">
                      <MapPin size={16} className="mr-1" /> Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="bg-blue-500/20 border border-blue-500/50 px-4 py-2 rounded-full">
                  <span className="text-blue-400 font-semibold">
                    Dec 2022 - Present (3 years)
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Globe, text: "Web apps & microsites for LG brand" },
                  { icon: Code, text: "CMS system management & development" },
                  { icon: Bot, text: "Automation bots & desktop applications" },
                  { icon: Server, text: "Custom APIs & backend services" },
                  {
                    icon: BarChart,
                    text: "Google Analytics & traffic reporting",
                  },
                  {
                    icon: Database,
                    text: "E-commerce data scraping & analysis",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-xl"
                  >
                    <item.icon
                      className="text-blue-400 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "PHP",
                  "Laravel",
                  "React",
                  "AWS",
                  "MySQL",
                  "Selenium",
                  "Google Analytics",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-sm text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Laptop size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-purple-400">
                      Full Stack Web Developer
                    </h3>
                    <p className="text-xl text-slate-300 mt-1">
                      Bragging Rights
                    </p>
                    <p className="text-slate-400 flex items-center mt-1">
                      <MapPin size={16} className="mr-1" /> Remote, Canada
                    </p>
                  </div>
                </div>
                <div className="bg-purple-500/20 border border-purple-500/50 px-4 py-2 rounded-full">
                  <span className="text-purple-400 font-semibold">
                    July 2021 - Nov 2022 (1.5 years)
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Laptop, text: "Business website development" },
                  { icon: Code, text: "Efficient & testable code practices" },
                  { icon: Globe, text: "Responsive HTML/CSS interfaces" },
                  { icon: Database, text: "Backend integration & databases" },
                  { icon: User, text: "Client communication & updates" },
                  { icon: Zap, text: "Agile methodology implementation" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 bg-slate-900/50 p-4 rounded-xl"
                  >
                    <item.icon
                      className="text-purple-400 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "HTML/CSS",
                  "Agile",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="h-screen flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  >
                    <skill.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-slate-400">Advanced Level</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-slate-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.details.map((detail, detailIdx) => (
                  <span
                    key={detailIdx}
                    className="bg-slate-700/50 px-3 py-1 rounded-full text-xs text-slate-300"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-3xl p-8 border border-slate-700">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="text-yellow-400" size={32} />
            <h3 className="text-2xl font-bold">
              Certifications & Achievements
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-yellow-500/50 transition-all"
              >
                <cert.icon className="mx-auto mb-3 text-yellow-400" size={32} />
                <h4 className="font-bold mb-1">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.issuer}</p>
                <p className="text-xs text-slate-500 mt-1">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="h-screen flex items-center justify-center px-4 overflow-y-auto py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <project.icon size={32} />
              </div>

              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-blue-400 text-sm mb-4">{project.company}</p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-3">
                  Key Highlights:
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2">
                      <CheckCircle
                        size={16}
                        className="text-green-400 flex-shrink-0"
                      />
                      <span className="text-sm text-slate-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto">
          I'm always excited to discuss new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:bilawal.hussain350@gmail.com"
            className="group bg-slate-800/50 backdrop-blur p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={28} />
            </div>
            <p className="font-semibold text-lg mb-2">Email Me</p>
            <p className="text-sm text-slate-400">
              bilawal.hussain350@gmail.com
            </p>
          </a>

          <a
            href="tel:+971582326874"
            className="group bg-slate-800/50 backdrop-blur p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone size={28} />
            </div>
            <p className="font-semibold text-lg mb-2">Call Me</p>
            <p className="text-sm text-slate-400">(+971) 58 232 6874</p>
          </a>

          <a
            href="https://www.linkedin.com/in/bilawal-hussain/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 backdrop-blur p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin size={28} />
            </div>
            <p className="font-semibold text-lg mb-2">LinkedIn</p>
            <p className="text-sm text-slate-400">Professional Network</p>
          </a>

          <a
            href="https://github.com/bilawalHussain5646"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/50 backdrop-blur p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Github size={28} />
            </div>
            <p className="font-semibold text-lg mb-2">GitHub</p>
            <p className="text-sm text-slate-400">View My Code</p>
          </a>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
          <p className="text-slate-300 mb-6">
            Based in Dubai (GMT+4), I typically respond within 24 hours.
            Available for both remote and on-site opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-slate-800/50 px-4 py-2 rounded-full text-sm">
              <span className="text-slate-400">Status:</span>{" "}
              <span className="text-green-400">● Open to Work</span>
            </div>
            <div className="bg-slate-800/50 px-4 py-2 rounded-full text-sm">
              <span className="text-slate-400">Timezone:</span>{" "}
              <span className="text-blue-400">GMT+4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "about":
        return renderAbout();
      case "experience":
        return renderExperience();
      case "skills":
        return renderSkills();
      case "projects":
        return renderProjects();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      {/* Side Navigation */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 ml-8 hidden lg:block">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-3 space-y-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group relative w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "hover:bg-slate-700"
                }`}
                title={section.name}
              >
                <Icon size={24} />
                <span className="absolute left-full ml-4 bg-slate-800 px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {section.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-900/95 backdrop-blur border-t border-slate-700">
        <div className="flex justify-around py-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all ${
                  activeSection === section.id
                    ? "text-blue-400"
                    : "text-slate-400"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{section.name}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">{renderSection()}</main>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Portfolio;
