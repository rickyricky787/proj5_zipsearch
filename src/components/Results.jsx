import React from "react";

const Results = ({cities}) => {
    return cities ? (
        <div>
            {cities.map((city) => (
                <div className="card border-dark mb-3" style={{ width: "18rem", marginLeft: "auto", marginRight: "auto"}}>
                    <h5 class="card-header">{city.LocationText}</h5>
                        <div className="card-body">
                            <p className="card-text">State: {city.State}</p>
                            <p className="card-text"> Country: {city.Country}</p>
                            <p className="card-text">Location: ({city.Lat}, {city.Long})</p>
                            <p className="card-text">Population: {city.EstimatedPopulation}</p>
                            <p className="card-text">Total Wages: {city.TotalWages}</p>
                        </div>
                </div>
            ))}
        </div>
        
    ) : (
        <div>
        </div>
        );
    
};

export default Results;