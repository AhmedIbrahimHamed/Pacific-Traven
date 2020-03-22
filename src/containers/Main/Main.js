import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Home from '../../components/Home/Home';
import Resturant from '../../components/Resturant/Resturant';
import Menu from '../../components/Menu/Menu';
import Drinks from '../../components/Drinks/Drinks';
import Reservations from '../../components/Reservations/Reservations';
import Footer from '../../components/Footer/Footer';
import ToggleModal from '../../components/ToggleModal/ToggleModal';

export class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            windowWidth: undefined
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }

    toggleModal() {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }
        ));
    }

    const

    render() {
        return (
            <div>
                <Element name="home" className="element">
                    <Home toggleModal={this.toggleModal} />
                </Element>

                <Element name="resturant" className="element">
                    <Resturant />
                </Element>

                <Element name="menu" className="element">
                    <Menu />
                </Element>

                <Element name="drinks" className="element">
                    <Drinks />
                </Element>

                <Element name="reservations" className="element">
                    <Reservations />
                </Element>

                <Footer />

                <ToggleModal isModalOpen={this.state.isModalOpen} windowWidth={this.state.windowWidth} toggleModal={this.toggleModal} />
            </div>
        )
    }
}

export default Main
