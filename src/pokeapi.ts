import { Cache } from "./pokecache.js";

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
  cache = new Cache(5000);
  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL ? pageURL : `${PokeAPI.baseUrl}/location-area`;

    const cached = this.cache.get(fullUrl) as ShallowLocations | undefined;

    if (cached) return cached;

    const result = await fetch(fullUrl);
    const data = await result.json();
    this.cache.add(fullUrl, data);

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const fullUrl = PokeAPI.baseUrl + "/location/" + `${locationName}`;

    const cached = this.cache.get(fullUrl) as Location | undefined;
    if (cached) {
      return cached;
    }

    const result = await fetch(fullUrl);
    const data = await result.json();

    return data;
  }

  async fetchPokemons(locationArea: string) {
    const fullUrl = `https://pokeapi.co/api/v2/location-area/${locationArea}`;

    const cached = this.cache.get(fullUrl);
    if (cached) return cached.val;

    const result = await fetch(fullUrl);

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();
    this.cache.add(fullUrl, data);

    return data;
  }

  async fetchPokemon(pokemon: string) {
    const fullUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    console.log("fullUrl: ", fullUrl);

    const cached = this.cache.get(fullUrl);
    if (cached) return cached.val;

    const result = await fetch(fullUrl);

    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }

    const data = await result.json();
    this.cache.add(fullUrl, data);

    return data;
  }
}
