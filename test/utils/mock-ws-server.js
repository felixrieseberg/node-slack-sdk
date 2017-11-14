var inherits = require('inherits');
var WebSockets = require('ws');

class MockWSServer extends WebSockets.Server {
  constructor(options) {
    super(options);

    this.clientConn = null;

    this.on('connection', function handleMockWSServerConnection(newWs) {
      this.clientConn = newWs;
      this.sendMessageToClientConn({ type: 'hello' });
    });
  }

  closeClientConn() {
    this.clientConn.close();
  }

  sendMessageToClientConn(message) {
    this.clientConn.send(JSON.stringify(message));
  }
}

module.exports = MockWSServer;
