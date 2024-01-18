import { createAsyncThunk } from "@reduxjs/toolkit";
import { Breed } from "../schemas";

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

export const getBreedsFromAPi = createAsyncThunk('cat/Breeds', async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    if (!response.ok) {
      throw new Error('Error fetching data from the API');
    }

    const data:Breed[] = await response.json();
    return data.map(i=>({label:i.name, value:i.id}));
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
});


export const getBreedById = createAsyncThunk('cat/getBreed', async (id:string) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
    if (!response.ok) {
      throw new Error('Error fetching data from the API');
    }

    const data:Breed = await response.json(); 
    return data;
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
});
