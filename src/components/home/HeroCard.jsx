import React from 'react'

const HeroCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="img-fluid" src="http://via.placeholder.com/800x200" alt="Simple Card" />
      </div>
      <div className="card-body">
        <div className="card-title"><strong>Card title</strong></div>
        <div className="card-text">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a>This is a link</a>
        </div>
      </div>
    </div>
  )
}

export default HeroCard
