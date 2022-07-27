import {useState,useEffect} from "react"
import Image from "./Image"
import './style.css'
export default function GetImages() {
    const [images,setImages]=useState([])

    useEffect(()=>{
        const fetchImages=async ()=>{
            const response =await fetch(
                'https://api.unsplash.com/photos?client_id=vK5moOyVPOhxwEznIHSiHm0h0jdyf6UyB4yUCoUKsW4'
                )
            const data= await response.json()
            setImages(data)
            console.log(data);
        } 
        fetchImages()
    },[])
    return(
        <>
        {!images ?<h2 id="loading_heading">Loading...</h2>:
          <section className="px-5 container mx-auto">
          <h1 className="font-bold text-center text-2xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-16 text-slate-800 capitalize">Photographer's Show</h1>
          <div className="single grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" >
          {images.map((image)=>(
            <Image key={images.id} {...image}/>
          )
            
            )}
          
          </div>

          
          </section>



        }
        </>
    )
}