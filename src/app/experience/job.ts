export interface Job {
    title: string;
    employer: string;
    skills: string[];
    description: string;
    start_date: Date;
    end_date: Date;
}

export const EXPERIENCE: Job[] = [
      {
          title: "Student Intern",
          employer: "US Army Corps of Engineers",
          skills: ["Python", "C Programming"],
          start_date: new Date("2012-05"),
          end_date: new Date("2018-08"),
          description: `
Developed programs for tradespace analysis, filesystem testing, database programming, and game engine visualization in numerous technologies including Python, C, and Bash through high school and college.`,
      },
      {
          title: "Research Computer Engineer",
          employer: "US Army Corp of Engineers",
          skills: ["Python", "C", "C++", "Bash", "Parallel Processing", "Unix/Linux", "Machine Learning", "Image Processing", "Graphics Card Programming", "HTML/Javascript", "SQL"],
          start_date: new Date("2019-01-14"),
          end_date: new Date("2022-12-02"),
          description: `
Specialized in parallelizing C and C++ simulation software for High Performance Computing, developing data processing pipelines and visualizations with Python, automating shell workflows in Linux/Unix, and writing technical publications. Published seven peer-reviewed papers, four as first author. Presented my research at two conferences as well as numerous internal briefings and project showcases.`
      },
      {
          title: "Software Engineer",
          employer: "Dassault Systemes",
          skills: ["C++", "Python", "Threaded Concurrency", "Unix/Linux", "Google Test", "Agile Development", "Software Lifecycle Management" ],
          start_date: new Date("2022-12-05"),
          end_date: new Date(0),
          description: `
Engaged in designing and developing code for both modern C++ and Python components of a semiconductor revision control product. I play a pivotal role in designing and building core API components, algorithms, and data models for our Python layer, while implementing threaded components and developing new features in our C++ application.`
      }
];
