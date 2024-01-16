import { url } from 'csx';
import React, { useEffect, useState } from 'react'
import { classes, media, style } from 'typestyle'
import { colorBrown } from '../theme';
import { useNavigate } from 'react-router-dom';

interface breedCardProps {
    id:     string;
    title:  string,
    imgUrl: string
}
export const BreedCard:React.FC<breedCardProps> = ({title, imgUrl, id}) => {
    const [img, setImg] = useState<string>('')
    const navigate = useNavigate();

    // Función para navegar a una ruta específica con un ID
    const goToDetail = () => {
      navigate(`/detail/${id}`);
    };
  
    useEffect(() => {
        const callImagesById = async (id:string) => {
            try {
                const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
                const json = await res.json();
                setImg(json.url)
            } catch (error) {
                console.log(error);
            }   
        }
        callImagesById(imgUrl)
    }, [])
    
  return (
    <div onClick={goToDetail}>
        <figure className={classes(breedCardFigure, img ? setImageStyle(img) : null)}></figure>
        <h4 className={breedTitle}>{title}</h4>
    </div>
  )
}

const breedCardFigure = style(
    {
        width: '134.77px',
        height: '134.77px',
        flexShrink: 0,
        borderRadius: '12px',
    },
    media(
        {minWidth:1366},
        {
            width: '220px',
            height: '220px',
            flexShrink: 0
        }
    )
)

const setImageStyle = (img:string) => {
    return style({
        background: url(img),
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'lightgray',
    })
}

const breedTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: 'Montserrat',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        marginTop:'11px'
    },
    media(
        {minWidth:1366},
        {
            fontSize:"18px"
        }
    )
)