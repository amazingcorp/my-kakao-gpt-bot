const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSON 데이터 읽기

// 카카오가 호출하는 Webhook 주소
app.post('/kakao-webhook', (req, res) => {
  console.log('카카오에서 온 요청:', req.body);

  const userMessage = req.body.userRequest.utterance;

  // ChatGPT 대신 임시 응답
  const kakaoResponse = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: `당신이 보낸 말: ${userMessage}`
          }
        }
      ]
    }
  };

  res.json(kakaoResponse);
});

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중!`);
});