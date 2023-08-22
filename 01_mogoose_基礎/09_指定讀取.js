// 安裝 npm i mongoose

// 導入 mongoose
const mongoose = require("mongoose");

// 連接 mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/story_books");

// 連接成功
mongoose.connection.once('open', async () => {
    console.log('連接成功');

    // 創建文檔的結構對象
    const BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,  // 該屬性一定要有
            unique: true     // 該屬性是唯一的
        },
        author: {
            type: String,
            default: '匿名'  // 如果未賦值就以 匿名 輸入資料庫
        },
        style: {
            type: String,
            enum: ['言情','城市','志怪','恐怖']  // 宣告類型只能是陣列內的
        },
        price: Number,
    });

    // 創建模型物件 對文檔操作的物件
    const BookModel = mongoose.model('books', BookSchema);

    // try {
    //     // 使用 async/await 處理 指定讀取 方法
    //     const newBook = await BookModel.find().select({name: 1, author: 1, _id:0}).exec();
    //     console.log(newBook);
    // } catch (err) {
    //     console.log('讀取失敗');
    //     console.error(err);
    //     return;
    // }

    try {
        // 使用 async/await 處理 排序 方法   1:升序  -1:倒序
        const newBook = await BookModel.find().select({name: 1, price: 1, _id:0}).sort({price: -1}).exec();
        console.log(newBook);
    } catch (err) {
        console.log('讀取失敗');
        console.error(err);
        return;
    }
});

// 連接失敗
mongoose.connection.on('error', (error) => {
    console.log('連接失敗', error);
});

// 連接關閉
mongoose.connection.on('close', () => {
    console.log('連接關閉');
});