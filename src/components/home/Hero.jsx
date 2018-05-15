import React from 'react'
import HeroMain from './HeroMain'
import HeroCard from './HeroCard'

const Hero = () => {
  return (
    <section className="mt-3">
      <div className="row">
        <div className="col-md">
          <HeroMain />
        </div>
        <div className="col-md">
          <HeroCard />
        </div>
      </div>
    </section>
  )
}

export default Hero
