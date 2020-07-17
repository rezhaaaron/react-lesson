import React from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios'

let url = 'http://localhost:3004/posts'

class BlogPost extends React.Component{
    state = {
        post : [],
        formBlogSpot : {
            id : 1,
            title: '',
            body:'',
            userId: 1
        }
    }

    getAPI = () => {
        axios.get(`${url}?_sort=id&_order=desc`)
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
        this.getAPI(url, this.state.formBlogSpot)
    }

    handlerRemove = (data) => {
        console.log(data)
        axios.delete(`${url}/${data}`)
        .then(result => {
            this.getAPI()
        })
    }

    postDataToAPI = () => {
        axios.post(url, this.state.formBlogSpot)
        .then(res => {
            console.log('Sukses',res)
            this.getAPI()
        },(err) => {
            console.log(err)
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogSpot)
        this.postDataToAPI()
    }

    handlerOnChangeForm = (event) => {
        // console.log(event)
        let newFormBlogspot = {...this.state.formBlogSpot}
        let timeStamp = new Date().getTime();
        newFormBlogspot['id'] = timeStamp
        newFormBlogspot[event.target.name] = event.target.value
        this.setState({
            formBlogSpot : newFormBlogspot
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title" className="title"></label>
                    <input type="text" name="title" onChange={this.handlerOnChangeForm} placeholder="add a title"/>
                    <label htmlFor="body">Blog Content</label>
                    <textarea onChange={this.handlerOnChangeForm} name="body" id="body" cols="30" rows="10" placeholder="add blog content"></textarea>
                    <button onClick={this.handleSubmit} className="btn-submit">Save</button>
                </div>
                {this.state.post.map(post => {
                    return <Post key={post.id} data={post} remove={this.handlerRemove} />
                })}
            </React.Fragment>
        )
    }
}

export default BlogPost