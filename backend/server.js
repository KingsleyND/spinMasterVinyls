import express from 'express';  // Import express using ES6 syntax

const port = 5000;  // Define the port number (frontend uses 3000)

const app = express();  

app.get('/', (req, res) => {  // Define a route for the root URL
    res.send('Server is running..');  // Send a response to the client
});

app.listen(port, () => console.log(`Server is running on port ${port}`));  

// The server is now running on port 5000
