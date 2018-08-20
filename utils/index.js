export function excuteTime(cb) {
  console.time('test');
  cb();
  console.timeEnd('test');
};

// https://www.kancloud.cn/kancloud/javascript-standards-reference/46507