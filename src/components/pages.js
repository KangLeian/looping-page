import React from "react";

class Pages extends React.Component {
    constructor(){
        super()
    }
    componentDidMount() {
        console.log("didmount",this)
    }

    componentWillUnmount() {
        console.log("willmount",this)
    }


    render() {
      return (
            <div style={{ backgroundColor: this.props.color, minHeight: "95vh", minWidth: "33vw"}}> 
                <h1>{this.props.page != "" ? "page " + this.props.page : ""}</h1>
            </div>
        )
    }
}

export default Pages;