import React from 'react'
import {Link} from 'react-router-dom'
import bg from "../assets/bg.png"
import pencil from "../assets/pencil.png"

function Hero() {
  return (
    <div>
      <section className='max-padd-container py-20 xl:py-36'>
        <div className='flexCenter gap-12 flex-col xl:flex-row'>
          <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
              <h1 className='h1 max-w-[46rem]'>Discover <span className='inline-flex'>
                    <span className='inline-flex items-center justify-center p-5 h-16 w-16 bg-secondary text-white -rotate-[31deg] rounded-full'>B</span>ooks&nbsp;</span>
                    <img src={pencil} height={49} width={49} className='inline-flex relative bottom-2'/>That Inspire Your World
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facere, perferendis quis aut harum obcaecati id deserunt repellat error iure necessitatibus omnis earum officiis soluta autem modi mollitia dignissimos magnam! Veniam odit doloremque nesciunt iusto. Ratione fugiat quidem possimus, id officia reprehenderit dolores, explicabo adipisci non magnam sit in aperiam.</p>
              <div className='mt-6'>
                <Link to={'/score'} className='btn-secondaryOne'>Explore Now</Link>
              </div>
          </div>
          <div className='flex flex-1 relative z-10 top-12'>
            <div>
              <img src={bg} height={588}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero