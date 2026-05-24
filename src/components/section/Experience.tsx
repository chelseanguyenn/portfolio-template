import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { translations } from '../../constants/translations';

const sections = [
  {
    label: 'Research & Programs',
    entries: [
      {
        emoji: '🛢️',
        title: 'Research Participant',
        org: 'AI4ALL — Deep Learning for Marine Oil Spill Detection',
        period: 'Jun 2025 – Oct 2025',
        location: 'Remote',
        bullets: [
          'Achieved 90% validation accuracy using transfer learning with ResNet-18, dropout regularization, and hyperparameter tuning on satellite imagery.',
          'Built an end-to-end binary image classification pipeline with PyTorch and TensorFlow on 300+ augmented satellite images.',
          'Collaborated with a team of 4 to optimize model performance for an environmental monitoring pipeline.',
        ],
        pills: ['PyTorch', 'TensorFlow', 'ResNet-18', 'Computer Vision'],
      },
      {
        emoji: '🚀',
        title: 'Academy Participant',
        org: "NASA L'SPACE — Proposal Writing & Evaluation",
        period: 'May 2025 – Aug 2025',
        location: 'Remote',
        bullets: [
          'Led technical development as Lead Scientist & Programmer for iGIBOD, an AI-driven satellite concept applying computer vision to autonomous orbital debris detection.',
          'Participated in a peer review panel evaluating NASA-style technical proposals and providing structured feedback.',
        ],
        pills: ['Computer Vision', 'Python', 'AI/ML'],
      },
      {
        emoji: '📚',
        title: 'Student Engineer',
        org: 'CodePath — Technical Interview Prep & Cybersecurity',
        period: 'Jun 2025 – Aug 2025',
        location: 'Remote',
        bullets: [
          'Completed Technical Interview Prep covering data structures, algorithms, and system design.',
          'Completed Cybersecurity 102 covering security fundamentals, vulnerability assessment, and secure coding practices.',
        ],
        pills: ['DSA', 'Cybersecurity', 'System Design'],
      },
      {
        emoji: '👩‍💻',
        title: 'Summer Immersion Participant',
        org: 'Girls Who Code',
        period: 'Jun 2020 – Jul 2020',
        location: 'Remote',
        bullets: [
          'Received hands-on instruction in web graphic design, web development, and web personality tests.',
          'Applied coding skills to build web graphic design and interactive personality test projects.',
        ],
        pills: ['HTML/CSS', 'Web Design'],
      },
    ],
  },
  {
    label: 'Education',
    entries: [
      {
        emoji: '🎓',
        title: 'B.S. Computer Science',
        org: 'University of Massachusetts Boston',
        period: 'Sept 2024 – Dec 2026',
        location: 'Boston, MA',
        bullets: [
          'On track to receive a Bachelor of Science in Computer Science.',
          'Completed courses including Data Structures, Algorithms, Calculus 1 & 2, Physics 1 & 2, Discrete Math, and Introduction to Electrical & Computer Engineering.',
        ],
        pills: [],
      },
    ],
  },
  {
    label: 'Leadership & Community',
    entries: [
      {
        emoji: '🌸',
        title: 'President',
        org: 'Women in Computer Science, UMass Boston',
        period: 'Sep 2024 – Present',
        location: 'Boston, MA',
        bullets: [
          'Spearheaded partnerships with CS organizations across universities to expand recruiting pipelines and technical networking for underrepresented students.',
          'Facilitated conferences and networking opportunities through collaboration with nearby university CS clubs.',
          'Promoted diversity and inclusion in tech through community-building initiatives.',
        ],
        pills: [],
      },
      {
        emoji: '🇻🇳',
        title: 'Member',
        org: 'UMass Boston Vietnamese Student Association (VSA)',
        period: 'Dec 2024 – Present',
        location: 'Boston, MA',
        bullets: [
          'Foster a safe and welcoming community where members can socialize, connect, and learn from one another.',
          'Promote awareness of Vietnamese and Vietnamese-American culture and experiences at UMass Boston.',
          'Collaborate with other UMB organizations and serve local nonprofits to support members\' personal, social, and professional growth.',
        ],
        pills: [],
      },
    ],
  },
  {
    label: 'Work Experience',
    entries: [
      {
        emoji: '🧋',
        title: 'Team Member',
        org: 'Tastea',
        period: 'Apr 2023 – Aug 2024',
        location: 'Fountain Valley, CA',
        bullets: [
          'Maintain knowledge of 20+ drink recipes and prepare them accurately for 70+ daily customers in a fast-paced environment.',
          'Collaborate with 5–10 team members and assist during busy hours.',
          'Train new onboarding team members.',
        ],
        pills: [],
      },
      {
        emoji: '🥷',
        title: 'Sensei',
        org: 'Code Ninjas',
        period: 'Apr 2022 – Nov 2022',
        location: 'Los Alamitos-Cypress, CA',
        bullets: [
          'Taught students coding languages including Scratch and Roblox Lua, guiding them through game coding projects.',
          'Created an engaging environment fostering coding skill development through a game-based curriculum.',
          'Set learning objectives and tracked student progress.',
        ],
        pills: ['Scratch', 'Roblox Lua', 'Teaching'],
      },
      {
        emoji: '📖',
        title: 'Tutor',
        org: 'Private Tutoring',
        period: 'Sep 2018 – May 2023',
        location: '',
        bullets: [
          'Provided after-school tutoring for students from Pre-K to 6th grade.',
          'Discussed student performance with parents and maintained a positive learning environment.',
        ],
        pills: [],
      },
    ],
  },
];

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const { language } = useLanguage();
  const themeColors = useThemeColors();
  const t = translations[language];

  return (
    <section
      id="experience"
      className="py-16 relative"
      style={{
        background: themeColors.background.sections?.experience || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      {/* Top edge blend */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1,
        }}
      />
      {/* Bottom edge blend */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1,
        }}
      />

      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.dark[800] }}>
            {t.experience.heading}{' '}
            <span style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
              &amp;
            </span>{' '}
            Education
          </h2>
          <p className="mt-2 text-sm italic" style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[500] }}>
            a mix of work, research, programs, and leadership ✦
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.label}>
              {/* Section divider */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex-1 h-px max-w-xs" style={{ background: isDarkMode ? '#e8a0a044' : '#f4a0a044' }} />
                <div className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0" style={{ borderColor: isDarkMode ? '#e8a0a066' : '#f4a0a066', background: 'transparent' }} />
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border whitespace-nowrap"
                  style={{
                    color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400],
                    background: isDarkMode ? '#12203a' : '#fff5f5',
                    borderColor: isDarkMode ? '#e8a0a033' : '#f4a0a033',
                    fontFamily: 'monospace',
                  }}
                >
                  {section.label}
                </span>
                <div className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0" style={{ borderColor: isDarkMode ? '#e8a0a066' : '#f4a0a066', background: 'transparent' }} />
                <div className="flex-1 h-px max-w-xs" style={{ background: isDarkMode ? '#e8a0a044' : '#f4a0a044' }} />
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {section.entries.map((entry, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border p-5 flex gap-4 transition-colors duration-200"
                    style={{
                      background: isDarkMode ? '#111827' : '#ffffff',
                      borderColor: isDarkMode ? '#1e2a42' : '#f4a0a022',
                    }}
                  >
                    {/* Emoji icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5 border"
                      style={{
                        background: isDarkMode ? '#1a2035' : '#fff5f5',
                        borderColor: isDarkMode ? '#2a3550' : '#f4a0a033',
                      }}
                    >
                      {entry.emoji}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 flex-wrap">
                        <div>
                          <p
                            className="font-bold text-base leading-tight"
                            style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}
                          >
                            {entry.title}
                          </p>
                          <p
                            className="text-sm font-medium mt-0.5"
                            style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[500] }}
                          >
                            {entry.org}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <div className="flex items-center gap-1.5" style={{ color: isDarkMode ? '#3d4f70' : '#aab0c0' }}>
                            <Calendar className="h-3 w-3" />
                            <span className="text-xs" style={{ fontFamily: 'monospace' }}>{entry.period}</span>
                          </div>
                          {entry.location && (
                            <div className="flex items-center gap-1.5" style={{ color: isDarkMode ? '#3d4f70' : '#aab0c0' }}>
                              <MapPin className="h-3 w-3" />
                              <span className="text-xs" style={{ fontFamily: 'monospace' }}>{entry.location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-3 h-px" style={{ background: isDarkMode ? '#1a2540' : '#f4a0a022' }} />

                      {/* Bullets */}
                      <ul className="space-y-1.5">
                        {entry.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm leading-relaxed">
                            <span style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }} className="mt-0.5 flex-shrink-0">·</span>
                            <span style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[600] }}>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Pills */}
                      {entry.pills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {entry.pills.map((pill) => (
                            <span
                              key={pill}
                              className="text-xs px-2.5 py-0.5 rounded-full border"
                              style={{
                                fontFamily: 'monospace',
                                background: isDarkMode ? '#0f172a' : '#f9f9fb',
                                borderColor: isDarkMode ? '#1e2a42' : '#e8eaf0',
                                color: isDarkMode ? '#4a6080' : '#8892b0',
                              }}
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;