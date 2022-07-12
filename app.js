const contact = require('./contact');
const yargs = require('yargs')

// fungsi input with yargs
yargs.command({
    command:'add',
    describe:'add new contact',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile:{
            describe: 'Contact Mobile Number',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.answer(argv.name,argv.email,argv.mobile)
    },
});

// fungsi list data
yargs.command({
    command:'list',
    describe:'see contact list',
    handler(){
        contact.listContact();
    },
});

// fungsi detail data
yargs.command({
    command:'detail',
    describe:'detail nama data',
    builder:{
        name:{
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contact.detailContact(argv.name);
    },
});

yargs.parse();


