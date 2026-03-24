import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

const About = () => {
  const highlights =[
  {
    icon: Code2,
    title: "Scalable Code Architecture",
    description:
      "I design and write clean, modular, and scalable code that is easy to maintain, extend, and collaborate on in real-world applications."
  },
  {
    icon: Rocket,
    title: "High Performance Applications",
    description:
      "Focused on building fast and optimized applications with efficient data handling, minimal load time, and smooth user experience."
  },
  {
    icon: Users,
    title: "Team Collaboration & Git Workflow",
    description:
      "Experienced in working with teams using Git, pull requests, and structured workflows to ensure smooth and efficient development."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving & Innovation",
    description:
      "I approach challenges with a problem-solving mindset and continuously explore modern technologies to build impactful solutions."
  }
]
  return (
    <section id='about' className='py-28 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-4'>
            <div className='animate-fade-in'>
              <h1 className='uppercase font-bold text-md'>About Me</h1>
            </div>

            <div className='text-primary leading-tight animate-fade-in font-semibold text-2xl md:text-4xl'>
              <h1>Passionate about creating meaningfull digital experiences</h1>
            </div>

            <div className='space-y-2 text-white/50 animate-fade-in '>
              <p>
                I’m a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. As a fresher, I bring strong fundamentals in JavaScript, React, Node.js, and MongoDB, along with a deep curiosity to understand how things work behind the scenes. I have hands-on experience implementing authentication systems, RESTful APIs, database management, and smooth UI interactions.
              </p>
              <p>
                I am constantly exploring new technologies, improving performance, and refining user experience. My goal is to build impactful digital products while continuously growing as a developer.I believe in writing clean code, solving problems logically, and continuously learning to stay ahead in the ever-evolving tech world.
              </p>
              <p>
                Currently, I’m sharpening my skills by building projects that reflect real-world use cases and industry standards, aiming to contribute to impactful and innovative tech teams.
              </p>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-6'>
            {
              highlights.map((item,idx) => {
                return <div key={idx} className='glass p-6 rounded-2xl animate-fade-in ' style={{animationDelay:`${(idx+1)*100}ms`}}>
                        <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                          {<item.icon  className='w-6 h-6 text-primary'/>}
                        </div>
                        <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                        <p className='text-sm text-muted-foreground'>{item.description}</p>
                      </div>
                
              })
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default About