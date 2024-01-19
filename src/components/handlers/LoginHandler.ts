
export const handleLogin = async (username: string, password: string) => {
    try { 
      
      console.log('Am ajuns aici cu usernameu: ', username, ' si parola: ', password);
      const response = await fetch('http://localhost:8081/api/loginVolunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password}),
      });
  
      //const data = await response.json();
      
      //console.log(data);
  
      // Return data or perform additional actions if needed
      //return data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      
      throw error; // Rethrow the error to propagate it to the calling component
    }
  };
  
  export default handleLogin;
  