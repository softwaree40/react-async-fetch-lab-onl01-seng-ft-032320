// create your App component here
import React, { Component } from 'react'

 class App extends Component {

    state ={

     listOfPeopleInSpace:[]

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
    componentDidMount(){
     fetch("http://api.open-notify.org/astros.json")
        .then(response =>response.json())
        .then(peopleDateInSpace =>{
          this.setState({

            listOfPeopleInSpace:peopleDateInSpace.people

          })
        })

    }
}
export default App