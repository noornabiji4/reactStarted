//react
// const React = require('react');
// const ReactDOM = require('react-dom');
//react dom
import React from 'react';
import ReactDOM from 'react-dom';
import Car from './car.js';
import Friend from './friends.js'

require('./index.css');

// const cars=[
//     {id : 1, name : "Benz"},
//     {id : 2, name : " Audi" },
//     {id : 3, name : "Rolls Royce"}
// ]
const friends=[
    {id : 1, name : "misbah", friend:true},
    {id : 2,name : " imad" , friend:true },
    {id : 3, name : "afzal" , friend:true},
    {id : 4, name : "aa", friend:false},
    {id : 5,name : " shoeb" , friend:true },
    {id : 6, name : "bb" , friend:false}
]




class ListFriend extends React.Component{
    render(){
       
        return(

            
            // friends.filter((friends)=>{
            //     if(friends === true){
            //         return true;
            //         friends.map((friends)=>{
            //             return <ul> <ol key={friends.id}>Ture friends{friends}</ol></ul>
            //         })
            //         friends.filter((friends)=>{
            //             if(friends === false){
            //                 return false;
            //                 friends.map((friends)=>{
            //                     return <ul> <ol key={friends.id}>flase friends{friends}</ol></ul>
                                
            //                   
                            
            //                 })
            //             }
            //         }
            //     })
            <Friend  friends={friends}/>
        )
    }
    
    }
    
    ReactDOM.render(
        <ListFriend/>,
      
        document.getElementById('content')
        
    )
    












// class App extends React.Component{
//     render(){
//         return(
//            <Car cars={cars}/>
//         )
//     }
    
//     }
    
//     ReactDOM.render(
//         <App/>,
      
//         document.getElementById('content')
        
//     )
    


