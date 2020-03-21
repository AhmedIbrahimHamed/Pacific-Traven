import React, { Component } from 'react'
import Home from '../../components/Home/Home'
import Resturant from '../../components/Resturant/Resturant'
import Menu from '../../components/Menu/Menu'
import Drinks from '../../components/Drinks/Drinks'
import Reservations from '../../components/Reservations/Reservations'

export class Main extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div>
                <Home/>
                <Resturant/>
                <Menu/>
                <Drinks/>
                <Reservations/>
            </div>
        )
    }
}

export default Main
