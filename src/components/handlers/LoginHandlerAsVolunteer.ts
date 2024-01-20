
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
      console.log(data.userName)
      // Check if data exists in the response
      if (data) {
        return data;
      } else {
        // If data doesn't exist or there's an error, return an error message
        return { error: 'Invalid credentials. Please check your username and password.' };
      }
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error);

    throw error; // Rethrow the error to propagate it to the calling component
  }
};

export default handleLoginAsVolunteer;
