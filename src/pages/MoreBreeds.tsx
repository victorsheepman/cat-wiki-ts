import { style } from 'typestyle'
import { colorBrown, montserrat } from '../theme'
import { BreedArticle } from '../components/BreedArticle'
import { useStore } from '../store'

export const MoreBreeds = () => {
    const {state} = useStore()
  return (
    <div>
        <h2 className={moreTitle}>
            Top 10 most searched breeds
        </h2>
        <section className={moreSection}>
            {
                state.breeds.map((breed, index)=>(
                    <BreedArticle 
                        key={index} 
                        index={index+1}
                        title={breed.name} 
                        desc={breed.description} 
                        imgId={breed.reference_image_id} 
                        breed={breed.id}
                    />
                )) 
            } 
        </section>
    </div>
  )
}

const moreTitle = style({
    color: colorBrown.toString(),
    fontFamily: montserrat,
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
})

const moreSection = style({
    display:'flex',
    flexDirection:'column',
    gap:'55px',
    marginTop:'55px',
    marginBottom:'106px'
})