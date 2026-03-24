import { University } from 'lucide-react'
import React from 'react'

const Education = () => {

  const experience = [
    {
      period: "2019-2024",
      study: "Bachelor in Computer Science",
      place: "S.N.College",
      board: "University of Mumbai",

    },
    {
      period: "2018-2019",
      study: "Secondary Education",
      place: "St.Aloysis of higher education",
      board: "Secondary higher Education"
    },
    {
      period: "2017",
      study: "Juinor Education",
      place: "Vedant Public high  School",
      board: "Maharastra board"
    }
  ]
  return (

    <section id='education' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2' />
      <div className='mx-auto z-10 px-5'>
        <div className='max-w-3xl mb-16'>
          <h1
            className='text-3xl md:text-5xl font-bold  animation-delay-100 text-primary'
          >Career Jounary</h1>
        </div>
        <div className='relative '>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-transparent-x-1/2 ' />

          
            <div className='space-y-12  '>
              {
                experience.map((item, idx) => {
                  return <div key={idx} className='relative grid md:grid-cols-2 gap-8 '
                  style={{animationDelay:`${(idx+1)*150}ms`}}
                  >

                    <div className='absolute left-0 md:left-1/2 top-0 w-2 ml-0.4 h-2 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10' >
                    <h1 className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'></h1>
                    </div>
 
                    <div className={`pl-8 md:pl-0 ${idx %2!==0 ? "md:pr-16 md:text-right":"md:col-start-2 md:pl-16"} `}>
                      <div className='glass rounded-2xl p-5 border border-primary/30 hover:border-primary/50 transition-all duration-500'>
                      <h1 className='text-primary font-bold -mb-1'>{item.period}</h1>
                      <h1 className='mb-3 font-serif text-xl'>{item.study}</h1>
                      <h3 className='text-xl tracking-widest text-primary/70'>{item.board}</h3>
                      <h2 className='text-lg  text-muted-foreground -mt-1'>{item.place}</h2>
                    </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>

    </section>
  )
}

export default Education