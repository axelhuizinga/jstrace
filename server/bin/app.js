// Generated by Haxe 4.0.0-rc.5+4a745347f
(function ($global) { "use strict";
class Go {
	static main() {
		var server = js_node_Net.createServer(function(socket) {
			socket.write("Echo server\n\n");
			socket.pipe(socket);
		});
		server.listen(8666,"127.0.0.1");
	}
}
class haxe_io_Bytes {
}
class js_node__$KeyValue_KeyValue_$Impl_$ {
	static get_key(this1) {
		return this1[0];
	}
	static get_value(this1) {
		return this1[1];
	}
}
var js_node_Net = require("net");
class js_node_stream__$Writable_WritableNewOptionsAdapter_$Impl_$ {
	static from(options) {
		if(!Object.prototype.hasOwnProperty.call(options,"final")) {
			Object.defineProperty(options,"final",{ get : function() {
				return options.final_;
			}});
		}
		return options;
	}
}
Go.main();
})({});
