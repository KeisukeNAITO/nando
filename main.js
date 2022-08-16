'use strict';

const os = require('os');
const app = require('./router/index');
const port = require('./lib/port');
const { logger, log_level } = require('./lib/logger');

// security configuration
app.disable('x-powered-by');

app.listen(port, () => {
    logger.info(
        `${process.env.npm_package_name} listening at PORT@${port}, HOSTNAME@${os.hostname()}, SOURCE@${__filename}, loglevel@${log_level}.`
    );
});
