import { color } from "csx";
import { stylesheet } from "typestyle";

//COLORS
export const colorBlack = color("#000")
export const colorBrown = color("#291507")
export const colorBeige = color("#E3E1DC")
export const colorWhite = color("#FFF")

//FONTS
export const montserrat = 'Montserrat'

export const theme = stylesheet(
    {
        paragraph:{
            color:colorBrown.toString(),
            fontFamily: montserrat,
            fontSize: '18px',
            fontStyle: 'normal',
            lineHeight: 'normal',
        }
    }
)