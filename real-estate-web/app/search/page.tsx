import SearchResultsClient from "@/components/SearchResultsClient";

export default function SearchResults({ searchParams }: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
  // Convert array values to strings if needed
  const stringifiedParams: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(searchParams || {})) {
    stringifiedParams[key] = Array.isArray(value) ? value[0] : value;
  }
  
  return <SearchResultsClient searchParams={stringifiedParams} />;
}