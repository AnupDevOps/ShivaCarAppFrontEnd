import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Packages() {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/packages')
            .then((response) => setPackages(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1>Traveling Packages</h1>
            <ul>
                {packages.map((pkg) => (
                    <li key={pkg.id}>
                        {pkg.name} - {pkg.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Packages;