import React , { Component } from  "react";
import axios from 'axios' ;
import withRequest from '../lip/withRequest';

class Post extends Component {

    render(){
        return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>id</td>
                            <td>Title</td>
                            <td>body</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(post =>(
                            <tr key={post.id}>
                                <td> {post.userId} </td>
                                <td> {post.id} </td>
                                <td> {post.titla} </td>
                                <td> {post.body} </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
export default withRequest('https://jsonplaceholder.typicode.com/posts')(Post);