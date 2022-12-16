import React from 'react'

export const Breadcrum = () => {
  return (
     <div> 
      <nav style={{"--bs-breadcrumb-divider": "'>'", ariaLabel: "breadcrumb",paddingLeft: 12, paddingTop: 8}}>
  <ol className="breadcrumb" style={{marginBottom: 0}}>
    <li className="breadcrumb-item"><a href="www.google.com" style={{textDecoration: 'none', color: "#636363",fontWeight: 600}}>Medical Darpan</a></li>
    <li className="breadcrumb-item"><a href="www.google.com" style={{textDecoration: 'none', color: "#636363",fontWeight: 600}}>Search</a></li>
    <li className="breadcrumb-item active" aria-current="page" style={{color: "black", fontWeight: 600}} >FabiFlu Tablet</li>
  </ol>
</nav>
</div>

  )
}
