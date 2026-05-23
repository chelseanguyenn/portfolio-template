import noteWho from '../../assets/notes/note-who.png'
import noteBuild from '../../assets/notes/note-build.png'
import noteClock from '../../assets/notes/note-clock.png'

const notes = [
  {
    id: 1,
    src: noteWho,
    alt: 'who am i — chelsea nguyen, cs student at UMass Boston, viet-american',
    rotate: '-6deg',
    zIndex: 2,
    hoverRotate: '-1deg',
  },
  {
    id: 2,
    src: noteBuild,
    alt: 'what i build — ui/ux, frontend, swe, ai/ml',
    rotate: '4deg',
    zIndex: 4,
    hoverRotate: '1deg',
  },
  {
    id: 3,
    src: noteClock,
    alt: 'off the clock — running, journaling, rock-climbing, matcha runs and more',
    rotate: '-3deg',
    zIndex: 3,
    hoverRotate: '-0.5deg',
  },
]

const StickyNotes = () => {
  return (
    <section
      style={{
        padding: '20px 24px 48px',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'visible',
      }}
    >
      {/* Centered section label */}
      <p style={{
        fontSize: 11,
        fontWeight: 700,
        color: '#C88B95',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        marginBottom: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
      }}>
        <span style={{ width: 18, height: 1.5, background: '#C88B95', display: 'inline-block' }} />
        a little about me
        <span style={{ width: 18, height: 1.5, background: '#C88B95', display: 'inline-block' }} />
      </p>

      {/* Desktop: centered row, overlapping */}
      <div
        className="notes-desktop"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '-60px',
          position: 'relative',
          maxWidth: 1100,
          margin: '0 auto',
          paddingBottom: 40,
        }}
      >
        {notes.map((note, i) => (
          <div
            key={note.id}
            style={{
              width: 380,
              flexShrink: 0,
              marginLeft: i === 0 ? 0 : -60,
              transform: `rotate(${note.rotate})`,
              zIndex: note.zIndex,
              transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), z-index 0s',
              cursor: 'default',
              willChange: 'transform',
              position: 'relative',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = `rotate(${note.hoverRotate}) scale(1.05) translateY(-10px)`
              el.style.zIndex = '20'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = `rotate(${note.rotate}) scale(1) translateY(0)`
              el.style.zIndex = String(note.zIndex)
            }}
          >
            <img
              src={note.src}
              alt={note.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.4))',
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Mobile: centered vertical stack */}
      <div
        className="notes-mobile"
        style={{
          display: 'none',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 40,
          padding: '0 16px',
        }}
      >
        {notes.map(note => (
          <div
            key={note.id}
            style={{
              width: '100%',
              maxWidth: 340,
              transform: `rotate(${note.rotate})`,
            }}
          >
            <img
              src={note.src}
              alt={note.alt}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
              }}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .notes-desktop { display: none !important; }
          .notes-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}

export default StickyNotes