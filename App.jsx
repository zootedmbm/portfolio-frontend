
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans px-6 py-10">
      <header className="text-center mb-12">
        <motion.img 
          src="/profile.jpg" 
          alt="Muhammad Bin Mehmood" 
          className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg"
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        />
        <h1 className="text-4xl font-bold mt-4 text-blue-400">Muhammad Bin Mehmood</h1>
        <p className="text-lg text-gray-300 mt-2">Computer Science Student | Data Science & Web Development Enthusiast</p>
        <div className="flex justify-center mt-4 gap-4">
          <a href="mailto:fawada8110@gmail.com" className="text-yellow-400 hover:underline"><Mail /></a>
          <a href="https://github.com/zootedmbm" target="_blank" className="text-yellow-400"><Github /></a>
          <a href="https://www.linkedin.com/in/muhammad-bin-mehmood-424985345/" target="_blank" className="text-yellow-400"><Linkedin /></a>
        </div>
      </header>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">About Me</h2>
        <Card className="bg-gray-900">
          <CardContent className="p-4 text-gray-200">
            I'm a Computer Science student at COMSATS specializing in Data Science and Web Development. 
            I enjoy building web applications, solving problems with machine learning, and working on open source projects, analyzing data and preprocessing it.
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Projects</h2>
        <Card className="bg-gray-900">
          <CardContent className="p-4 text-gray-400 italic">
            Projects coming soon...
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Resume</h2>
        <Card className="bg-gray-900">
          <CardContent className="p-4 text-gray-200">
            <a 
              href="/Muhammad-Bin-Mehmood.pdf" 
              target="_blank" 
              className="underline text-yellow-400 hover:text-yellow-300">
              View / Download Resume
            </a>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Contact</h2>
        <Card className="bg-gray-900">
          <CardContent className="p-4 text-gray-200">
            <form method="POST" action="https://your-backend-url.com/contact" className="grid gap-4">
              <input className="p-2 bg-gray-800 rounded" type="text" name="name" placeholder="Your Name" required />
              <input className="p-2 bg-gray-800 rounded" type="email" name="email" placeholder="Your Email" required />
              <textarea className="p-2 bg-gray-800 rounded" name="message" rows="4" placeholder="Your Message" required></textarea>
              <Button className="bg-yellow-500 hover:bg-yellow-600 w-fit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
