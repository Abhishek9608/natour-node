const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"})
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
// .connect(process.env.DATABASE_LOCAL,{
.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
}).then(con => {
    // console.log(con.connection);
    console.log("DB Connection is successful")
});
// console.log(process.env);


const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`App running on port ${port}`)
})