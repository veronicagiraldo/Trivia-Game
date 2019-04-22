import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component {
        //  enter to the Trivia Question page
    render(){
        // const styles={
        //     color: 'DARKBLUE',
        //     fontSize: '100px',
        //     textShadow: '4px 4px YELLOWGREEN', 
            
        // }
        return(
            <div className="HomePage">
                <div className="homeInfo">
                <h1>Trivia-2-Go</h1>
                <h3 >Would you like to play?</h3>
               <Link className="link" to ='/triviaQuestion'>YES</Link>
            </div>
            </div>
       )
    }


}       

export default Home