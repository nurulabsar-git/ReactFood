import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';


const App = () =>{
  const app_id = 'd7cd03e1';
  const App_key ='080961c08c204cb9904921f5006c55d9';
  
//   const example = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${App_key}`;
 const [recipes, setRecipes] = useState([]);

useEffect( () => {
   getRecipes();
//  console.log('hello bangladesh');
}, []);

const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${App_key}`);
  const data = await response.json();
  // console.log(data.hits);
  setRecipes(data.hits);
  console.log(data.hits);
  console.log(data);

}

  return(
    <div className ="App">
      <form className ="search-form">
        <input className ="search-bar" type="text"/>
        <button className ="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipeA =>(
     <Recipe title ={recipeA.recipe.label} calories ={recipeA.recipe.calories}
      images = {recipeA.recipe.image}></Recipe>
  ))}
    </div>
  );
};

export default App;
