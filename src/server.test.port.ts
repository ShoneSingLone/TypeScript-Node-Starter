import errorHandler from "errorhandler";
import chalk from "chalk";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */

let port = app.get("port");
app.on('error', error => {
  if (error.code === 'EADDRINUSE') { // 端口已经被使用
    console.log('The port【' + port + '】 is occupied, please change other port.')
  }
})

function getServer() {
  let server = app.listen(port, () => {
    console.log(chalk`{green.bgBlack Hello World}`, ` App is running at http://localhost:${app.get("port")} in ${app.get("env")} mode`);
    console.log("Press CTRL-C to stop\n");
  });

}

export default getServer();
