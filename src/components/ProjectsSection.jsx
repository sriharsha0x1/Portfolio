// // import { ArrowRight, ExternalLink, Github } from "lucide-react";

// // const projects = [
// //   {
// //     id: 1,
// //     title: "Coursify",
// //     description:
// //       "A full-stack course selling application with user and admin functionalities like authentication, course management, and purchases. Built using Node.js, Express, and MongoDB.",
// //     tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB"],
// //     demoUrl: "#",
// //     githubUrl: "https://github.com/sriharsha0x1/Coursify",
// //   },
// //   {
// //     id: 2,
// //     title: "Event-Ease",
// //     description:
// //       "An event management web app with features like registration, authentication, session management, and real-time updates using Node.js, JWT, and MongoDB.",
// //     tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB", "JWT"],
// //     demoUrl: "#",
// //     githubUrl: "https://github.com/sriharsha0x1/Event-Ease",
// //   },
// //   {
// //     id: 3,
// //     title: "Bank Loan Analysis",
// //     description:
// //       "An interactive Power BI dashboard analyzing 35,000+ loan records to visualize approval trends, integrate dynamic slicers, and improve decision-making by reducing manual analysis time by 60%.",
// //     tags: ["SQL", "DAX", "PowerBI"],
// //     demoUrl: "#",
// //     githubUrl: "https://github.com/sriharsha0x1/Bank-Loan-Analysis",
// //   },
// // ];

// // export const ProjectsSection = () => {
// //   return (
// //     <section id="projects" className="py-24 px-4 relative">
// //       <div className="container mx-auto max-w-5xl">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
// //           Featured <span className="text-primary">Projects</span>
// //         </h2>

// //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
// //           Here are some of my recent projects, crafted with a focus on performance, 
// //           scalability, and user experience.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {projects.map((project) => (
// //             <div
// //               key={project.id}
// //               className="group bg-card rounded-lg p-6 shadow-xs card-hover"
// //             >
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {project.tags.map((tag, index) => (
// //                   <span
// //                     key={index}
// //                     className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
// //                   >
// //                     {tag}
// //                   </span>
// //                 ))}
// //               </div>

// //               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
// //               <p className="text-muted-foreground text-sm mb-4">
// //                 {project.description}
// //               </p>

// //               <div className="flex space-x-3">
// //                 <a
                  
// //                   target="_blank"
// //                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
// //                 >
// //                   <ExternalLink size={20} />
// //                 </a>
// //                 <a
// //                   href={project.githubUrl}
// //                   target="_blank"
// //                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
// //                 >
// //                   <Github size={20} />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="text-center mt-12">
// //           <a
// //             className="cosmic-button w-fit flex items-center mx-auto gap-2"
// //             target="_blank"
// //             href="https://github.com/sriharshabhoomandla"
// //           >
// //             Check My Github <ArrowRight size={16} />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };
// import { ArrowRight, Github } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Coursify",
//     description:
//       "A full-stack course selling application with user and admin functionalities like authentication, course management, and purchases. Built using Node.js, Express, and MongoDB.",
//     tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB"],
//     githubUrl: "https://github.com/sriharsha0x1/Coursify",
//   },
//   {
//     id: 2,
//     title: "Event-Ease",
//     description:
//       "An event management web app with features like registration, authentication, session management, and real-time updates using Node.js, JWT, and MongoDB.",
//     tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB", "JWT"],
//     githubUrl: "https://github.com/sriharsha0x1/Event-Ease",
//   },
//   {
//     id: 3,
//     title: "Bank Loan Analysis",
//     description:
//       "An interactive Power BI dashboard analyzing 35,000+ loan records to visualize approval trends, integrate dynamic slicers, and improve decision-making by reducing manual analysis time by 60%.",
//     tags: ["SQL", "DAX", "PowerBI"],
//     githubUrl: "https://github.com/sriharsha0x1/Bank-Loan-Analysis",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects, crafted with a focus on performance, 
//           scalability, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-card rounded-lg p-6 shadow-xs card-hover"
//             >
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-muted-foreground text-sm mb-4">
//                 {project.description}
//               </p>

//               <div className="flex space-x-3">
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 >
//                   <Github size={20} />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2"
//             target="_blank"
//             href="https://github.com/sriharsha0x1"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Coursify",
    description:
      "A full-stack course selling application with user and admin functionalities like authentication, course management, and purchases. Built using Node.js, Express, and MongoDB.",
    tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/sriharsha0x1/Coursify",
  },
  {
    id: 2,
    title: "Event-Ease",
    description:
      "An event management web app with features like registration, authentication, session management, and real-time updates using Node.js, JWT, and MongoDB.",
    tags: ["HTML5", "CSS", "JavaScript", "Node.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/sriharsha0x1/Event-Ease",
  },
  {
    id: 3,
    title: "Bank Loan Analysis",
    description:
      "An interactive Power BI dashboard analyzing 35,000+ loan records to visualize approval trends, integrate dynamic slicers, and improve decision-making by reducing manual analysis time by 60%.",
    tags: ["SQL", "DAX", "PowerBI"],
    githubUrl: "https://github.com/sriharsha0x1/Bank-Loan-Analysis",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, crafted with a focus on performance, 
          scalability, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg p-6 shadow-xs card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>

              {/* GitHub Link fixed to bottom */}
              <div className="mt-auto flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sriharsha0x1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
