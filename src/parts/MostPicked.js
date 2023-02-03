import Button from 'elements/Button'
import React from 'react'
import { Fade } from 'react-reveal'

export default function MostPicked(props) {
  return (
    <section className='container' ref={props.refMostPicked}>
      <div className='container'>

        <Fade bottom delay={250}>
          <h4 className='mb-4 font-weight-bold'>Most Picked</h4>

          <div className='container-grid'>
            {
              props.data.mostPicked.map((data, index) => {
              return (
                <Fade bottom delay={250 * index} key={data._id}>
                  <div className={`item column-4 ${index == 0 ? 'row-2' : 'row-1' }`} key={data._id}>
                    <div className='card card-feature'>

                      <div className='tag'>
                        ${data.price}
                        <span className='font-weight-lighter'> per {data.unit}
                        </span>
                      </div>

                      <figure className='img-wrapper'>
                        <img 
                          className='img-cover' 
                          alt={data.title} 
                          src={`http://localhost:8000/${data.imageId[0].imageUrl}`}
                        />
                      </figure>

                      <div className='meta-wrapper'>
                        <Button 
                          type='link' 
                          className='stretched-link d-block text-white'
                          href={`/properties/${data._id}`}>
                          <h5>{data.title}</h5>
                        </Button>
                        <span>
                          {data.city}, {data.country}
                        </span>
                      </div>

                    </div>
                  </div>
                </Fade>
              )
              })
            }
          </div>
        </Fade>

      </div>
    </section>
  )
}