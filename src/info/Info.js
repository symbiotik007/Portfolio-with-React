import self from "../img/myself.jpg"
import backgroundhk from "../img/backhacking.jpg"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
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
    firstName: "Óscar ",
    lastName: "Bolaños",
    initials: "js",
    position: "an IT Support Engineer",
    selfPortrait: self,
    backgroundimage: backgroundhk,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🏋️‍♂️',
            text: 'fueled by proteins and intense trainnings',
        },
        {
            emoji: '🌎',
            text: 'based at Colombia'
        },
        {
            emoji: "💼",
            text: "IT Support Engineer at Instaleap"
        },
        {
            emoji: "📧",
            text: "oscar.bolanos@instaleap.com"
        }
    ],
    socials: [
        {
            link: "https://linkedin.com/in/oscandrebol/",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://github.com/symbiotik007/",
            icon: "fa fa-github"
        },
        {
            link: "https://instagram.com/symbiotik_007/",
            icon: 'fa fa-instagram'
        },      
        

    ],
    bio: "Hello! I'm Óscar. I'm a IT Support Engineer currently working at Instaleap.io. I've studied Foreign Languages but I ended working on IT by my talent and passion to computers and coding. I enjoy .br/.mx/.pt/ .co/ food, and I believe artificial intelligence will inevitably rule us all one day if we let them know how to process, code and create sentiments and emotions from humans on machines",
    skills:
    {
        proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
        exposedTo: ['nodejs', 'python', 'adobe illustrator']
    }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }

    ],
    portfolio: [
        {
            title: "Web-accessible CRUD API ",
            live: "working on it",
            source: "working on it",
            image: backgroundhk
        },
        {
            title: "OAuth - User Authentication & Authorization",
            live: "working on it",
            source: "working on it",
            image: backgroundhk
        },
        {
            title: "Web Scrapper",
            live: "working on it",
            source: "working on it",
            image: backgroundhk
        },
        {
            title: "Blockchain Cipher",
            live: "working on it",
            source: "working on it",
            image: backgroundhk
        },
        {
            title: "iTeknology eCommerce",
            live: "working on it",
            source: "working on it",
            image: backgroundhk
        }
    ]
}