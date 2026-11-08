import { StrictMode, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  GraduationCap,
  HeartPulse,
  House,
  Layers,
  Link,
  Mail,
  MapPin,
  Microscope,
  Phone,
  ScanLine,
  Send,
  Terminal,
  Trophy,
  UserRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import portrait from "./assets/atul.jpg";
import "./styles.css";

const navigation = [
  { id: "home", label: "Overview", icon: House },
  { id: "about", label: "About me", icon: UserRound },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Send },
];

const projects = [
  {
    name: "AeonScan",
    category: "Digital pathology",
    icon: Microscope,
    color: "#5c6950",
    background: "#e7ecdf",
    description:
      "A digital pathology platform for uploading, viewing, and analyzing digitized slides, with workflows for associated samples and cases.",
    contribution: "Sample upload and management workflows.",
    tags: ["React", "TypeScript", "Django"],
  },
  {
    name: "U-Mentor",
    category: "Public health",
    icon: HeartPulse,
    color: "#526d6c",
    background: "#e4eeeb",
    description:
      "Immunization monitoring and mentorship for frontline health workers through assessments, field data collection, and KPI dashboards.",
    contribution:
      "Offline Enketo workflows, KPI features, and a support ticket module.",
    tags: ["Django REST", "React", "Enketo"],
  },
  {
    name: "DGA",
    category: "Health infrastructure",
    icon: ScanLine,
    color: "#8c7350",
    background: "#f1ebdf",
    description:
      "A platform to assess gaps in health facility infrastructure, services, and resources using digital checklists, geographic maps, and dashboards.",
    contribution: "Maps, assessments, and offline data collection workflows.",
    tags: ["Leaflet", "React", "Django"],
  },
  {
    name: "Grow RCA",
    category: "Public health · In development",
    icon: Layers,
    color: "#75607e",
    background: "#ece6ef",
    description:
      "A platform under development to support investigation of vaccine-preventable disease outbreaks and immunization gaps.",
    contribution:
      "Team development of field assessments, evidence collection, and reporting.",
    tags: ["Public health", "Assessments", "Reporting"],
  },
];

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Terminal,
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Data & application tools",
    icon: Database,
    items: [
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Redux Toolkit",
      "TanStack Query",
      "Enketo",
    ],
  },
  {
    title: "Development & visualization",
    icon: Layers,
    items: ["Git", "GitHub", "Vite", "npm", "uv", "Leaflet", "D3.js"],
  },
];

const academicProjects = [
  {
    name: "NLPHub",
    description:
      "Sentiment analysis, summarization, and translation tools built with Django, spaCy, Google APIs, and Hugging Face Transformers.",
  },
  {
    name: "Payroll Management System",
    description:
      "A group project using MySQL to manage employee data, attendance, work duration, and payroll.",
  },
  {
    name: "Notes App & Portfolio",
    description:
      "MERN stack applications with add, edit, and delete functionality for notes.",
  },
  {
    name: "Curl Counter with OpenCV",
    description: "An academic computer vision project using OpenCV.",
  },
];

function PortfolioSidebar({ active }: { active: string }) {
  const { isMobile, setOpenMobile } = useSidebar();
  return (
    <Sidebar className="portfolio-sidebar" collapsible="offcanvas">
      <SidebarHeader className="px-5 pt-7 pb-3">
        <a href="#home" aria-label="Atul Maurya home" className="monogram">
          am.
        </a>
        <div>
          <p className="side-name">
            Atul Maurya<span className="text-[#73915f]">.</span>
          </p>
          <p className="side-role">Full-stack software developer</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <p className="nav-caption">Explore</p>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {navigation.map(({ id, label, icon: Icon }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton
                    asChild
                    isActive={active === id}
                    className="sidebar-link"
                  >
                    <a
                      href={`#${id}`}
                      aria-current={active === id ? "location" : undefined}
                      onClick={() => {
                        if (isMobile) setOpenMobile(false);
                      }}
                    >
                      <Icon size={17} strokeWidth={1.7} />
                      <span>{label}</span>
                      {active === id && (
                        <ArrowUpRight className="ml-auto" size={12} />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-5 pb-5">
        <div className="side-note">
          <span className="status-dot" />
          <strong>Building with purpose.</strong>
          <p className="mt-2 text-[#818876]">
            Thoughtful software for healthcare and beyond.
          </p>
          <a
            href="mailto:atulmaurya83036@gmail.com"
            className="mt-3 flex items-center gap-2 text-[#42633c]"
          >
            Let’s connect <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/atul-maurya-it"
              target="_blank"
              rel="noreferrer"
              aria-label="Atul on LinkedIn"
            >
              <Link size={16} />
            </a>
            <a
              className="social-link"
              href="mailto:atulmaurya83036@gmail.com"
              aria-label="Email Atul"
            >
              <Mail size={17} />
            </a>
          </div>
          <span className="text-[10px] text-[#909582]">Mumbai, India</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

function Portfolio() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        setActive("contact");
        return;
      }
      const current = navigation
        .filter(
          ({ id }) =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <= 150,
        )
        .at(-1);
      setActive(current?.id ?? "home");
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <SidebarProvider style={{ "--sidebar-width": "15rem" } as CSSProperties}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:p-3"
      >
        Skip to content
      </a>
      <PortfolioSidebar active={active} />
      <div className="min-w-0 flex-1">
        <header className="topbar">
          <div className="topbar-left">
            <SidebarTrigger className="mobile-trigger" />
            <span>Portfolio</span>
            <span className="text-[#c4c9bc]">/</span>
            <span className="topbar-label">
              {navigation.find((item) => item.id === active)?.label}
            </span>
          </div>
          <a
            href="mailto:atulmaurya83036@gmail.com"
            className="flex items-center gap-2 text-[#5d7152]"
          >
            Say hello <ArrowUpRight size={14} />
          </a>
        </header>
        <main id="main-content" className="page-content">
          <section id="home" className="hero">
            <div>
              <p className="eyebrow flex items-center gap-2">
                <span className="status-dot" />
                Developer. Learner. Problem solver.
              </p>
              <h1>
                Building ideas
                <br />
                into <em>impact.</em>
              </h1>
              <p className="intro">
                Hi, I’m <span className="hero-name">Atul Maurya</span> — a
                full-stack developer working at IIT Bombay. I build thoughtful
                web applications at the intersection of technology and
                healthcare.
              </p>
              <div className="actions">
                <a href="#projects" className="action action-primary">
                  Explore my work <ArrowDownRight size={15} />
                </a>
                <a href={`${import.meta.env.BASE_URL}Atul-Maurya-Resume.pdf`} download className="action">
                  <Download size={14} />
                  Download résumé
                </a>
              </div>
              <p className="hero-meta">
                <MapPin size={13} />
                Mumbai, India<span className="mx-2 text-[#c4cbb9]">/</span>
                Python + React + TypeScript
              </p>
            </div>
            <div className="portrait-wrap">
              <img
                src={portrait}
                className="portrait"
                alt="Atul Maurya wearing a suit and tie"
                width="1024"
                height="1536"
                fetchPriority="high"
              />
              <div className="portrait-caption">
                <Code2 size={24} strokeWidth={1.5} />
                <div>
                  <strong>From frontend to backend.</strong>
                  <span>Connecting the whole picture.</span>
                </div>
              </div>
            </div>
          </section>
          <div className="facts">
            <div className="fact">
              <strong>2.5+</strong>
              <p>Years of experience</p>
            </div>
            <div className="fact">
              <strong>4</strong>
              <p>Team projects at IIT Bombay</p>
            </div>
            <div className="fact">
              <strong>
                9.4<span className="text-sm text-[#8c9580]"> / 10</span>
              </strong>
              <p>BSc IT · CGPA</p>
            </div>
          </div>

          <section id="about" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / A little about me</p>
                <h2>Code with a real-world purpose.</h2>
              </div>
              <UserRound
                size={23}
                className="text-[#8b967d]"
                strokeWidth={1.3}
              />
            </div>
            <p className="about-copy">
              I’m a full-stack software developer with experience building
              public health and digital pathology applications. At TCTD, IIT
              Bombay, I work across Django APIs, React interfaces, and offline
              data collection — taking assigned features from implementation
              through integration.
            </p>
            <p className="intro mt-4">
              I enjoy connecting the pieces: data, interfaces, and the workflows
              people use every day. My work includes assessments, maps,
              dashboards, user management, and sample management, developed in
              close collaboration with my team.
            </p>
          </section>

          <section id="projects" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / Selected work</p>
                <h2>Software that serves people.</h2>
              </div>
              <p>Team projects developed as part of TCTD, IIT Bombay.</p>
            </div>
            <div className="project-grid">
              {projects.map(
                ({
                  name,
                  category,
                  icon: Icon,
                  color,
                  background,
                  description,
                  contribution,
                  tags,
                }) => (
                  <article className="project" key={name}>
                    <div
                      className="project-visual"
                      style={
                        {
                          "--project-bg": background,
                          "--project-color": color,
                        } as CSSProperties
                      }
                    >
                      <Icon />
                      <div>
                        <strong>{name}</strong>
                        <span>{category}</span>
                      </div>
                    </div>
                    <div className="project-body">
                      <div className="project-topline">
                        <h3>{name}</h3>
                        <span className="small-label">Team project</span>
                      </div>
                      <p>{description}</p>
                      <p>
                        <strong className="font-medium text-[#5e6e53]">
                          My work:
                        </strong>{" "}
                        {contribution}
                      </p>
                      <div className="tags">
                        {tags.map((tag) => (
                          <span className="tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>

          <section id="experience" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / The journey so far</p>
                <h2>Learning through building.</h2>
              </div>
              <BriefcaseBusiness
                size={23}
                className="text-[#8b967d]"
                strokeWidth={1.3}
              />
            </div>
            <article className="timeline-item">
              <p className="timeline-date">Jun 2024 — Present</p>
              <div>
                <h3>Project Technical Assistant</h3>
                <span className="timeline-org">TCTD, IIT Bombay · Mumbai</span>
                <p>
                  Develop Django and DRF APIs, database models, and reusable
                  React and TypeScript interfaces. Deliver assigned modules
                  across U-Mentor, DGA, AeonScan, and Grow RCA, collaborating on
                  requirements, technical decisions, integration, and issue
                  resolution.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <p className="timeline-date">Jan 2024 — Feb 2024</p>
              <div>
                <h3>Full Stack Developer Intern</h3>
                <span className="timeline-org">
                  NextGen Lab, Patkar College · Mumbai
                </span>
                <p>
                  Contributed to team projects using React Native, Node.js,
                  TypeScript, MongoDB, and Django. Secured second place at
                  Indian Collegiate Startup Week 2024 for “Traffic Light School”
                  under the guidance of NextGen Lab.
                </p>
              </div>
            </article>
          </section>

          <section id="skills" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / My toolkit</p>
                <h2>The tools behind the work.</h2>
              </div>
              <Code2 size={23} className="text-[#8b967d]" strokeWidth={1.3} />
            </div>
            <div className="skill-grid">
              {skills.map(({ title, icon: Icon, items }) => (
                <div className="skill-group" key={title}>
                  <h3>
                    <Icon size={16} />
                    {title}
                  </h3>
                  <div className="tags">
                    {items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education" className="content-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">05 / Foundations</p>
                <h2>A curious mind, always learning.</h2>
              </div>
              <GraduationCap
                size={25}
                className="text-[#8b967d]"
                strokeWidth={1.3}
              />
            </div>
            <article className="timeline-item">
              <p className="timeline-date">Aug 2021 — Jun 2024</p>
              <div>
                <h3>BSc in Information Technology</h3>
                <span className="timeline-org">
                  Patkar-Varde College · University of Mumbai
                </span>
                <p>
                  CGPA:{" "}
                  <strong className="font-semibold text-[#506a45]">
                    9.4 / 10
                  </strong>
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <p className="timeline-date">Jun 2020 — Jun 2021</p>
              <div>
                <h3>Higher Secondary Certificate (HSC)</h3>
                <span className="timeline-org">
                  Prahladrai Dalmia Lions College
                </span>
                <p>
                  Percentage:{" "}
                  <strong className="font-semibold text-[#506a45]">84%</strong>
                </p>
              </div>
            </article>
            <div className="academic-list">
              <h3>Academic projects</h3>
              {academicProjects.map((project) => (
                <div className="academic-row" key={project.name}>
                  <BookOpen size={16} />
                  <div>
                    <strong>{project.name}</strong>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
              <div className="academic-row">
                <Trophy size={16} />
                <div>
                  <strong>Beyond the classroom</strong>
                  <p>
                    Presented research on data science in diabetic retinopathy
                    detection at CONFAB’S. Completed 61 hours of Institutional
                    Social Responsibility activities, including book donation
                    and health awareness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <p className="eyebrow">06 / Start a conversation</p>
            <h2>
              Have something in mind?
              <br />
              Let’s build on it.
            </h2>
            <p>
              For opportunities, collaboration, or a conversation about
              technology,
              <br className="hidden sm:block" /> I’m just a message away.
            </p>
            <div className="contact-links">
              <a
                className="action action-primary contact-email"
                href="mailto:atulmaurya83036@gmail.com"
              >
                <Mail size={15} />
                atulmaurya83036@gmail.com
                <ArrowUpRight className="shrink-0" size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/atul-maurya-it"
                target="_blank"
                rel="noreferrer"
                className="action"
              >
                <Link size={15} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>
              <a href="tel:+918303606559" className="action">
                <Phone size={14} />
                Call me
              </a>
            </div>
          </section>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Atul Maurya</span>
            <a href="#home" className="flex items-center gap-2">
              Back to the top <ArrowDown size={12} className="rotate-180" />
            </a>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
