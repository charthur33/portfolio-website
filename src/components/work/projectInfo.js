
const gitHubProjects = [
    {
        title: "Personal 'Post-it' Board",
        description: "Personal 'Post-it' board app developed using MERN stack and JWT authentication.",
        technologies: "Node.js | Express.js | React.js | MongoDB | JWT Authentication | JavaScript | HTML | CSS",
        codeLink: "https://github.com/charthur33/post-it-board",
        deployLink: "https://my-post-it-board.herokuapp.com/"
    },
    {
        title: "Professional Car Review Blog",
        description: "Car review website developed using EJS templating engine along with YouTube Data V3 and Mailchimp APIs.",
        technologies: "Node.js | Express.js | EJS | MongoDB | YouTube Data V3 API | Mailchimp API | Nodemailer | JavaScript | HTML | CSS",
        codeLink: "https://github.com/charthur33/moto-review-blog",
        deployLink: "https://spg-moto-reviews.herokuapp.com/"
    }
];

const otherProjects = [
    {
        title:"Custom Keyboard/Synthesizer",
        description:"BSEE Embedded Systems Capstone project to design a custom MIDI-capable music keyboard/synthesizer using clever engineering and an arduino mega.",
        projectTitle:"Upgraded MIDI-Capable Music Keyboard/Synthesizer"
    }
];

module.exports = {
    gitHub: gitHubProjects,
    other: otherProjects
}