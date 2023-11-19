export interface ApiResponse {
  count: number;
  data: PokemonCard[];
  page: number;
  pageSize: number;
  totalCount: number;
}

export interface PokemonCard {
  id: string;
  name: string;
  images: {
    large: string;
    small: string;
  };
}
