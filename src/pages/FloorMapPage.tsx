import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import FloorMap from '../components/home/FloorMap';

export default function FloorMapPage() {
  return (
    <div>
      <PageHeader
        title="Floor Plans"
        subtitle="Explore our thoughtfully designed spaces"
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
      />
      <FloorMap />
    </div>
  );
}