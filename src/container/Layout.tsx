import { ReactNode } from 'react'
import { media, style } from 'typestyle'

export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <header className={headerWrapper}>
            <figure className={logoWrapper}>
                <img src="/public/CatwikiLogo.svg" alt=""/>
            </figure>
        </header>
        <main className={mainWrapper}>
        {children}
        </main>
    </div>
  )
}

const headerWrapper = style(
    {
        width:'100%',
        height:'80px',
        padding:"24px 18px",
        backgroundColor:'red'
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
        {minWidth:1366},
        {
            padding:'30px 151px 0px 151px'
        }
    )
)