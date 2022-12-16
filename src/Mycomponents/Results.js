import React from 'react'

export const Results = () => {
  return (
    <div className="card" style={{width: 350, borderBottomWidth:15, borderBottomColor: "#750b0b" }}>
      <img src={require("../medi.png")} className="card-img-top" alt="..." />
      <div className="card-body" style={{padding:0}}>
        <h5 className="card-title" style={{textAlign: "center", color: "black",fontWeight: 650, margin: 10, fontSize: 16}}>Favipiravir 400mg (Fabiflu) Tablets</h5>
        <h4 className="card-title" style={{textAlign: "center", color: "#636363",fontWeight: 650, margin: 5, fontSize: 16}}>Rs 1,775/ stripe</h4>
        <p className="card-text" style={{textAlign: "center", color: "black",fontWeight: 600, margin: 5, fontSize: 14}}>Glenmark Pharmaceutical Limited</p>
        <p className="card-text" style={{textAlign: "center", color: "#636363",fontWeight: 650, margin: 5, fontSize: 14}}>PARVAT PATIYA, SURAT, GUJRAT</p>
        <a href="#" className="btn" style={{ color: "#00a69c", backgroundColor: "none", width: 350, borderTopWidth: 2, borderTopColor: "#cecece", fontWeight: 700, borderRadius: 0}}>Contact Supplier</a>
      </div>
    </div>
  )
}


