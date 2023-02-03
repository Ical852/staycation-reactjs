import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import itemDetails from 'json/itemDetails.json'
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import { Fade } from 'react-reveal';
import BookingForm from 'parts/BookingForm';
import Testimoni from 'parts/Testimoni';
import Footer from 'parts/Footer';

import  { checkoutBooking } from 'store/actions/checkout'
import { fetchPage } from "store/actions/page";
import Activities from 'parts/Activity';

class DetailPage extends Component {

    componentDidMount() {
        document.title = "Staycation | Details Page"
        window.scrollTo(0,0)

        if (!this.props.page[this.props.match.params.id])
            this.props
            .fetchPage(
                `http://localhost:8000/api/detail-page/${this.props.match.params.id}`,
                this.props.match.params.id
            )
            .then((response) => {
                document.title = `Staycation | ${response.title}`;
            });
    }

    render() {
        const { page, match } = this.props;

        if (!page[match.params.id]) return null;

        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" },
        ];

        const data = {
            activity: [page[match.params.id]]
        }

        return (
            <>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Poppins" />
                <Header {...this.props}/>
                <PageDetailTitle 
                    breadcrumb={breadcrumb} 
                    data={page[match.params.id]} 
                />
                <FeaturedImage
                    data={page[match.params.id].imageId}
                />
                <section className='container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-7 pr-5'>
                                <Fade left delay={500}>
                                    <PageDetailDescription
                                        data={page[match.params.id]}
                                    />
                                </Fade>
                            </div>
                            <div className='col-5'>
                                <Fade right delay={500}>
                                    <BookingForm
                                        itemDetails={page[match.params.id]}
                                        startBooking={this.props.checkoutBooking}
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
                <Activities data={data}/>
                <Testimoni
                    data={page[match.params.id].testimonial}
                />
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailPage
);
