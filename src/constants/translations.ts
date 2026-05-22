// Translations for the portfolio
export const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      greeting: 'Hi, I\'m',
      roles: [
        'Frontend Developer',
        'UI/UX Designer',
        'Full-Stack Developer',
        'Creative Coder',
        'Tech Enthusiast',
        'Lifelong Learner',
      ],
      bio: 'Building beautiful, functional interfaces where design meets code. I love turning ideas into reality.',
      cta: 'View My Work →',
      talk: 'Let\'s Talk',
      projectsShipped: '12+',
      projectsLabel: 'Projects shipped & counting',
    },
    // About Section
    about: {
      label: 'Who I Am',
      heading: 'About',
      headingHighlight: 'Me',
      bio1: 'I\'m a passionate developer and designer focused on creating meaningful digital experiences. I thrive at the intersection of functionality and aesthetics.',
      bio2: 'When I\'m not coding, you\'ll find me exploring design trends, working on creative projects, or discovering new technologies.',
      friendsFamily: 'Friends & Family',
      scrollHint: '← Scroll horizontally →',
    },
    // Projects Section
    projects: {
      label: 'Selected Work',
      heading: 'Things I\'ve',
      headingHighlight: 'Built',
      subtitle: 'A mix of personal projects, experiments, and collaborative work.',
    },
    // Experience Section
    experience: {
      label: 'Background',
      heading: 'Experience',
    },
    // Skills Section
    skills: {
      label: 'Capabilities',
      heading: 'What I',
      headingHighlight: 'Do',
    },
    // Contact Section
    contact: {
      label: 'Get In Touch',
      heading: 'Let\'s make something',
      headingHighlight: 'beautiful',
      bio: 'Whether it\'s a project, collaboration, or just a conversation — my inbox is open.',
      email: '✉ Contact Me',
    },
    // Footer
    footer: {
      copyright: 'Designed & Built by Chelsea Nguyen ©',
    },
  },
  vi: {
    // Navigation
    nav: {
      about: 'Giới Thiệu',
      projects: 'Dự Án',
      experience: 'Kinh Nghiệm',
      skills: 'Kỹ Năng',
      contact: 'Liên Hệ',
    },
    // Hero Section
    hero: {
      greeting: 'Xin chào, tôi là',
      roles: [
        'Lập Trình Viên Frontend',
        'Nhà Thiết Kế UI/UX',
        'Lập Trình Viên Full-Stack',
        'Coder Sáng Tạo',
        'Người Yêu Công Nghệ',
        'Người Sẵn Sàng Học Hỏi',
      ],
      bio: 'Xây dựng các giao diện đẹp, chức năng nơi thiết kế gặp gỡ code. Tôi yêu thích biến ý tưởng thành hiện thực.',
      cta: 'Xem Dự Án →',
      talk: 'Liên Hệ',
      projectsShipped: '12+',
      projectsLabel: 'Dự án đã hoàn thành',
    },
    // About Section
    about: {
      label: 'Tôi Là Ai',
      heading: 'Về',
      headingHighlight: 'Tôi',
      bio1: 'Tôi là một nhà phát triển và thiết kế đam mê tạo ra những trải nghiệm kỹ thuật số có ý nghĩa. Tôi phát triển ở giao điểm giữa chức năng và thẩm mỹ.',
      bio2: 'Khi không code, bạn sẽ thấy tôi khám phá xu hướng thiết kế, làm việc trên các dự án sáng tạo, hoặc khám phá các công nghệ mới.',
      friendsFamily: 'Bạn Bè & Gia Đình',
      scrollHint: '← Cuộn ngang →',
    },
    // Projects Section
    projects: {
      label: 'Công Việc Tiêu Biểu',
      heading: 'Những Thứ Tôi Đã',
      headingHighlight: 'Xây Dựng',
      subtitle: 'Kết hợp giữa dự án cá nhân, thử nghiệm, và công việc hợp tác.',
    },
    // Experience Section
    experience: {
      label: 'Lý Lịch',
      heading: 'Kinh Nghiệm',
    },
    // Skills Section
    skills: {
      label: 'Khả Năng',
      heading: 'Tôi',
      headingHighlight: 'Làm Gì',
    },
    // Contact Section
    contact: {
      label: 'Liên Lạc',
      heading: 'Hãy tạo ra điều gì đó',
      headingHighlight: 'đẹp đẽ',
      bio: 'Dù là dự án, hợp tác, hay chỉ một cuộc trò chuyện — hộp thư của tôi luôn mở.',
      email: '✉ Liên Hệ Tôi',
    },
    // Footer
    footer: {
      copyright: 'Thiết Kế & Xây Dựng Bởi Chelsea Nguyen ©',
    },
  },
};

export type TranslationKeys = typeof translations.en;
export type Language = 'en' | 'vi';
