
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
            // Check if data exists in the response
            if (data) {

                return true;
            } else {
                return false
            }
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
export default handleLoginAsAssociation;
