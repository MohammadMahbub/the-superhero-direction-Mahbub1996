import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name , img, Nationality, Occupation, selary, YearsActive, Award, Id}=props.person  || {}


    return (
        
        <div className="perosn">
            <img src={img} alt="" srcset="" />
            <h5>Name : {name}</h5>
            <p><small className="Occupation">Occupation : {Occupation}</small> </p>
            <h6>Salary : ${selary}</h6>
            <h6>Nationality : {Nationality}</h6>
            <p>Years Active : {YearsActive}</p>
            <button onClick={()=>props.handleAddToCart(props.person)} className="button"><i class="fas fa-shopping-cart"></i> Add Cart</button>
           
        </div>
        
    );
};

export default Person;

