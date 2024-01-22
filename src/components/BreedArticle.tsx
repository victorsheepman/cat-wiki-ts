import React from 'react'
import { media, style } from 'typestyle'
import { colorBrown, montserrat } from '../theme'
import { useGetImage } from '../hooks'
import { useNavigate } from 'react-router-dom'

interface BreedArticleProps {
    title:string,
    desc:string,
    imgId:string,
    index:number,
    breed:string
}

export const BreedArticle:React.FC<BreedArticleProps> = ({title, desc, imgId, index, breed}) => {
    const {img} = useGetImage(imgId)
    const navigate = useNavigate();
    
    const goToDetail = () => {
      navigate(`/detail/${breed}`);
    };
  
    return (
    <div className={breedArticleWrapper} onClick={goToDetail}>
        <figure className={breedArticleFigure}>
            <img className={breedArticleImg} src={img} alt="" /> 
        </figure>
        <section>
            <h2 className={breedArticleTitle}>
                {index}. {title}
            </h2>
            <div className={style({width:'80%',  marginTop:'26px'}, media({maxWidth:600},{display:'none'}))}>
                <p className={breedArticleText}>
                    {desc}
                </p>
            </div>
        </section>
    </div>
  )
}


const breedArticleWrapper = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        gap:'46px',
        maxWidth:'1200px'
    }
)

const breedArticleFigure = style({
    width: '170px',
    height: '170px',
    flexShrink: 0,
    borderRadius: '24px'
})

const breedArticleTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: montserrat,
        fontSize: '1.625rem',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
    },
    media(
        {minWidth:600},{
            fontSize: '2.25rem',
        }
    )
)

const breedArticleText = style({
    color: colorBrown.toString(),
    fontFamily: montserrat,
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
})

const breedArticleImg = style({
    width:'100%', 
    height:'100%', 
    objectFit:'cover',
    borderRadius: '24px'
})