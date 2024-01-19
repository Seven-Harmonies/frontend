import React, { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './AddEventForm.css';

const OrganizationForm = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        organizer: '',
        category: '',
        coverPhoto: null,
        otherImages: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCoverPhotoChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, coverPhoto: file });
    };

    const handleOtherImagesChange = (e) => {
        const files = e.target.files;
        setFormData({ ...formData, otherImages: [...formData.otherImages, ...files] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        closeModal();
        setFormData({
            name: '',
            date: '',
            location: '',
            description: '',
            organizer: '',
            category: '',
            coverPhoto: null,
            otherImages: [],
        });
    };

    return (
        <Router>
            <Switch>
                <Route path="/addEvent" component={OrganizationForm} />
                <Modal isOpen={true} onRequestClose={closeModal}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Date:
                            <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Location:
                            <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Description:
                            <textarea name="description" value={formData.description} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Organizer:
                            <input type="text" name="organizer" value={formData.organizer} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Category:
                            <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                        </label>
                        <br />
                        <label>
                            Cover Photo:
                            <input type="file" accept="image/*" onChange={handleCoverPhotoChange} />
                        </label>
                        <br />
                        <label>
                            Other Images:
                            <input type="file" accept="image/*" multiple onChange={handleOtherImagesChange} />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            </Switch>
        </Router>
    );
};

export default OrganizationForm;
