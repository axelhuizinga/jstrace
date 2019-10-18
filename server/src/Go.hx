package;


//import js.node.net.Socket;
import js.node.console.Console;
import js.node.Net.createServer;

@:jsRequire("net","Socket")
class Go
{
	static function main()
	{
		var server = createServer(function(socket){
			//socket.write("Echo server\n\n");
			//socket.pipe(socket);
			Console.log(socket.read().toString());
		});
		server.listen(8666, "127.0.0.1");
	}
}