import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <p className="mb-8">
                I'm always open to discussing research collaborations, speaking opportunities, 
                or questions about my work in atmospheric science and air quality.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Connect With Me</h3>
                
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/alqamah-sayeed-ph-d-3aa249172/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FaLinkedin className="mr-2" size={20} />
                    LinkedIn
                  </a>
                  
                  <a 
                    href="https://github.com/Alqamah-Sayeed" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FaGithub className="mr-2" size={20} />
                    GitHub
                  </a>
                  
                  <a 
                    href="https://twitter.com/AlqamahSayeed89" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:underline"
                  >
                    <FaTwitter className="mr-2" size={20} />
                    Twitter (@AlqamahSayeed89)
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}