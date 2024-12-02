import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'luxury-villa-2024',
    title: 'Luxury Villa',
    category: 'Residential',
    description: 'A contemporary masterpiece nestled in the hills, featuring sustainable materials and panoramic views.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
    details: {
      client: 'Private Client',
      location: 'Beverly Hills, CA',
      year: 2024,
      size: '12,000 sq ft'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 'modern-office-2023',
    title: 'Modern Office Complex',
    category: 'Commercial',
    description: 'A state-of-the-art office complex designed for the future of work.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3',
    details: {
      client: 'Tech Innovations Corp',
      location: 'San Francisco, CA',
      year: 2023,
      size: '50,000 sq ft'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3'
    ]
  },
  {
    id: 'urban-apartment-2024',
    title: 'Urban Apartment Complex',
    category: 'Residential',
    description: 'A luxury apartment complex that redefines urban living.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3',
    details: {
      client: 'Urban Development LLC',
      location: 'New York, NY',
      year: 2024,
      size: '100,000 sq ft'
    },
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3'
    ]
  }
];