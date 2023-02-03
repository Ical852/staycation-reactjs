import Button from 'elements/Button'
import InputNumber from 'elements/Form/InputNumber'
import Star from 'elements/Star'
import React from 'react'
import { Fade } from 'react-reveal'

export default function Testimoni({data}) {
  return (
      <section className='container'>
        <div className='container'>
            <div className='row align-items-center'>
                <Fade left>
                    <div className='col-auto' style={{ marginRight : 57 }}>
                        <div className='testimonial-hero'>
                            <img 
                                className='position-absolute pic-testi' 
                                alt={data.name} 
                                src={data.imageUrl}
                            />
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className='col'>
                        <h4 className='font-weight-bold' style={{ marginBottom : 40 }}>
                            {data.name}
                        </h4>
                        <Star width={36} height={36} value={data.rate}/>
                        <h5 className='h2 font-weight-light line-heigth-2 my-3'>
                            {data.content}
                        </h5>
                        <span className='text-gray-500'>
                            {data.familyName}, {data.familyOccupation}
                        </span>
                        <div style={{ marginTop : 50 }}>
                            <Button 
                                className='btn px-5'
                                type='link' 
                                isPrimary 
                                hasShadow
                                href={`/testimonials/${data._id}`}>
                                Read Their Story
                            </Button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
      </section>
  )
}
