const chokidar = require("chokidar");
const EventEmitter = require("events").EventEmitter;
const fsExtra = require("fs-extra");

let debug = console.log.bind(console);
class Observe extends EventEmitter {
  constructor() {
    super();
  }
  /**
   * Function responsible for watching a folder
   * @param {string} targetFolder
   */

  watchFolder(targetFolder) {
    try {
      // initialize watcher
      let watcher = chokidar.watch(targetFolder, {persistent: true});
      // listen when a file has been added
      watcher.on("add", async (filePath) => {
        this.emit("new-file-has-been-added", filePath);
      });
    } catch (error) {
      debug(error.toString());
    }
  }
}
module.exports = Observe;
