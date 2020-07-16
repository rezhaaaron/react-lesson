import React from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios'

let url = 'http://localhost:3004/posts'

class BlogPost extends React.Component{
    state = {
        post : []
    }

    getAPI = () => {
        axios.get(url)
            .then(result => {
                // console.log(result)
                const data = result.data
                this.setState({
                    post : data
                })
            })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => this.setState({
        //     post : json
        //     })
        // )
        this.getAPI()
    }

    handlerRemove = (data) => {
        console.log(data)
        axios.delete(`${url}/${data}`)
        .then(result => {
            this.getAPI()
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <p className="section-title">Blog Post</p>
                {this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handlerRemove} />
                })}
            </React.Fragment>
        )
    }
}

export default BlogPost