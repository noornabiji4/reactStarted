//react
// const React = require('react');
// const ReactDOM = require('react-dom');
//react dom
import React from 'react';
import ReactDOM from 'react-dom';
import Friend from './friends.js'
require('./index.css');

const friends=[
    {id: 1 , name : "misbah"},
    {id : 2,name : " imad" },
    {id : 3, name : "afzal"}
]

class ListFriend extends React.Component{
    render(){
        return(
           <Friend  friends={friends}/>
        )
    }
    
    }
    
    ReactDOM.render(
        <ListFriend/>,
      
        document.getElementById('content')
        
    )
    