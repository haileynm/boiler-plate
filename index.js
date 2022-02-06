const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const config = require('./config/key');
const { User } = require('./model/User')

//application/x-www-form-urlencoded 데이터를 분석해서 가져오기
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입으로 된 것을 분석해서 가져오기 
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
  .then(() => console.log('mongoDB Connected...!'))
  .catch(err => console.log(err));

//root 디렉토리에 오면 Hello World 출력
app.get('/', (req, res) => {
  res.send('Hello World!1234')
})

//route의 end-point : register
app.post('/register', (req, res) => {
//클라에서 보내주는 정보들 -> 데이터 베이스에 넣어줌
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

