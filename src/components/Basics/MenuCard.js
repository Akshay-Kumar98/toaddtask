import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className="main-card--cointainer">
    {
        menuData.map((currElem)=>{

const{ id, image, name, category, price, description } = currElem;

            return(
                <>
                
        <div className="card-container" key={id}>
          <div className="card">
            <div className="card-body">
              <div className="card-number card-circle subtle">{id}</div>
              <div className="card-author sybtle">{name}</div>
              <div className="card-title">{name}</div>
              <span className="card-description subtle">{description}</span>
              <div className="card-read">Read</div>
            </div>

            <img src={image} className='card-media' alt="card-image" />
          </div>

        </div>
                </>
            )
        })   }
        </section>
        
    </>
  )
}

export default MenuCard
