import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Clark','Diana','Clark']
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
    // const personList = persons.map(person =><Person key = {person.id} person = {person}/>)
    // return (
    //     <div>{personList}</div>
    // )
    //when to use index a skey
    //the items in your list do not have a unique id . The list is static list and will not change , the list will be never re-ordered or filtered
    
const nameList = names.map((name,index) => <h2 key = {index}> { index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
