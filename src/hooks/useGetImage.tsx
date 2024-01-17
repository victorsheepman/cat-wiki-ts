import { useEffect, useState } from 'react'
import { callImagesById } from '../api'

export const useGetImage = (imgUrl:string | undefined) => {
    const [img, setImg] = useState<string | undefined>(undefined)
    useEffect(() => {
        if (imgUrl) {
            callImagesById(imgUrl, setImg)
        }
    }, [imgUrl])
  return {
    img
  }
}
