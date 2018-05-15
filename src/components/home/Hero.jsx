import React from 'react'
import HeroMain from './HeroMain'
import HeroCard from './HeroCard'

const Hero = () => {
  return (
    <section class="mt-3">
      <div class="row">
        <div class="col-md">
          <HeroMain />
        </div>
        <div class="col-md">
          <HeroCard />
        </div>
      </div>
    </section>
  )
}

export default Hero
