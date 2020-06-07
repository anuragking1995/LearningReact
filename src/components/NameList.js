import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
           id:1,
           name :'Clark' ,
           age:28,
           skill:'Vue'
        },
        {
            id:2,
            name :'Diana' ,
            age:29,
            skill:'React'
         },
         {
            id:3,
            name :'Bruce' ,
            age:30,
            skill:'angular'
         }
    ]
    const personList = persons.map(person =><Person person = {person}/>)
    return (
        <div>{personList}</div>
    )
}

export default NameList
