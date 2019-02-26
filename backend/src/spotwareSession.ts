import { TLSSocket, connect } from "tls";
import { ProtoMessage, IProtoMessage } from "./generated/spotware";

export class SpotwareSession {
  public id: Readonly<string>;
  public host: Readonly<string>;
  public port: Readonly<number>;
  public clientId: Readonly<string>;
  public clientSecret: Readonly<string>;
  private authorization_token?: string;
  private access_token?: string;
  private refresh_token?: string;
  private socket?: TLSSocket;

  private constructor(
    id: string,
    host: string,
    port: number,
    clientId: string,
    clientSecret: string
  ) {
    this.id = id;
    this.host = host;
    this.port = port;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  public static forId(id: string): SpotwareSession {
    const host = process.env.SPOTWARE__HOST || "";
    const port = (process.env.SPOTWARE__PORT || 0) as number;
    const clientId = process.env.SPOTWARE__CLIENT_ID || "";
    const clientSecret = process.env.SPOTWARE__CLIENT_SECRET || "";
    return new SpotwareSession(id, host, port, clientId, clientSecret);
  }

  public async sendProtoMessage(properties: IProtoMessage): Promise<void> {
    if (!this.socket) {
      this.socket = await this.connect();
    }
    return new Promise<void>((resolve, reject) => {
      if (!this.socket) {
        reject("no socket!");
        return;
      }

      // construct ProtoMessage
      const pm = ProtoMessage.create(properties);
      const data = ProtoMessage.encode(pm).finish();

      // serialize length of ProtoMessage
      const length = Buffer.alloc(4);
      length.writeInt32BE(data.length, 0);
      this.socket.write(length);

      // serialize ProtoMessage
      this.socket.write(data, undefined, (error: any) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  public accessToken(): Promise<string> {
    if (this.access_token) {
      return Promise.resolve(this.access_token);
    } else {
      return Promise.reject("no accessToken");
    }
  }

  private connect(): Promise<TLSSocket> {
    return new Promise<TLSSocket>((resolve, reject) => {
      const socket = connect(
        this.port,
        this.host
      );
      socket.setDefaultEncoding("binary");
      socket.setEncoding("binary");
      socket.on("data", this.onSocketData);
      socket.on("error", this.onSocketError);
      socket.on("end", this.onSocketEnd);
      socket.on("secureConnect", () => {
        if (socket.authorized) {
          resolve(socket);
        } else {
          reject(
            "the peer certificate was __NOT__ signed by one of the CAs specified when creating the tls.TLSSocket instance"
          );
        }
      });
    });
  }

  private onSocketData = (data: string) => {
    const message = Buffer.from(data, "binary");
    const length = message.readInt32BE(0);
    if (message.length - 4 === length) {
      const payload = message.slice(4);
      const pm = ProtoMessage.decode(payload);
      console.log(
        "onSocketData",
        message.toString("hex"),
        ProtoMessage.toObject(pm)
      );
    } else {
      console.log("onSocketData", message.toString("hex"));
    }
  };

  private onSocketError = () => {
    this.socket = undefined;
    console.log("onSocketError");
  };

  private onSocketEnd = () => {
    this.socket = undefined;
    console.log("onSocketEnd");
  };
}
export default SpotwareSession;
