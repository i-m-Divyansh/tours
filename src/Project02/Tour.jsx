import React, { useState } from 'react'


const Tour = ({ img, name, price, info, id, Toursinfo, setToursinfo }) => {
    // Hook
    const [Readmore, setReadmore] = useState(false);
    // Readmore & Showless Button
    const readHandler = () => {
        setReadmore(!Readmore);
    }
    // Delete Button Handler
    const deleteHandler = () => {
        setToursinfo(Toursinfo.filter((t) => t.id !== id))
    }
    // Return
    return (
        <div className="tour-div shadow text-center">
            <div className="tourimg-div">
                <img id="tourImage" src={img} alt="image" />
            </div>
            <div className="tour-info">
                <h4>{name}</h4>
                <p className="price">${price}</p>
            </div>
            <div className="info">
                <p>{Readmore ? info : `${info.substring(0, 200)}...`} <span onClick={readHandler} className="readBtn text-primary">{Readmore ? "Showless" : "Readmore"}</span></p>
            </div>
            <button onClick={deleteHandler} className="custom-btn">Not interested</button>
        </div>
    )
}


export default Tour;