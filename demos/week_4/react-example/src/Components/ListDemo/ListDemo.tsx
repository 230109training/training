import React from 'react'

// Generate some dummy data
class Person {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const DUMMY_ARRAY = [
    new Person(1, "Mike", 43),
    new Person(2, "Jane", 35),
    new Person(3, "Lizz", 97)
]


const ListDemo = () => {
  return (
    <>
        {

            /**
             * To display items in an array to the DOM, we use the map function
             * The map function transforms each item in an array
             * Each element must have a key so that React is aware of them individually not just as a group
             */
            DUMMY_ARRAY.map(person => {
                return(
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <h2>{person.id}</h2>
                        <h3>{person.age}</h3>
                    </div>
                )
            })
        }
    <h1>Code</h1>
        <pre style={{
            textAlign: "left",
            backgroundColor: "black",
            color: "white"
        }}>
{
`
import React from 'react'

// Generate some dummy data
class Person {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const DUMMY_ARRAY = [
    new Person(1, "Mike", 43),
    new Person(2, "Jane", 35),
    new Person(3, "Lizz", 97)
]


const ListDemo = () => {
  return (
    <>
        {

            /**
             * To display items in an array to the DOM, we use the map function
             * The map function transforms each item in an array
             * Each element must have a key so that React is aware of them individually not just as a group
             */
            DUMMY_ARRAY.map(person => {
                return(
                    <div key={person.id}>
                        <h1>{person.name}</h1>
                        <h2>{person.id}</h2>
                        <h3>{person.age}</h3>
                    </div>
                )
            })
        }
    </>
  )
}

export default ListDemo
`
}
        </pre>
    </>
  )
}

export default ListDemo