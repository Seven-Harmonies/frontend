
export const handleLoginAsVolunteer = async (username: string, password: string) => {
  try {

    const response = await fetch('http://localhost:8081/api/loginVolunteer', {
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
        // If data doesn't exist or there's an error, return an error message
        return false;
      }
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);

    throw error; // Rethrow the error to propagate it to the calling component
  }
};

export default handleLoginAsVolunteer;
