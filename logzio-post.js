var logger = require('logzio-nodejs').createLogger({
    token: 'LOGZIO-API-TOKEN',
    protocol: 'https',
    host: 'testorg.logs.io',
    port: '8071',
    type: 'YourLogType'
  });

  var obj = {
    message: 'Some log message',
    param1: 'val1',
    param2: 'val2'
};
logger.log(obj);
logger.log('This is a log message');
logger.sendAndClose();
