'use strict';

// port set up
const port_candidate = process.argv
    .slice(2)
    .filter((opt) => opt.match(/^PORT=[1-9]+\d*$/i));

// priority: argument > environment variable > default
const port =
    '[]' !== JSON.stringify(port_candidate)
        ? port_candidate[0].match(/\d+/)[0]
        : process.env.PORT || 3000;

module.exports = port;
