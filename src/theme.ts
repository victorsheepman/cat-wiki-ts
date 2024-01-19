import { color } from "csx";
import { stylesheet } from "typestyle";

//COLORS
export const colorBlack = color("#000")
export const colorBrown = color("#291507")
export const colorBeige = color("#E3E1DC")
export const colorWhite = color("#FFF")
export const colorGray  = color("#E0E0E0")
export const colorYellow = color("#DEC68B")

//FONTS
export const montserrat = 'Montserrat'

export const theme = stylesheet(
    {
        paragraph:{
            color:colorBrown.toString(),
            fontFamily: montserrat,
            fontSize: '1.125rem',
            fontStyle: 'normal',
            lineHeight: 'normal',
        }
    }
)