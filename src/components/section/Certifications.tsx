import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import codepathCyberBadge from '../../assets/badges/codepath_cybersecurity.webp';
import codepathTipBadge from '../../assets/badges/codepath_tip.webp';
import linkedinRBadge from '../../assets/badges/linkedin_r.webp';
import nasaNpweeBadge from '../../assets/badges/nasa_npwee.webp';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const badges = [
    {
      id: 'codepath-tip',
      image: codepathTipBadge,
      alt: 'CodePath Intermediate Technical Interview Prep Certificate',
      title: 'Intermediate Technical Interview Prep',
      subtitle: 'CodePath · Summer 2025',
      credentialUrl: '',
    },
    {
      id: 'codepath-cyber',
      image: codepathCyberBadge,
      alt: 'CodePath Intermediate Cybersecurity Certificate',
      title: 'Intermediate Cybersecurity',
      subtitle: 'CodePath · Summer 2025 · Honors',
      credentialUrl: '',
    },
    {
      id: 'nasa-npwee',
      image: nasaNpweeBadge,
      alt: 'NASA Proposal Writing and Evaluation Experience Academy Certificate',
      title: "NASA Proposal Writing & Evaluation Experience Academy",
      subtitle: "NASA L'SPACE · Summer 2025",
      credentialUrl: '',
    },
    {
      id: 'linkedin-r',
      image: linkedinRBadge,
      alt: 'LinkedIn Learning R for Data Science Certificate',
      title: 'R for Data Science: Analysis and Visualization',
      subtitle: 'LinkedIn Learning · Sep 2025',
      credentialUrl: '',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-8 relative"
      style={{
        background: themeColors.background.sections?.certifications || themeColors.background.gradient,
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2
          className="text-4xl font-bold text-center mb-10"
          style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}
        >
          Certifications & Credentials
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {badges.map((badge) => {
              const BadgeComponent = () => (
                <div className="flex flex-col items-center group w-44">
                  <div className="mb-4">
                    <img
                      src={badge.image}
                      alt={badge.alt}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="160"
                      height="160"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3
                    className="text-center text-sm font-medium mb-1 leading-snug"
                    style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
                  >
                    {badge.title}
                  </h3>
                  <p
                    className="text-center text-xs"
                    style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}
                  >
                    {badge.subtitle}
                  </p>
                </div>
              );

              return badge.credentialUrl ? (
                <a
                  key={badge.id}
                  href={badge.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:scale-105 cursor-pointer focus:outline-none"
                  style={{ outline: 'none' }}
                  onFocus={(e) => e.currentTarget.blur()}
                  aria-label={`View ${badge.title} credential`}
                >
                  <BadgeComponent />
                </a>
              ) : (
                <div key={badge.id}>
                  <BadgeComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Certifications;