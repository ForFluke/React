import React , { Component } from  "react";

class User extends Component {
    constructor (){
        super();
        console.log('constructor');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    onChange = event => {
        console.log(event.target.value);
    }
    render(){
        console.log('render');
        return (
        <div>
            <div>
                <input type="text" onChange={this.onChange}/>
            </div>
        </div>
        );
    }
}
export default User;