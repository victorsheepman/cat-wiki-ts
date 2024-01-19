import { media, style } from 'typestyle'
import { colorBeige, colorBrown, colorWhite, colorYellow, montserrat } from '../theme'
import { url } from 'csx'
import { BreedList } from './BreedList'
import { Link } from 'react-router-dom'
import { BreedSearch } from '../components'


export const Hero = () => {
 
  return (
   
        <div className={heroWrapper}>
            <section className={heroWrapperTop}>
                <h4 className={heroTitle}>
                    CatWiki
                    {' '}
                    <img className={style(media({maxWidth:500},{display:'none'}))} src="catLogo.svg" alt="" /> 
                </h4>
                <div className={heroTextContainer}>
                    <p className={heroText}>
                        Get to know more about your cat breed
                    </p>
                </div>
                <BreedSearch />
            </section> 
            <section className={heroWrapperBottom}>
                <span className={heroBottomSpan}>Most Searched Breeds</span>
                <div className={heroBottomLine}></div>
                <div className={heroBottomTitleSection}> 
                    <div className={heroTitleContainer}>
                        <h3 className={heroBottomTitle}>
                            66+ Breeds For you to discover
                        </h3>
                    </div>
                    <Link className={style({textDecoration:'none'}, media({maxWidth:1366},{display:'none'}))} to="/more">
                        <span className={heroSpan}>
                            SEE MORE
                            {' '}
                            <img src="trending.svg" alt="" />
                        </span>
                    </Link>
                </div>
                <BreedList />
                <div className={heroBottomSquare}></div>
            </section>
        </div>
  )
}


const heroWrapper = style(
    {
        width: '100%',
        height: 'auto',
        maxWidth:'1248px',
        flexShrink: 0,
        borderRadius:'42px',
        backgroundColor:colorBeige.toString(),
        
    },
)
const heroWrapperTop = style(
    {
        width: '100%;',
        height: '146px',
        flexShrink: 0,
        padding:'5.60% 7.73%',     
        backgroundColor:'red',
        backgroundImage:url('/public/HeroImagesm.png'),
        backgroundPosition: 'center',  
        backgroundSize: 'cover',  
        borderRadius: '42px 42px 0px 0px',

    },
    media(
        {minWidth:768},
        {
            height:'338px',
         
            backgroundImage: url('/public/HeroImagemd.png')
        }
    ),
    media(
        {minWidth:1366},
        {
            backgroundImage: url('HeroImagelg.png'),
            padding:'115px 108px',
            height:'538px',
           
        }
    )
)

const heroTitle = style(
    {
        color: colorWhite.toString(),
        fontFamily: "Mystery Quest",
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    },
    media(
        {minWidth:768},
        {
            fontSize:'4rem',
           
        }
    )
)

const heroTextContainer = style(
    {
        width: '135.916px',
        marginTop:'7.34px'
    }, 
    media(
        {minWidth:768}, 
        {
            width:'271px',
            marginTop:'11.19px'
        }
    ), 
    media(
        {minWidth:1366}, 
        {
            width:'371px'
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
            fontSize:'1.5rem'
        }
    )
)


//HERO WRAPPER BOTTOM

const heroWrapperBottom = style(
    {
        position:'relative',
        width:'100%',
        height:'524px',
        borderRadius:'0px 0px 42px 42px',
        backgroundColor:colorBeige.toString(),
        padding:'18px 29px'
    },
    media(
        {minWidth:1366},
        {
            height:'634px',
            padding:'32px 108px'
        }
    )
)

const heroBottomSpan = style(
    {
        color: colorBrown.toString(),
        fontFamily: montserrat,
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal',
    },
    media(
        {minWidth:768},
        {
            fontSize:'1.125rem'
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

const heroBottomTitleSection = style(
    {
        marginTop:'17.27px'
    },
    media(
        {minWidth:1366},
        {
            alignItems:'flex-end',
            display:'flex',
            justifyContent:'space-between',
            marginTop:'36px'
        }
    )
)

const heroTitleContainer = style(
    {
        width: '185.12px', 
    }, 
    media(
        {minWidth:768},
        {
            width: '536px',
        }
    )
)

const heroBottomTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: montserrat,
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        
    },
    media(
        {minWidth:768},
        {
            fontSize:'3rem',
        }
    )
)

const heroSpan = style({
    color: 'rgba(41, 21, 7, 0.60)',
    textAlign: 'right',
    fontFamily: montserrat,
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    textDecoration:'none',
    display:'flex',
    alignItems:'center'
})

const heroBottomSquare = style(
    {
        position:'absolute',
        top:'40%',
        left:'7%',
        width: '46.955px',
        height: '174.615px',
        flexShrink: 0,
        borderRadius: '14px',
        backgroundColor: colorYellow.toString(),
        zIndex:0
    },
    media(
        {
            maxWidth:768
        },
        {
            height:'105px',
            width:'32px',
            left:'3%',
            top:'45%'
        }
    ),
    media(
        {maxWidth:600},
        {
            display:'none'
        }
    )
)