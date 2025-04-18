import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import SectionTitle from "@/components/ui/section-title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const socialLinks = [
  { 
    href: "https://www.linkedin.com/in/alqamah-sayeed-ph-d-3aa249172", 
    label: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />
  },
  { 
    href: "https://github.com/", 
    label: "GitHub",
    icon: <Github className="h-5 w-5" />
  },
  { 
    href: "https://twitter.com/", 
    label: "Twitter",
    icon: <Twitter className="h-5 w-5" />
  },
  { 
    href: "https://scholar.google.com/citations?user=9RGwHf4AAAAJ&hl=en", 
    label: "Google Scholar",
    icon: <SiGooglescholar className="h-5 w-5" />
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: FormValues) => 
      apiRequest("POST", "/api/contact", data)
        .then(res => res.json()),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your email" 
                          type="email"
                          className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Message subject" 
                          className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800 font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          rows={5}
                          className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-800">320 Sparkman Dr., Huntsville, AL</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-800">(346)-717-5706</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-800">alqamah.sayeed12@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Connect with me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
