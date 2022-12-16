import React from 'react'

export const Search = () => {
  return (
    <div>
      <nav className="navbar bg-clear">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form" type="search" placeholder="Search Here" aria-label="Search" style={{ borderLeftColor: "none",borderRightColor: "none",borderTopColor: "#636363",borderBottomColor: "#636363", borderWidth: 0.5, marginLeft: 0,paddingLeft: 50,width: 450, height: 45,borderBottomLeftRadius: 3,borderBottomRightRadius: 0,borderTopLeftRadius: 3,borderTopRightRadius: 0, outlineOffset: 0, fontSize: 18}} />
      <button className="btn" type="submit" style={{borderRadius: 2,borderRightColor: "#636363",borderLeftColor: "none",borderTopColor: "#636363",borderBottomColor: "#636363",width: 100, color: "white", backgroundColor: "#00a69c",borderBottomLeftRadius: 0,borderBottomRightRadius: 3,borderTopLeftRadius: 0,borderTopRightRadius: 3, fontSize: 18}}>Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
