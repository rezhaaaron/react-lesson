import React, {Component} from 'react'
import './LifeCycleComp.css'

class LifeCycleComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            order:0
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.setState({order : 1})
        setTimeout(() => this.setState({order : 2}), 5000)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    render(){
        console.log('render')
        return(
            <button className="btn">Component Button {this.state.order}</button>
        )
    }
}

export default LifeCycleComp