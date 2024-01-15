
export const callImagesById = async (id:string) => {
    try {
        const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
        const json = await res.json();
        console.log(json); 
    } catch (error) {
        console.log(error);
    }   
}