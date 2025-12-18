
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
