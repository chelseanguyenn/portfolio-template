import { useState, useRef, useEffect } from 'react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Code, Heart, ExternalLink } from 'lucide-react';
import { lightStars, darkStars, specialStars } from '../../assets/stars';
import { translations } from '../../constants/translations';

// ── Devicon CDN icon map ──────────────────────────────────────────────────────
const D = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'
const TECH_ICONS: Record<string, string> = {
  'Python':       `${D}/python/python-original.svg`,
  'PyTorch':      `${D}/pytorch/pytorch-original.svg`,
  'torchvision':  `${D}/pytorch/pytorch-original.svg`,
  'React':        `${D}/react/react-original.svg`,
  'JavaScript':   `${D}/javascript/javascript-original.svg`,
  'TypeScript':   `${D}/typescript/typescript-original.svg`,
  'HTML':         `${D}/html5/html5-original.svg`,
  'CSS':          `${D}/css3/css3-original.svg`,
  'NumPy':        `${D}/numpy/numpy-original.svg`,
  'Pandas':       `${D}/pandas/pandas-original.svg`,
  'Vite':         `${D}/vitejs/vitejs-original.svg`,
  'TensorBoard':  `${D}/tensorflow/tensorflow-original.svg`,
  'scikit-learn': `${D}/scikitlearn/scikitlearn-original.svg`,
  'Matplotlib':   `${D}/matplotlib/matplotlib-original.svg`,
  'Streamlit':    `https://streamlit.io/images/brand/streamlit-mark-color.svg`,
}

// ── Project data ──────────────────────────────────────────────────────────────
const researchProjects = [
  {
    title: "Oil Spill Detection",
    description: "Computer vision model trained with PyTorch and ResNet to detect and classify oil spills in satellite imagery. Built with AI4ALL — includes a Streamlit web app for real-time inference.",
    technologies: ["Python", "PyTorch", "Streamlit", "scikit-learn"],
    githubUrl: "https://github.com/chelseanguyenn/Oil-Spill-Detection",
    demoUrl: "",
    emoji: "🛢️",
  },
  {
    title: "Flight Cancellation Analysis",
    description: "Data analysis project examining flight delay and cancellation patterns using BTS data. Surfaces key delay factors across routes and airlines through statistical modeling and visualizations.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/chelseanguyenn/flight-cancellation-analysis",
    demoUrl: "",
    emoji: "✈️",
  },
  {
    title: "Road Accident Detection",
    description: "Two-stage deep learning pipeline for detecting and classifying road accident severity from images. Uses ResNet18 with Grad-CAM visualization for model interpretability and TensorBoard logging.",
    technologies: ["Python", "PyTorch", "torchvision", "TensorBoard"],
    githubUrl: "https://github.com/chelseanguyenn/Road-Accident-Detection",
    demoUrl: "",
    emoji: "🚗",
  },
]

const personalProjects = [
  {
    title: "Reef Riot 🪸",
    description: "Hackathon-built interactive web game where players restore a corrupted reef by removing 3 pollution threats — plastic compactor, ghost nets, and an extraction drill — in under 90 seconds.",
    technologies: ["React", "Vite", "JavaScript", "Python", "CSS"],
    githubUrl: "https://github.com/chelseanguyenn/ReefRiot",
    demoUrl: "https://reef-riot.netlify.app/", 
    emoji: "🌊",
  },
  {
    title: "Ghibli Study Studio 🌿",
    description: "Pomodoro focus timer set in the spirit world, with 26 Ghibli GIF scenes cycling as background ambiance. No build step needed — pure HTML/CSS/JS with smooth crossfades every ~50 seconds.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/chelseanguyenn/studio-ghibli-pomodoro",
    demoUrl: "", // add your GitHub Pages URL here once deployed
    emoji: "🍃",
  },
]

// ── Tech badge with logo ──────────────────────────────────────────────────────
const TechBadge = ({ tech, themeColors }: {
  tech: string
  themeColors: ReturnType<typeof useThemeColors>
}) => {
  const iconUrl = TECH_ICONS[tech]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '4px 10px', borderRadius: 99,
      fontSize: 11, fontWeight: 600,
      backgroundColor: themeColors.interactive.primary,
      color: themeColors.text.accent,
      border: `1px solid ${themeColors.primary}`,
      marginRight: 6, marginBottom: 6,
    }}>
      {iconUrl && (
        <img src={iconUrl} alt={tech} width={13} height={13}
          style={{ width: 13, height: 13, objectFit: 'contain', flexShrink: 0 }}
          loading="lazy" />
      )}
      {tech}
    </span>
  )
}

// ── Section label — matches About style ───────────────────────────────────────
const SectionLabel = ({ children }: { children: string }) => (
  <p style={{
    fontSize: 11, fontWeight: 700, color: '#C88B95',
    letterSpacing: '0.16em', textTransform: 'uppercase' as const,
    marginBottom: 28, display: 'flex', alignItems: 'center',
    justifyContent: 'center', gap: 10,
  }}>
    <span style={{ flex: 1, maxWidth: 80, height: 1.5, background: '#C88B95', display: 'inline-block' }} />
    {children}
    <span style={{ flex: 1, maxWidth: 80, height: 1.5, background: '#C88B95', display: 'inline-block' }} />
  </p>
)

// ── Project card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project, isDarkMode, themeColors }: {
  project: typeof researchProjects[0]
  isDarkMode: boolean
  themeColors: ReturnType<typeof useThemeColors>
}) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    style={{ backgroundColor: themeColors.card.background, border: `1px solid ${themeColors.card.border}` }}>
    <CardHeader>
      <div className="flex items-start gap-3">
        <div style={{
          width: 48, height: 48, borderRadius: 12, flexShrink: 0,
          background: isDarkMode ? 'rgba(234,190,195,0.1)' : 'rgba(234,190,195,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
        }}>
          {project.emoji}
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl transition-colors group-hover:!text-pink-500 dark:group-hover:!text-pink-400"
            style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.dark[800] }}>
            {project.title}
          </CardTitle>
          <CardDescription className="mt-2" style={{ color: themeColors.text.secondary }}>
            {project.description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="flex flex-wrap mb-4">
        {project.technologies.map((tech, i) => (
          <TechBadge key={i} tech={tech} themeColors={themeColors} />
        ))}
      </div>
      <div className="flex gap-3" style={{ marginTop: 'auto', paddingTop: 8 }}>
        <a href={project.githubUrl}
          className="project-btn-outline flex items-center gap-1"
          style={{ textDecoration: 'none', display: 'inline-flex', width: 'fit-content' }}
          target="_blank" rel="noopener noreferrer">
          <Code className="h-4 w-4" aria-hidden="true" />
          GitHub
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl}
            className="project-btn flex items-center gap-1"
            style={{ textDecoration: 'none', color: 'white', display: 'inline-flex', width: 'fit-content' }}
            target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </a>
        )}
      </div>
    </CardContent>
  </Card>
)

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  const { isDarkMode } = useDarkMode()
  const { language } = useLanguage()
  const themeColors = useThemeColors()
  const t = translations[language]

  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; image: string; isDragging: boolean }>>([])
  const [draggedStar, setDraggedStar] = useState<number | null>(null)
  const [specialStar, setSpecialStar] = useState({ x: 85, y: 8 })
  const [isDraggingSpecial, setIsDraggingSpecial] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    const pool = isDarkMode ? darkStars : lightStars
    setStars(Array.from({ length: 30 }, (_, i) => {
      const zone = i % 4
      let x = 0, y = 0
      if (zone === 0) { x = Math.random() * 90 + 5; y = Math.random() * 10 }
      else if (zone === 1) { x = Math.random() * 90 + 5; y = Math.random() * 10 + 90 }
      else if (zone === 2) { x = Math.random() * 15; y = Math.random() * 60 + 20 }
      else { x = Math.random() * 15 + 85; y = Math.random() * 60 + 20 }
      return { id: i, x, y, image: pool[Math.floor(Math.random() * pool.length)], isDragging: false }
    }))
  }, [isDarkMode])

  const handleSpecialDown = (e: React.MouseEvent) => { e.stopPropagation(); setIsDraggingSpecial(true); isDraggingRef.current = true }
  const handleSpecialTouchStart = (e: React.TouchEvent) => { e.stopPropagation(); setIsDraggingSpecial(true); isDraggingRef.current = true }

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!isDraggingSpecial || !containerRef.current) return
      const r = containerRef.current.getBoundingClientRect()
      setSpecialStar({ x: Math.max(0, Math.min(95, ((e.clientX - r.left) / r.width) * 100)), y: Math.max(0, Math.min(95, ((e.clientY - r.top) / r.height) * 100)) })
    }
    const tMove = (e: TouchEvent) => {
      if (!isDraggingSpecial || !containerRef.current || !e.touches.length) return
      const r = containerRef.current.getBoundingClientRect()
      setSpecialStar({ x: Math.max(0, Math.min(95, ((e.touches[0].clientX - r.left) / r.width) * 100)), y: Math.max(0, Math.min(95, ((e.touches[0].clientY - r.top) / r.height) * 100)) })
    }
    const up = () => { setIsDraggingSpecial(false); isDraggingRef.current = false }
    if (isDraggingSpecial) { document.addEventListener('mousemove', move); document.addEventListener('mouseup', up); document.addEventListener('touchmove', tMove); document.addEventListener('touchend', up) }
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); document.removeEventListener('touchmove', tMove); document.removeEventListener('touchend', up) }
  }, [isDraggingSpecial])

  const handleStarDown = (id: number) => (e: React.MouseEvent) => { e.stopPropagation(); setDraggedStar(id); isDraggingRef.current = true; setStars(p => p.map(s => s.id === id ? { ...s, isDragging: true } : s)) }
  const handleStarTouch = (id: number) => (e: React.TouchEvent) => { e.stopPropagation(); setDraggedStar(id); isDraggingRef.current = true; setStars(p => p.map(s => s.id === id ? { ...s, isDragging: true } : s)) }

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (draggedStar === null || !containerRef.current) return
      const r = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(95, ((e.clientX - r.left) / r.width) * 100))
      const y = Math.max(0, Math.min(95, ((e.clientY - r.top) / r.height) * 100))
      setStars(p => p.map(s => s.id === draggedStar ? { ...s, x, y } : s))
    }
    const tMove = (e: TouchEvent) => {
      if (draggedStar === null || !containerRef.current || !e.touches.length) return
      const r = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(95, ((e.touches[0].clientX - r.left) / r.width) * 100))
      const y = Math.max(0, Math.min(95, ((e.touches[0].clientY - r.top) / r.height) * 100))
      setStars(p => p.map(s => s.id === draggedStar ? { ...s, x, y } : s))
    }
    const up = () => { if (draggedStar !== null) { setStars(p => p.map(s => s.id === draggedStar ? { ...s, isDragging: false } : s)); setDraggedStar(null); isDraggingRef.current = false } }
    if (draggedStar !== null) { document.addEventListener('mousemove', move); document.addEventListener('mouseup', up); document.addEventListener('touchmove', tMove); document.addEventListener('touchend', up) }
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseup', up); document.removeEventListener('touchmove', tMove); document.removeEventListener('touchend', up) }
  }, [draggedStar])

  return (
    <section id="projects" className="py-20 relative transition-colors duration-300"
      style={{ background: themeColors.background.sections?.projects || themeColors.background.gradient, transition: 'background 0.3s ease-in-out' }}
      ref={containerRef}>

      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 150, background: isDarkMode ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)` : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`, zIndex: 2 }} />

      {/* Special drag star */}
      <div className="special-draggable-star" onMouseDown={handleSpecialDown} onTouchStart={handleSpecialTouchStart}
        style={{ position: 'absolute', left: `${specialStar.x}%`, top: `${specialStar.y}%`, width: 44, height: 44, zIndex: 15, cursor: isDraggingSpecial ? 'grabbing' : 'grab', userSelect: 'none', animation: 'twinkle 3s infinite' }}>
        <img src={isDarkMode ? specialStars.dragMeStarDark : specialStars.dragMeStar} alt="Drag me star" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} draggable={false} loading="lazy" width="44" height="44" />
      </div>
      <div style={{ position: 'absolute', left: '85%', top: '5%', zIndex: 16, display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'none' }}>
        <img src={isDarkMode ? specialStars.arrowDark : specialStars.arrow} alt="Arrow" style={{ width: 45, height: 45, marginLeft: 40 }} draggable={false} loading="lazy" />
        <span style={{ fontFamily: "'DK Crayonista', cursive", fontSize: 26, color: isDarkMode ? '#FDD5DF' : '#ec4899', fontWeight: 'bold', userSelect: 'none' }}>drag me!</span>
      </div>

      {/* Regular stars */}
      {stars.map(star => (
        <div key={star.id} className="draggable-star" onMouseDown={handleStarDown(star.id)} onTouchStart={handleStarTouch(star.id)}
          style={{ position: 'absolute', left: `${star.x}%`, top: `${star.y}%`, width: 50, height: 50, zIndex: 1, cursor: star.isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}>
          <img src={star.image} alt="Star" style={{ width: '100%', height: '100%', pointerEvents: 'none' }} draggable={false} loading="lazy" width="50" height="50" />
        </div>
      ))}

      <TooltipProvider delayDuration={200}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center gap-1 mb-2">
            <h2 className="text-4xl font-bold" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
              {t.projects.heading} <em style={{ fontStyle: 'italic', color: themeColors.colors.pink[500] }}>{t.projects.headingHighlight}</em>
            </h2>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="inline-flex items-center justify-center bg-transparent border-none outline-none" style={{ minWidth: 44, minHeight: 44 }} aria-label="About project icons">
                  <Heart className="h-5 w-5 cursor-pointer transition-colors" style={{ color: themeColors.primary }} fill="none" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-gray-800 border-pink-200">
                <p>all favicons created by me!</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <p className="text-center mb-16 text-lg" style={{ color: themeColors.text.secondary }}>
            a mix of research, hackathons, and things i built just because ✦
          </p>

          {/* Research section */}
          <SectionLabel>research &amp; academic</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {researchProjects.map((p, i) => <ProjectCard key={i} project={p} isDarkMode={isDarkMode} themeColors={themeColors} />)}
          </div>

          {/* Personal section */}
          <SectionLabel>personal &amp; creative</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {personalProjects.map((p, i) => <ProjectCard key={i} project={p} isDarkMode={isDarkMode} themeColors={themeColors} />)}
          </div>
        </div>
      </TooltipProvider>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 150, background: isDarkMode ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)` : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`, zIndex: 1 }} />
    </section>
  )
}

export default Projects