'use strict';

const Hapi = require('hapi');
const { createStudent, getStudents, updateStudent, deteleStudent } = require('./controllers/studentController');
const db = require('./database').db;

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/students',
        handler: getStudents
    });
    server.route({
        method: 'POST',
        path: '/students',
        handler: createStudent
    });
    server.route({
        method: 'PUT',
        path: '/students',
        handler: updateStudent
    });
    server.route({
        method: 'DELETE',
        path: '/students',
        handler: deteleStudent
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();