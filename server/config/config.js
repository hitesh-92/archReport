var env = process.env.NODE_ENV || "development";

console.log(`**${env} env**`);

if(env === 'development'){
    process.env.PORT = 5000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/archReport';
}else if(env === 'test'){
    process.env.PORT = 5000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/archReportTest';
}