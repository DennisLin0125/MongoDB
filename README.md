# 後端應用: MongoDB和Node.js

## 運行環境需求:

* [Node.js](https://nodejs.org/en)
* [MongoDB](https://www.mongodb.com/try/download/community)

## 使用技術

* [mongoose](https://mongoosejs.com/docs/)


## 使用方式

First be sure you have MongoDB and Node.js installed.

Next install Mongoose from the command line using npm:

```bash
npm i

```

## folder tree

```text
MongoDB
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  
├─01_mogoose_基礎
│      01_連接數據庫.js
│      02_創建新文件.js
│      03_類型宣告.js
│      04_類型驗證.js
│      05_刪除文件.js
│      06_更新文件.js
│      07_讀取文件.js
│      08_條件讀取.js
│      09_指定讀取.js
│
└─02_mongoose_model
    │  index.js
    │  test.js
    │
    ├─config
    │      config.js
    │
    ├─db
    │      db.js
    │
    └─models
            bookmodels.js
            MovieModels.js

```