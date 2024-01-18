import React from "react";

type imgBreed = {
    id: string,
    url: string,
    width: number,
    height: number
}
const apiKey = import.meta.env.APIKEY
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
        const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=${apiKey}`)
        const json:imgBreed[] = await res.json();
        setImg(json.map(i=>i.url))
    } catch (error) {
       setImg(undefined)
    }   
}
