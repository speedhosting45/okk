
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Telegram",
      description: "Quick support via Telegram",
      link: "https://t.me/eternalaura",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Direct communication on WhatsApp",
      link: "https://wa.me/1234567890",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@eternalaura.com",
      link: "mailto:support@eternalaura.com",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 section-animation">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 glow-text text-white">
            Get In <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? Need support? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="card-hover neon-border bg-card/80 backdrop-blur-sm section-animation"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {method.description}
                </p>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white border border-slate-600 hover:border-neon-blue transition-all duration-300"
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    Connect Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto section-animation">
          <Card className="neon-border bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="font-orbitron text-2xl font-bold text-white">
                Send us a Message
              </CardTitle>
              <p className="text-gray-400">
                Fill out the form below and we'll respond within 24 hours
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-neon-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-neon-blue"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-neon-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
