
export interface ProgramItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speaker?: string;
  type: 'keynote' | 'workshop' | 'break' | 'networking';
}

export interface Collaborator {
  id: string;
  name: string;
  logo: string;
  url: string;
  category: 'platinum' | 'gold' | 'silver';
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
