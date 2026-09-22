import api, { getApiErrorMessage } from "@/utils/api";
import { useCallback, useEffect, useRef, useState } from "react";

export interface UseFetchOptions {
  enabled?: boolean;
  params?: Record<string, string | number | boolean | undefined>;
}

export default function useFetch<T>(
  endpoint: string | null,
  options: UseFetchOptions = {},
) {
  const { enabled = true, params } = options;

  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const cancelledRef = useRef(false);

  const fetchData = useCallback(async () => {
    if (!endpoint || !enabled) return;

    cancelledRef.current = false;
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get<T>(endpoint, { params });
      if (!cancelledRef.current) {
        setData(response.data);
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(getApiErrorMessage(err, "Failed to fetch data. Please try again."));
      }
    } finally {
      if (!cancelledRef.current) {
        setIsLoading(false);
      }
    }
  }, [endpoint, enabled, params]);

  const refetch = useCallback(async () => {
    await fetchData();
  }, [fetchData]);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, refetch };
}