import mongoose from 'mongoose';

export default async () => {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect("mongodb://localhost:27017/gamico", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then( () => {
        console.log("Connected To Mongo Db DataBase");
    }).catch((err) => {
        console.log("DataBase Connection Error " + err);
    })
};