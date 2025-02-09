import React from 'react'
import Title from '../components/Title'

function PlaceOrder() {
  return (
    <section className='max-padd-container'>
      <form className='pt-28'>
        <div>
          <div>
            <Title title1={'Delivery'} title2={'Information'} title1Styles={'h3'} />
            <div className='flex gap-3'>
              <input type="text" name='firstName' placeholder='First Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
              <input type="text" name='lastName' placeholder='Last Name' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
            </div>
            <input type="email" name='email' placeholder='Email' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none' />
            <input type="text" name='phone' placeholder='Phone Number' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none' />
            <input type="text" name='street' placeholder='Street' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none' />
            <div className='flex gap-3'>
              <input type="text" name='city' placeholder='City' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
              <input type="text" name='state' placeholder='State' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
            </div>
            <div className='flex gap-3'>
              <input type="text" name='zipcode' placeholder='Zip Code' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
              <input type="text" name='country' placeholder='Country' className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' />
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PlaceOrder