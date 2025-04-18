export type ResourceCategory = 'talk' | 'notebook' | 'workshop' | 'dataset';

export interface Resource {
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  date?: string;
  image?: string;
}

export const resources: Resource[] = [
  {
    title: "Deep Learning for Air Quality Prediction",
    description: "Presentation on using CNN architectures for PM2.5 forecasting with MERRA-2 data",
    url: "https://example.com/talks/deep-learning-air-quality",
    category: "talk",
    date: "2023-09-15"
  },
  {
    title: "PM2.5 Estimation Tutorial",
    description: "Google Colab notebook with code for applying machine learning to satellite data for air quality analysis",
    url: "https://colab.research.google.com/example",
    category: "notebook",
    date: "2023-06-22"
  },
  {
    title: "NASA SERVIR Workshop Materials",
    description: "Training materials from regional capacity building workshop on environmental monitoring",
    url: "https://example.com/workshop-materials",
    category: "workshop",
    date: "2022-11-10"
  },
  {
    title: "MERRA-2 Preprocessed Dataset",
    description: "Curated dataset with pre-processed MERRA-2 variables optimized for machine learning applications",
    url: "https://disc.gsfc.nasa.gov/datasets/MERRA2_CNN_HAQAST_PM25_1/summary",
    category: "dataset",
    date: "2023-03-05"
  }
];