export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: {
    text: string;
    icon: React.ReactNode;
  }[];
} 