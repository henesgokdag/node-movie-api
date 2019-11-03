const mongoose = require('mongoose');

module.exports=()=>{
mongoose.connect('mongodb://localhost/my-movie-api',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('open',()=>{
console.log('mongoDB:Connected')
});
mongoose.connection.on('error',(error)=>{
console.log('MongoDB:Error',error);
});
mongoose.Promise=global.Promise;
};