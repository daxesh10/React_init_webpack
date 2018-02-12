import React from 'react';
import ReactDom from 'react-dom';


export class MyNavBar extends React.Component {

render(){
    return(
        <div><h1>Wellcome !! , {this.props.name}</h1></div>
    )
}

}


export default MyNavBar 