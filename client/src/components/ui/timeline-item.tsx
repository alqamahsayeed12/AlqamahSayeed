interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export default function TimelineItem({
  title,
  company,
  period,
  responsibilities
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 group transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg">
      <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-primary z-10"></div>
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-1">
          <span className={company === "University of Houston, Department of Earth and Atmospheric Science" ? "text-black font-medium" : "text-secondary font-medium"}>{company}</span>
          <span className="text-gray-600">{period}</span>
        </div>
      </div>
      
      <ul className="list-disc ml-5 space-y-2 text-gray-700">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}
