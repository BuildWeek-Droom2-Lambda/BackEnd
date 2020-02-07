const server = require("./api/server");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 6123;

server.listen(PORT, () => console.log(`\n=== Server listening on port ${PORT} ===\n`))