import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Paulo",
    lastName: "Souza",
    // initials: "js",
    position: "Desenvolvedor Junior (Front-End)",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            text: 'Vivendo à base de café'
        },
        {
            emoji: '🌎',
            text: 'Morando no Brasil'
        },
        {
            emoji: "💼",
            text: "Desenvolvedor de Software JR"
        },
        {
            emoji: "📧",
            text: "paulo18santos2000@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/Paulo.Henrique2552",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/henri_souza616/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/phs-santos",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/paulo-souza-82a123248/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }
    ],
    bio: "Olá! Eu sou o Paulo, um desenvolvedor de software júnior na pxTalk. Atualmente, estou estudando Desenvolvimento de Software Multiplataforma na Fatec de Matão. Tenho grande interesse em leitura, RPG e música. Além disso, acredito que a inteligência artificial um dia vai nós governar. Seria ótimo se você considerasse a possibilidade de me contratar!",
    skills:
        {
            proficientWith: ['react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'vue.js', '.NET Framework', 'Microsoft SQL Server', 'MongoDB', 'nodejs', 'c#' ],
            exposedTo: ['Back-End Development']
        }
    ,
    hobbies: [
        {
            label: 'ler',
            emoji: '📖'
        },
        {
            label: 'musica',
            emoji: '🎶'
        },
        {
            label: 'filmes',
            emoji: '🎥'
        },
        {
            label: 'rpg',
            emoji: '🎲'
        }
    ],
    portfolio: [ 
        {
            title: "Landing Page",
            live: "https://www.paulohsouza.com.br/#/",
            source: "https://github.com/phs-santos/portifolio-paulo",
            image: mock1
        },
        {
            title: "Cronômetro de Estudos",
            live: "https://alura-studies-brown.vercel.app/",
            source: "https://github.com/phs-santos/alura-studies",
            image: mock2
        }
    ]
}