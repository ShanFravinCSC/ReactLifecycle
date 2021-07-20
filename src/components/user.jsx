import React, { useEffect, useState } from "react"; //importing React

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
/*class User extends React.Component{
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

   /* shouldComponentUpdate(nextProp, nextState){
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
    }*/



    //render(){
        //console.log("Hey Im from render");
        //view - browser
        //logic

        const User = (props) => {
            const[planet, setPlanet] = useState("earth");

            //componentDidMount
            useEffect(() =>{
                //setPlanet("jupiter");
                console.log("component mounting");

                //componentWillUpdate
                return console.log("bye bye");
            }, []);

            //componentDidUpdate
            //shouldComponentUpdate
            useEffect(() =>{
                console.log("Planet Changes");
            },[planet]);
        
        return(
            <div>
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                <button onClick={() => setPlanet("pluto")}>{planet}</button>
            </div>
        );
    //}
};

export default User;