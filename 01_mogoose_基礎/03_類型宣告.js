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
        name: String,
        author: String,
        price: Number,
        is_hot: Boolean,
        tags: Array,
        pub_time: Date, 
        test: mongoose.Schema.Types.Mixed   // 宣告為通用類型
    });

    // 創建模型物件 對文檔操作的物件
    const BookModel = mongoose.model('books', BookSchema);

    try {
        // 使用 async/await 處理 create 方法
        const newBook = await BookModel.create({
            name: '西遊記',
            author: '吳承恩',
            price: 5000,
            is_hot: true,
            tags:['鬼怪','勵志','社會'],
            pub_time: new Date(),
            test: 'sdsdf'
        });

        console.log(newBook);
    } catch (err) {
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