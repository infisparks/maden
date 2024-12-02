export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details: {
    client: string;
    location: string;
    year: number;
    size: string;
  };
  gallery: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Award {
  year: number;
  title: string;
  organization: string;
}