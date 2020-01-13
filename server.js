const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/docs', (req,res)=>{
    res.send( [
        {
          id: 1
          ,img:'http://placeimg.com/64/64/3'
          ,name : 'World'
          ,content : 'Nice to meet you!'
        }
        ,{
          id: 2
          ,img:'http://placeimg.com/64/64/8'
          ,name : 'React'
          ,content : 'Good Friend'
        }
        ,{
          id: 3
          ,img:'http://placeimg.com/64/64/9'
          ,name : 'Node'
          ,content : 'Good'
        }
        ])
});

app.listen(port,()=>{console.log(`Listening on port ${port}`)})