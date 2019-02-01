import React from 'react';
import Recette from '../components/Recette';
import Recette_search from './Recette_search';
import { recipe } from '../tempDetails';
 class Liste_recettes extends React.Component {
   
render(){
    const {recipes,handleDetails} = this.props ;
    return (
   <div>
     
       <Recette_search />
    <div className="container my-5">
    
    <div className="row">
    <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
    <h1>recipe list </h1>
    </div>
    </div>
    <div className="row">
     {recipes.map(recipe=>{
         return <Recette key={recipe.recipe_id}
                       recipe={recipe}  handleDetails={()=>handleDetails(0,recipe.recipe_id)}/>
     })}
    
    </div>
    </div>
       </div>
    );
} 


} 
export default Liste_recettes ;