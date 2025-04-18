import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  url: string;
}

export default function PublicationCard({
  title,
  authors,
  journal,
  url
}: PublicationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
      <p className="text-gray-800 mb-2">{authors}</p>
      <p className="text-gray-700 mb-4">{journal}</p>
      <a 
        href={url} 
        className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>View Publication</span>
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}
