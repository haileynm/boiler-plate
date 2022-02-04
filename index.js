const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Hailey:1234@cluster0.r4eih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreatIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected...'))
  .catch(err => console.log(err))

//root 디렉토리에 오면 Hello World 출력
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//port 5000번에서 앱 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})