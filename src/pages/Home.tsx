import { classes, style } from "typestyle"
import { Hero } from "../container/Hero"
import { colorBrown } from "../theme"

export const Home = () => {
  return (
    <div>
       <Hero />
       <div className={homeLine}></div>
       <div className={titleWrapper}>
            <h3 className={homeSubTitle}>
                Why should <br /> you have a cat?
            </h3>
        </div>
        <div className={paragrafWrapper}>
            <p className={homeParagraph}>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
            </p>
        </div>
        <div className={homeGallery}>
            <section className={sectionLeft}>
                <figure className={classes(imageTop, imageBorder)}>

                </figure>
                <figure className={classes(imageBottom, imageBorder)}></figure>
            </section>
            <section className={sectionRight}></section>
        </div>

    </div>
  )
}

const homeLine = style(
    {
        width: '50.843px',
        height: '3.126px',
        borderRadius: '77px',
        background: colorBrown.toString(),
        flexShrink: 0,
        marginTop:'63px'
    }
)

const titleWrapper = style(
    {
        width:'100%',
        marginTop:'16.24px'
    }
)

const homeSubTitle = style(
    {
        color: colorBrown.toString(),
        fontFamily: 'Montserrat',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
      
    }
)

const paragrafWrapper = style({
    width: '339px',
    height: '85.718px',
    flexShrink: 0,
    marginTop:'43px'
})

const homeParagraph = style({
    color:colorBrown.toString(),
    fontFamily: 'Montserrat',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
})

const homeGallery = style({
    width: '339px',
    height: '307.479px',
    marginTop:'63px',
    flexShrink: 0,
    display:'flex',
    gap:'16px'
})

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

const imageTop = style({
    width: '172.028px',
    height: '105.086px',
    flexShrink: 0, backgroundColor:'red'
})

const imageBottom = style({
    width: '122.952px',
    height: '184.428px',
    flexShrink: 0,
    backgroundColor:"red"
})

const imageBorder = style({
    borderRadius:'24px'
})