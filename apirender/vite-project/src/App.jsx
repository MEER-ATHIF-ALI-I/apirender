import React,{useEffect,useState} from 'react';

const App = ()=>{
const [state,setState] =useState(null);

const url = "https://api.github.com/users/meerathifali"
const fetched =async ()=>{
  const response = await fetch(url)
  const data = await response.json()
  console.log('dataaaaaaaa',data);
  setState(data);
}

useEffect(()=>{
  fetched()
},[])

// useEffect(()=>{
//   fetch(url)
//   .then((response)=>{
//     return response.json()
//   })
//   .then((data)=>{
//     console.log(data)
//     setState(data)
//   })
// },[])


  return(
    <div>
       <h1>Listing</h1>
       {state?(
       <ul>
        {/* {Object.entries(state).map((entry)=>{
           const key= entry[0];
           const value= entry[1]
           return <li key={key}>
            <strong>{key}:</strong>
           {value===null||value===""?'N/A': value.toString()}
          </li>
           })} */}
           {Object.entries(state).map(([key, value]) => (
            <li key={key}>
              {/* <strong>{key}:</strong> {value === null || value === "" ? "N/A" : value.toString()} */}
              <strong>{key}: </strong>{value===null?'N/A':value}
            </li>
            ))}

       </ul>
        ):(<p>Loading...</p>)
        }  
    </div>
  )
}
export default App


// Step-by-Step Explanation:
// Object.entries(state):

// What it does: Converts the state object into an array of key-value pairs.
// For example, if state is:

// {
//   login: "meerathifali",
//   id: 141764009,
//   type: "User",
// }

// Then Object.entries(state) will produce:
// [
//   ["login", "meerathifali"],
//   ["id", 141764009],
//   ["type", "User"],
// ]
// .map(([key, value]) => ...):

// What it does: Iterates over the array of key-value pairs and returns a new list of JSX <li> elements.
// In each iteration:
// key holds the property name (e.g., "login", "id", "type").
// value holds the associated value (e.g., "meerathifali", 141764009, "User").
// <li key={key}>:

// Each <li> is created for a single key-value pair.
// The key attribute is required in React to uniquely identify each list item and avoid rendering issues.
// Here, the key is the property name (key), such as "login", "id", etc.
// <strong>{key}:</strong>:

// This displays the property name in bold (e.g., login:, id:, etc.).
// value === null || value === "" ? "N/A" : value.toString():

// What it does: Checks if the value is either:
// null → means no data is present.
// "" → means it's an empty string.
// If either is true, it displays "N/A" instead of the actual value.
// Otherwise, it converts the value to a string (using toString()) for rendering.
// Final JSX:

// For each key-value pair in the object, the map function generates a <li> like this:
// jsx
// Copy code
// <li key="login">
//   <strong>login:</strong> meerathifali
// </li>
// <li key="id">
//   <strong>id:</strong> 141764009
// </li>
// <li key="type">
//   <strong>type:</strong> User
// </li>
// Visualization of the Iteration:
// Here’s what happens step-by-step for a sample state:

// Input state:
// javascript
// Copy code
// {
//   login: "meerathifali",
//   id: 141764009,
//   type: "User",
//   bio: null,
//   location: "",
// }
// How the Code Processes It:
// Object.entries(state) produces:

// javascript
// Copy code
// [
//   ["login", "meerathifali"],
//   ["id", 141764009],
//   ["type", "User"],
//   ["bio", null],
//   ["location", ""],
// ]
// map Iterates Over Each Pair:

// First Pair:

// javascript
// Copy code
// key = "login", value = "meerathifali"
// Output:

// jsx
// Copy code
// <li key="login">
//   <strong>login:</strong> meerathifali
// </li>
// Second Pair:

// javascript
// Copy code
// key = "id", value = 141764009
// Output:

// jsx
// Copy code
// <li key="id">
//   <strong>id:</strong> 141764009
// </li>
// Third Pair:

// javascript
// Copy code
// key = "type", value = "User"
// Output:

// jsx
// Copy code
// <li key="type">
//   <strong>type:</strong> User
// </li>
// Fourth Pair:

// javascript
// Copy code
// key = "bio", value = null
// Output:

// jsx
// Copy code
// <li key="bio">
//   <strong>bio:</strong> N/A
// </li>
// Fifth Pair:

// javascript
// Copy code
// key = "location", value = ""
// Output:

// jsx
// Copy code
// <li key="location">
//   <strong>location:</strong> N/A
// </li>
// Final Rendered Output in JSX:
// jsx
// Copy code
// <ul>
//   <li key="login">
//     <strong>login:</strong> meerathifali
//   </li>
//   <li key="id">
//     <strong>id:</strong> 141764009
//   </li>
//   <li key="type">
//     <strong>type:</strong> User
//   </li>
//   <li key="bio">
//     <strong>bio:</strong> N/A
//   </li>
//   <li key="location">
//     <strong>location:</strong> N/A
//   </li>
// </ul>
// Does this explanation help clarify?

