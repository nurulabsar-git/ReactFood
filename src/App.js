import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';


const App = () =>{
  const app_id = 'd7cd03e1';
  const App_key ='080961c08c204cb9904921f5006c55d9';
  
//   const example = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${App_key}`;
 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState("");
 const [query, setQuery] = useState('chicken');

useEffect( () => {
   getRecipes();
//  console.log('hello bangladesh');
}, [query]);

const getRecipes = async () =>{
  // const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${App_key}`);
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${App_key}`);
  const data = await response.json();
  // console.log(data.hits);
  setRecipes(data.hits);
  console.log(data.hits);
  console.log(data);

};

const updateSearch = e => {
  setSearch(e.target.value);
  console.log(search);
};
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

return(
<div className ="App">
      <form onSubmit={getSearch} className ="search-form">
        <input value ={search} onChange={updateSearch} className ="search-bar" type="text"/>
        <button className ="search-button" type="submit">Search</button>
      </form>
     <div className ="recipes"> 
    {recipes.map(recipeA =>(
     <Recipe key ={recipeA.recipe.label}
      title ={recipeA.recipe.label} calories ={recipeA.recipe.calories}
      images = {recipeA.recipe.image} ingredientsA ={recipeA.recipe.ingredients}>
      
      </Recipe>
  ))}
  </div>
</div>
  );
};

export default App;
