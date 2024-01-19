
export const handleLoginAsVolunteer = async (username: string, password: string) => {
  try {

    const response = await fetch('http://localhost:8081/api/loginVolunteer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();


    // Return data or perform additional actions if needed
    return data;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);

    throw error; // Rethrow the error to propagate it to the calling component
  }
};

export default handleLoginAsVolunteer;
