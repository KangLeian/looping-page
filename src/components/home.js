import React from "react";

class Home extends React.Component {
    constructor(){
        super()
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render() {
      return (
        <> 
            sekarang jam {this.state.date.toLocaleTimeString()}
        </>
        )
    }
}

export default Home;