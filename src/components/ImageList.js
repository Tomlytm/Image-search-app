import React from "react";
const ImageList=(props)=> {
    const pictures = props.pics.map((item)=>{
        return <img src={item.urls.regular} key={item.id} alt={item.alt_description}/>
    })
    
        return(
            <div>
                {pictures}
            </div>
        )
    }
export default ImageList;