import React from "react";

type imgBreed = {
    id: string,
    url: string,
    width: number,
    height: number
}
export const callImagesById = async (id:string, setImg: React.Dispatch<React.SetStateAction<string | undefined>>) => {
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
        const json = await res.json();
        setImg(json.url)
    } catch (error) {
       setImg(undefined)
    }   
}


export const callImagesByBreed = async (breed:string, setImg: React.Dispatch<React.SetStateAction<string[] | undefined>>) => {
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=live_8UXRksSN6lKhM0g2h6IZo36aBVycHM9U2DRMTDEq0MsDXTXUn7brtqgXzA0BMG50`)
        const json:imgBreed[] = await res.json();
        setImg(json.map(i=>i.url))
    } catch (error) {
       setImg(undefined)
    }   
}
