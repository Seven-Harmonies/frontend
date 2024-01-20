import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddEventsForm.css';
import { useNavigate } from 'react-router-dom';
import NavbarRouter from 'C:/Users/ASUS/Desktop/frontend/src/components/NavBarRouter.js';

const AddEventsForm = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const navigate = useNavigate();

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

    const [formErrors, setFormErrors] = useState({});

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
        if (validateForm()) {
            //const newEvent = { ...formData };
            //updateEvents(newEvent);
            //console.log('Form Data:', newEvent)
            console.log('Form Data:', formData)
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
            navigate('/evenimente');
        }
    };


    const validateForm = () => {
        // Add your validation logic here
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.date.trim()) {
            errors.date = 'Date is required';
        }

        if (!formData.location.trim()) {
            errors.location = 'Location is required';
        }

        if (!formData.category.trim()) {
            errors.category = 'Category is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleClose = () => {
        navigate('/homepage');
    };
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
        const body = document.querySelector("body");
        body.style.backgroundColor = darkTheme ? "#fff" : "#333";
    };
    return (
        <div>
            <NavbarRouter toggleTheme={toggleTheme} darkTheme={darkTheme} />
            <Modal isOpen={true} onRequestClose={handleClose} >
                <div className={`App ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
                    <div className="form-container">
                        <h2>Add Event</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {formErrors.name && <span className="error">{formErrors.name}</span>}
                            </label>
                            <label>
                                Date:
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                />
                                {formErrors.date && <span className="error">{formErrors.date}</span>}
                            </label>
                            <br />
                            <label>
                                Location:
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                />
                                {formErrors.location && <span className="error">{formErrors.location}</span>}
                            </label>
                            <br />
                            <label>
                                Description:
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <br />
                            <label>
                                Organizer:
                                <input
                                    type="text"
                                    name="organizer"
                                    value={formData.organizer}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <br />
                            <label>
                                Category:
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                />
                                {formErrors.category && <span className="error">{formErrors.category}</span>}
                            </label>
                            <br />

                            <label>
                                Cover Photo:
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleCoverPhotoChange}
                                />
                            </label>

                            <label>
                                Other Images:
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleOtherImagesChange}
                                />
                            </label>

                            <button type="submit">Submit</button>

                            <button onClick={handleClose}>Close</button>
                        </form>
                    </div>
                </div>
            </Modal >
        </div >
    );
};

export default AddEventsForm;
