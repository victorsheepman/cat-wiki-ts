import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApi = createAsyncThunk('cat/fetchApi', async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=10');
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
});
