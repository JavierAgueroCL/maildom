const electron = require('electron')
    // Module to control application life.
const app = electron.app
    // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
var ImapClient = require('emailjs-imap-client')

client = new ImapClient('186.64.123.18', 143, {
    auth: {
        user: 'contacto@deperfil.cl',
        pass: 'contacto6211'
    },
    ignoreTLS: true
});


client.connect().then(() => {

		var mailbox = client.selectMailbox('INBOX');

		client.listMessages('INBOX', '1:10', ['uid', 'flags', 'envelope', 'bodystructure', 'body[]']).then((messages) => {
            messages.forEach((message) => { 
  
            	console.log('Flags for ' + message.uid + ' | De:  ' + message.envelope.from[0].name + ' (' + message.envelope.from[0].address + ') Asunto:' + message.envelope.subject);
            	console.log('Cuerpo: ' + message.body);
            	$("#mailist").append('<a href="#" class="email-item" data-mailid="' + message.uid + '">#' + message.uid + '</a> <br> De:  ' + message.envelope.from[0].name + ' (' +  message.envelope.from[0].address + ') <br> Asunto:' + message.envelope.subject + '<hr width=100%>');
        	});
        });



		//client.logout();

});

//console.log("===============================================================================================================");
//console.log(casillas);
