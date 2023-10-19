// version of pc
const os=require("os");
console.log(os.arch());

//fre memory
const freememory=os.freemem();
// console.log(freememory);

// after using template string
console.log(`${freememory/1024/1024/1024}`);

// total memory
const totalmemory =os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);