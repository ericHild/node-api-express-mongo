const http = require('http');
const app = require('./express');

const normalizePort = val => {
    const port = parseInt(val, 10);

    if(isNaN(port)) {
        return val;
    }
    if(port > 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
    if(error.syscall !== 'listen') {
        throw error;
    }
    
    const adress = server.address === 'string' ? 'pipe' + adress : 'port:' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exit(1);            
            break;
    
        case 'EADDRINUSE':
            console.error(bind + 'is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const adress = server.address();
    const bind = typeof adress === 'string' ? 'pipe' + adress : 'port:' + port;
});
server.listen(port);