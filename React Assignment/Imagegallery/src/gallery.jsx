import './style.css'

export default function Image(props){
    return (
        <>
        <article className="gallerywrap shadow-md bg-white rounded-3xl p-5">
        <img 
        src={props.urls.full}
         alt={props.user.name} 
         loading="lazy"
         className=" h-52 w-full object-cover rounded-3xl md:h-80"
         />
         <div>
         <h2 className="text-center">{props.user.name}</h2>
         </div>
        </article>
        </>
    )

}