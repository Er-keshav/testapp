import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#750c0c" }}>

      <div className="container-fluid"  >
        <div className="logo" style={{ display: 'inline-block', width: 35, height: 35, background: "#f6f8fc", borderRadius: 4, marginLeft: 14, marginRight: 30 }} ></div>
        <a className="navbar-brand" href="www.google.com" style={{ color: 'white', fontWeight: '670' }} >Medical Darpan</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="www.google.com" style={{ color: 'white', marginLeft: 40, marginRight: 24, fontSize: 19 }}>Home</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="www.google.com" style={{ color: 'white', marginRight: 24, fontSize: 19 }}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com" style={{ color: 'white', marginRight: 24, fontSize: 19 }}>Distributors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com" style={{ color: 'white', marginRight: 24, fontSize: 19 }}>Manufacturers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com" style={{ color: 'white', marginRight: 24, fontSize: 19 }}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.google.com" style={{ color: 'white', marginRight: 24, fontSize: 19 }}>Blog</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="www.google.com" style={{ color: 'white', fontSize: 19 }}>Login</a>
            </li>
            <li>
              <div>
                <img src={require("../user.png")} alt="Profile" height={38} style={{ color: 'white', marginTop: 4, marginLeft: 34, marginRight: 25,}} />
              </div>
            </li>
          </ul>

        </div>
      </div>

    </nav>
  )
}
