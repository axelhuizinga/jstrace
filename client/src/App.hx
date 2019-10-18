import js.Lib.require;
import js.node.Net;
import js.node.net.Socket;

class App {
	@:expose
	public static var jT:App;
	var client:Socket;
	public static function main() {
		jT = new App();
	}

	public function  new() {
		client = Net.connect({port: 8666}, function() { // 'connect' listener
			trace('connected to server!');
			client.write('world!\r\n');
		});
	}

	public function trace(m:Dynamic) {
		client.write('${Std.string(m)}\r\n');
	}
}