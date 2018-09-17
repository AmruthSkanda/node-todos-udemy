const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err)
        return console.log("unable to connect to mongo db");
    console.log("Connected to Mongo");
    const db = client.db("TodoApp");

    /* Insert one */

    // db.collection('Todos').insertOne({
    //     text: 'First todo',
    //     completed: false
    // }, (err, res) => {
    //     if (err)
    //         return console.log("Unable to insert todo ;( ", err);

    //     console.log(JSON.stringify(res.ops, null, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Amruth',
    //     age: 20,
    //     location: 'blr'
    // }, (err, res) => {
    //     if (err)
    //         return console.log("Unable to insert user");

    //     console.log(JSON.stringify(res.ops, null, 2));
    // });

    /* delete Many */
    // db.collection('Todos').deleteMany({ text: 'First todo' })
    //     .then(res => console.log(res));

    /* delete one */
    // db.collection('Todos').deleteOne({ text: 'First todo' })
    //     .then(res => console.log(res));


    /* findOneAndDelete */
    // db.collection('Todos').findOneAndDelete({ completed: true })
    //     .then(res => console.log(res));

    /* findOneAndUpdate */
    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectID("5b99dbd2cadd3db197392c42") },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     { returnOriginal: false }
    // )
    //     .then(res => console.log(res));

    client.close();
})