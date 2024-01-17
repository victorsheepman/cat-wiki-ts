import { classes, media, style } from 'typestyle'
import { colorBeige, colorBlack, colorBrown, colorWhite, montserrat } from '../theme'
import { url } from 'csx'
import { BreedList } from './BreedList'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className={heroWrapper}>
        <section className={heroWrapperTop}>
            <img src="/public/cat.svg" alt="" />
            <div className={style({width: '135.916px'}, media({minWidth:768}, {width:'271px'}), media({minWidth:1366}, {width:'371px'}))}>
                <p className={heroText}>
                    Get to know more about your cat breed
                </p>
            </div>
            <label className={heroLabel} htmlFor="">
                <input type="text" className={classes(heroInput, heroInputText)} placeholder="Search" />
            </label>
        </section> 
        <section className={heroWrapperBottom}>
            <span className={heroBottomSpan}>Most Searched Breeds</span>
            <div className={heroBottomLine}></div>
            <div className={style({width: '185.12px', marginTop:'17px'}, media({minWidth:1366},{width: '536.932px'}))}> 
                <h3 className={heroBottomTitle}>
                    66+ Breeds For you to discover
                </h3>
                <Link className={style({textDecoration:'none'})} to="/more">
                    <span className={heroSpan}>
                        SEE MORE
                    </span>
                </Link>
            </div>
            <BreedList />
        </section>
    </div>
  )
}


const heroWrapper = style(
    {
        width: '100%',
        height: 'auto',
        flexShrink: 0,
        borderRadius:'42px',
        backgroundColor:colorBeige.toString(),
        
    },
)
const heroWrapperTop = style(
    {
        width: '100%;',
        height: '146.19px',
        flexShrink: 0,
        padding:'21px 29px',
        backgroundImage:url('/public/HeroImagesm.png'),
        backgroundPosition: 'center',  
        backgroundSize: 'cover',  
        borderRadius: '42px 42px 0px 0px',

    },
    media(
        {minWidth:768},
        {
            height:'338px',
            padding:'115px 108px',
            backgroundImage: url('/public/HeroImagemd.png')
        }
    ),
    media(
        {minWidth:1366},
        {
            backgroundImage: url('/public/HeroImagelg.png'),
            height:'538px'
        }
    )
)
const heroText = style(
    {
        color: colorWhite.toString(),
        fontFamily: montserrat,
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    media(
        {minWidth:768},
        {
            fontSize:'14px'
        }
    ),
    media(
        {minWidth:1366},
        {
            fontSize:'24px'
        }
    )
)
const heroInput = style(
    {
        width: '91.621px',
        height: '30.705px',
        marginTop:'18px',
        flexShrink: 0,
        borderRadius: '59px',
        background: colorWhite.toString(),
        border:'unset',
        padding:'7px 13px'
    },
    media(
        {minWidth:768},
        {
            width: '294.616px',
            height: '49.67px',
        }
    ),
    media(
        {minWidth:1366},
        {
            width: '394.616px',
            height: '69.67px',
        }
    )
)
const heroInputText = style({
    color: colorBlack.toString(),
  fontFamily: 'Montserrat',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
})

const heroLabel = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
})


//HERO WRAPPER BOTTOM

const heroWrapperBottom = style(
    {
        width:'100%',
        height:'523px',
        borderRadius:'0px 0px 42px 42px',
        backgroundColor:colorBeige.toString(),
        padding:'18px 29px'
    },
    media(
        {minWidth:1366},
        {
            height:'634px',
            padding:'92px 108px'
        }
    )
)

const heroBottomSpan = style(
    {
        color: colorBrown.toString(),
        fontFamily: 'Montserrat',
        fontSize: '12px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    media(
        {minWidth:1366},
        {
            fontSize:'18px'
        }
    )
)

const heroBottomLine = style(
    {
        width: '40.887px',
        height: '3px',
        flexShrink: 0,
        borderRadius: '77px',
        backgroundColor: colorBrown.toString(),
        marginTop:'5.77px'
    }
)

const heroBottomTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: 'Montserrat',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    },
    media(
        {minWidth:1366},
        {
            fontSize:'48px'
        }
    )
)

const heroSpan = style({
    color: 'rgba(41, 21, 7, 0.60)',
    textAlign: 'right',
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    textDecoration:'none'
})