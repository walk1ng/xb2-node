const express = require('express');
const app = express();
const port = 4000;

// 使用中间件
app.use(express.json())

app.listen(port, () => {
    console.log(` 🎉 服务已启动在端口 ${port}...`)
});

app.get('/', (req, res) => {
    res.send('你好!')
})

const data = [
    {
        id: 1,
        title: '标题1',
        content: '内容1'
    },
    {

        id: 2,
        title: '标题2',
        content: '内容2'
    },
    {
        id: 3,
        title: '标题3',
        content: '内容3'
    }
]

app.get('/posts',(req,res)=>{
    res.send(data)
})

app.get('/posts/:postId',(req,res)=>{
    const { postId } = req.params
    const posts = data.filter(item => item.id == postId)
    res.send(posts[0])
})

app.post('/posts',(req,res)=>{

    // 获取请求体中的内容
    const { content } = req.body

    // 获取请求头中的内容
    const whoami = req.header('whoami')
    console.log(whoami);
    
    // 设置响应头中的内容
    res.setHeader('whoami', 'iambackend')

    // 设置http code 并发送响应
    res.status(201).send({
        "message": `创建成功: ${content}`
    })
    
})
