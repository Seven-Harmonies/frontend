import app from "../../firebase";

const allEvents = async() => {
    try {

      const response = await fetch('http://localhost:8081/api/getEvents', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });

    const data = await response.json();

    
    // console.log(typeof data);
    // Return data or perform additional actions if needed
    
    return data;

    }catch(err){
        throw err;
    }
};
export default allEvents;