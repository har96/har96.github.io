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
Programmed for research teams full-time every summer and part-time for one year during my freshman year in college (2014/15). Developed Python, C, and shell script programs for tradespace analysis, filesystem testing, database programming, and game engine visualization.`,
      },
      {
          title: "Research Computer Engineer",
          employer: "US Army Corp of Engineers",
          skills: ["Python", "C", "C++", "Bash", "Unix/Linux", "HTML/Javascript", "Machine Learning", "Image Processing", "Graphics Card Programming", "SQL", "Excel"],
          start_date: new Date("2019-01-14"),
          end_date: new Date("2022-12-02"),
          description: `
Specialized in parallelizing C and C++ simulation software for High Performance Computing, developing data processing pipelines and visualizations with Python, automating shell workflows in Linux/Unix, and writing technical publications. Published seven peer-reviewed papers, four as first author. Presented my research at two conferences as well as numerous internal briefings and project showcases.

Assisted in budget management of project funds.`
      },
      {
          title: "Software Engineer",
          employer: "Dassault Systemes",
          skills: ["C++", "Unix/Linux", "Google Test", "Agile Development", "Software Lifecycle Management" ],
          start_date: new Date("2022-12-05"),
          end_date: new Date(0),
          description: `
Developing commercial SemiConductor software in backend C++ for the Dassault's ENOVIA brand.`
      }
];
