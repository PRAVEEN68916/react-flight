import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Cards() {
    const [flights, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get('https://airlabs.co/api/v9/flights?api_key=YOUR-API-KEY');
                setCats(response.data); 
            } catch (err) {
                console.error('Error Fetching flights:', err);
                setError('Failed to fetch flights. Please try again later.'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchCats();
    }, []); 

    
    if (loading) {
        return <div className="text-center py-5"><h2>Loading flights...✈ </h2></div>;
    }

    
    if (error) {
        return <div className="text-center py-5 text-danger"><h2>{error}</h2></div>;
    }

    
    return (
        <div className="container py-5">
            <header className="text-center mb-5">
                <h1 className="gallery-title"> 💨✈ Flights gallery ✈💨</h1>
                <p className="lead text-muted">A collection of adorable cats from the internet!</p>
            </header>

            <div className="row g-4">
                {flights.map(flight => (
                    <div key={flight.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="card cat-card">
                            <img src={flight.url} className="flight-card-img" alt="a flight" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards