import React from 'react'
import Tour from './Tour';

const Tours = ({ Toursinfo, setToursinfo, fetchTours }) => {
    const dataFetch = Toursinfo.map((data) => <Tour
        id={data.id}
        key={data.id}
        img={data.image}
        info={data.info}
        name={data.name}
        price={data.price}
        Toursinfo={Toursinfo}
        setToursinfo={setToursinfo}
    />);
    if (Toursinfo.length === 0) {
        return <main className="text-center m-5">
            <h2>No Tours Left</h2>
            <button onClick={() => fetchTours()} className="btn btn-primary">Refresh</button>
        </main>
    }
    // Return
    return (
        <div className="tours-div text-center">
            {dataFetch}
        </div>
    )
}


export default Tours;