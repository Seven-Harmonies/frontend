
export const handleLogin = async (username: string, password: string) => {
    try {
      const loginData = {
        username: username,
        password: password,
      };
      
      const response = await fetch('/loginVolunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      const data = await response.json();
      
      console.log(data);
  
      // Return data or perform additional actions if needed
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      throw error; // Rethrow the error to propagate it to the calling component
    }
  };
  
  export default handleLogin;
  