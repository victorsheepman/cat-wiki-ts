
import { classes, media, style } from 'typestyle'
import { colorBlack, colorBrown, colorGray, montserrat } from '../theme'
import { useEffect, useState } from 'react'

interface CatPropertyProps {
    quantity:number | undefined,
    title:string
}

export const CatProperty:React.FC<CatPropertyProps> = ({title, quantity}) => {
    const [bars, setBars] = useState([
        {color:colorGray}, 
        {color:colorGray}, 
        {color:colorGray}, 
        {color:colorGray}, 
        {color:colorGray}
    ])

    const barmapper = (quantity:number)=> bars.map((bar, index) => {
        if (index <= quantity) {
          return { color: colorBrown }; 
        } else {
          return bar;
        }
    })
    useEffect(() => {
        if (quantity) {
            setBars( barmapper(quantity) )
        }
      
    }, [quantity])
    return (
    <div className={propertyWrapper}>
        <section className={propertySectionLeft}>
            <p className={propertyText}>{title}</p>
        </section>
        <section className={propertySectionRight}>
            {
                bars.map((bar, index)=>(
                     <div key={index} className={classes(propertyBar, style({backgroundColor:bar.color.toString()}))}></div>
                ))
            }
           
        </section>
    </div>
  )
}

const propertyWrapper = style(
    {
        width: '100%',
        height: '20px',
        flexShrink: 0,
        display:'flex',
        gap:'30px',
        marginTop:'32px',
    },
    media(
        {minWidth:1366},
        {
            width:'511.957px',
            height:'20px'
        }
    )
)

const propertySectionLeft = style(
    {
        width:'30%',
        height:'100%',
    }
)
const propertySectionRight= style(
    {
        width:'auto',
        height:'100%',
        display:'flex',
        gap:'8px',
    }
)

const propertyText = style(
    {
        color: colorBlack.toString(),
        fontFamily: montserrat,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    }
)

const propertyBar = style(
    {
        width: '30px',
        height: '12px',
        flexShrink: 0,
        borderRadius: '8px',
    },
    media(
        {minWidth:1366},
        {
            width:'60px',
            height:'12px'
        }
    )
)