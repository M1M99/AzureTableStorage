import React, { useState } from 'react';
import axios from 'axios';

const AddStoreForm = () => {
    const [formData, setFormData] = useState({
        address: '',
        cityName: '',
        countryName: '',
        partitialKey: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://localhost:7022/api/stores', formData);
            alert('Store added successfully!');
        } catch (error) {
            console.error('Error adding store:', error);
            alert('Failed to add store.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>City Name:</label>
                <input
                    type="text"
                    name="cityName"
                    value={formData.cityName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Country Name:</label>
                <input
                    type="text"
                    name="countryName"
                    value={formData.countryName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Partitial Key:</label>
                <input
                    type="text"
                    name="partitialKey"
                    value={formData.partitialKey}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Store</button>
        </form>
    );
};

export default AddStoreForm;
