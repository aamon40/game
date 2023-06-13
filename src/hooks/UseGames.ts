import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchData } from "../services/api-client";
import { Platform } from "./UsePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
