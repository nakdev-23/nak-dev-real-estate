import PropertiesPage from "@/components/PropertiesPage";

export default function PropertiesForRent({ searchParams }: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
  // Convert array values to strings if needed
  const stringifiedParams: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(searchParams || {})) {
    stringifiedParams[key] = Array.isArray(value) ? value[0] : value;
  }
  
  return <PropertiesPage searchParams={stringifiedParams} type="rent" />;
}