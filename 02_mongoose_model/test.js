// 導入 db 文件
const db = require("./db/db");
// 導入 MovieModel
const MovieModel = require("./models/MovieModels")

db(() => {
    // 使用 async/await 處理 create 方法
    async function createBook() {
        try {
            const newBook = await MovieModel.create({
                title: '讓子彈飛',
                director: '姜文'
            });
            console.log(newBook);
        } catch (err) {
            console.error(err);
        }
    }
    createBook(); // 呼叫創建書籍的函數

});