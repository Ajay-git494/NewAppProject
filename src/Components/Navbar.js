import React from 'react'

const Navbar = ({setCatagory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <span className="navbar-brand">
  <span className='badge bg-light text-dark fs-4'>
    <h2 className='text-center'>
      Latest <span className='text-danger'>News</span>
    </h2>
  </span>
</span>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <button className="nav-link" onClick={() => setCatagory("india")}>India</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCatagory("technology")}>Technology</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCatagory("business")}>Business</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCatagory("health")}>Health</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCatagory("sports")}>Sports</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={()=>setCatagory("entertainment")}>Entertainment</button>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
