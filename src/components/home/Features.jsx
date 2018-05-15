import React from 'react'
import Feature from './Feature'

const Features = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md">
          <Feature title="Smiley 1">
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Feature>
        </div>
        <div className="col-md">
          <Feature title="Smiley 2">
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Feature>
        </div>
        <div className="col-md">
          <Feature title="Smiley 3">
            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Feature>
        </div>
      </div>
    </section>
  )
}

export default Features
