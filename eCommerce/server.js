const app = require('./src/app');
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// ctrl + c to stop the server:
process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server closed');
    });
});