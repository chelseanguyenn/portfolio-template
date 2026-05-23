import { useEffect, useRef, useState, useCallback } from 'react'
import type { FormEvent } from 'react'

const LOFI_TRACK = 'https://assets.mixkit.co/music/preview/mixkit-chill-lofi-ambient-1985.mp3'

interface Props {
  onClose: () => void
}

const WELCOME_LINES = [
  { type: 'welcome' as const, content: "chelsea's terminal  ✦" },
  { type: 'welcome' as const, content: "type `help` for commands." },
  { type: 'welcome' as const, content: '' },
]

const HELP_TEXT = [
  '  `help`    — list commands',
  '  `whoami`  — who is Chelsea?',
  '  `xo`      — send good vibes',
  '  `play`    — start lo-fi music',
  '  `pause`   — stop the music',
  '  `resume`  — open resume',
  '  `github`  — github profile',
  '  `ls`      — look around',
  '  `clear`   — reset terminal',
].join('\n')

type LineType = 'welcome' | 'input' | 'output' | 'error' | 'special'
interface Line { type: LineType; content: string }

const InteractiveTerminal = ({ onClose }: Props) => {
  const [history, setHistory] = useState<Line[]>(WELCOME_LINES)
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const [musicOn, setMusicOn] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const outputRef = useRef<HTMLDivElement | null>(null)
  const dragStart = useRef({ mx: 0, my: 0, px: 0, py: 0 })

  useEffect(() => {
    audioRef.current = new Audio(LOFI_TRACK)
    audioRef.current.loop = true
    audioRef.current.volume = 0.16
    audioRef.current.preload = 'none'
    return () => { audioRef.current?.pause(); audioRef.current = null }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (musicOn) audioRef.current.play().catch(() => {})
    else audioRef.current.pause()
  }, [musicOn])

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => { inputRef.current?.focus() }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === '`') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const addLine = useCallback((type: LineType, content: string) => {
    setHistory(prev => [...prev, { type, content }])
  }, [])

  const handleCommand = useCallback((raw: string) => {
    const cmd = raw.trim()
    if (!cmd) return
    setCmdHistory(prev => [cmd, ...prev])
    setHistIdx(-1)
    addLine('input', `❯ ${cmd}`)

    switch (cmd.toLowerCase()) {
      case 'help':
        addLine('output', HELP_TEXT)
        break
      case 'whoami':
        addLine('special', 'Chelsea Nguyen — SWE, creative coder,\njournal-inspired interface maker. 🌸')
        break
      case 'xo':
        addLine('special', "xo back atcha 💌\nglad you're here ✦")
        break
      case 'play':
        setMusicOn(true)
        addLine('special', '♪ lo-fi mode: on')
        break
      case 'pause':
        setMusicOn(false)
        addLine('output', '♪ lo-fi mode: off — quiet mode engaged.')
        break
      case 'resume':
        addLine('output', '↗ opening resume...')
        window.open('/resume.pdf', '_blank')
        break
      case 'github':
        addLine('output', '↗ github.com/chelseanguyenn')
        window.open('https://github.com/chelseanguyenn', '_blank')
        break
      case 'ls':
        addLine('output', 'about.md   projects/   skills.json\ncontact.txt   music/   readme.md')
        break
      case 'clear':
        setHistory(WELCOME_LINES)
        break
      default:
        addLine('error', `command not found: '${cmd}'\ntry \`help\` for available commands.`)
    }
  }, [addLine])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(cmdHistory[next] ?? '')
    }
  }

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y }
  }
  useEffect(() => {
    if (!isDragging) return
    const onMove = (e: MouseEvent) => {
      setPos({
        x: dragStart.current.px + (e.clientX - dragStart.current.mx),
        y: dragStart.current.py + (e.clientY - dragStart.current.my),
      })
    }
    const onUp = () => setIsDragging(false)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [isDragging])

  const lineColor = (type: LineType) => {
    if (type === 'input')   return '#7dd3fc'
    if (type === 'error')   return '#fca5a5'
    if (type === 'special') return '#86efac'
    if (type === 'welcome') return '#c084fc'
    return '#e2d8f0'
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: `calc(24px - ${pos.y}px)`,
        right: `calc(24px - ${pos.x}px)`,
        zIndex: 600,
        width: 'min(900px, calc(100vw - 32px))',
        background: 'rgba(6, 5, 12, 0.97)',
        borderRadius: 16,
        border: '1px solid rgba(234, 190, 195, 0.18)',
        boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.05) inset',
        fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', 'Courier New', monospace",
        overflow: 'hidden',
        animation: 'termSlideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        userSelect: isDragging ? 'none' : 'auto',
      }}
    >
      <style>{`
        @keyframes termSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .term-scrollbar::-webkit-scrollbar { width: 4px; }
        .term-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .term-scrollbar::-webkit-scrollbar-thumb { background: rgba(234,190,195,0.2); border-radius: 4px; }
        .term-input-raw { background: transparent; border: none; outline: none; caret-color: #EABEC3; }
        .term-input-raw::placeholder { color: rgba(255,255,255,0.18); }
      `}</style>

      {/* Title bar */}
      <div
        onMouseDown={onMouseDown}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '13px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.03)',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        {/* Mac traffic lights */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div
            onClick={onClose}
            title="close"
            style={{
              width: 14, height: 14, borderRadius: '50%',
              background: '#FF5F57',
              cursor: 'pointer',
              transition: 'filter 0.15s',
              boxShadow: '0 0 6px rgba(255,95,87,0.4)',
            }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.2)')}
            onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
          />
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#FEBC2E', boxShadow: '0 0 6px rgba(254,188,46,0.3)' }} />
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#28C840', boxShadow: '0 0 6px rgba(40,200,64,0.3)' }} />
        </div>

        {/* Title */}
        <span style={{ fontSize: 20, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em' }}>
          chelsea@portfolio:~$
        </span>

        {/* Music badge */}
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          padding: '4px 12px',
          borderRadius: 99,
          background: musicOn ? 'rgba(134,239,172,0.12)' : 'rgba(255,255,255,0.05)',
          color: musicOn ? '#86efac' : 'rgba(255,255,255,0.25)',
          border: `1px solid ${musicOn ? 'rgba(134,239,172,0.25)' : 'rgba(255,255,255,0.07)'}`,
          letterSpacing: '0.05em',
          transition: 'all 0.2s',
        }}>
          {musicOn ? '♪ lo-fi on' : 'silent'}
        </span>
      </div>

      {/* Output */}
      <div
        ref={outputRef}
        className="term-scrollbar"
        style={{
          height: 450,
          overflowY: 'auto',
          padding: '16px 20px 8px',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(234,190,195,0.2) transparent',
        }}
      >
        {history.map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: 23,
              lineHeight: 1.8,
              color: lineColor(line.type),
              whiteSpace: 'pre-wrap',
              marginBottom: line.content === '' ? 6 : 0,
              opacity: line.type === 'welcome' ? 0.75 : 1,
            }}
          >
            {line.content || '\u00a0'}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.06)', margin: '0 20px' }} />

      {/* Input row */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 20px 15px',
          background: 'rgba(0,0,0,0.2)',
        }}
      >
        <span style={{ color: '#EABEC3', fontSize: 15, flexShrink: 0, lineHeight: 1 }}>❯</span>
        <input
          ref={inputRef}
          className="term-input-raw"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command..."
          autoComplete="off"
          spellCheck={false}
          style={{
            flex: 1,
            color: '#f1f5f9',
            fontSize: 25,
            fontFamily: 'inherit',
          }}
        />
        {/* Blinking block cursor */}
        <span style={{
          width: 8,
          height: 16,
          background: '#EABEC3',
          opacity: 0.6,
          animation: 'blink 1s step-end infinite',
          flexShrink: 0,
        }} />
      </form>

      {/* Hint */}
      <div style={{
        padding: '0 20px 10px',
        fontSize: 20,
        color: 'rgba(255,255,255,0.13)',
        letterSpacing: '0.04em',
      }}>
        press ` to toggle  ·  ↑↓ history  ·  drag to move
      </div>
    </div>
  )
}

export default InteractiveTerminal