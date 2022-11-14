const mongoose = require('mongoose');
const logger = require('../logger/api.logger');

const connect = () => {

    const url = process.env.ATLAS_URI;
    logger.info("process.env.ATLAS_URI :::" + process.env.ATLAS_URI);

    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })

    mongoose.connection.once("open", async () => {
        logger.info("Connected to database");
    });

    mongoose.connection.on("error", (err) => {
        logger.error("Error connecting to database  ", err);
    });
}

const disconnect = () => {

    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}