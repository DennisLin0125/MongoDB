// 1. 安裝 mongoose
// 2. 導入 mongoose

const mongoose = require('mongoose');

// 3.連接 mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 4.設置回調函數
// 設置連接成功的回調
mongoose.connection.once("open", () => {   
    console.log("連接成功");
});

// 設置錯誤的回調
mongoose.connection.on("error", () => {   
    console.log("連接失敗");
});

 // 設置關閉的回調
mongoose.connection.on("close", () => {  
    console.log("連接關閉");
});

