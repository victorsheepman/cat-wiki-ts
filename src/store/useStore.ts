import { useAppDispatch, useAppSelector } from './hooks'

export const useStore = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(s => s.cats)
  return {
    dispatch, 
    state
  }
}
