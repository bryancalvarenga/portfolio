
(function () {
  const translations = {
    pt: {
      a11y: {
        skipToContent: "Pular para o conteúdo",
        openMenu: "Abrir menu",
        close: "Fechar",
        languageSelector: "Selecionar idioma",
      },
      nav: {
        menuTitle: "Menu",
        sobre: "Sobre",
        projetos: "Projetos",
        habilidades: "Habilidades",
        experiencia: "Experiência",
        contato: "Contato",
      },
      hero: {
        badge: "Disponível para novos projetos",
        title: "Olá, sou Bryan Alvarenga",
        text: "Desenvolvedor web apaixonado por tecnologia e por transformar ideias em sistemas funcionais. Focado em back-end com PHP, Java e MySQL, com experiência em Docker, Bootstrap e Tailwind.",
        avatarAlt: "Foto de perfil de Bryan",
      },
      cta: {
        verProjetos: "Ver projetos",
        contato: "Entrar em contato",
        vamosConversar: "Vamos conversar",
      },
      sections: {
        sobre: "Sobre",
        projetos: "Projetos",
        habilidades: "Habilidades",
        experiencia: "Experiência",
        contato: "Contato",
      },
      about: {
        sub: "Sou estudante de Engenharia de Software na Unifio e apaixonado por desenvolvimento de aplicações web. Tenho uma base sólida em Java, PHP, Python, HTML, CSS e JavaScript, além de conhecimentos práticos em Tailwind CSS e Bootstrap. Atualmente, estou estudando frameworks como Spring Boot e Laravel, além de banco de dados MySQL. Meu foco é evoluir constantemente através de projetos acadêmicos e pessoais, buscando me tornar um desenvolvedor capaz de criar soluções funcionais, bem estruturadas e de impacto.",
      },
      projects: {
        sub: "Alguns trabalhos recentes.",
        sge: {
          title: "SGE — Gerenciamento de Atléticas",
          desc: "PHP, MySQL, Docker, Bootstrap. Controle de eventos e agenda pública.",
          alt: "Preview do Sistema de Gerenciamento de Atléticas",
          demo: "Demo",
          code: "Código",
          view: "Ver projeto",
          modal: {
            title: "SGE — Gerenciamento de Atléticas",
            coverAlt: "Tela do SGE com agenda pública e cadastro de eventos",
            coverCaption: "Preview do sistema em ambiente de desenvolvimento.",
            sections: {
              contexto: "Contexto",
              desafios: "Principais desafios",
              aprendizados: "Aprendizados",
              tecnologias: "Tecnologias",
              demoBtn: "Abrir demo",
              repoBtn: "Ver repositório"
            },
            content: {
              contexto: "O SGE (Sistema de Gerenciamento de Eventos) é uma aplicação web desenvolvida para o Centro Universitário UNIFIO com o objetivo de modernizar e centralizar a gestão de eventos esportivos e acadêmicos na quadra poliesportiva da instituição. O projeto foi construído em equipe, com versionamento no GitHub utilizando branches, pull requests e revisões de código. Também realizamos um levantamento de requisitos e uma entrevista real com a coordenação da faculdade para alinhar as necessidades do sistema.",
              desafios: [
                "Implementar autenticação segura com verificação em duas etapas (2FA).",
                "Gerenciar múltiplos níveis de acesso (usuário, administrador e superadmin).",
                "Construir uma agenda pública dinâmica sem exigir login.",
                "Manter comunicação assíncrona entre front-end e back-end via Fetch API e AJAX.",
                "Organizar o projeto em arquitetura MVC e integrar PDO, PHPMailer e Composer."
              ],
              aprendizados: [
                "Trabalho colaborativo com GitHub (branches, commits, PRs e code review).",
                "Experiência real de levantamento de requisitos e comunicação com cliente institucional.",
                "Criação de componentes PHP modulares seguindo boas práticas de MVC.",
                "Integração segura entre front-end (Fetch API/AJAX) e back-end PHP.",
                "Uso de Docker para ambiente padronizado e fácil deploy."
              ]
            }
          }
        },
        portfolio: {
          title: "Portfólio Pessoal",
          desc: "HTML5, CSS3, Bootstrap, JavaScript. Vitrine para exibir meus trabalhos e habilidades.",
          alt: "Preview do Portfólio Pessoal",
          demo: "Demo",
          code: "Código",
          view: "Ver projeto",
          modal: {
            title: "Portfólio Pessoal",
            coverAlt: "Tela do Portfólio Pessoal",
            coverCaption: "Preview do Portfólio Pessoal",
            sections: {
              contexto: "Contexto",
              desafios: "Principais desafios",
              aprendizados: "Aprendizados",
              tecnologias: "Tecnologias",
              demoBtn: "Abrir demo",
              repoBtn: "Ver repositório"
            },
            content: {
              contexto:
                "O Portfólio Pessoal foi desenvolvido com o objetivo de apresentar meus projetos, habilidades e experiências como desenvolvedor web. A ideia foi criar uma vitrine digital moderna, responsiva e leve, refletindo minha identidade visual e profissional. O projeto foi planejado do zero, com atenção a detalhes de UI/UX, SEO e performance, e passou por várias iterações até chegar ao design atual.",
              desafios: [
                "Criar um layout autoral e coerente com minha identidade profissional.",
                "Implementar transições suaves e animações com IntersectionObserver.",
                "Garantir responsividade total entre dispositivos móveis e desktops.",
                "Organizar o projeto com código limpo e modular (HTML, CSS e JS separados).",
                "Configurar deploy estático com domínio personalizado e HTTPS via GitHub Pages/Vercel."
              ],
              aprendizados: [
                "Boas práticas de design responsivo e acessibilidade.",
                "Uso de animações performáticas com JavaScript puro.",
                "Otimização de SEO e metadados para melhor indexação.",
                "Deploy contínuo e gerenciamento de domínio personalizado.",
                "Criação de uma estrutura escalável e fácil de atualizar."
              ]
            }
          }
        },

      },
      skills: {
        sub: "Tecnologias e ferramentas que uso no dia a dia.",
        groups: {
          backend: "Back-end",
          frontend: "Front-end",
          tools: "Ferramentas & DevOps",
          soft: "Soft skills",
          learning: "Estudando"
        },
        soft: {
          comunicacao: "Comunicação",
          equipe: "Trabalho em equipe",
          problemas: "Resolução de problemas",
          aprendizado: "Aprendizado contínuo",
          tempo: "Gestão de tempo"
        },
        levels: {
          basico: "Básico",
          intermediario: "Intermediário",
          avancado: "Avançado"
        }
      },
      experience: {
        education: {
          title: "Formação",
          course: "Engenharia de Software — UNIFIO",
          time: "2025 — 2028",
          desc: "Formação voltada ao desenvolvimento e gestão de sistemas, com base em lógica, programação, engenharia de requisitos, modelagem, bancos de dados, testes e metodologias ágeis. Ênfase em projetos práticos e boas práticas de desenvolvimento",
          coursesTitle: "Cursos Complementares",
          courses: [
            "Cisco — JavaScript Essentials 1",
            "Alura — Formação: HTML e CSS para projetos web",
            "Alura — Formação: Java com Orientação a Objetos",
          ],
        },
        jobs: {
          title: "Experiência",
          sge: {
            title: "SGE — Sistema de Gerenciamento de Eventos UNIFIO",
            time: "2025 • Projeto em implantação",
            desc: "Desenvolvimento full stack de um sistema acadêmico real para gerenciamento de eventos da UNIFIO.",
            items: [
              "Stack: PHP 8.2, MySQL, Docker, Bootstrap, MVC",
              "Versionamento via GitHub com branches e PRs",
              "PHPMailer e controle de permissões",
              "Reuniões de requisitos e documentação técnica",
            ],
          },
        },
      },
      contact: {
        sub: "Conte um pouco sobre sua necessidade. Eu retorno em breve.",
        sla: "Resposta em até 24h úteis.",
        channelsTitle: "Outros canais",
      },
      popup: {
        success: { title: "Mensagem enviada!", message: "Obrigado por entrar em contato. Vou responder em breve." },
        error:   { title: "Algo deu errado",   message: "Tente novamente em alguns instantes." },
        closeLabel: "Fechar popup"
      },
      form: {
        nomeLabel: "Nome",
        emailLabel: "E-mail",
        mensagemLabel: "Mensagem",
        enviar: "Enviar",
        nomeInvalid: "Informe seu nome.",
        emailInvalid: "Informe um e-mail válido.",
        mensagemInvalid: "Escreva uma mensagem.",
        sending: "Enviando...",
      },
      footer: {
        rights: "© {year} Bryan Alvarenga. Todos os direitos reservados.",
        copy: "Construído com Bootstrap + um toque de roxo",
      },
      errors: {
        connection: "Erro de conexão. Por favor, verifique sua internet e tente novamente."
      },
      ui: { close: "Fechar", escCloses: "ESC fecha" },
    },

    en: {
      a11y: {
        skipToContent: "Skip to content",
        openMenu: "Open menu",
        close: "Close",
        languageSelector: "Language selector",
      },
      nav: {
        menuTitle: "Menu",
        sobre: "About",
        projetos: "Projects",
        habilidades: "Skills",
        experiencia: "Experience",
        contato: "Contact",
      },
      hero: {
        badge: "Available for new projects",
        title: "Hi, I'm Bryan Alvarenga",
        text: "Web developer passionate about technology, turning ideas into working systems. Backend-focused with PHP, Java and MySQL; experienced with Docker, Bootstrap and Tailwind.",
        avatarAlt: "Bryan's profile photo",
      },
      cta: {
        verProjetos: "View projects",
        contato: "Contact me",
        vamosConversar: "Let's talk",
      },
      sections: {
        sobre: "About",
        projetos: "Projects",
        habilidades: "Skills",
        experiencia: "Experience",
        contato: "Contact",
      },
      about: {
        sub: "I'm a Software Engineering student at Unifio, passionate about building web applications. Strong foundation in Java, PHP, Python, HTML, CSS and JavaScript, with hands-on experience in Tailwind CSS and Bootstrap. Currently learning Spring Boot and Laravel, plus MySQL. I focus on constant improvement through academic and personal projects to build functional, well-structured, impactful solutions.",
      },
      projects: {
        sub: "Some recent work.",
        sge: {
          title: "SGE — Athletics Management",
          desc: "PHP, MySQL, Docker, Bootstrap. Event management and public calendar.",
          alt: "Preview of the Athletics Management System",
          demo: "Demo",
          code: "Code",
          view: "View project",
          modal: {
            title: "SGE — Athletics Management",
            coverAlt: "SGA screen with public calendar and event creation",
            coverCaption: "System preview in development environment.",
            sections: {
              contexto: "Context",
              desafios: "Key challenges",
              aprendizados: "Key learnings",
              tecnologias: "Technologies",
              demoBtn: "Open demo",
              repoBtn: "View repository"
            },
            content: {
              contexto: "The SGE (Event Management System) is a web application developed for UNIFIO University to modernize and centralize the management of sports and academic events held at the institution's gymnasium. The project was built collaboratively using GitHub version control (branches, pull requests, and code reviews). We also conducted a real requirement-gathering interview with the university coordination to understand their needs.",
              desafios: [
                "Implement secure authentication with two-factor verification (2FA).",
                "Handle multiple access levels (user, admin, and superadmin).",
                "Build a public calendar view without requiring login.",
                "Maintain asynchronous communication between front-end and back-end using Fetch API and AJAX.",
                "Structure the project under an MVC architecture and integrate PDO, PHPMailer, and Composer."
              ],
              aprendizados: [
                "Collaborative development using GitHub branches, commits, PRs, and reviews.",
                "Real experience conducting requirement analysis with institutional clients.",
                "Creation of modular PHP components following MVC best practices.",
                "Secure integration between front-end (Fetch API/AJAX) and PHP back-end.",
                "Containerized setup using Docker for consistent and reproducible environments."
              ]
            }
          }
        },
        portfolio: {
          title: "Personal Portfolio",
          desc: "HTML5, CSS3, Bootstrap, JavaScript. A showcase to present my work and skills.",
          alt: "Preview of the Personal Portfolio",
          demo: "Demo",
          code: "Code",
          view: "View project",
          modal: {
            title: "Personal Portfolio",
            coverAlt: "Screenshot of the Personal Portfolio",
            coverCaption: "Preview of the Personal Portfolio",
            sections: {
              contexto: "Overview",
              desafios: "Main Challenges",
              aprendizados: "Key Learnings",
              tecnologias: "Technologies",
              demoBtn: "Open demo",
              repoBtn: "View repository"
            },
            content: {
              contexto:
                "The Personal Portfolio was developed to present my projects, skills, and experience as a web developer. The goal was to create a modern, responsive, and lightweight digital showcase that reflects my personal and professional identity. The project was designed from scratch with a focus on UI/UX details, SEO, and performance, going through multiple iterations to reach the current design.",
              desafios: [
                "Designing an original layout aligned with my personal brand.",
                "Implementing smooth transitions and animations using IntersectionObserver.",
                "Ensuring full responsiveness across devices and screen sizes.",
                "Maintaining clean and modular code structure (HTML, CSS, and JS separated).",
                "Setting up static deploy with a custom domain and HTTPS via GitHub Pages/Vercel."
              ],
              aprendizados: [
                "Responsive design and accessibility best practices.",
                "Performant animations using pure JavaScript.",
                "SEO optimization and metadata structuring.",
                "Continuous deployment and custom domain management.",
                "Building a scalable and easily maintainable structure."
              ]
            }
          }
        },

      },
      skills: {
        sub: "Technologies and tools I use in my daily work.",
        groups: {
          backend: "Back-end",
          frontend: "Front-end",
          tools: "Tools & DevOps",
          soft: "Soft skills",
          learning: "Currently learning"
        },
        soft: {
          comunicacao: "Communication",
          equipe: "Teamwork",
          problemas: "Problem solving",
          aprendizado: "Continuous learning",
          tempo: "Time management"
        },
        levels: {
          basico: "Basic",
          intermediario: "Intermediate",
          avancado: "Advanced"
        }
      },
      experience: {
        education: {
          title: "Education",
          course: "Software Engineering — UNIFIO",
          time: "2025 — 2028",
          desc: "Program focused on software development and management: logic, programming, requirements engineering, modeling, databases, testing and agile methods. Emphasis on practical projects and best practices.",
          coursesTitle: "Complementary Courses",
          courses: [
            "Cisco — JavaScript Essentials 1",
            "Alura — Track: HTML & CSS for Web Projects",
            "Alura — Track: Object-Oriented Java",
          ],
        },
        jobs: {
          title: "Experience",
          sge: {
            title: "SGE — UNIFIO Event Management System",
            time: "2025 • In deployment",
            desc: "Full-stack development of a real academic system for managing UNIFIO events.",
            items: [
              "Stack: PHP 8.2, MySQL, Docker, Bootstrap, MVC",
              "Version control with GitHub (branches & PRs)",
              "PHPMailer and permission control",
              "Requirements meetings and technical docs",
            ],
          },
        },
      },
      contact: {
        sub: "Tell me about your needs. I’ll get back to you soon.",
        sla: "Replies within 24 business hours.",
        channelsTitle: "Other channels",
      },
      popup: {
        success: { title: "Message sent!", message: "Thank you for reaching out. I'll get back to you soon." },
        error:   { title: "Something went wrong", message: "Please try again in a moment." },
        closeLabel: "Close popup"
      },
      form: {
        nomeLabel: "Name",
        emailLabel: "Email",
        mensagemLabel: "Message",
        enviar: "Send",
        nomeInvalid: "Please enter your name.",
        emailInvalid: "Please enter a valid email.",
        mensagemInvalid: "Please write a message.",
        sending: "Sending...",
      },
      errors: {
        connection: "Connection error. Please check your internet and try again."
      },
      footer: {
        rights: "© {year} Bryan Alvarenga. All rights reserved.",
        copy: "Built with Bootstrap + a touch of purple",
      },
      ui: { close: "Close", escCloses: "ESC closes" },
    },

    es: {
      a11y: {
        skipToContent: "Saltar al contenido",
        openMenu: "Abrir menú",
        close: "Cerrar",
        languageSelector: "Selector de idioma",
      },
      nav: {
        menuTitle: "Menú",
        sobre: "Sobre mí",
        projetos: "Proyectos",
        habilidades: "Habilidades",
        experiencia: "Experiencia",
        contato: "Contacto",
      },
      hero: {
        badge: "Disponible para nuevos proyectos",
        title: "Hola, soy Bryan Alvarenga",
        text: "Desarrollador web apasionado por la tecnología y por convertir ideas en sistemas funcionales. Enfoque backend con PHP, Java y MySQL; experiencia con Docker, Bootstrap y Tailwind.",
        avatarAlt: "Foto de perfil de Bryan",
      },
      cta: {
        verProjetos: "Ver proyectos",
        contato: "Contactar",
        vamosConversar: "Hablemos",
      },
      sections: {
        sobre: "Sobre mí",
        projetos: "Proyectos",
        habilidades: "Habilidades",
        experiencia: "Experiencia",
        contato: "Contacto",
      },
      about: {
        sub: "Soy estudiante de Ingeniería de Software en Unifio y me apasiona el desarrollo web. Base sólida en Java, PHP, Python, HTML, CSS y JavaScript, con experiencia práctica en Tailwind CSS y Bootstrap. Actualmente estudio Spring Boot y Laravel, además de MySQL. Me enfoco en mejorar constantemente mediante proyectos académicos y personales para crear soluciones funcionales, bien estructuradas e impactantes.",
      },
      projects: {
        sub: "Algunos trabajos recientes.",
        sge: {
          title: "SGE — Gestión de Atléticas",
          desc: "PHP, MySQL, Docker, Bootstrap. Control de eventos y calendario público.",
          alt: "Vista previa del Sistema de Gestión de Atléticas",
          demo: "Demo",
          code: "Código",
          view: "Ver proyecto",
          modal: {
            title: "SGE — Gestión de Atléticas",
            coverAlt: "Pantalla del SGA con calendario público y creación de eventos",
            coverCaption: "Vista previa del sistema en entorno de desarrollo.",
            sections: {
              contexto: "Contexto",
              desafios: "Desafíos clave",
              aprendizados: "Aprendizajes",
              tecnologias: "Tecnologías",
              demoBtn: "Abrir demo",
              repoBtn: "Ver repositorio"
            },
            content: {
              contexto: "El SGE (Sistema de Gestión de Eventos) es una aplicación web desarrollada para el Centro Universitario UNIFIO con el objetivo de modernizar y centralizar la administración de eventos deportivos y académicos realizados en el gimnasio de la institución. El proyecto fue construido en equipo utilizando control de versiones en GitHub (ramas, pull requests y revisiones de código). Además, realizamos un levantamiento de requisitos y una entrevista real con la coordinación universitaria para comprender las necesidades del sistema.",
              desafios: [
                "Implementar autenticación segura con verificación en dos pasos (2FA).",
                "Gestionar múltiples niveles de acceso (usuario, administrador y superadministrador).",
                "Construir un calendario público dinámico sin requerir inicio de sesión.",
                "Mantener comunicación asíncrona entre el front-end y el back-end mediante Fetch API y AJAX.",
                "Organizar el proyecto con una arquitectura MVC e integrar PDO, PHPMailer y Composer."
              ],
              aprendizados: [
                "Trabajo colaborativo con GitHub (ramas, commits, PRs y revisión de código).",
                "Experiencia real en levantamiento de requisitos y comunicación con un cliente institucional.",
                "Creación de componentes PHP modulares siguiendo buenas prácticas de MVC.",
                "Integración segura entre el front-end (Fetch API/AJAX) y el back-end en PHP.",
                "Uso de Docker para crear un entorno estandarizado y facilitar el despliegue."
              ]
            }
          }
        },
        portfolio: {
          title: "Portafolio Personal",
          desc: "HTML5, CSS3, Bootstrap, JavaScript. Una vitrina para mostrar mis trabajos y habilidades.",
          alt: "Vista previa del Portafolio Personal",
          demo: "Demo",
          code: "Código",
          view: "Ver proyecto",
          modal: {
            title: "Portafolio Personal",
            coverAlt: "Captura de pantalla del Portafolio Personal",
            coverCaption: "Vista previa del Portafolio Personal",
            sections: {
              contexto: "Contexto",
              desafios: "Desafíos principales",
              aprendizados: "Aprendizajes",
              tecnologias: "Tecnologías",
              demoBtn: "Abrir demo",
              repoBtn: "Ver repositorio"
            },
            content: {
              contexto:
                "El Portafolio Personal fue desarrollado con el objetivo de presentar mis proyectos, habilidades y experiencias como desarrollador web. La meta fue crear una vitrina digital moderna, responsiva y ligera que refleje mi identidad profesional. El proyecto fue diseñado desde cero, con enfoque en detalles de UI/UX, SEO y rendimiento, pasando por varias iteraciones hasta alcanzar su versión actual.",
              desafios: [
                "Diseñar un layout original coherente con mi identidad profesional.",
                "Implementar transiciones suaves y animaciones con IntersectionObserver.",
                "Asegurar una total adaptabilidad en dispositivos móviles y de escritorio.",
                "Mantener un código limpio y modular (HTML, CSS y JS separados).",
                "Configurar el despliegue estático con dominio personalizado y HTTPS mediante GitHub Pages/Vercel."
              ],
              aprendizados: [
                "Buenas prácticas de diseño responsivo y accesibilidad.",
                "Animaciones optimizadas usando JavaScript puro.",
                "Optimización SEO y estructuración de metadatos.",
                "Despliegue continuo y gestión de dominio personalizado.",
                "Construcción de una estructura escalable y fácil de mantener."
              ]
            }
          }
        },

      },
      skills: {
        sub: "Tecnologías y herramientas que utilizo en mi día a día.",
        groups: {
          backend: "Back-end",
          frontend: "Front-end",
          tools: "Herramientas y DevOps",
          soft: "Habilidades blandas",
          learning: "En aprendizaje"
        },
        soft: {
          comunicacao: "Comunicación",
          equipe: "Trabajo en equipo",
          problemas: "Resolución de problemas",
          aprendizado: "Aprendizaje continuo",
          tempo: "Gestión del tiempo"
        },
        levels: {
          basico: "Básico",
          intermediario: "Intermedio",
          avancado: "Avanzado"
        }
      },
      experience: {
        education: {
          title: "Formación",
          course: "Ingeniería de Software — UNIFIO",
          time: "2025 — 2028",
          desc: "Formación enfocada en desarrollo y gestión de software: lógica, programación, requisitos, modelado, bases de datos, pruebas y metodologías ágiles. Énfasis en proyectos prácticos y buenas prácticas.",
          coursesTitle: "Cursos complementarios",
          courses: [
            "Cisco — JavaScript Essentials 1",
            "Alura — Formación: HTML y CSS para proyectos web",
            "Alura — Formación: Java con Programación Orientada a Objetos",
          ],
        },
        jobs: {
          title: "Experiencia",
          sge: {
            title: "SGE — Sistema de Gestión de Eventos de UNIFIO",
            time: "2025 • En implementación",
            desc: "Desarrollo full-stack de un sistema académico real para gestionar eventos de UNIFIO.",
            items: [
              "Stack: PHP 8.2, MySQL, Docker, Bootstrap, MVC",
              "Control de versiones con GitHub (ramas y PRs)",
              "PHPMailer y control de permisos",
              "Reuniones de requisitos y documentación técnica",
            ],
          },
        },
      },
      contact: {
        sub: "Cuéntame tu necesidad. Te responderé pronto.",
        sla: "Respuesta en 24 horas hábiles.",
        channelsTitle: "Otros canales",
      },
      popup: {
        success: { title: "¡Mensaje enviado!", message: "Gracias por ponerte en contacto. Te responderé pronto." },
        error:   { title: "Algo salió mal",    message: "Inténtalo nuevamente en unos momentos." },
        closeLabel: "Cerrar popup"
      },
      form: {
        nomeLabel: "Nombre",
        emailLabel: "Correo",
        mensagemLabel: "Mensaje",
        enviar: "Enviar",
        nomeInvalid: "Ingresa tu nombre.",
        emailInvalid: "Ingresa un correo válido.",
        mensagemInvalid: "Escribe un mensaje.",
        sending: "Enviando...",
      },
      errors: {
        connection: "Error de conexión. Por favor, revisa tu internet e inténtalo de nuevo."
      },
      footer: {
        rights: "© {year} Bryan Alvarenga. Todos los derechos reservados.",
        copy: "Construido con Bootstrap + un toque de púrpura",
      },
       ui: { close: "Cerrar", escCloses: "ESC cierra" },
    },

    ja: {
      a11y: {
        skipToContent: "コンテンツへスキップ",
        openMenu: "メニューを開く",
        close: "閉じる",
        languageSelector: "言語セレクター",
      },
      nav: {
        menuTitle: "メニュー",
        sobre: "自己紹介",
        projetos: "プロジェクト",
        habilidades: "スキル",
        experiencia: "経験",
        contato: "お問い合わせ",
      },
      hero: {
        badge: "新しいプロジェクト受付中",
        title: "こんにちは、ブライアン・アルヴァレンガです",
        text: "テクノロジーが大好きで、アイデアを実用的なシステムにするWeb開発者。PHP、Java、MySQL を中心に、Docker・Bootstrap・Tailwind の経験があります。",
        avatarAlt: "ブライアンのプロフィール写真",
      },
      cta: {
        verProjetos: "作品を見る",
        contato: "連絡する",
        vamosConversar: "相談しましょう",
      },
      sections: {
        sobre: "自己紹介",
        projetos: "プロジェクト",
        habilidades: "スキル",
        experiencia: "経験",
        contato: "お問い合わせ",
      },
      about: {
        sub: "私はUnifioのソフトウェア工学の学生で、Webアプリ開発に情熱を持っています。Java、PHP、Python、HTML、CSS、JavaScriptの基礎があり、Tailwind CSSとBootstrapの実務経験があります。現在はSpring BootとLaravel、そしてMySQLを学習中。学業・個人プロジェクトを通じて、機能的で構造の良い、価値あるソリューションを作ることを目指しています。",
      },
      projects: {
        sub: "最近の制作物。",
        sge: {
          title: "SGE — アスレチック管理",
          desc: "PHP、MySQL、Docker、Bootstrap。イベント管理と公開カレンダー。",
          alt: "アスレチック管理システムのプレビュー",
          demo: "デモ",
          code: "コード",
          view: "作品を見る",
          modal: {
            title: "SGE — アスレチック管理",
            coverAlt: "公開カレンダーとイベント作成画面",
            coverCaption: "開発環境でのシステムプレビュー。",
            sections: {
              contexto: "コンテキスト",
              desafios: "主な課題",
              aprendizados: "学び",
              tecnologias: "技術",
              demoBtn: "デモを開く",
              repoBtn: "リポジトリを見る"
            },
            content: {
              contexto: "SGE（イベント管理システム）は、UNIFIO大学の体育館で行われるスポーツおよび学術イベントの管理を近代化・一元化するために開発されたWebアプリケーションです。本プロジェクトはチーム開発として実施され、GitHub上でブランチ運用・プルリクエスト・コードレビューを用いて共同作業を行いました。また、大学のコーディネーターとの実際のヒアリングを通じて、システム要件を明確化しました。",
              desafios: [
                "2段階認証（2FA）による安全なログイン認証の実装。",
                "ユーザー、管理者、スーパー管理者という複数レベルのアクセス制御。",
                "ログイン不要で閲覧できる公開カレンダーの構築。",
                "Fetch APIおよびAJAXを用いたフロントエンドとバックエンド間の非同期通信の維持。",
                "MVCアーキテクチャに基づくプロジェクト構成とPDO・PHPMailer・Composerの統合。"
              ],
              aprendizados: [
                "GitHubでの共同開発（ブランチ、コミット、PR、コードレビュー）。",
                "大学の実案件を想定した要件定義とクライアントコミュニケーションの経験。",
                "MVCのベストプラクティスに沿ったモジュール化PHPコンポーネントの作成。",
                "Fetch API/AJAXを用いたフロントエンドとPHPバックエンドの安全な統合。",
                "Dockerを活用した統一的な開発環境と容易なデプロイ実現。"
              ]
            }
          }
        },
        portfolio: {
          title: "ポートフォリオサイト",
          desc: "HTML5、CSS3、Bootstrap、JavaScript。自分の作品やスキルを紹介するためのサイトです。",
          alt: "ポートフォリオサイトのプレビュー",
          demo: "デモ",
          code: "コード",
          view: "プロジェクトを見る",
          modal: {
            title: "ポートフォリオサイト",
            coverAlt: "ポートフォリオサイトのスクリーンショット",
            coverCaption: "ポートフォリオサイトのプレビュー",
            sections: {
              contexto: "概要",
              desafios: "主な課題",
              aprendizados: "学んだこと",
              tecnologias: "使用技術",
              demoBtn: "デモを開く",
              repoBtn: "リポジトリを見る"
            },
            content: {
              contexto:
                "このポートフォリオサイトは、私のプロジェクト、スキル、経験を紹介するために開発されました。モダンでレスポンシブ、かつ軽量なデジタルショーケースとして、自分のアイデンティティを反映させることを目指しました。UI/UX、SEO、パフォーマンスに重点を置き、何度も改良を重ねて現在のデザインに至りました。",
              desafios: [
                "自分のブランドに合ったオリジナルデザインを作成すること。",
                "IntersectionObserverを使用してスムーズなトランジションとアニメーションを実装すること。",
                "あらゆるデバイスで完全なレスポンシブ対応を実現すること。",
                "HTML、CSS、JSを分離したクリーンでモジュール化されたコード構造を維持すること。",
                "GitHub Pages/Vercelを利用し、独自ドメインとHTTPSで静的デプロイを設定すること。"
              ],
              aprendizados: [
                "レスポンシブデザインとアクセシビリティのベストプラクティス。",
                "純粋なJavaScriptによる高パフォーマンスなアニメーション。",
                "SEO最適化とメタデータ構造化。",
                "継続的デプロイと独自ドメイン管理の実践。",
                "スケーラブルで保守しやすい構成の構築。"
              ]
            }
          }
        },

      },
      skills: {
        sub: "日常的に使用している技術とツールです。",
        groups: {
          backend: "バックエンド",
          frontend: "フロントエンド",
          tools: "ツールとDevOps",
          soft: "ソフトスキル",
          learning: "学習中"
        },
        soft: {
          comunicacao: "コミュニケーション",
          equipe: "チームワーク",
          problemas: "問題解決",
          aprendizado: "継続的な学習",
          tempo: "時間管理"
        },
        levels: {
          basico: "初級",
          intermediario: "中級",
          avancado: "上級"
        }
      },
      experience: {
        education: {
          title: "学歴",
          course: "ソフトウェア工学 — UNIFIO",
          time: "2025 — 2028",
          desc: "論理・プログラミング・要件工学・モデリング・データベース・テスト・アジャイル手法など、開発とマネジメントに焦点を当てたカリキュラム。実践的なプロジェクトとベストプラクティスを重視。",
          coursesTitle: "補完コース",
          courses: [
            "Cisco — JavaScript Essentials 1",
            "Alura — HTML & CSS for Web Projects",
            "Alura — 面向对象Java（OOP）",
          ],
        },
        jobs: {
          title: "職務経験",
          sge: {
            title: "SGE — UNIFIOイベント管理システム",
            time: "2025・導入中",
            desc: "UNIFIOのイベントを管理する実運用の学術システムをフルスタックで開発。",
            items: [
              "スタック：PHP 8.2、MySQL、Docker、Bootstrap、MVC",
              "GitHubでのブランチ運用とPR",
              "PHPMailerと権限管理",
              "要件定義の打合せと技術ドキュメント作成",
            ],
          },
        },
      },
      contact: {
        sub: "ご要望をお聞かせください。追ってご連絡します。",
        sla: "営業日24時間以内に返信します。",
        channelsTitle: "その他の連絡先",
      },
      popup: {
        success: { title: "送信完了しました！", message: "お問い合わせありがとうございます。追ってご連絡いたします。" },
        error:   { title: "エラーが発生しました", message: "しばらくしてからもう一度お試しください。" },
        closeLabel: "ポップアップを閉じる"
      },
      form: {
        nomeLabel: "お名前",
        emailLabel: "メールアドレス",
        mensagemLabel: "メッセージ",
        enviar: "送信",
        nomeInvalid: "お名前を入力してください。",
        emailInvalid: "有効なメールアドレスを入力してください。",
        mensagemInvalid: "メッセージを入力してください。",
        sending: "送信中...",
      },
      errors: {
        connection: "通信エラーです。インターネット接続を確認して再試行してください。"
      },
      footer: {
        rights: "© {year} Bryan Alvarenga. 無断複写・転載を禁じます。",
        copy: "Bootstrap と少しのパープルで構築",
      },
      ui: { close: "閉じる", escCloses: "ESCで閉じる" },
    },
  };

  function get(obj, path) {
    if (!path || typeof path !== "string") return undefined;
    return path.split(".")
      .reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj);
  }

  window.translations = translations;
  window.get = get;

  window.setAppLanguage = function setAppLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    applyLanguage(lang);
    document.dispatchEvent(new Event('app:languagechange'));
  };

  window.applyLanguage = function applyLanguage(lang) {
    const dict = translations[lang] || translations.pt;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = get(dict, key);
      if (typeof value === "string") el.textContent = value;
      if (key === "footer.rights" && typeof value === "string") {
        el.textContent = value.replace("{year}", new Date().getFullYear());
      }
    });

    document.querySelectorAll(
      "[data-i18n]:not([data-i18n-attr]):not(input):not(textarea):not(select)"
    ).forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = get(dict, key);
      if (typeof value !== "string") return;
      el.textContent = key === "footer.rights"
        ? value.replace("{year}", new Date().getFullYear())
        : value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const attrs = (el.getAttribute("data-i18n-attr") || "")
        .split(",").map((a) => a.trim()).filter(Boolean);
      const value = get(dict, key);
      if (typeof value !== "string") return;
      attrs.forEach((attr) => el.setAttribute(attr, value));
    });
  };
})();