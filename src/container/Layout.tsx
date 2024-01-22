import { ReactNode } from 'react'
import { classes, media, style } from 'typestyle'
import { colorBlack, colorWhite, montserrat } from '../theme'
import { Link } from 'react-router-dom'

export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className={style(media({minWidth:1500},{display:'flex', alignItems:'center',flexDirection:'column'}))}>
        <header className={headerWrapper}>
            <Link to="/" >
                <figure className={logoWrapper}>
                    <img src="CatwikiLogo.svg" alt=""/>
                </figure>
            </Link>
        </header>
        <main className={mainWrapper}>
        {children}
     
        </main>
        <footer className={layoutFooter}>
            <div>
                  <p className={logoText}>
                    CatWiki {''}
                    <img style={{width:'24px', height:'24px'}} src="catLogo.svg" alt="" /> 
                  </p>
                  
            </div>
            <div>
                <p className={layoutFooterParagraph}>
                    created by <strong 
                                    className={
                                        classes(
                                            layoutFooterParagraph, 
                                            style({fontWeight:700, textDecorationLine:'underline'})
                                        )
                                    }
                                >
                                Victor Marquez
                                </strong>  - devChallenge.io 2024
                </p>
            </div>
        </footer>
    </div>
  )
}

const headerWrapper = style(
    {
        width:'100%',
        height:'80px',
        padding:"6.40% 6.80%",
    }, 
    media(
        {minWidth:1366},
        {
            padding:"25px 96px"
        }
    ),
    media(
        {minWidth:1500},
        {
            width:'1248px',
            padding:'25px 0px'
        }
    )
)

const logoWrapper = style({
    width: '127.72px',
    height: '43.69px',
    flexShrink: 0,
    
})

const mainWrapper = style(
    {
        width:'100%',
        height:'auto',
        padding:'23px 18px 0px 18px'
    }, 
    media(
        {minWidth:768},
        {
            padding:'30px 58px 0px 58px'
        }
    ),
    media(
        {minWidth:1024},
        {
            padding:'30px 18px 0px 18px'
        }
    ),
    media(
        {minWidth:1366},
        {
            padding:'30px 96px 0px 96px',
        }
    ),
    media(
        {minWidth:1500},{
            display:'flex',
            justifyContent:'center'
        }
    )
)
const layoutFooter = style(
    {
        width: '100%',
        height: '122.089px',
        flexShrink: 0,
        display:'flex',
        flexDirection:'column',
        gap:'14px',
        justifyContent:'center',
        backgroundColor: colorBlack.toString(),
        borderRadius:'40px 40px 0px 0px',
        marginTop:'85px',
        padding:'0px 28px'
    
    },
    media(
        {minWidth:768},
        {
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
        }
    )
)

const layoutFooterParagraph = style(
    {
        color: colorWhite.toString(),
        fontFamily: montserrat,
        fontSize: '0.75rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    },
    media(
        {minWidth:768},
        {
            fontSize:"1.125rem"
        }
    )
)



const logoText = style(
    {
        color: colorWhite.toString(),
        fontFamily: "Mystery Quest",
        fontSize: '0.875rem',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    },
    media(
        {minWidth:768},
        {
            fontSize:'1.5rem'
        }
    )
)