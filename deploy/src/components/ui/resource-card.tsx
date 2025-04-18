import { ExternalLink, FileText, Video, Database, BookOpen } from "lucide-react";
import { Resource } from "./data/resources";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const { title, description, url, category, date } = resource;
  
  const getCategoryIcon = () => {
    switch (category) {
      case 'talk':
        return <Video className="h-4 w-4" />;
      case 'notebook':
        return <FileText className="h-4 w-4" />;
      case 'dataset':
        return <Database className="h-4 w-4" />;
      case 'workshop':
        return <BookOpen className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };
  
  const getCategoryLabel = () => {
    switch (category) {
      case 'talk':
        return 'Talk/Presentation';
      case 'notebook':
        return 'Notebook';
      case 'dataset':
        return 'Dataset';
      case 'workshop':
        return 'Workshop';
      default:
        return 'Resource';
    }
  };
  
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="flex items-center gap-1 mb-2 px-2 py-1">
            {getCategoryIcon()}
            <span className="ml-1">{getCategoryLabel()}</span>
          </Badge>
          {date && (
            <span className="text-sm text-gray-500">{formatDate(date)}</span>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button 
          variant="outline" 
          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
          asChild
        >
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <span>Access Resource</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}