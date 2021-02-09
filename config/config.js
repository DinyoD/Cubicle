const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicle',
        SALT_ROUNDS: 10,

    },
    production: {
        PORT: 80,
        DB_CONNECTION: '',
        SALT_ROUNDS:  10,
    }
};

module.exports = config;
