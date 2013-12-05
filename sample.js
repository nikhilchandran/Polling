/**
 * @author nikhil
 */
var narf = require( 'narf' );

var narfHttp = new narf.HttpServer();

narfHttp.start( 8080 );

var HTTPFunctions = {

    GET : {
        loopBack : function( data, callback ){

            var obj = {};
            obj.headers = data.headers;
            obj.url = data.url;

            callback( obj );
        },
        override : function( data, ret ){

            /* This function overrides the narf callback structure and 
            pipes data directly into the response object */

            data.response.writeHead( 404, { 'Content-Type' : 'text/html' } );

            var fileStream = fs.createReadStream( __dirname + '/index.html' );
            fileStream.pipe( data.response );
        }
    },

    POST : {
        loopBack : function( data, callback ){

            console.log('server received object');
            console.log( data.url );

            callback( data.body );
        }
    }
};

narfHttp.addAPI( {
    
    
    
    
    
    
    
    functions : HTTPFunctions,
    datalimit : 1e6
} );




var SocketFunctions = {

    loopBack : function( data ){
        
         console.log( 'useable'.data.messageData.message );

        if( data.messageData.message ){

            narfHttp.connected_clients.forEach( function( connection ){


                
                connection.send( JSON.stringify( { message : "Hello" } ) );
            });

        }else{
            connection.send( JSON.stringify( { message : '' } ) );
        }
    }
};


function socketConnectionHandler ( req ){

    return true;
}

/* here addWebSocket is wrapped in the port event as web sockets require the http
server to be up when being initialized */

narfHttp.on( 'port', function( data ){
    console.log( 'started server on port',data );

    narfHttp.addWebSocket( {
        functions : SocketFunctions,
        request : socketConnectionHandler,
        asc : false,
        protocol : 'echo-protocol'
    } );
} );


narfHttp.on( 'error', function( err ){

    console.log( err );
} );