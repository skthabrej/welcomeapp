import { Component } from "react";
import './Welcome.css'

class WelcomeApp extends Component {
    state = {text:'subscribe'}
    onSubscribe = () => {
        const {text} = this.state
        if(text === 'subscribe') {
            this.setState(prevState => ({text:'subscribed'}))
        } else {
            this.setState(prevState => ({text: 'subscribe'}))
        }
    }
    render() {
        const {text} = this.state
        return (
            <div className="bg-container">
                <h1 className="heading">Welcome</h1>
                <p className="paragraph">Thank you! Happy learning</p>
                <button className="btn" onClick={this.onSubscribe}>{text}</button>
            </div>
        )
    }
}
export default WelcomeApp