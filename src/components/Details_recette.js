import React from 'react';
import {recipe} from "../tempDetails" ;
 class Details_recette  extends React.Component {
constructor(props){
    super(props);
    this.state={
        recipe: recipe,
        url:`https://www.food2fork.com/api/get?key=dc96013276b3ac5bd5bc14701514b79b&rId=${this.props.id}`
    }
    
}
async componentDidMount(){
    try {
        const data = await fetch(this.state.url);
        const jsondata = await data.json();
        this.setState({
          recipe:jsondata.recipe
        })}
        catch(error) {
          console.log(error);
        }
  } 
    render(){
      const {
          publisher
          ,publisher_url
          ,source_url
          ,title,
          image_url
          ,ingredients}=this.state.recipe ;
          const{handleIndex} = this.props ;
    return (
   <div>
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-6 my-3">
      <button className="btn btn-warning mb-5" onClick={()=>handleIndex(1)}>
      back to recipe list
      </button>
    <img src={ image_url} className="d-block w-100" alt="recipe" />
      </div>
      <div className="col-10 mx-auto col-md-6 my-3">
      <h6>{title}
      </h6>
      <h6 className="text-warning" > provided by {publisher}</h6>
      <a href={publisher_url} className="btn btn-primary mt-2"> publisher web page</a>
      <a href={source_url} className="btn btn-success mt-2 mx-3" > recipe url </a>
      <ul className="list-group mt-4">
       <h2 className="mt-3">ingredients </h2>
       {
           ingredients.map((ingredient,index) =>{
               return(
                   <li key={index} className="list-group-item">{ingredient} </li>
               )
           })
       }
      
      
      
      </ul>
      
      </div>
      
      </div>
       </div>
       </div>
    );
} 


} 
export default Details_recette ;