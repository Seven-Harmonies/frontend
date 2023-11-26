const VolunteerSignUpHandler = async (username: string, email: string, phoneNumber: string, password: string, first_name: string, last_name: string, photos: string) => {

    try {
        const isValid = await VolunteerSignUpValidator(username, email, phoneNumber, password, first_name, last_name, photos);
        console.log(isValid === true ? "Valid" : `Invalid: ${isValid}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    try {
        const volunteer = {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            first_name: first_name,
            last_name: last_name,
            photos: photos
        };

        const response = await fetch('http://your-spring-boot-app/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(volunteer),
        });

        const data = await response.json();
        //Handle the response from the server
        console.log(data);

        //Return data or perform additional actions if needed
        return data;
    } catch (error) {
        //Handle errors
        console.error('Error:', error);
        //throw error; // Rethrow the error to propagate it to the calling component
    }
};

export default VolunteerSignUpHandler;
