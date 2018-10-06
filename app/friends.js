import React from 'react'

//function componants 
class Friend extends React.Component{
render(){
var friend= this.props.friends.filter((friends)=> friends.friend === true)
var nonFriend = this.props.friends.filter((friends)=> friends.friend !== true)
    return(
            <div>
                <h1>friends</h1>
        {friend.map((friends)=>{
            return <li key={friends.id}>{friends.name}</li>
        })}

        <hr/>
        <h1>non friends</h1>
        {nonFriend.map((friends)=>{
            return <li key={friends.id}>{friends.name}</li>

        })}
        




        </div>
        // <ol>
        // {props.friends.map((friends)=><li key={friends.id}>{friends.name}</li>
        //    )}
        // </ol>
    )
}
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