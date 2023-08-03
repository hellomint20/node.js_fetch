//bcrypt : 암호화 처리 해줌 (DB에 저장할 때 암호화 해서 저장)
//bcrypt.hashSync(1, 2) : 1 -> 암호화 할 비밀번호/ 2 -> 암호화 수준(숫자 높을수록 높은 수준으로 )
//                                                     숫자 높을수록 서버 돌아가는 시간이 길어짐

const express = require('express')
const bcrypt = require('bcrypt')
const app = express();

app.get("/", (req, res) => {
    const pwd ="test";
    const changePwd = bcrypt.hashSync(pwd, 10);
    console.log("평문 비밀번호 : ", pwd);
    console.log("암호화 비밀번호 : ", changePwd);
    console.log("비밀번호 비교 : ", pwd == changePwd); //false 출력
    const result = bcrypt.compareSync(pwd, changePwd);  //작성 순서 중요 
    console.log("비밀번호 비교 result : ", result)
    res.send("비밀번호")
});

app.listen(3000, console.log("bcrypt server success~~"))