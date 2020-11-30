const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);



//define the port 
const port = process.env.PORT || 3000;

app.use(express.static('assets'));

//route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })
  });


io.emit()




http.listen(port,()=>{
    console.log(`listening to our server on ${port}`);
})