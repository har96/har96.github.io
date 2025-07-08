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
          skills: ["Python", "C", "Bash", "Database Programming", "Game Engine Development", "Tradespace Analysis"],
          start_date: new Date("2012-05"),
          end_date: new Date("2018-08"),
          description: `Developed programs for tradespace analysis, filesystem testing, database programming, and game engine visualization in numerous technologies including Python, C, and Bash through high school and college.`,
      },
      {
          title: "Research Computer Engineer",
          employer: "US Army Corp of Engineers",
          skills: ["Python", "C", "C++", "Bash", "Unix/Linux", "HTML/Javascript", "Machine Learning", "Image Processing", "Graphics Card Programming", "SQL", "Excel", "High Performance Computing", "Parallel Processing"],
          start_date: new Date("2019-01-14"),
          end_date: new Date("2022-12-02"),
          description: `Specialized in parallelizing C and C++ simulation software for High Performance Computing, developing data processing pipelines and visualizations with Python, automating shell workflows in Linux/Unix, and writing technical publications. Published seven peer-reviewed papers, four as first author. Presented my research at two conferences as well as numerous internal briefings and project showcases.

President of the Association for Computing Machinery ERDC Chapter for one year.`
      },
      {
          title: "Software Engineer",
          employer: "Dassault Systemes",
          skills: ["C++", "Python", "Java", "Rust", "DevOps", "Threaded Concurrency", "Bash", "Unix/Linux", "Apache Server", "API Development", "Software Architecture", "CI/CD"],
          start_date: new Date("2022-12-05"),
          end_date: new Date(0),
          description: `Designed and developed code for modern C++, Python, and Java components of a semiconductor revision control product. Primary engineer for development, maintenance, and customer support of our backend Apache server and our client-side Python product. Architected core API components, algorithms, and data models for our Python layer, while implementing threaded components and developing new features in our C++ application.

Managed nightly build processes across all team product lines, diagnosing failures and improving build reliability.

Integrated company-wide internal AI assistant API into Rust developer tools to improve productivity across engineering teams.`
      }
];
