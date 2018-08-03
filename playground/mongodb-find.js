// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://192.168.1.184:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

    db.collection('Todos').find({
    _id: new ObjectID('5b642cafe65bd45032d509de')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

    db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
     console.log(JSON.stringify(docs, undefined, 2));
   });

  client.close()
});
  // db.collection('Todos').find({
  //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });
//  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
//     console.log(JSON.stringify(docs, undefined, 2));
//   });

//    //db.close();
// });
