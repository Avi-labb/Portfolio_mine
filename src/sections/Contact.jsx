import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '../components/button'
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "avikushwaha479@gmail.com",
      href: "mailto:avikushwaha479@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919503997749",
      href: "tel:+919503997749"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharastra,Mumbai",
      href: "#"
    }
  ]
  const [message, setmessage] = useState("")
  const [loading, setloading] = useState(false)
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleform = (e) => {
    let { name, value } = e.target
    setformData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    setloading(true)
    try {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    alert("Email service is not configured properly.");
    return;
  }

  const response = await emailjs.send(
    serviceId,
    templateId,
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    publicKey
  );

  console.log("SUCCESS!", response.status, response.text);

  setmessage({
    type: "success",
    message: "Message sent successfully!",
  });

  setformData({
    name: "",
    email: "",
    message: "",
  });

} catch (err) {
  console.log("FAILED...", err);

  setmessage({
    type: "error",
    message: "Failed to send message. Please try again later.",
  });

} finally {
  setloading(false);
}
  }
  return (
    <section id="contact" className='py-32 relative overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0'>
        <div className='absolute top-1/4 left-1/3 w-96 h96 bg-primary/5 rounded-full 3xl' />
        <div className='absolute bottom-1/3 right-1/3 w-64 bg-primary/10 h-64 rounded-full blur-3xl' />
      </div>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h1 className='text-primary/80 text-md font-bold tracking-widest'>Get In Touch</h1>
          <div className='group text-4xl md:text-5xl font-bold mt-4 text-primary mb-6 '>Let's build{""}
            <h1 className='font-serif italic font-normal text-white'> something great.</h1>

          </div>
          <div className='group-hover:w-50%  absolute w-full h-2 left-0 bg-gradeint-to-r from-purple-800 via-blue-900 to-blue-400'>hihi</div>
          <p className='text-muted-foreground '>
            Have a project in mind?  I'd love to hear about it.Send me a message and let's discus how we can work together.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className='block text-sm font-medium mb-2'
                >Name</label>
                <input
                  name="name"
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleform}
                  placeholder='Your name...'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className='block text-sm font-medium mb-2'
                >Email</label>
                <input
                  name="email"
                  type='email'
                  value={formData.email}
                  onChange={handleform}
                  required
                  placeholder='Your@email.com'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className='block text-sm font-medium mb-2'
                >Message</label>
                <textarea name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleform}
                  placeholder='Your Message...'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'
                />
              </div>
              <Button className='w-full' type="submit" size="lg">
                {loading ? (<>
                  <div className='w-6 h-6  border border-t-transparent animate-spin border-white rounded-full'></div>

                  Sending.....
                  <Send /></>
                ) :
                  (<>Send Message <Send /></>)}
              </Button>
              {message && (
                <div className={`w-full flex gap-2 p-2 rounded-2xl border ${message.type === 'success' ? 'border-green-500 bg-green-300' : 'border-red-500 bg-red-300'}`}>
                  {message.type === 'success' ? <CheckCircle size={35} /> : <AlertCircle size={35} />}
                  {message.message}
                </div>
              )}
            </form>
          </div>
          <div className='space-y-6 '>
            <div className='glass rounded-3xl p-8'>
              <h3 className='text-xl font-semibold mb-6'>
                Contact Information
              </h3>
              <div className='space-y-4'>
                {
                  contactInfo.map((item, idx) => {
                    return <a
                      key={idx}
                      href={item.href}
                      className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors gr'
                    >
                      <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                        <item.icon className='w-5 h-5 text-primary' />
                      </div>
                      <div>
                        <div className='text-sm text-muted-foreground'>
                          {item.label}
                        </div>
                        <div className='font-medium'>{item.value}</div>
                      </div>


                    </a>
                  })
                }

              </div>
            </div>
            <div className='glass rounded-3xl p-8 border-primary/30 '>
              <div className='flex items-center gap-3 mb-4'>
                <h1 className='w-3 h-3 bg-green-500 rounded-full animate-pulse ring ring-white focus:' />
                <h1 className='font-medium'>Currently Available</h1>
              </div>
              <p className='text-muted-foreground'>
                I'm currently open to new opportunites and exciting projects. Whether you need a full-time engineer or a freelance consultant, let's talk!
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact