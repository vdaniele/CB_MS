let restify = require("restify");
let builder = require("botbuilder");
const connector = new builder.ChatConnector();

//Create bot
var bot = new builder.UniversalBot(connector);

//Dialog handling
bot.dialog('/', function(session) {
session.send('Hello world');
});

//Setup Restify server
const server = restify.createServer();
server.post('/api/messages', connector.listen());

server.listen(process.env.port || process.env.PORT || 3978, '::', () => {
console.log('Server Up');
});

var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
function(session) {
session.beginDialog('/askName');

},
function(session, results) {
session.send('Hello %s!', results.response);

}

]);

bot.dialog('/askName', [
function(session) {
builder.Prompts.text(session, 'Hi! What is your name?');
},
function(session, results) {
session.endDialogWithResult(results);
}
]);

let address;
function sendProactiveMessage(address) {
	var msg = new builder.Message().address(address);
	msg.text('Hello, this is a notification');
	msg.textLocale('en-US');
	bot.send(msg);
}

//Dialog handling
bot.dialog8'/', function(session) {
	address = session.message.address;
	session.send('Hi');
	setTimeout(() => {
		sendProactiveMessage(address);
	}, 5000);
});

	

