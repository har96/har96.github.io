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
        magnitude: 5,
    },
    {
        title: "Fava-Plaid Integration",
        subtitle: "APIs and Full-stack Development",
        description: "Fava is a pre-existing personal ledger web portal. I wanted to be able to import transactions from my bank account, so I created a fork of Fava that included an integration with the Plaid API for importing transactions.",
        tech_stack: [ "Typescript", "Flask", "REST Client", "Frontend Dev" ],
        link: "https://github.com/har96/fava-plaid",
        start_date: new Date("2020-06"),
        category: "Personal",
        magnitude: 4
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
        description: "I was responsible for post processing results from ERDC's covid forecasting model. I led the effort to format the results for the forecasting hub used by the CDC, which allowed ERDC to contribute to the forecasting models influencing national policy.",
        tech_stack: [ "Python", "Data Processing" ],
        link: "https://github.com/erdc-cv19/covid19-forecast-hub",
        start_date: new Date("2020-05"),
        category: "Professional",
        magnitude: 7,
    },
    {
        title: "Radiative Transfer Simulation",
        subtitle: "Distributed Computing",
        description: "I was the primary developer for a C radiative transfer simulation that used a complex parallel processing algorithm to partition geometry data for photonic modeling via ray casting.",
        tech_stack: [ "C", "Parallel Algorithms", "MPI", "Thermal Physics" ],
        link: "http://dx.doi.org/10.1145/3374135.3385310",
        start_date: new Date("2019-01"),
        category: "Professional",
        magnitude: 8
    },
    {
        title: "Machine-Agnostic Efficient Ray Tracing",
        subtitle: "Graphics Card Programming and Rendering",
        description: "I built C++ API wrappers to provide a cross-platform ray casting interface for NVIDIA Optix on the GPU and Intel Embree on the CPU, allowing our clients to easily add machine-agnostic ray casting to their rendering pipeline.",
        tech_stack: [ "C++", "NVIDIA Optix", "Intel Embree" ],
        link: "",
        start_date: new Date("2021-10"),
        category: "Professional",
        magnitude: 8
    },
    {
        title: "Thermal Vegetation Modeling",
        subtitle: "Software Engineering Architecture",
        description: "I completely rewrote a legacy thermal vegetation simulation in modern C++, achieving easy validation and verification in addition to high performance with a modular API complete with a unit test suite, a continuous integration pipeline through Gitlab, decoupled code design, and python bindings for public C++ objects and routines.",
        tech_stack: [ "C++", "Google Test", "Gitlab", "Object Oriented Design", "pybind11" ],
        link: "",
        start_date: new Date("2021-10"),
        category: "Professional",
        magnitude: 9,
    }
]
