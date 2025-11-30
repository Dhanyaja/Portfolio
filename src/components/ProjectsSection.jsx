import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "StudySpace",
    description:
      "A platform that adapts to your learning style and helps you master any subject efficiently.",
    // image: '/projects/project1.jpeg',
    image: "https://dhanyaja.github.io/Portfolio/projects/project1.jpeg",
    tags: ["React", "TailwindCSS", "ExpressJS", "MongoDB"],
    // demoUrl: "https://studyspace2-production-71e5.up.railway.app/",
    demoUrl: "https://studyspace2-1.onrender.com/",
    // demoUrl: 'https://checkfinal-1.onrender.com/',
    githubUrl: "https://github.com/Dhanyaja/CheckFinal",
  },
  {
    id: 2,
    title: "LinkedIn Clone",
    description: "A clone of LinkedIn with user profiles, posts.",
    // image: '/projects/project2.jpeg',
    image: "https://dhanyaja.github.io/Portfolio/projects/project2.jpeg",
    tags: ["React", "TailwindCSS", "Firebase", "Redux"],
    demoUrl: "https://lucky-ganache-963844.netlify.app/",
    // demoUrl: 'https://linkedinclone-0833.onrender.com/',
    githubUrl: "https://github.com/Dhanyaja/linkedInClone",
  },
  {
    id: 3,
    title: "BookVault",
    description:
      "BookVault helps readers organize, track, and manage their personal library with custom shelves, book imports, and progress tracking — built with the MERN stack.",
    // image: '/projects/project3.jpeg',
    image: "https://dhanyaja.github.io/Portfolio/projects/project4.jpeg",
    tags: ["React", "TailwindCSS", "ExpressJS", "MongoDB"],
    demoUrl: "https://book-vault-ozmz.vercel.app/",
    // demoUrl: 'https://ai-mock-interview-ojd4.onrender.com/',
    githubUrl: "https://github.com/Dhanyaja/BookVault",
  },
  // {
  //     id: 1,
  //     title: 'AI Mock Interview',
  //     description: 'An AI-powered mock interview platform that helps you prepare for job interviews with personalized feedback.',
  //     // image: '/projects/project3.jpeg',
  //     image: 'https://dhanyaja.github.io/Portfolio/projects/project3.jpeg',
  //     tags: ['React', 'TailwindCSS', 'Firebase', 'TypeScript'],
  //     demoUrl: 'https://cozy-faloodeh-3e9cc9.netlify.app/',
  //     // demoUrl: 'https://ai-mock-interview-ojd4.onrender.com/',
  //     githubUrl: 'https://github.com/Dhanyaja/ai-mock-interview',
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Dhanyaja"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
