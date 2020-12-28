import express from 'express'
import data from './userdata.js'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/users', (req, res) =>{
    res.send(data.users);
});

//sign in
app.post(
    '/api/users/signin',
    expressAsyncHandler(async (req, res) => {
        const user =  data.users.find(x => x.email ===req.body.email);
        if (user) {
            if (user.password === req.body.password) {
                res.send({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    admin: user.admin,
                    superAdmin: user.superAdmin,
                    communityID: user.communityID,
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

//handle the errors
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

app.listen(5001, () => {
    console.log('Serve at http://localhost:5001');
});