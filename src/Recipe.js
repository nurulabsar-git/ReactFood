import React from 'react'; 


const Recipe = ({title, calories, images}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={images} alt=""/>
        </div>
    );
}

export default Recipe;