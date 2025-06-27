export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I am a passionate Frontend Developer with 1+ years of project experience building web applications. 
            My journey in web development started with HTML, CSS, and JavaScript, and I&apos;ve evolved with the 
            industry to embrace modern frameworks and tools.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I specialize in creating responsive, accessible, and performant web applications using 
            React, Next.js, and other modern frontend technologies. I have a strong focus on delivering 
            exceptional user experiences through clean, maintainable code.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Education</h3>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium text-gray-800 dark:text-white">BS in Business Information System</p>
                  <p className="text-gray-600 dark:text-gray-300">Alabasia Institute</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
