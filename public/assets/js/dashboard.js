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
        user: '',
        pass: ''
    },
    ignoreTLS: true
});


client.connect().then(() => {

		var mailbox = client.selectMailbox('INBOX');

		client.listMessages('INBOX', '1:10', ['uid', 'flags', 'envelope', 'bodystructure', 'body']).then((messages) => {
            messages.forEach((message) => { 

                console.log("Body:" + message.body );

            	console.log('Flags for ' + message.uid + ' | De:  ' + message.envelope.from[0].name + ' (' + message.envelope.from[0].address + ') Asunto:' + message.envelope.subject);
            	$("#mailist").append('<a href="#" class="email-item" data-mailid="' + message.uid + '">#' + message.uid + '</a> De:  ' + message.envelope.from[0].name + ' (' +  message.envelope.from[0].address + ') <br> Asunto:' + message.envelope.subject + '<hr width=100%>');

                console.log(message.bodystructure.part + "\n" 
                            + message.bodystructure.type + "\n" 
                            + message.bodystructure.parameters + "\n" 
                            + message.bodystructure.disposition + "\n" 
                            + message.bodystructure.dispositionParameters + "\n" 
                            + message.bodystructure.language + "\n" 
                            + message.bodystructure.location + "\n" 
                            + message.bodystructure.id + "\n" 
                            + message.bodystructure.description + "\n" 
                            + message.bodystructure.encoding + "\n" 
                            + message.bodystructure.size + "\n" 
                            + message.bodystructure.lineCount + "\n" 
                            + message.bodystructure.envelope + "\n" 
                            + message.bodystructure.md5 + "\n" 
                            + message.bodystructure.childNodes + "\n");
        	   });
                
        });



		//client.logout();

});

//console.log("===============================================================================================================");
//console.log(casillas);
