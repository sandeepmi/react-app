import React from 'react'

const HeroCard = () => {
  return (
    <div class="card">
      <div class="card-image">
        <img class="img-fluid" src="http://via.placeholder.com/800x200" alt="Simple Card" />
      </div>
      <div class="card-body">
        <div class="card-title"><strong>Card title</strong></div>
        <div class="card-text">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a>This is a link</a>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
