import React, { Component } from 'react'
import { connect } from "react-redux";

import Header from 'parts/Header'
import landingPage from 'json/landingPage.json'
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import { fetchPage } from "store/actions/page";
class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.refMostPicked = React.createRef()
    }
    
    componentDidMount() {
        document.title = "Staycation | Home" 
        window.scrollTo(0, 0)
        
        if (!this.props.page.landingPage)
            this.props.fetchPage(`http://localhost:8000/api/landing-page`, "landingPage");
    }
    render() {
        const { page } = this.props;

        if (!page.hasOwnProperty("landingPage")) return null;

        return (
            <>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={page.landingPage}/>
                <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage}/>
                <Categories data={page.landingPage}/>
                <Testimoni data={page.landingPage.testimonial}/>
                <Footer/>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, { fetchPage})(LandingPage)