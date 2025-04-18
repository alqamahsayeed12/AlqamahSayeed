import { ExternalLink, Database, Cloud, BarChart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  iconName: string;
  url: string;
}

export default function ProductCard({
  title,
  description,
  iconName,
  url
}: ProductCardProps) {
  // Render different icons based on the iconName prop
  const renderIcon = () => {
    switch (iconName) {
      case "database":
        return <Database className="w-10 h-10 text-blue-700" />;
      case "cloud":
        return <Cloud className="w-10 h-10 text-blue-700" />;
      case "chart":
        return <BarChart className="w-10 h-10 text-blue-700" />;
      default:
        return <Database className="w-10 h-10 text-blue-700" />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="h-48 rounded-md overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
        {renderIcon()}
      </div>
      <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
      <p className="text-gray-800 mb-4 flex-grow">{description}</p>
      <a 
        href={url} 
        className="text-blue-700 hover:text-blue-900 font-medium inline-flex items-center mt-auto" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <span>View Product</span>
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}
