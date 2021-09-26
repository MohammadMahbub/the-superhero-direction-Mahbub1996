import React from 'react';
import './Person.css'

const Person = (props) => {
    const {name , img, Nationality, Occupation, selary, YearsActive, Award, Id}=props.person  || {}
    const {total, setTotal, details, setDetails} = props


    return (
        
        <div className="perosn">
            <img src={img} alt="" srcset="" />
            <h5>Name : {name}</h5>
            <p><small className="Occupation">Occupation : {Occupation}</small> </p>
            <h6>Salary : ${selary}</h6>
            <h6>Nationality : {Nationality}</h6>
            <p>Years Active : {YearsActive}</p>
            <button onClick={()=>{setTotal(total +1); setDetails(props.person)}} className="button"><i class="fas fa-shopping-cart"></i> Add Cart</button>
           
        </div>
        
    );
};

export default Person;

