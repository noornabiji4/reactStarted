import React from 'react'

//function componants 
const Friend = function(props){
    return(
        <ol>
        {props.friends.map((friends)=><li key={friends.id}>{friends.name}</li>
           )}
        </ol>
    )
}

export default Friend


// class Friend extends React.Component{
    //     render(){
    //         return (
    //             <ol>
    //             {this.props.friends.map((friends)=><li key={friends.id}>{friends.name}</li>
    //              )}
    //          </ol>
    //         )
            
    //     }
    // }