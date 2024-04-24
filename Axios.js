import axios from 'axios'
import React, {  useState,useEffect } from 'react';
import { Button } from 'react-bootstrap' 

export default function Axios() {
   
        const URL='https://jsonplaceholder.typicode.com/users';

       const [state,setstate]=useState([])

       const getProduct = async () => {

        const response = await 
        axios.get(URL).then((value)=>{
           
           setstate(value.data);

           
        }).catch((err)=>{
            console.log("somthing went wrong try again");
        })}
        
     
       useEffect(() => {getProduct()
      },[]);
            
      function Adduser(){

        axios.post(URL,{
          "id": "11",
          "name": "TAMIZH",
          "username": "TAM",
          "email": "tamizh007@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
          
        ).then((response)=>{
          setstate(response.data)
          console.log(response)
        })
      }
 Adduser();
      function Edituser(){

        axios.put(`${URL}/3`,{
          name: "TAMIZH",
          username: "TAM",
        }).then((response)=>{
          setstate(...state,response.data)
          console.log(response)
        })
      }

     Edituser();


      function deletePost() {
        axios
          .delete(`${URL}/0`)
          .then(() => {
            alert("Post deleted!");
            setstate(null)
          });
      }
      /* deletePost() */



      let IMG = state.map((x)=>(
        <div>
        <h1>{x.name}</h1><hr></hr>
        <h1>{x.username}</h1>
        </div>
         
      ))


      /* console.log(Adduser()) */
      console.log(state)
    return (
      <div>
        
       {IMG}
      
      <Button variant='success' onClick={Adduser}>Adduser</Button>
      <Button variant='danger' onclick={Edituser}>Edit user</Button>
      <Button variant='primary' onclick={deletePost}>Delete user</Button>
      </div>
    )
  }
