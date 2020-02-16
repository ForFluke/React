import React , { Component } from  "react";
import axios from 'axios' ;
import withRequest from '../lip/withRequest';

class User extends Component {

    render(){
        return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>name</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(user =>(
                            <tr key={user.id}>
                                <td> {user.id} </td>
                                <td> {user.name} </td>
                                <td> {user.email} </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
export default withRequest('https://jsonplaceholder.typicode.com/users')(User);