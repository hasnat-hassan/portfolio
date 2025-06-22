export interface TechIcon {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  techIcons: TechIcon[];
  category: string;
  slug: string;
  screenshots: string[];
  features: string[];
}