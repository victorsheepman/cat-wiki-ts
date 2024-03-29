import { useMemo } from 'react'

import { media, style } from 'typestyle'
import { useStore } from '../store';
import { BreedCard } from '../components';

export const BreedList = () => {
    const {state} = useStore()

    const breedList = useMemo(() => state.breeds.slice(0,4), [state.breeds])
  return (
    <div className={breedListWrapper}>
        {breedList.map((breed, index) =><BreedCard key={index} id={breed.id} title={breed.name} imgUrl={breed.reference_image_id} />)}
    </div>
  )
}
const breedListWrapper = style(
    {
        width:'100%',
        height:'75%',
        gap:"13px",
        marginTop:"26px",
        zIndex:1,
        display:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        overflow:'scroll'
    },
    media(
        {minWidth:1366},
        {
            flexWrap:'nowrap',
            gap:'53px',
            overflow:'unset'
        }
    )
)