const handleLoginAsAssociation = async (username: string, password: string) => {
    try {
        console.log(username + password)
        const response = await fetch('http://localhost:8081/api/loginAssociation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();

            // Check if data exists in the response
            if (data) {
                return data;
            } else {
                // If data doesn't exist, return an error message
                return { error: 'Invalid credentials. Please check your username and password.' };
            }
        } else if (response.status === 401) {
            // Unauthorized access, return a specific error message
            return { error: 'Unauthorized access. Please check your username and password.' };
        } else {
            return null;
        }

    } catch (error) {
        // Handle other errors
        console.error('Error:', error);

        throw error; // Rethrow the error to propagate it to the calling component
    }
};

export default handleLoginAsAssociation