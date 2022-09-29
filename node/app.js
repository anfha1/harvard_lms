const fs = require('fs');
const path = require('path');
const pdf2img = require('pdf2img');
const fsPromises = require("fs/promises");

const ObserveClass = require("./modules/Observe");

// Init Observe object
let Observe = new ObserveClass();

// Thư mục theo pdf cần theo dõi
let targetFolderPdf = "test";
let folderOutput = "test1"

// Listen event new file has been added
Observe.on("new-file-has-been-added", async (file) => {
  var input = __dirname + '/' + file;
  var filename = path.basename(input)
  var exfile = path.extname(filename)
  var idc = filename.slice(0, -exfile.length)
  var output = __dirname + '/' + folderOutput + '/' + idc;

  if (fs.existsSync(output) && fs.lstatSync(output).isDirectory()) {
    try {
      await fsPromises.unlink(output);
      console.log('File đã tồn tại đang xóa!');
    } catch (err) {
      console.log(err);
    }
  }

  // cập nhật cấu hình file pdf
  pdf2img.setOptions({
    outputdir: output,
    page: null
  })

  // convert pdf to jpg
  pdf2img.convert(input, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);

      // convert xong
      console.log('Chuyển đổi xong', filename, idc)
      // console.log(path.basename(input));
    }
  });

});

// Start watching folder...
Observe.watchFolder(targetFolderPdf);
