module.exports = (io, modal) => {
  // Set socket.io listeners.
  io.on('connection', (socket) => {
    // console.log('a user connected');

    // On conversation entry, join broadcast channel
    socket.on('validate email', (email) => {
      modal.users.findOne({ where: { email } }).then((item) => {
        if (item) {
          socket.emit('email exist', 'Email already exist.');
        } else {
          socket.emit('new email', 'Email doesn\'t exist.');
        }
      });
      // console.log('joined ' + conversation);
    });

    socket.on('leave conversation', (conversation) => {
      socket.leave(conversation);
      // console.log('left ' + conversation);
    });

    socket.on('new message', (conversation) => {
      io.sockets.in(conversation).emit('refresh messages', conversation);
    });

    socket.on('disconnect', () => {
      // console.log('user disconnected');
    });
  });
};
