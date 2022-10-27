import { Component } from "react";
import './Welcome.css'

class WelcomeApp extends Component {
    state = {text:'s u b s c r i b e'}
    onSubscribe = () => {
        const {text} = this.state
        if(text === 's u b s c r i b e') {
            this.setState(prevState => ({text:'s u b s c r i b e d'}))
        } else {
            this.setState(prevState => ({text: 's u b s c r i b e'}))
        }
    }
    render() {
        const {text} = this.state
        return (
            <div className="bg-container">
                <h1 className="heading">C L I C K--H E R E</h1>
                <button className="btn" onClick={this.onSubscribe}>{text}</button>
            </div>
        )
    }
}
export default WelcomeApp