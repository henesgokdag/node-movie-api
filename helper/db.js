const mongoose = require('mongoose');

module.exports=()=>{
mongoose.connect('mongodb://movie_user:abcd1234@ds241968.mlab.com:41968/heroku_zc6z8jdk',{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('open',()=>{
console.log('mongoDB:Connected')
});
mongoose.connection.on('error',(error)=>{
console.log('MongoDB:Error',error);
});
mongoose.Promise=global.Promise;
};