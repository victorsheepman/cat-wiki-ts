import { createSlice } from '@reduxjs/toolkit'
import { Breed, StatusType } from '../schemas'
import { fetchApi, getBreedById, getBreedsFromAPi } from './thunks'
import type { RootState } from './store'

interface CatState {
  breeds: Breed[],
  breedsOptions: {
    value: string;
    label: string;
  }[],
  breedDetail:Breed;
  status: StatusType
}

const initialState: CatState = {
  breeds:[],
  breedsOptions:[],
  breedDetail: {
    weight: {
      imperial: '',
      metric:   ''
    },
    id: '',
    name: '',
    vetstreet_url: '',
    temperament: '',
    origin: '',
    country_codes: '',
    country_code: '',
    description: '',
    life_span: '',
    indoor: 0,
    alt_names: '',
    adaptability: 0,
    affection_level: 0,
    child_friendly: 0,
    dog_friendly: 0,
    energy_level: 0,
    grooming: 0,
    health_issues: 0,
    intelligence: 0,
    shedding_level: 0,
    social_needs: 0,
    stranger_friendly: 0,
    vocalisation: 0,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: '',
    hypoallergenic: 0,
    reference_image_id: ''
  },
  status:StatusType.LOADING
}

export const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = StatusType.LOADING;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.status = StatusType.SUCCESS;
      })
      .addCase(fetchApi.rejected, (state) => {
        state.status = StatusType.ERROR;
      })
      .addCase(getBreedsFromAPi.pending,(state)=>{
        state.status = StatusType.LOADING
      })
      .addCase(getBreedsFromAPi.fulfilled,(state, action)=>{
        state.breedsOptions = action.payload
        state.status = StatusType.SUCCESS
      })
      .addCase(getBreedsFromAPi.rejected, (state) => {
        state.status = StatusType.ERROR;
      })
      .addCase(getBreedById.pending, (state)=>{
        state.status = StatusType.LOADING
      })
      .addCase(getBreedById.fulfilled, (state, action)=>{
        state.breedDetail = action.payload
        state.status = StatusType.SUCCESS
      })

  },
})


export const selectCount = (state: RootState) => state.cats

export default catSlice.reducer