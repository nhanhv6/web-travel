import { useCallback } from "react";

const SUPABASE_URL = "https://ieyzyrjbancljmqbcmkc.supabase.co";
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function useSupabaseApi(tableName: string) {
  const baseUrl = `${SUPABASE_URL}/rest/v1/${tableName}`;

  const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const getAll = useCallback(async () => {
    const res = await fetch(baseUrl, { headers });
    if (!res.ok) throw new Error("Failed to fetch data");
    return await res.json();
  }, [baseUrl]);

  const getById = useCallback(
    async (id: number | string) => {
      const url = `${baseUrl}?id=eq.${id}`;
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error("Failed to fetch item");
      const data = await res.json();
      return data[0];
    },
    [baseUrl]
  );

  const create = useCallback(
    async (data: any) => {
      const res = await fetch(baseUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create item");
      return await res.json();
    },
    [baseUrl]
  );

  const update = useCallback(
    async (id: number | string, data: any) => {
      const url = `${baseUrl}?id=eq.${id}`;
      const res = await fetch(url, {
        method: "PATCH",
        headers,
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to update item");
      return await res.json();
    },
    [baseUrl]
  );

  const remove = useCallback(
    async (id: number | string) => {
      const url = `${baseUrl}?id=eq.${id}`;
      const res = await fetch(url, {
        method: "DELETE",
        headers,
      });
      if (!res.ok) throw new Error("Failed to delete item");
      return await res.json();
    },
    [baseUrl]
  );

  return { getAll, getById, create, update, remove };
}
