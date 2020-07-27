var fs = require('fs');
var path = require('path');
var glob = require('globby');
var mkdirp = require('mkdirp');

var copy = function (files, destFolder) {
  files.forEach(function (filename) {
    var folder = path.join(destFolder, path.dirname(filename));
    var file = path.basename(filename);
    mkdirp.sync(folder);

    fs.createReadStream(filename).pipe(
      fs.createWriteStream(path.join(folder, file))
    );
  });
};

var cp = function (pattern, destFolder, cb) {
  glob(pattern, function (err, files) {
    copy(files, destFolder);
    if (cb) cb(err, files);
  });
};

var cpSync = function (pattern, destFolder) {
  copy(glob.sync(pattern), destFolder);
};

module.exports = cp;
module.exports.sync = cpSync;
