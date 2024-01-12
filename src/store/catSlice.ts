import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'
import { Breed, StatusType } from '../schemas'
import { fetchApi } from '../api/service'
import type { RootState } from './store'

interface CatState {
  breeds: Breed[],
  breedImages: string[],
  status: StatusType
}

const initialState: CatState = {
  breeds:[],
  breedImages:[],
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
        // Handle pending state if needed
        state.status = StatusType.LOADING;
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        // Handle fulfilled state if needed
        state.breeds = action.payload;
        state.status = StatusType.SUCCESS;
      })
      .addCase(fetchApi.rejected, (state) => {
        // Handle rejected state if needed
        state.status = StatusType.ERROR;
      });
  },
})


export const selectCount = (state: RootState) => state.cats

export default catSlice.reducer