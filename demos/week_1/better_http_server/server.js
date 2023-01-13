const http = require('http');
const requests = require('./controller/requestListener');
const loggerUtil = require('./util/logger');
const PORT = 3000;

const server = http.createServer(requests);

server.listen(PORT, '127.0.0.1', () => {
    loggerUtil.logger.info(`Server is listening on port ${PORT}`);
});
