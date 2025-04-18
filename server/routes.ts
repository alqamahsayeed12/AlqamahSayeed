import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(messageData);
      
      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        success: false,
        message: "Failed to send message"
      });
    }
  });

  // Get CV route - this would handle serving the CV file
  app.get("/api/cv", (req, res) => {
    // In a real implementation, this would serve the actual CV file
    // For now, we'll return a simple response
    return res.status(200).json({
      success: true,
      message: "CV download endpoint",
      url: "/path/to/cv.pdf"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
