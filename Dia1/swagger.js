import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endPointsFiles = ['./index.js'];
const doc = {
    info:{
        title:'API de administracion campus',
        descripcion:'Esta api permite gestionar campers y trainers '
    },
    host:'localhost:6969',
    schemes:['http']


}
swaggerAutogen(outputFile, endPointsFiles, doc);