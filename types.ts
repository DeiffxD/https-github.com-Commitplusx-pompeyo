import React from 'react';

export interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TaxiType {
  id: 'general' | 'rosa';
  name: string;
  description: string;
  features: string[];
  colorClass: string;
  buttonColorClass: string;
  imageAlt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  stars: number;
}