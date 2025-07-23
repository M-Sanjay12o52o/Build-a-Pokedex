export type ShallowLocations = {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    }
  ];
};

export type Location = {
  id: number;
  name: string;
  region: {
    name: string;
    url: string;
  };
  areas: Array<{
    name: string;
    url: string;
  }>;
  game_indices: Array<{
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }>;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
};

export class PokeAPI {
  private static readonly baseUrl = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL ? pageURL : `${PokeAPI.baseUrl}/location-area`;
    const result = await fetch(fullUrl);
    const data = await result.json();
    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullUrl = PokeAPI.baseUrl + "/location/" + `${locationName}`;
    const result = await fetch(fullUrl);
    const data = await result.json();

    return data;
  }
}
