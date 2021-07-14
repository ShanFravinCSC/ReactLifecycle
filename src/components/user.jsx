import React from "react"; //importing React

//Function based component
/*const User = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};
export default User;*/

//class based component
class User extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            planet: "earth",
        };
        console.log("hey Iam from Constructor");
    }

    /*static getDerivedStateFromProps(prop, state){
        console.log(
            "I'm from get derived state from props");
            return {planet: "Jupiter"};
    }*/

    shouldComponentUpdate(nextProp, nextState){
        console.log("from should component update");
        console.log(
            {
                nextProp,
                nextState,
            }
        );
        return true;
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("from get snapshot before update ");
        console.log({ prevProp, prevState });
        return true;
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    componentDidMount(){
        this.setState(
            {
                planet: "jupiter"
            }
        );
        console.log("Hey Im from Componentdidmount");
    }

    render(){
        console.log("Hey Im from render");
        //view - browser
        //logic
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}

export default User;