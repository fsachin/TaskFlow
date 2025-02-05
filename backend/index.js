// write basic express boiler plate
// write express.json() with middleware

const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req,res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have given wrong inputs"
        })
        return res;
    }

    //store in the mongo Database
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "todo created"
    })
})

app.get('/todos', (req,res) =>{
    const todos = todo.find({});

    res.json({
        todos
    })
})

app.put('/completed', async function(req, res)  {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return res;
    }
    await todo.update({
        _id : req.body.id
    }, {
        completed : true 
    })
    res.json({
        msg: "todo markded completed"
    })
})

app.listen(3000);