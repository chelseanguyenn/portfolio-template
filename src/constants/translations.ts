// Translations for the portfolio
export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      name: 'Hi, I\'m Chelsea Nguyen',
      iAmA: 'I am a',
      resume: 'Resume →',
      contact: 'Contact →',
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
    about: {
      label: 'Who I Am',
      heading: 'About',
      headingHighlight: 'Me',
      bio1: 'I\'m a passionate developer and designer focused on creating meaningful digital experiences. I thrive at the intersection of functionality and aesthetics.',
      bio2: 'When I\'m not coding, you\'ll find me exploring design trends, working on creative projects, or discovering new technologies.',
      friendsFamily: 'Friends & Family',
      scrollHint: '← Scroll horizontally →',
      stickyNotesLabel: 'A Little About Me',
      profileCaptions: [
        'main character',
        'caught at the happiest place on earth',
        'vietnam, i\'m in you',
      ],
    },
    projects: {
      label: 'Selected Work',
      heading: 'Things I\'ve',
      headingHighlight: 'Built',
      subtitle: 'A mix of personal projects, experiments, and collaborative work.',
      subheading: 'a mix of research, hackathons, and things i built just because ✦',
      sectionResearch: 'research & academic',
      sectionPersonal: 'personal & creative',
      dragMe: 'drag me!',
      faviconsNote: 'all favicons created by me!',
      github: 'GitHub',
      liveDemo: 'Live Demo',
      projects: {
        oilSpill: {
          title: 'Oil Spill Detection',
          description: 'Computer vision model trained with PyTorch and ResNet to detect and classify oil spills in satellite imagery. Built with AI4ALL — includes a Streamlit web app for real-time inference.',
        },
        flight: {
          title: 'Flight Cancellation Analysis',
          description: 'Data analysis project examining patterns in flight delays and cancellations using BTS data. Highlights key delay factors by route and airline through statistical modeling and visualization.',
        },
        road: {
          title: 'Road Accident Detection',
          description: 'Two-stage deep learning pipeline to detect and classify road accident severity from images. Uses ResNet18 with Grad-CAM for model interpretability and TensorBoard logging.',
        },
        reef: {
          title: 'Reef Riot 🪸',
          description: 'Interactive web game built in a hackathon where players restore a polluted coral reef by removing 3 threats — a plastic crusher, ghost net, and mining drill — in under 90 seconds.',
        },
        ghibli: {
          title: 'Ghibli Study Studio 🌿',
          description: 'Enchanted Pomodoro focus timer inspired by Ghibli worlds, featuring 26 rotating Ghibli GIF backgrounds. Zero build step — pure HTML/CSS/JS with smooth scene transitions every ~50 seconds.',
        },
      },
    },
    experience: {
      label: 'Background',
      heading: 'Experience',
      subheading: 'a mix of work, research, programs, and leadership ✦',
      sections: {
        research: 'Research & Programs',
        education: 'Education',
        leadership: 'Leadership & Community',
        work: 'Work Experience',
      },
      entries: {
        ai4all: {
          title: 'Research Member',
          org: 'AI4ALL — Deep Learning for Oil Spill Detection',
          bullets: [
            'Achieved 90% validation accuracy using transfer learning with ResNet-18, dropout regularization, and hyperparameter tuning on satellite imagery.',
            'Built an end-to-end binary image classification pipeline with PyTorch and TensorFlow on 300+ augmented satellite images.',
            'Collaborated with a team of 4 to optimize model performance for an environmental monitoring pipeline.',
          ],
        },
        nasa: {
          title: 'Academy Member',
          org: 'NASA L\'SPACE — Proposal Writing & Review',
          bullets: [
            'Led technical development as Lead Scientist & Programmer for iGIBOD, an AI satellite concept applying computer vision to autonomous orbital debris detection.',
            'Participated in peer review of technical proposals to NASA standards and provided structured feedback.',
          ],
        },
        codepath: {
          title: 'Student Engineer',
          org: 'CodePath — Technical Interview Prep & Cybersecurity',
          bullets: [
            'Completed Technical Interview Prep course covering data structures, algorithms, and system design.',
            'Completed Cybersecurity 102 covering foundational security concepts, vulnerability assessment, and secure coding practices.',
          ],
        },
        gwc: {
          title: 'Summer Member',
          org: 'Girls Who Code',
          bullets: [
            'Received hands-on instruction in web graphic design, web development, and web personality quizzes.',
            'Applied coding skills to build web graphic design projects and interactive personality quizzes.',
          ],
        },
        umassbs: {
          title: 'Bachelor of Science in Computer Science',
          org: 'University of Massachusetts Boston',
          bullets: [
            'On track to receive a Bachelor of Science in Computer Science.',
            'Completed coursework including Data Structures, Algorithms, Calculus 1 & 2, Physics 1 & 2, Discrete Math, and Intro to Electrical & Computer Engineering.',
          ],
        },
        wics: {
          title: 'President',
          org: 'Women in Computer Science Club, UMass Boston',
          bullets: [
            'Led partnerships with CS organizations across multiple universities to expand recruitment pipelines and technical networking for underrepresented students.',
            'Organized conferences and networking opportunities through collaboration with CS clubs at neighboring universities.',
            'Promoted diversity and inclusion in tech through community-building initiatives.',
          ],
        },
        vsa: {
          title: 'Member',
          org: 'Vietnamese Student Association at UMass Boston (VSA)',
          bullets: [
            'Built a safe and welcoming community for members to socialize, connect, and learn from one another.',
            'Raised awareness of Vietnamese and Vietnamese-American culture and experiences at UMass Boston.',
            'Collaborated with other UMB organizations and served local nonprofits to support members\' personal, social, and professional development.',
          ],
        },
        tastea: {
          title: 'Employee',
          org: 'Tastea',
          bullets: [
            'Mastered 20+ drink recipes and precisely prepared drinks for 70+ customers daily in a fast-paced environment.',
            'Collaborated with 5–10 team members and provided support during peak hours.',
            'Trained new staff.',
          ],
        },
        codeninjas: {
          title: 'Coding Instructor',
          org: 'Code Ninjas',
          bullets: [
            'Taught students programming languages including Scratch and Roblox Lua, guiding them through game programming projects.',
            'Created an engaging learning environment that fostered coding skill development through a game-based curriculum.',
            'Set learning goals and tracked student progress.',
          ],
        },
        tutoring: {
          title: 'Tutor',
          org: 'Private Tutoring',
          bullets: [
            'Provided after-school tutoring services for students from kindergarten to 6th grade.',
            'Communicated student progress with parents and maintained a positive learning environment.',
          ],
        },
      },
    },
    skills: {
      label: 'Capabilities',
      heading: 'What I',
      headingHighlight: 'Do',
    },
    contact: {
      label: 'Get In Touch',
      heading: 'Let\'s make something',
      headingHighlight: 'beautiful',
      bio: 'Whether it\'s a project, collaboration, or just a conversation — my inbox is open.',
      email: '✉ Contact Me',
    },
    footer: {
      copyright: 'Designed & Built by Chelsea Nguyen ©',
    },
    certifications: {
      heading: 'Certifications & Credentials',
      badges: {
        codepathTip: {
          title: 'Intermediate Technical Interview Prep',
          subtitle: 'CodePath · Summer 2025',
        },
        codepathCyber: {
          title: 'Intermediate Cybersecurity',
          subtitle: 'CodePath · Summer 2025 · Distinction',
        },
        nasaNpwee: {
          title: 'NASA Proposal Writing & Evaluation Experience Academy',
          subtitle: 'NASA L\'SPACE · Summer 2025',
        },
        linkedinR: {
          title: 'R for Data Science: Analysis & Visualization',
          subtitle: 'LinkedIn Learning · September 2025',
        },
      },
    },
  },
  vi: {
    nav: {
      about: 'Giới Thiệu',
      projects: 'Dự Án',
      experience: 'Kinh Nghiệm',
      skills: 'Kỹ Năng',
      contact: 'Liên Hệ',
    },
    hero: {
      name: 'Xin chào, tôi là Chelsea Nguyễn',
      iAmA: 'Tôi là',
      resume: 'Hồ Sơ →',
      contact: 'Liên Hệ →',
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
    about: {
      label: 'Tôi Là Ai',
      heading: 'Về',
      headingHighlight: 'Tôi',
      bio1: 'Tôi là một nhà phát triển và thiết kế đam mê tạo ra những trải nghiệm kỹ thuật số có ý nghĩa. Tôi phát triển ở giao điểm giữa chức năng và thẩm mỹ.',
      bio2: 'Khi không code, bạn sẽ thấy tôi khám phá xu hướng thiết kế, làm việc trên các dự án sáng tạo, hoặc khám phá các công nghệ mới.',
      friendsFamily: 'Bạn Bè & Gia Đình',
      scrollHint: 'cuộn để xem thêm →',
      stickyNotesLabel: 'Một Chút Về Tôi',
      profileCaptions: [
        'nhân vật chính',
        'bị bắt gặp ở nơi vui nhất trên đời',
        'việt nam, mình đây rồi',
      ],
    },
    projects: {
      label: 'Công Việc Tiêu Biểu',
      heading: 'Những Dự Án',
      headingHighlight: 'Tôi Yêu Thích',
      subtitle: 'Kết hợp giữa dự án cá nhân, thử nghiệm, và công việc hợp tác.', 
      subheading: 'kết hợp nghiên cứu, hackathon và những thứ tôi xây chỉ vì thích ✦',
      sectionResearch: 'nghiên cứu & học thuật',
      sectionPersonal: 'cá nhân & sáng tạo',
      dragMe: 'kéo tôi!',
      faviconsNote: 'tất cả favicon do mình tạo!',
      github: 'GitHub',
      liveDemo: 'Xem Demo',
      projects: {
        oilSpill: {
          title: 'Phát Hiện Dầu Tràn',
          description: 'Mô hình computer vision được huấn luyện với PyTorch và ResNet để phát hiện và phân loại dầu tràn trong ảnh vệ tinh. Được xây dựng cùng AI4ALL — bao gồm web app Streamlit để suy luận thời gian thực.',
        },
        flight: {
          title: 'Phân Tích Hủy Chuyến Bay',
          description: 'Dự án phân tích dữ liệu nghiên cứu các mô hình trễ và hủy chuyến bay bằng dữ liệu BTS. Làm nổi bật các yếu tố trễ chính theo tuyến đường và hãng hàng không qua mô hình thống kê và trực quan hóa.',
        },
        road: {
          title: 'Phát Hiện Tai Nạn Giao Thông',
          description: 'Pipeline học sâu hai giai đoạn để phát hiện và phân loại mức độ nghiêm trọng của tai nạn giao thông từ hình ảnh. Sử dụng ResNet18 với Grad-CAM để giải thích mô hình và ghi nhật ký TensorBoard.',
        },
        reef: {
          title: 'Reef Riot 🪸',
          description: 'Game web tương tác được xây trong hackathon, nơi người chơi phục hồi rạn san hô bị ô nhiễm bằng cách loại bỏ 3 mối đe dọa — máy ép nhựa, lưới ma và máy khoan khai thác — trong vòng dưới 90 giây.',
        },
        ghibli: {
          title: 'Ghibli Study Studio 🌿',
          description: 'Bộ đếm tập trung Pomodoro lấy cảm hứng từ thế giới thần tiên, với 26 cảnh GIF Ghibli thay nhau làm nền. Không cần bước build — thuần HTML/CSS/JS với hiệu ứng chuyển cảnh mượt mà mỗi ~50 giây.',
        },
      },
    },
    experience: {
      label: 'Kinh Nghiệm',
      heading: 'Kinh Nghiệm',
      subheading: 'kết hợp giữa công việc, nghiên cứu, chương trình và vai trò lãnh đạo ✦',
      sections: {
        research: 'Nghiên Cứu & Chương Trình',
        education: 'Học Vấn',
        leadership: 'Lãnh Đạo & Cộng Đồng',
        work: 'Kinh Nghiệm Làm Việc',
      },
      entries: {
        ai4all: {
          title: 'Thành Viên Nghiên Cứu',
          org: 'AI4ALL — Học Sâu Để Phát Hiện Dầu Tràn Trên Biển',
          bullets: [
            'Đạt 90% độ chính xác validation bằng transfer learning với ResNet-18, dropout regularization và điều chỉnh siêu tham số trên ảnh vệ tinh.',
            'Xây dựng pipeline phân loại ảnh nhị phân end-to-end với PyTorch và TensorFlow trên 300+ ảnh vệ tinh được augment.',
            'Phối hợp với nhóm 4 người để tối ưu hiệu suất mô hình phục vụ pipeline giám sát môi trường.',
          ],
        },
        nasa: {
          title: 'Thành Viên Học Viện',
          org: 'NASA L\'SPACE — Viết & Đánh Giá Đề Xuất',
          bullets: [
            'Dẫn đầu phát triển kỹ thuật với vai trò Nhà Khoa Học & Lập Trình Viên Chính cho iGIBOD, một khái niệm vệ tinh AI ứng dụng computer vision vào phát hiện mảnh vỡ quỹ đạo tự động.',
            'Tham gia hội đồng đánh giá đề xuất kỹ thuật theo chuẩn NASA và cung cấp phản hồi có cấu trúc.',
          ],
        },
        codepath: {
          title: 'Kỹ Sư Sinh Viên',
          org: 'CodePath — Luyện Phỏng Vấn Kỹ Thuật & An Ninh Mạng',
          bullets: [
            'Hoàn thành khóa Luyện Phỏng Vấn Kỹ Thuật bao gồm cấu trúc dữ liệu, thuật toán và thiết kế hệ thống.',
            'Hoàn thành Cybersecurity 102 bao gồm kiến thức bảo mật cơ bản, đánh giá lỗ hổng và thực hành lập trình an toàn.',
          ],
        },
        gwc: {
          title: 'Thành Viên Hè',
          org: 'Girls Who Code',
          bullets: [
            'Được hướng dẫn thực hành về thiết kế đồ họa web, phát triển web và bài kiểm tra tính cách web.',
            'Ứng dụng kỹ năng lập trình để xây dựng các dự án thiết kế đồ họa web và bài kiểm tra tính cách tương tác.',
          ],
        },
        umassbs: {
          title: 'Cử Nhân Khoa Học Máy Tính',
          org: 'Đại Học Massachusetts Boston',
          bullets: [
            'Đang trên đà nhận bằng Cử Nhân Khoa Học Máy Tính.',
            'Đã hoàn thành các môn học bao gồm Cấu Trúc Dữ Liệu, Thuật Toán, Giải Tích 1 & 2, Vật Lý 1 & 2, Toán Rời Rạc và Nhập Môn Kỹ Thuật Điện & Máy Tính.',
          ],
        },
        wics: {
          title: 'Chủ Tịch',
          org: 'Câu Lạc Bộ Phụ Nữ Khoa Học Máy Tính, UMass Boston',
          bullets: [
            'Dẫn dắt các mối quan hệ đối tác với các tổ chức CS tại nhiều trường đại học nhằm mở rộng kênh tuyển dụng và kết nối kỹ thuật cho sinh viên thiểu số.',
            'Tổ chức hội nghị và cơ hội kết nối mạng lưới thông qua hợp tác với các câu lạc bộ CS tại các trường đại học lân cận.',
            'Thúc đẩy sự đa dạng và hòa nhập trong ngành công nghệ qua các sáng kiến xây dựng cộng đồng.',
          ],
        },
        vsa: {
          title: 'Thành Viên',
          org: 'Hội Sinh Viên Việt Nam tại UMass Boston (VSA)',
          bullets: [
            'Tạo dựng cộng đồng an toàn và thân thiện để các thành viên có thể giao lưu, kết nối và học hỏi lẫn nhau.',
            'Nâng cao nhận thức về văn hóa và trải nghiệm của người Việt và Việt kiều tại UMass Boston.',
            'Phối hợp với các tổ chức UMB khác và phục vụ các tổ chức phi lợi nhuận địa phương để hỗ trợ sự phát triển cá nhân, xã hội và nghề nghiệp của các thành viên.',
          ],
        },
        tastea: {
          title: 'Nhân Viên',
          org: 'Tastea',
          bullets: [
            'Nắm vững 20+ công thức đồ uống và pha chế chính xác cho 70+ khách hàng mỗi ngày trong môi trường nhịp độ nhanh.',
            'Phối hợp với 5–10 thành viên trong nhóm và hỗ trợ trong giờ cao điểm.',
            'Đào tạo nhân viên mới.',
          ],
        },
        codeninjas: {
          title: 'Giáo Viên Lập Trình',
          org: 'Code Ninjas',
          bullets: [
            'Dạy học sinh các ngôn ngữ lập trình bao gồm Scratch và Roblox Lua, hướng dẫn qua các dự án lập trình game.',
            'Tạo môi trường học tập hấp dẫn thúc đẩy phát triển kỹ năng lập trình thông qua chương trình học dựa trên game.',
            'Đặt mục tiêu học tập và theo dõi tiến độ của học sinh.',
          ],
        },
        tutoring: {
          title: 'Gia Sư',
          org: 'Dạy Kèm Tư Nhân',
          bullets: [
            'Cung cấp dịch vụ gia sư sau giờ học cho học sinh từ mẫu giáo đến lớp 6.',
            'Trao đổi kết quả học tập của học sinh với phụ huynh và duy trì môi trường học tập tích cực.',
          ],
        },
      },
    },
    skills: {
      label: 'Kỹ Năng',
      heading: 'Tôi',
      headingHighlight: 'Làm Gì',
    },
    contact: {
      label: 'Liên Hệ',
      heading: 'Hãy tạo ra điều gì đó',
      headingHighlight: 'đẹp',
      bio: 'Dù là dự án, hợp tác, hay chỉ là cuộc trò chuyện — hộp thư của tôi luôn mở.',
      email: '✉ Liên Hệ',
    },
    footer: {
      copyright: 'Thiết Kế & Xây Dựng bởi Chelsea Nguyen ©',
    },
    certifications: {
      heading: 'Chứng Chỉ & Bằng Cấp',
      badges: {
        codepathTip: {
          title: 'Luyện Phỏng Vấn Kỹ Thuật Trung Cấp',
          subtitle: 'CodePath · Hè 2025',
        },
        codepathCyber: {
          title: 'An Ninh Mạng Trung Cấp',
          subtitle: 'CodePath · Hè 2025 · Xuất Sắc',
        },
        nasaNpwee: {
          title: 'Học Viện Viết & Đánh Giá Đề Xuất NASA',
          subtitle: 'NASA L\'SPACE · Hè 2025',
        },
        linkedinR: {
          title: 'R cho Khoa Học Dữ Liệu: Phân Tích & Trực Quan Hóa',
          subtitle: 'LinkedIn Learning · Tháng 9 năm 2025',
        },
      },
    },
  },
};

export type TranslationKeys = typeof translations.en;
export type Language = 'en' | 'vi';
