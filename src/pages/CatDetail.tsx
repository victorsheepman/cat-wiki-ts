import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breed } from '../schemas';
import { useStore } from '../store';
import { classes, media, style } from 'typestyle';
import { colorBlack, colorBrown, theme } from '../theme';
import { CatProperty } from '../components';
import { useGetImage } from '../hooks';
import { callImagesByBreed } from '../api';


export const CatDetail = () => {
    const [breed, setBreed] = useState<Breed>()
    const [images, setImages] = useState<string[] | undefined>([])
    const {img} = useGetImage(breed?.reference_image_id)
    const {state} = useStore()
    const { id } = useParams()
    useEffect(() => {
        const breedSelected = state.breeds.find(breed => breed.id === id)
        if (breedSelected) {
            setBreed(breedSelected)
        }
    }, [id, state.breeds])
    
    useEffect(() => {

        if (breed) {
            callImagesByBreed(breed.id, setImages)
        }

    }, [breed?.id])
    
  return (
    <>
    <div className={detailWrapper}>
        <section className={detailSection}>
            <figure className={detailFigure}>
                <img className={style({width:'100%', height:'100%', objectFit:'cover', borderRadius: '12px'})} src={img} alt="image cat" />
            </figure>
        </section>
        <section className={detailSection}>
            <h2 className={detailTitle}>
                {breed?.name}
            </h2>
            <div className={detailParagrahWrapper}>
                <p className={theme.paragraph}>{breed?.description}</p>
            </div>
            <p className={classes(theme.paragraph,style({fontSize:'16px', margin:'32px 0px'}))}>
                <strong className={detailSubTitle}>
                    Temperament:
                </strong>
                {' '}
                {breed?.temperament}
            </p>
            <p className={classes(theme.paragraph,style({fontSize:'16px', margin:'32px 0px'}))}>
                <strong className={detailSubTitle}>
                    Origin:
                </strong>
                {' '}
                {breed?.origin}
            </p>
            <p className={classes(theme.paragraph,style({fontSize:'16px', margin:'32px 0px'}))}>
                <strong className={detailSubTitle}>
                Life Span:
                </strong>
                {' '}
                {breed?.life_span} years
            </p>
            <CatProperty title='Adaptability:' quantity={breed?.adaptability ?? 0} />
            <CatProperty title='Affection level:' quantity={breed?.affection_level ?? 0} />
            <CatProperty title='Child Friendly:' quantity={breed?.child_friendly ?? 0} />
            <CatProperty title='Grooming:' quantity={breed?.grooming ?? 0} />
            <CatProperty title='Intelligence:' quantity={breed?.intelligence ?? 0} />
            <CatProperty title='Health issues:' quantity={breed?.health_issues ?? 0}/>
            <CatProperty title='Social needs:' quantity={breed?.social_needs ?? 0} />
            <CatProperty title='Stranger friendly:' quantity={breed?.stranger_friendly ?? 0} />
        </section>
    </div>
    <section className={detailsGallery}>
            <h3 className={detailSubTitle}>
                Other photos
            </h3>
            <div className={detailsGrid}>
                {
                    images !== undefined ? 
                    images.map((image)=>(
                        <figure className={style({width: '278px', height: '278px', flexShrink: 0})}>
                            <img className={style({width:'100%', height:'100%', objectFit:'cover', borderRadius: '12px'})} src={image} alt="image cat" />
                        </figure>
                    )):null
                }
            </div>
        </section>
    </>
  )
}

const detailWrapper = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        gap:'30px'
    },
    media(
        {minWidth:1366},
        {
            flexDirection:'row',
            gap:'115px'
        }
    )
)

const detailSection = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    media(
        {minWidth:1366},
        {
            justifyContent:'unset'
        }
    )
)

const detailFigure = style(
    {
        width: '134px',
        height: '134px',
        flexShrink: 0,
        borderRadius: '12px',
        backgroundColor:'red'
    },
    media(
        {minWidth:600},
        {
            width: '371.045px',
            height: '371.045px',
        }
    )
)

const detailTitle = style({
    color: colorBrown.toString(),
    fontFamily: 'Montserrat',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal'
})

const detailParagrahWrapper = style(
    {
        width: '100%',
        marginTop:'25px'
    }
)

const detailSubTitle = style(
    {
        color: colorBlack.toString(),
        fontFamily: 'Montserrat',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal'
    }
)

const detailsGallery = style({
    width:'100%',
    height:"auto",
    marginTop:'80px',
    marginBottom:'176px'
})

const detailsGrid = style(
    {
        width:'100%',
        marginTop:'40px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'30px'
    },
    media(
        {minWidth:600},
        {
            flexWrap:'wrap',
            flexDirection:'row',
            justifyContent:'center',
            gap:'46px'
        }
    )
)