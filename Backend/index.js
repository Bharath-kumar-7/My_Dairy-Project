const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')  //used for hash passwordS
const mysql = require('mysql2');

const app = express()
app.use(cors())
app.use(express.urlencoded({extended:true})) // only for accessing forms data to backend

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root@123',
    database: 'Dairy'
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting to database',err);
        return;
    }
    console.log('Connecting to MySql Database!!');
})

app.get('/',(req,res)=>{
console.log(req)
res.status(200).json({message:'successful'})
})

app.post('/registerUser',async(req,res)=>{
    console.log(req.body)
    const {email,password} = req.body;  // we destruched in our form input tag  the name of email is "email" and password is "password"

    try {
        // hash password
        const hashedPassword = await bcrypt.hash(password,10);
        console.log("hashed password :",hashedPassword)
        connection.query(`insert into Users(EmailID,HashedPassword) values('${email}','${hashedPassword}')`,(err,result)=>{
            if(err)
            {
                res.status(500).send('no')
                return;
            }
            res.status(200).send('okay')
        })

    }catch(err){
        console.log(err)
        res.status(500).send('Error while hashing password');
    }
})

app.post('/UserLogin',async(req,res)=>{
    console.log("User Logined: ",req.body)
    const{email,password} = req.body;
     let userID = ''
     let hashedPassword = ''
    connection.query(`select ID,HashedPassword from Users where EmailID='${email}'`,async(err,result)=>{
            if(err)
            {
                res.status(500).send('no')
                return;
            }
           
            hashedPassword = result[0].HashedPassword;
            userID = result[0].ID;
            let response = await bcrypt.compare(password,hashedPassword)
            if(response)
            {
                res.status(200).json({ userID: userID});
                return;
            }else{
                res.status(500)
                return;
            }
    })
    // let response = await bcrypt.compare(password,hashedPassword)
    // console.log('Is same',response)
    // res.send(200).send('matched')
})

app.post('/newPost',async(req,res)=>{
    const{postTitle,postDescription,userID} = req.body;
    connection.query(`insert into Posts(UserID,postTitle,postDescription) values(${userID},'${postTitle}','${postDescription}')`,(err,result)=>{
         if(err)
            {
                res.status(500).send('no')
                return;
            }
                res.status(200).send('okay')
    })
    console.log("new post:",req.body)
})

// app.get('/getMyposts',async(req,res)=>{
//     console.log(req.query)
//     connection.query(`select * from Posts where UserID = ${req.body.userID}`,(err,result)=>{
//          if(err)
//             {
//                 res.status(500)
//                 return;
//             }
//                 res.status(200).send(result)
//     })
// })
// Get all posts (for FeedPage)
// ✅ Fetch only posts of the logged-in user
app.get('/getMyposts', (req, res) => {
    const userID = req.query.userID; // example: /getMyposts?userID=13

    if (!userID) {
        res.status(400).send('UserID missing in request');
        return;
    }

    connection.query(
        `SELECT p.ID, p.postTitle, p.postDescription 
         FROM Posts p 
         WHERE p.UserID = ? 
         ORDER BY p.ID DESC`,
        [userID],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error fetching your posts');
                return;
            }
            res.status(200).json(result);
        }
    );
});
app.get('/getPostById', (req, res) => {
    const postID = req.query.postID;

    connection.query(
        `SELECT p.ID, p.postTitle, p.postDescription, u.EmailID
         FROM Posts p
         JOIN Users u ON p.UserID = u.ID
         WHERE p.ID = ?`,
        [postID],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Database error');
            }
            if (result.length === 0) return res.status(404).send('Post not found');
            res.json(result[0]);
        }
    );
});



app.listen(3000,()=>{
    console.log("Server started at port 3000!")
})