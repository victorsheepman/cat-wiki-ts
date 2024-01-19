import { classes, media, style } from "typestyle"
import { Hero } from "../container"
import { colorBrown, montserrat, theme } from "../theme"

export const Home = () => {
  return (
    <div>
       <Hero />
       <section className={homeBottom}>
            <div className={style(media({maxWidth:500}, {width:'100%'}))}>
                <div className={homeLine}></div>
                <div className={titleWrapper}>
                    <h3 className={homeSubTitle}>
                        Why should <br /> you have a cat?
                    </h3>
                </div>
                <div className={paragrafWrapper}>
                    <p className={classes(theme.paragraph, style({fontWeight:500}))}>
                        Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                    </p>
                </div>
                <span className={homeSpan}>
                    READ MORE {' '}
                    <img src="trending.svg" alt="" />
                </span>
            </div>
            <div className={homeGallery}>
                <section className={sectionLeft}>
                    <figure className={classes(imageTop, imageBorder)}>
                        <img className={imageStyle} src="image 2.png" alt="" />
                    </figure>
                    <figure className={classes(imageBottom, imageBorder)}>
                        <img className={imageStyle} src="image 1.png" alt="" />
                    </figure>
                </section>
                <section className={sectionRight}>
                    <figure className={classes(imageLeft, imageBorder)}>
                        <img className={imageStyle} src="image 3.png" alt="" />
                    </figure>
                </section>
            </div>

       </section>
     
 
    </div>
  )
}

const homeBottom = style(
    {
        width:'100%',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        gap:'63px',
        marginTop:'63px',
        alignItems:'center',
    },
    media(
        {minWidth:768},
        {
            gap:'31px'
        }
    ),
    media(
        {minWidth:1366},
        {
            flexDirection:'row', 
            gap:'38px',
            justifyContent:'center',
        }
    )
)

const homeLine = style(
    {
        width: '50.843px',
        height: '3.126px',
        borderRadius: '77px',
        background: colorBrown.toString(),
        flexShrink: 0,
    }
)

const titleWrapper = style(
    {
        width:'100%',
        marginTop:'16.24px'
    },
    media(
        {minWidth:1366},
        {
            width: '455.462px',
            marginTop:'19.6px'
        }
    )
)

const homeSubTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: 'Montserrat',
        fontSize: '2.5rem',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
      
    },
    media(
        {minWidth:1366},
        {
            fontSize:'3rem'
        }
    )
)

const paragrafWrapper = style(
    {
        width: '339px',
        height: '85.718px',
        flexShrink: 0,
        marginTop:'43px'
    },
    media(
        {minWidth:1366},
        {
            marginTop:'43px',
            width: '447.743px'
        }
    )
)

const homeSpan = style(
    {
        color: 'rgba(41, 21, 7, 0.60)',
        fontFamily:montserrat,
        fontSize:'0.75rem',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        display:'flex',
        gap:'5px',
        alignItems:'center',
        marginTop:'26px'
    },
    media(
        {minWidth:1366},
        { marginTop:'25px' }
    )
)

const homeGallery = style(
    {
        width: '339px',
        height: '307.479px',
        marginTop:'63px',
        flexShrink: 0,
        display:'flex',
        gap:'16px'
    },
    media(
        {
            maxWidth:500
        },
        {
            width:'100%',
        }
    ),
    media(
        {minWidth:1366},
        {
            width: '539px',
            height: '488.882px',
            gap:'27px'
        }
    )
)

const sectionLeft = style({
    width:'50%',
    height:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'flex-end'
})
const sectionRight = style({
    width:'50%',
    height:'100%',
})

const imageTop = style(
    {
        width: '172.028px',
        height: '105.086px',
        flexShrink: 0,
    },
    media(
        {minWidth:1366},
        {
            width: '273.519px',
            height: '167.084px'
        }
    )
)

const imageBottom = style(
    {
        width: '122.952px',
        height: '184.428px',
        flexShrink: 0,  
    },
    media(
        {minWidth:1366},
        {
            width: '195.49px',
            height: '293.236px'
        }
    )
)

const imageBorder = style(
    {
        borderRadius:'24px',
    }
)
const imageLeft = style(
    {
        width: '149.985px',
        height: '242.689px',
        flexShrink: 0
    },
    media(
        {minWidth:1366},
        {
            width: '238.471px',
            height: '385.868px'
        }
    )
)

const imageStyle = style({
    width:'100%',
    height:' 100%',
    objectFit:'cover'
})

