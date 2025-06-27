export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Jest', level: 82 },
        { name: 'Figma', level: 75 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Performance Optimization', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
