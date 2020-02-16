import React , { Component } from  "react";
import axios from 'axios' ;

class Post extends Component {
  state = {
    data : []
  };

    async componentDidMount(){
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        this.setState({data : result.data })
    }

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
                        {this.state.data.map(post =>(
                            <tr>
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
export default Post;