import { mockProperties } from "@/lib/mockData";
import { Property } from "@/lib/types";
import PropertyDetailClient from "@/components/PropertyDetailClient";

export async function generateStaticParams() {
  return mockProperties.map(property => ({
    id: property.id,
  }));
}

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = mockProperties.find(p => p.id === id);
  
  return <PropertyDetailClient property={property as Property} />;
}