/*!
 * name: @feizheng/glob-copy
 * description: Copy based on globby.
 * homepage: https://github.com/afeiship/glob-copy
 * version: 1.0.0
 * date: 2020-07-27T11:39:30.599Z
 * license: MIT
 */

"use strict";var fs=require("fs"),path=require("path"),glob=require("globby"),mkdirp=require("mkdirp"),copy=function(e,p){e.forEach(function(e){var r=path.join(p,path.dirname(e)),c=path.basename(e);mkdirp.sync(r),fs.createReadStream(e).pipe(fs.createWriteStream(path.join(r,c)))})},cp=function(e,c,p){glob(e,function(e,r){copy(r,c),p&&p(e,r)})},cpSync=function(e,r){copy(glob.sync(e),r)};module.exports=cp,module.exports.sync=cpSync;