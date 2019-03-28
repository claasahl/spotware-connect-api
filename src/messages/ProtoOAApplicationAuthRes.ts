import {
  IProtoOAApplicationAuthRes as IMessage,
  ProtoOAApplicationAuthRes as Message,
  IProtoMessage,
  ProtoOAPayloadType
} from "../spotware-messages";
import { SpotwareEventEmitterOverloads } from "../spotware-event-emitter";

export namespace ProtoOAApplicationAuthRes {
  export const payloadType = ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES;

  export function toProtoMessage(
    message: IMessage,
    clientMsgId?: string | null
  ): IProtoMessage {
    const payloadType = Message.prototype.payloadType;
    const msg = Message.create(message);
    const payload = Message.encode(msg).finish();
    return {
      payloadType,
      payload,
      clientMsgId
    };
  }

  export function emitEncoded(
    emitter: SpotwareEventEmitterOverloads,
    message: IMessage,
    clientMsgId?: string | null
  ): void {
    const data = toProtoMessage(message, clientMsgId);
    emitter.emit("PROTO_MESSAGE", data);
  }

  export function fromProtoMessage(
    message: IProtoMessage
  ): { message: IMessage; clientMsgId?: string | null } {
    if (message.payload && message.payloadType === payloadType) {
      const { clientMsgId } = message;
      const msg = Message.decode(message.payload);
      return { message: msg, clientMsgId };
    }
    if (!message.payload) {
      throw new Error(
        "invalid message. expected payload, but payload was empty."
      );
    }
    throw new Error(
      `invalid message. expected payloadType 'PROTO_OA_APPLICATION_AUTH_RES' (got '${
        ProtoOAPayloadType[payloadType]
      }').`
    );
  }

  export function emitDecoded(
    emitter: SpotwareEventEmitterOverloads,
    message: IProtoMessage
  ): void {
    const data = fromProtoMessage(message);
    emitter.emit(
      "PROTO_OA_APPLICATION_AUTH_RES",
      data.message,
      data.clientMsgId
    );
  }
}