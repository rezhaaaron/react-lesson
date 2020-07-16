import React from 'react';
import './App.css';
// import LifeCycleComp from './LifeCycleComp/LifeCycleComp';
import BlogPost from './container/BlogPost/BlogPost.jsx'
class App extends React.Component {

    state = {
      activeComponent : true
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({activeComponent : false})
      }, 10000);
    }

    render(){
      return (
        <div className="">
        {/*} <p>Lifecycle Component</p>
        <hr />
        { this.state.activeComponent ? <LifeCycleComp /> : null} */}

        <p>Blogpost</p>
        <hr />
        <BlogPost />
        </div>
      )
    }
}

export default App;
