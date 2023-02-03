import React from 'react'

import Banner from 'assets/images/banner.png'
import IconCities from 'assets/icons/ic_cities.svg'
import IconTraveller from 'assets/icons/ic_traveler.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'
import Button from 'elements/Button'
import { Fade } from 'react-reveal'

import { numberFormat } from 'utils/formatNumber'
export default function Hero(props) {

    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: 'smooth'
        })
    }

    return (
        <section className='container pt-5'>
            <div className='container'>
                <div className='row'>
                    <Fade left>
                        <div className='col-6 pr-5'>
                            <h1 className='font-weight-bold line-height-1 mb-4'>
                                Forget Busy Work,<br/>Start Next Vacation
                            </h1>
                            <p className='mb-4 font-weight-light text-gray-500' style={{width: 335}}>
                                We provide what you need to enjoy your
                                holiday with family.Time to make another
                                memorable moments.
                            </p>
                            <Button className='btn px-5 mb-4 mt-2' isPrimary hasShadow onClick={() => showMostPicked()}>
                                Show Me Now
                            </Button>
                            <div className='row mt-5'>
                                <div className='col-auto' style={{ marginRight: 35 }}>
                                    <img src={IconTraveller} alt={`${props.data.hero.travelers} Travelers`} width={32} height={32}/>
                                    <h6 className='mt-3 font-weight-bold'>
                                        {numberFormat(props.data.hero.travelers)}
                                        <span className='text-gray-500 font-weight-light'> travellers</span>
                                    </h6>
                                </div>
                                <div className='col-auto' style={{ marginRight: 35 }}>
                                    <img src={IconTreasure} alt={`${props.data.hero.treasures} Treasures`} width={32} height={32}/>
                                    <h6 className='mt-3 font-weight-bold'>
                                        {numberFormat(props.data.hero.treasures)}
                                        <span className='text-gray-500 font-weight-light'> treasures</span>
                                    </h6>
                                </div>
                                <div className='col-auto' style={{ marginRight: 35 }}>
                                    <img src={IconCities} alt={`${props.data.hero.cities} Cities`} width={32} height={32}/>
                                    <h6 className='mt-3 font-weight-bold'>
                                        {numberFormat(props.data.hero.cities)}
                                        <span className='text-gray-500 font-weight-light'> cities</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className='col-6'>
                            <img src={Banner} className='img-fluid position-absolute' 
                                style={{ zIndex: 1, width : '98%'}}
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}