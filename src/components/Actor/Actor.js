import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Total from '../Total/Total';

const Actor = () => {

const [person, setPerson]=useState([])
const [total, setTotal]=useState([])

useEffect(()=>{
    fetch('./actor.json')
    .then(res => res.json())
    .then(data => setPerson(data))
}, [])

const handleAddToCart = (person)=>{
    const newTotal = [...total, person]
    setTotal(newTotal)
}

    return (
        <div>

            <div className="main-conatiner row">

                <div className="person-cart col-md-9">
                    {/* here person cart calling */}

                  <div className="row">
                   {
                        person.map(person=><Person
                            key={person.key}
                            person={person}
                            handleAddToCart = {handleAddToCart}
                        ></Person>)
                    }
                  </div>
                    

                </div>

                <div className="col-md-3">
                    {/* here cart total calling */}
                        <Total 
                        person ={person}
                        ></Total>
                </div>

            </div>
            </div>

        

    );
};

export default Actor;