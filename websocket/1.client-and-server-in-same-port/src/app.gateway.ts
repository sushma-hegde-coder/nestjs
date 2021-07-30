import { Logger } from '@nestjs/common';
import { SubscribeMessage, WebSocketGateway,OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Socket,Server } from 'socket.io';

//client connects, sends message, and client disconnects
//handleConnection,handleMessage,handleDisconnect functions are executed sequentially
@WebSocketGateway()
export class AppGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect{
  private logger:Logger=new Logger("AppGateway")

  //if I want to send return message to all the clients registered to server, then use this decorator
  @WebSocketServer() wss:Server;

  afterInit(server:Server){
    this.logger.log("Gateway is initialized!")
  }

  handleDisconnect(client:Socket){
    this.logger.log("Gateway is disconnected!" + client.id)
  }

  handleConnection(client:Socket, ...args:any[]){
    this.logger.log("Gateway is connected!"+ client.id)
  }

  // return to only one client (same client that has sent message to server)
  // @SubscribeMessage('msgToServer')
  // handleMessage(client: Socket, text:string): WsResponse<string> {
  //   console.log("message written by client is",text)
  //   //client.emit('msgToClient',txt)  -- in return WsResponse write void -----but since it is ts we don't use it
  //   return {event:'msgToClient',data:text}; //response returned is same text string sent by client.....Im returing only to that client..if I want to sent to all registered clients then use decorator Websockertserver
  // }

  //return to all clients that are registerd to this server
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text:string): void {
    console.log("message written by client is",text)
    this.wss.emit('msgToClient',text)
  }

}
