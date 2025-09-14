import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemons = async () => {
  const response = await api.get("/pokemon");
  return response.data;
};

export const getPokemonByName = async (name: string) => {
  const response = await api.get(`/pokemon/${name}`);
  return response.data;
};
