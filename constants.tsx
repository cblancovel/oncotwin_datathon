
import { ProgramItem, Collaborator, Speaker } from './types';

export const EVENT_DETAILS = {
  name: "ONCOTWIN",
  tagline: "Synthetic Oncology Data Challenge",
  date: "18 de Abril",
  year: "2026",
  location: "Auditorio de Investigación Biomédica / Online",
  description: "Uniendo la ciencia de datos y la oncología a través de gemelos digitales y datos sintéticos para acelerar la innovación terapéutica.",
};

export const PROGRAM: ProgramItem[] = [
  {
    id: '1',
    time: '09:00',
    title: 'Apertura y Registro',
    description: 'Bienvenida institucional y entrega de acreditaciones.',
    type: 'break'
  },
  {
    id: '2',
    time: '09:30',
    title: 'La Era del Paciente Digital',
    description: 'Introducción a los gemelos digitales en oncología de precisión.',
    speaker: 'Dra. Elena Martínez',
    type: 'keynote'
  },
  {
    id: '3',
    time: '11:00',
    title: 'Coffee Break & Networking',
    description: 'Espacio de intercambio en la zona de expositores.',
    type: 'break'
  },
  {
    id: '4',
    time: '11:30',
    title: 'Datos Sintéticos: El Escudo de la Privacidad',
    description: 'Técnicas avanzadas de generación de datos sintéticos preservando la utilidad clínica.',
    speaker: 'Dr. Julián Casado',
    type: 'keynote'
  },
  {
    id: '5',
    time: '13:00',
    title: 'Workshop: Modelado con ONCOTWIN SDK',
    description: 'Taller práctico sobre el uso de nuestra plataforma para investigación.',
    type: 'workshop'
  },
  {
    id: '6',
    time: '14:30',
    title: 'Almuerzo de Trabajo',
    description: 'Networking estructurado por áreas terapéuticas.',
    type: 'break'
  }
];

export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    name: 'Dra. Elena Martínez',
    role: 'Directora de Bioinformática, Hospital Clínico',
    image: 'https://picsum.photos/seed/elena/400/400',
    bio: 'Líder en investigación de gemelos digitales aplicados al cáncer de mama.'
  },
  {
    id: 's2',
    name: 'Dr. Julián Casado',
    role: 'Experto en IA y Privacidad Diferencial',
    image: 'https://picsum.photos/seed/julian/400/400',
    bio: 'Desarrollador de algoritmos líderes para la generación de cohortes sintéticas.'
  },
  {
    id: 's3',
    name: 'Dra. Sofía Rivas',
    role: 'Oncóloga Médica y Data Scientist',
    image: 'https://picsum.photos/seed/sofia/400/400',
    bio: 'Pionera en la integración de datos de vida real (RWD) con modelos predictivos.'
  }
];

export const COLLABORATORS: Collaborator[] = [
  { id: 'c1', name: 'MedTech Systems', logo: 'https://picsum.photos/seed/medtech/200/100', url: '#', category: 'platinum' },
  { id: 'c2', name: 'OncoData Research', logo: 'https://picsum.photos/seed/onco/200/100', url: '#', category: 'platinum' },
  { id: 'c3', name: 'PrivacyFirst AI', logo: 'https://picsum.photos/seed/privacy/200/100', url: '#', category: 'gold' },
  { id: 'c4', name: 'BioGen Insights', logo: 'https://picsum.photos/seed/biogen/200/100', url: '#', category: 'gold' },
];
