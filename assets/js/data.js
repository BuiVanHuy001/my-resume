export const basicInfo = {
    name: 'Bùi Văn Huy',
    job: 'Web Developer',
    contact: [
        {
            name: 'Email',
            value: 'work.buivanhuy@gmail.com',
            iconName: 'bi-envelope',
        },
        {
            name: 'Phone',
            value: '0988 888 888',
            iconName: 'bi-telephone',
        },
        {
            name: 'Location',
            value: 'Ho Chi Minh City, Viet Nam',
            iconName: 'bi-geo-alt',
        },
        {
            name: 'Date of Birth',
            value: 'Nov 10, 2001',
            iconName: 'bi-calendar',
        }

    ],
    avatar: 'assets/images/my-avatar.webp',
    cv_PDF: 'assets/files/cv.pdf',
    socials: [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/buivanhuy.dev',
            icon: 'bi-facebook'
        },
        {
            name: 'github',
            link: 'https://www.github.com/buivanhuy-dev',
            icon: 'bi-github'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/buivanhuy-dev',
            icon: 'bi-linkedin'
        }
    ]
}

export const aboutMe = [
    'I am a passionate Web Developer and UI/UX Designer based in Ho Chi Minh city, Vietnam, with a keen interest in creating user-friendly and visually appealing digital experiences. As an aspiring professional, I enjoy transforming complex problems into simple, elegant, and intuitive solutions.',
    'I specialize in building functional and aesthetically pleasing websites that enhance user experience. My goal is to develop creative and engaging digital products that effectively communicate brand identity. Eager to learn and grow, I am excited to contribute to innovative projects and collaborate with dynamic teams.'
];

export const skills = [
    {
        name: 'Front-End',
        icon: 'bi-cast',
        technical: [
            {
                name: 'ReactJS',
                level: 5
            },
            {
                name: 'Bootstrap, TailwindCSS',
                level: 4
            },
            {
                name: 'Webpack, Vite',
                level: 3.5
            },
        ],
    },
    {
        name: 'Back-End',
        icon: 'bi bi-code-slash',
        technical: [
            {
                name: 'Laravel',
                level: 5
            },
            {
                name: 'NodeJS, ExpressJS',
                level: 4
            },
            {
                name: 'DotNet Core',
                level: 2.5
            },
        ],
    },
    {
        name: 'Tools',
        icon: 'bi-tools',
        technical: [
            {
                name: 'Git,',
                level: 5
            },
            {
                name: 'Postman',
                level: 4.5
            },
            {
                name: 'Docker',
                level: 2.5
            }]
    },
    {
        name: 'Soft Skills',
        icon: 'bi-person-lines-fill',
        technical: [
            {
                name: 'Teamwork',
                level: 5
            },
            {
                name: 'Self study',
                level: 4.5
            },
            {
                name: 'Problem solving',
                level: 4.5
            }
        ]
    }
];

export const educations = [
    {
        name: 'VietMy College',
        major: 'Software Development',
        date: '2023 - Present',
    },
    {
        name: 'Green Academy',
        major: 'PHP & Laravel Development',
        date: '2023 - 2024',
    }
]

export const certifications = [
    {
        name: 'IELTS 6.5',
        organization: 'British Council',
        date: '2020',
    },
    {
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        organization: 'Udemy',
        date: '2021',
    },
    {
        name: 'Meta Front-End Developer',
        organization: 'Codecademy',
        date: '2021',
    },
]

export const projects = [
    {
        name: 'Online Learning Platform',
        slug: 'project-1',
        role: 'Backend developer',
        thumbnail: 'assets/images/projects/project-1.webp',
        duration: '3 months',
        teamSize: '5 members',
        descriptions: [
            ' I developed an Online Learning Platform designed to provide high-quality courses and a flexible learning experience for users. The project focused on building a user-friendly system that supports multi-platform access and integrates modern features such as personalized learning paths, progress tracking, and interactive communication between instructors and learners.',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, Redux, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional online learning platform that enables users to access knowledge anytime, anywhere. The project received positive feedback from users and significantly enhanced the learning experience.',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://laravel.com/'
    },
    {
        name: 'Pizza Delivery Website',
        slug: 'project-2',
        role: 'Ful-stack developer',
        thumbnail: 'assets/images/projects/project-2.webp',
        duration: '2 months',
        teamSize: '3 members',
        descriptions: [
            'I developed a Pizza Delivery Website to provide customers with a seamless online ordering experience. The platform allows users to browse the menu, customize their orders, and track deliveries in real-time. The project focused on creating a responsive and user-friendly interface while ensuring secure payment processing.',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional pizza delivery platform that enhances customer satisfaction and streamlines the ordering process. The project received positive feedback from users and improved operational efficiency for the business.',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://laravel.com/'
    },
    {
        name: 'ChatApp',
        slug: 'project-3',
        role: 'Back-end developer',
        thumbnail: 'assets/images/projects/project-3.webp',
        duration: '1 months',
        teamSize: '6 members',
        descriptions: [
            'I developed a real-time ChatApp to enable seamless communication between users. The app supports text messaging, file sharing, and group chats, with a focus on low latency and high reliability. The project aimed to provide a smooth and intuitive user experience.',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional chat application that provides users with a reliable and engaging communication platform. The project was praised for its performance and ease of use.',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://laravel.com/'
    },
    {
        name: 'Ecommerce Website',
        slug: 'project-4',
        role: 'Backend developer',
        thumbnail: 'assets/images/projects/project-4.webp',
        duration: '3 months',
        teamSize: '5 members',
        descriptions: [
            'I developed an Ecommerce Website to provide users with a seamless online shopping experience. The platform includes features such as product browsing, cart management, and secure payment processing. The project focused on scalability and performance to handle high traffic. ',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, Redux, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional ecommerce platform that enhances the shopping experience for users and drives sales for the business.',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://laravel.com/'
    },
    {
        name: 'Elegant Restaurant',
        slug: 'project-2',
        role: 'Ful-stack developer',
        thumbnail: 'assets/images/projects/project-5.webp',
        duration: '7 months',
        teamSize: '1 members',
        descriptions: [
            'I developed an Elegant Restaurant Website to showcase the restaurant\'s menu, ambiance, and reservation system. The platform provides users with an intuitive interface to explore dishes, book tables, and contact the restaurant. The project focused on creating a visually appealing and responsive design.',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional restaurant website that enhances the restaurant\'s online presence and improves customer engagement',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://buivanhuy001.github.io/LaurentElegant-Restaurant-Theme/laurent.qodeinteractive.com/index.html'
    },
    {
        name: 'Alpha',
        slug: 'project-6',
        role: 'Back-end developer',
        thumbnail: 'assets/images/projects/project-6.webp',
        duration: '5 months',
        teamSize: '2 members',
        descriptions: [
            'I developed Alpha, a comprehensive platform designed to streamline project management and team collaboration. The platform includes features such as task tracking, file sharing, and real-time communication. The project focused on creating a scalable and user-friendly solution for teams.',
        ],
        tech_stack: [
            {
                name: 'Front-end: ',
                technicals: 'ReactJS, TailwindCSS, Axios'
            },
            {
                name: 'Back-end: ',
                technicals: 'Laravel 11, RESTful APIs'
            },
            {
                name: 'Database: ',
                technicals: 'MySQL'
            },
            {
                name: 'Real-time Communication: ',
                technicals: 'Laravel Pusher'
            },
            {
                name: 'Payment Integration: ',
                technicals: 'VNPAY'
            },
            {
                name: 'Version Control: ',
                technicals: 'Git'
            },
        ],
        result: 'The result is a fully functional project management platform that enhances team productivity and collaboration.',
        source_code: 'https://github.com/BuiVanHuyyy/CodeZone',
        demo: 'https://laravel.com/'
    },

]

export const testimonials = [
    {
        name: 'Daniel Lewis',
        avatar: './assets/images/testimonials/avatar_1.webp',
        content: 'Working with Huy was a great experience. Despite being an intern, they showed enthusiasm and a strong willingness to learn. Their contributions to our project were valuable.'
    },
    {
        name: 'Jessica Miller',
        avatar: './assets/images/testimonials/avatar_2.webp',
        content: 'Huy demonstrated great potential in web design. They were eager to take on challenges and helped refine our ideas into a clean, modern design.'
    },
    {
        name: 'Emily Evans',
        avatar: './assets/images/testimonials/avatar_3.webp',
        content: 'Even as an intern, Huy brought fresh ideas and creativity to the team. Their attention to detail made a real difference in our project.'
    },
    {
        name: 'Henry William',
        avatar: '../assets/images/testimonials/avatar_4.webp',
        content: 'We truly appreciate Huy’s dedication and effort. They were proactive, eager to learn, and contributed meaningfully to our web development process.'
    }
]