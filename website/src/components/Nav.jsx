import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <div className="leftnav">
        <h1>Horizon Courts</h1>
      </div>
      <div className="centernav">
        <nav>About US</nav>
        <nav>Services</nav>
        <nav>Coaches</nav>
        <nav>Events</nav>
        <nav>Contacts</nav>
      </div>
      <div className="rightnav">
        <button>Book now
            <i class="ri-arrow-right-up-long-line"></i>
        </button>
      </div>
    </div>
  )
}

export default Nav
