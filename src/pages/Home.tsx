import { media, style } from "typestyle"
import { colorBeige } from "../theme"
import { url } from "csx"

export const Home = () => {
  return (
    <div>
        <div className={heroWrapper}>
           <section className={heroWrapperTop}>
            
            </section> 
        </div>
    </div>
  )
}

const heroWrapper = style(
    {
        width: '100%',
        height: '669px',
        flexShrink: 0,
        borderRadius:'42px',
        backgroundColor:colorBeige.toString(),
        
    },
    media(
        {minWidth:1366},
        {
            padding:'18px 29px'
        }
    )
)
const heroWrapperTop = style({
    width: '100%;',
    height: '146.19px',
    flexShrink: 0,
    padding:'115px 108px',
    backgroundImage:url('/public/HeroImagesm.png'),
    backgroundPosition: 'center',  
    backgroundSize: 'cover',  
    borderRadius: '42px 42px 0px 0px',
})