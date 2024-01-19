// signupHandler.ts
const handleSignUp = async (username: string, email: string, phoneNumber: string, password: string) => {
    try {
      const volunteer = {
        username: username,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      };
  
      const response = await fetch('http://your-spring-boot-app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(volunteer),
      });
  
      const data = await response.json();
      // Handle the response from the server
      console.log(data);
  
      // Return data or perform additional actions if needed
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      throw error; // Rethrow the error to propagate it to the calling component
    }
  };
  
  export default handleSignUp;
  