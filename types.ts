
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface VAService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: string;
  category: string;
}
