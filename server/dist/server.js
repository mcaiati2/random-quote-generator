import express from 'express';
import dotenv from 'dotenv';
// above the import so any files so it has access to env variables
dotenv.config();
import api_routes from './routes/api_routes.js';
import htmlRoutes from './routes/htmlRoutes.js';
const app = express();
// Static Middleware - Allows client access to an entire folder and all of the files within that folder. Only folder we want the browser to have access to is the client dist folder.
// the static method creates a GET route for every file within the shared folder.
// gives the client access to the entire folder.
// relative to the package json that is runnin the script
app.use(express.static('../client/dist'));
//  Load In API Routes
app.use(api_routes);
// Load in HTML routes
app.use(htmlRoutes);
// Start the server
app.listen(3333, () => {
    console.log('Server started on port 3333');
});
