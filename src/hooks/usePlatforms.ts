import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "../constants";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default usePlatforms;
