export let isLoggedInAssociation = false;

export const handleLoginAsAssociation = async (username: string, password: string) => {
    try {
        const response = await fetch('http://localhost:8081/api/loginAssociation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.userName)
            // Check if data exists in the response
            if (data) {
                isLoggedInAssociation = true;
                return data;
            } else {
                // If data doesn't exist or there's an error, return an error message
                return { error: 'Invalid credentials. Please check your username and password.' };
            }
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
export default handleLoginAsAssociation;
