import { media, style } from 'typestyle'

export const Layout = () => {
  return (
    <div>
        <header className={headerWrapper}>
            <figure className={logoWrapper}>
                <img src="/public/CatwikiLogo.svg" alt=""/>
            </figure>
        </header>
        <main></main>
    </div>
  )
}

const headerWrapper = style(
    {
        width:'100%',
        height:'80px',
        padding:"24px 18px"
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
