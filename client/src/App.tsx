import { Switch, Route, Redirect } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Router } from "wouter/router";
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

function Router() {
  return (
    <Router hook={useHashLocation}>
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
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
