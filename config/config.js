const env = process.env.NODE_ENV || "development";

const config = {
    development: {
        PORT: process.env.PORT || 5000,
        DB_CONNECTION: 'mongodb://localhost/cubicle',
        SALT_ROUNDS: 10,
        SECRET: 'asdfghjkl',
        COOKIE_NAME: 'USER_SESSION',
    },
    production: {
        PORT: 80,
        DB_CONNECTION: '',
        SALT_ROUNDS:  10,
        SECRET: 'asdfghjkl',
        COOKIE_NAME: 'USER_SESSION',
    }
};

module.exports = config[env];
