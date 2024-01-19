import { ReactNode } from 'react'
import { classes, media, style } from 'typestyle'
import { colorBlack, colorWhite, montserrat } from '../theme'
import { Link } from 'react-router-dom'

export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
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
             <p className={symbolStyle}>©</p><p className={layoutFooterParagraph}>
                created by <strong 
                                className={
                                    classes(
                                        layoutFooterParagraph, 
                                        style({fontWeight:700, textDecorationLine:'underline'})
                                    )
                                }
                            >
                               Victor Marquez
                            </strong>  - devChallenge.io 2024</p>
        </footer>
    </div>
  )
}

const headerWrapper = style(
    {
        width:'100%',
        height:'80px',
        padding:"24px 18px",
    }, 
    media(
        {minWidth:1366},
        {
            padding:"25px 96px"
        }
    )
)

const logoWrapper = style({
    width: '127.72px',
    height: '43.69px',
    flexShrink: 0
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
            padding:'30px 96px 0px 96px'
        }
    )
)
const layoutFooter = style({
    width: '100%',
    height: '122.089px',
    flexShrink: 0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colorBlack.toString(),
    borderRadius:'40px 40px 0px 0px',
    
})

const layoutFooterParagraph = style({
    color: colorWhite.toString(),
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
})

const symbolStyle = style({
    color: colorWhite.toString(),
    fontFamily: montserrat,
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal'
})