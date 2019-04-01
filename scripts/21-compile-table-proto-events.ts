import map from "../assets/message-map.json";

const stream = process.stdout;

stream.write("### Treating of PROTO_MESSAGE Events\n");
stream.write("\n");
stream.write(
  "| Payload Type                                | Action                   |\n"
);
stream.write(
  "| ------------------------------------------- | ------------------------ |\n"
);
for (const message of map) {
  const { payloadType, type, scopes } = message;
  if (scopes.includes("PROTO__WRITE")) {
    stream.write(`| \`${payloadType}\` | write to socket |\n`);
  } else if (scopes.includes("PROTO__DECODE")) {
    stream.write(`| \`${payloadType}\` | decode as \`${type}\` and emit |\n`);
  }
  if (type === "ProtoMessage") {
    stream.write(`| \`${payloadType}\` | n/a |\n`);
  }
}