import { createAsyncThunk } from "@reduxjs/toolkit";
import { Breed } from "../schemas";

export const callApi = async ():Promise<Breed[] | undefined>=>{
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/breeds?limit=10`);
      const json = await res.json();
      return json
        
    } catch (error) {
      console.log(error);
    }    
}

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

export const callImagesById = async (id:string) => {
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${id}&api_key=live_8UXRksSN6lKhM0g2h6IZo36aBVycHM9U2DRMTDEq0MsDXTXUn7brtqgXzA0BMG50`)
        const json = await res.json();
        console.log(json); 
    } catch (error) {
        console.log(error);
    }   
}