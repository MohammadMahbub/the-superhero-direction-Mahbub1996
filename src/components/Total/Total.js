import React from 'react';
import './Total.css'
import Person from './../Person/Person';


const Total = (props) => {
    
    const {person}= props || {}


    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.price

   const total=person.reduce(totalReducer,0).toFixed(2)
   

    
   console.log(total) 
    return (
        <div className="total-cart">
            <h5>Total Add Cart : {person.length} </h5>
        </div>
    );
};

export default Total;