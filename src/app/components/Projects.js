import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "WorkSpace Management",
      description: "is a collaborative project between me and my team in DEPI to manage workspace and control every task",
      technologies: ["React" , "TypeScript","Bootstrap" , "Xano backend", "React-Router"],
      image: "/workspace/1.png",
      demoLink : "https://workspace-alpha-sage.vercel.app/",
      codeLink : "https://github.com/AbdelrahmanAshraf62651/Workspace/tree/development"
    },
    {
      title: 'course Page',
      description: 'A simple course page built with Next.js and tailwindcss.',
      technologies: ['Next.js', 'React', 'tailwindcss'],
      image: '/course-page.jpg',
      demoLink: 'https://course-page-puce.vercel.app/',
      codeLink: 'https://github.com/mahmoudessamdev/course-page',
    },
    {
      title: 'Recipe Book',
      description: 'A recipe book application that contain a lot of recipes.',
      technologies: ['React', 'Next.js', 'tailwindcss'],
      image: '/recipe-app.jpg',
      demoLink: 'https://recipe-book-five-beta.vercel.app/',
      codeLink: 'https://github.com/mahmoudessamdev/recipe-book',
    },
    {
      title: 'Amazon Clone',
      description: 'An e-commerce application with product listings and cart functionality inspired by Amazon.',
      technologies: ['JavaScript', 'CSS', 'RestAPI'],
      image: '/amazon-project.jpg',
      demoLink: 'https://mahmoudessamdev.github.io/amazon-project',
      codeLink: 'https://github.com/mahmoudessamdev/amazon-project',
    },
    {
      title: 'YouTube Clone',
      description: 'A static clone of the popular YouTube website built with HTML, CSS, and JavaScript.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: '/youtube.jpg',
      demoLink: 'https://mahmoudessamdev.github.io/youtube-pj',
      codeLink: 'https://github.com/mahmoudessamdev/youtube-pj',
    },
  ].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
