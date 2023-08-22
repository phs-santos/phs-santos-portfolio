import self from "../img/self.jpeg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
// export let colors = ["rgb(182,221,255)", "rgb(217,552,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Paulo",
    lastName: "Souza",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "Desenvolvedor Junior (Front-End)",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
            source: "",
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