const winston = require('winston');
const {combine, timestamp, json} = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console()
    ]
});

const fileLogger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'serverLogs.log'
        })
    ]
});

module.exports = {
    logger,
    fileLogger
}