import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons } from "../api/pokemonApi";

export const fetchPokemons = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const data = await getPokemons();
    return data.results;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    list: [] as { name: string; url: string }[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch pokemons";
      });
  },
});

export default pokemonSlice.reducer;
