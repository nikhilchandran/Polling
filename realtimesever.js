var narf = require( 'narf' );

var narfHttp = new narf.HttpServer();

narfHttp.start( 8080 );

var SocketFunctions = {

    loopBack : function( data ){
  console.log( 'request called',data );

        if( data.messageData.message ){

            narfHttp.connected_clients.forEach( function( connection ){

                connection.send( JSON.stringify( { message : data.messageData.message } ) );
            });

        }else{
            connection.send( JSON.stringify( { message : '' } ) );
        }
    }
};
function socketConnectionHandler ( req ){

    return true;
}


var APIFunctions = { //forward facing functions

 GET : {  //headers object and parsed url are passed as a parameter for get functions

  sendToClients : function ( header, url ){
 console.log('url.message' );
  narfHttp.connected_clients.forEach( function( connection ){

    connection.send( JSON.stringify( { message : url.message } ) );
   });
   
  }
 },

 POST : {}
};


/* here addWebSocket is wrapped in the port event as web sockets require the http
server to be up when being initialized */

narfHttp.on( 'port', function( data ){
    console.log( 'started server on port',data );

    narfHttp.addWebSocket( {
        functions : APIFunctions,
        request : socketConnectionHandler,
        asc : false,
        protocol : 'echo-protocol'
    } );
} );


narfHttp.on( 'error', function( err ){

    console.log( err );
