const express = require('express');
const app = express();
const port = 4000;

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
