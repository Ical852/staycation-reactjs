import Button from 'elements/Button'
import React from 'react'
import { Fade } from 'react-reveal'
import Testimoni from './Testimoni'

export default function Categories({data}) {
  return data.categories.map((category, index) => {
      if (category.itemId.length === 0) {
          return null
      }
      return (
        <section className='container' key={category._id}>
            <div className='container'>
                <Fade bottom delay={100 * index}>
                    <h4 className='mb-4 font-weight-bold'>
                        {category.name}
                    </h4>
                    <div className='container-grid'>
                        {
                            category.itemId.length === 0 ? (
                                <div className='row'>
                                    <div className='col-auto align-items-center'>
                                        There is no property at this caregory
                                    </div>
                                </div>
                            )
                            : category.itemId.map((data, index) => {
                                return (
                                    <Fade bottom delay={300 * index} key={data._id}>
                                        <div className='item column-3 row-1' key={`${data._id}`}>
                                            <div className='card'>
                                                {
                                                    data.isPopular && (
                                                        <div className='tag'>
                                                            Popular <span className='font-weight-light'>Choice</span>
                                                        </div>
                                                    )
                                                }
                                                
                                                <figure className='img-wrapper' style={{ height : 180 }}>
                                                    <img className='img-cover' alt={data.name} src={`http://localhost:8000/${data.imageId[0].imageUrl}`}/>
                                                </figure>

                                                <div className='meta-wrapper'>
                                                    <Button href={`/properties/${data._id}`} type='link' className='stretched-link d-block text-gray-900'>
                                                        <h5 className='h4'>
                                                            {data.title}
                                                        </h5>
                                                    </Button>
                                                    <span className='text-gray-500'>
                                                        {data.city}
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
  })
}
