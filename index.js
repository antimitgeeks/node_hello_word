// Load HTTP module
const http = require('http');
require('dotenv').config();

// Create an HTTP server
http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body "Hello World"
    res.end('testing with load balancer');
}).listen(process.env.PORT, () => {
    // Log message to console
    console.log(`Server running at ${process.env.PORT}`);
});
