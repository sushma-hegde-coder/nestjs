import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private logger;
    wss: Server;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleMessage(client: Socket, text: string): void;
}
