export interface Project {
    title: string;
    subtitle: string;
    description: string;
    tech_stack: string[];
    link: string;
    start_date: Date;
    category: string;
    magnitude: number;
}

export const PROJECTS: Project[] = [
    /*
    {
        title: "Portfolio",
        subtitle: "",
        description: "This website",
        tech_stack: [ "Angular", "Typescript", "SCSS", "Bootstrap" ],
        link: "http://har96.github.io",
        start_date: new Date("2022-01")
    },
    */
    {
        title: "Orator - Accessible IDE",
        subtitle: "Frontend Web Development",
        description: "My team placed first overall at the BullyHack MLH hackathon with this submission. In just 24 hours, we built a website that provided an accessible code editor that allowed disabled engineers to code with their voice. I was the primary javascript developer.",
        tech_stack: [ "javascript", "jQuery", "REST API", "Google Cloud" ],
        link: "https://github.com/HoltHunter/BullyHack20",
        start_date: new Date("2020-01-22"),
        category: "Personal",
        magnitude: 7,
    },
    {
        title: "Fava-Plaid Integration",
        subtitle: "APIs and Full-stack Development",
        description: "Fava is a pre-existing personal ledger web portal. I wanted to be able to import transactions from my bank account, so I created a fork of Fava that included an integration with the Plaid API for importing transactions.",
        tech_stack: [ "Typescript", "Flask", "REST Client", "Frontend Dev" ],
        link: "https://github.com/har96/fava-plaid",
        start_date: new Date("2020-06"),
        category: "Personal",
        magnitude: 5
    },
    {
        title: "TableTennisTrainer - Intelligent Ping Pong Launcher",
        subtitle: "Computer Vision and Embedded Programming",
        description: "I lead my sensior design team in creating an automatic ping pong ball launcher that used an Xbox Kinect to locate the user on the other side of the table and launch the ball in their direction. I was responsible for the computer vision component.",
        tech_stack: [ "Python", "OpenCV", "Raspberry Pi" ],
        link: "https://github.com/har96/TableTennisTrainer",
        start_date: new Date("2018-01"),
        category: "Academic",
        magnitude: 6
    },
    {
        title: "Covid-19 Forecasting Hub",
        subtitle: "Data Processing",
        description: "I was responsible for post processing results from ERDC's covid forecasting model. I led the effort to format the results for the forecasting hub used by the CDC and gave ERDC a role in providing useful national health data.",
        tech_stack: [ "Python", "Data Processing" ],
        link: "https://github.com/erdc-cv19/covid19-forecast-hub",
        start_date: new Date("2020-05"),
        category: "Work",
        magnitude: 8,
    },
    {
        title: "Radiative Transfer Simulation",
        subtitle: "Physics Modeling",
        description: "I was the primary developer for a C radiative transfer simulation that used a complex parallel processing algorithm to partition geometry data for photonic modeling via ray casting.",
        tech_stack: [ "C", "Parallel Algorithms", "MPI", "Thermal Physics" ],
        link: "",
        start_date: new Date("2019-01"),
        category: "Work",
        magnitude: 9
    }
]
