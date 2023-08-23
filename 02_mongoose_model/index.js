// 導入 db 文件
const db = require("./db/db");
// 導入 BookModel
const BookModel = require("./models/bookmodels");

// 調用 db 函數
db(() => {

    // 使用 async/await 處理 create 方法
    async function createBook() {
        try {
            const newBook = await BookModel.create({
                name: '白雪公主',
                author: '威廉.格林',
                price: 20
            });
            console.log(newBook);
        } catch (err) {
            console.error(err);
        }
    }
    createBook(); // 呼叫創建書籍的函數
});
