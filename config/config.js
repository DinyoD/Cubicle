const config = {
    development: {
        PORT: process.env.PORT || 5000,
    },
    production: {
        PORT: 80,
    }
};

module.exports = config;
