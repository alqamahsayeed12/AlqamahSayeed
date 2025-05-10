import { Switch, Route, Redirect } from "wouter";
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

function AppRouter() {
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
