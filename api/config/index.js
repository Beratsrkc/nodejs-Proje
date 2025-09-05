module.exports={
    "PORT":process.env.PORT||3000,
    "LOG_LELVEL":process.env.LOG_LELVEL || "debug",
    "CONNECTION_STRING":process.env.CONNECTION_STRING || "mongodb://localhost:27017/Nodejs_project",
    "JWT":{
        "SECRET":"123456",
        "EXPIRE_TIME":!isNaN(parseInt(process.env.TOKEN_EXPIRE_TIME)) ? parseInt(process.env.TOKEN_EXPIRE_TIME) :24*60*60
    },
    "DEFAULT_LANG":process.env.DEFAULT_LANG ||"EN"
}