import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './Project2.css';


const SecondProject = () => {
    // Api Link
    const url = 'https://course-api.com/react-tours-project';
    // Hook
    const [Load, setLoad] = useState(true);
    const [Toursinfo, setToursinfo] = useState([]);
    // Data Fetching from Api
    const fetchTours = async () => {
        setLoad(true)
        try {
            const Response = await fetch(url);
            const tours = await Response.json();
            setLoad(false)
            setToursinfo(tours);
            console.log(tours);
        }
        catch (error) {
            console.log(error);
        }
    }
    // UseEffect to Fetch Data at Loading
    useEffect(() => {
        fetchTours()
    }, []);
    // Conditional Rendering
    if (Load) {
        return <main><Loading /></main>
    }
    // Conditional Rendering if Array if Empty
    // Return
    return (
        <>
            <h1 className="heading">Our Tours</h1>
            <div>
                <Tours
                    Toursinfo={Toursinfo}
                    setToursinfo={setToursinfo}
                    fetchTours={fetchTours}
                />
            </div>
        </>
    )
}

export default SecondProject;