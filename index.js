const app = require("express")();
const server = require("http").createServer(app); //create server, require the build module -> create server -> pass in app
const cors = require("cors"); //middleware package for cross origin request

/**io instance:
 * 2 parameters: one as to the server, one as options object
 */
const io = require("socket.io")(server, {
	cors: {
		origin: "*", //access from all origin
		methods: ["GET", "POST"], //methods in use
	},
});
app.use(cors()); //use of cors

const PORT = process.env.PORT || 5000; //intalizing the port

//Creating of the first route as the root route
app.get("/", (request, response) => {
	response.send("Server is currently running");
});

//io logic for real-time data transmission.
io.on("connection", (socket) => {
	socket.emit("me", socket.id); //emit ownself with id on frontend

	socket.on("disconnect", () => {
		socket.broadcast.emit("call has ended");
	});
	socket.on("calluser", ({ userToCall, signalData, from, name }) => {
		//destructing the data
		io.to(userToCall).emit("calluser", { signal: signalData, from, name });
	});
	socket.on("answercall", (data) => {
		io.to(data.to).emit("callaccepted", data.signal);
	});
});

// visiting of the server
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
