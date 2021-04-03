const argv = require ('yargs')

    .option ('b',{
        alias: 'base',
        type: 'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
        })
        .option ('h',{
            alias: 'hasta',
            type: 'number',
            default:10,
            describe:'Este es el número donde llega la tabla'
            })
        .option ('l',{
            alias: 'listar',
            type: 'boolean',
            default:false,
            describe:'Muestra tabla de multiplicar en consola'
            })
            
    .check((argv,options) => {
        if (isNaN(argv.b)){
            throw 'la base necesita un número'
        }
        return true;
    })
    .argv; 

module.exports = argv;    