import React from 'react';
import {recipe} from '../tempDetails';
 class Recette  extends React.Component {

render(){
    const {
        image_url,
        title,
        source_url ,
        publisher ,
        recipe_id} = this.props.recipe ;
        const{handleDetails}=this.props ; 
        
    return (
   <div>
       <div className="col-10 mx-auto col-md-6 col-lg-10 my-3">
       <div className="card">
       <img src={image_url} className="img-card-top" style={{ height:"11rem" }} alt="recipe">
       </img>
       <div className="card-body text-capitalize">
       <h6> {title} </h6>
        <h6 className="text-warning">
      provided by  {publisher}
        </h6>       
       </div>
       <div className="card-footer">
       <button type="button" className="btn btn-primary" onClick={handleDetails}>
       details
       </button>
       <a href={source_url} className="btn btn-success mx-2"> recipe url
       </a>
       </div>
       </div>
       
       
       </div>
       </div>
    );
} }
export default Recette ;