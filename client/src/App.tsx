import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HeroPage from "@/pages/HeroPage";
import AboutPage from "@/pages/AboutPage";
import ExperiencePage from "@/pages/ExperiencePage";
import PublicationsPage from "@/pages/PublicationsPage";
import ResearchPage from "@/pages/ResearchPage";
import ResourcesPage from "@/pages/ResourcesPage";
import ContactPage from "@/pages/ContactPage";
import { useEffect, useState } from "react";

// Implement a custom hash router for GitHub Pages
function useHashLocation() {
  const [pathname, setPathname] = useState(window.location.hash.replace("#", "") || "/");
  
  useEffect(() => {
    const handler = () => setPathname(window.location.hash.replace("#", "") || "/");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  
  const navigate = (to: string) => {
    window.location.hash = to;
  };
  
  return [pathname, navigate] as const;
}

function AppRouter() {
  // Use our custom hash location hook
  const [location, navigate] = useHashLocation();
  
  // Force the hash URL format on initial page load
  useEffect(() => {
    if (!window.location.hash && window.location.pathname !== "/") {
      // If there's a path but no hash, convert it to hash format
      const path = window.location.pathname.replace("/AlqamahSayeed", "");
      window.location.hash = path || "/hero";
    } else if (!window.location.hash) {
      // If we're at the root with no hash, redirect to /hero
      window.location.hash = "/hero";
    }
  }, []);
  
  return (
    <Switch>
      <Route path="/">
        <Redirect to="/hero" />
      </Route>
      <Route path="/hero" component={HeroPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/experience" component={ExperiencePage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/research" component={ResearchPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
