//=====================TASK=====================
/*
insertOne 2
insertMany 10 & 5 age 27y
find match 27y
limit 3
$set name for first 4
$inc age +4 for first 4
updateMany $inc for all 10y
deleteMany age 41 & deletedCount
*/
//====================TASK=======================

const mongodb = require ('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'project-1'

mongoClient.connect(connectionUrl, (error, res1) =>{
  if(error){
    return console.log('error')
  }

  console.log('sucess')
  const db = res1.db(dbName)

  //============add data
  db.collection('users').insertOne({
    name : 'mohamed',
    age: 20
  },
  (error,data)=> {
    if(error){
      console.log("cann't insert data")
    }else{
      console.log(data.insertedId)
    }
  })
  //============add data
  db.collection('users').insertOne({
    name : 'ahmed',
    age: 21
  },
  (error,data)=> {
    if(error){
      console.log("cann't insert data")
    }else{
      console.log(data.insertedId)
    }
  })

  //=============add many data
db.collection('users').insertMany([{
  name: 'khaled1',
  age: 27
},
{
  name: 'ahmed2',
  age: 27
},
{
  name: 'samy3',
  age: 27
},
{
  name: 'omnia4',
  age: 27
},
{
  name: 'smsm5',
  age: 27
},
{
  name: 'mostafa',
  age: 20
},
{
  name: 'islam',
  age: 20
},
{
  name: 'mahmoud',
  age: 20
},
{
  name: 'habib',
  age: 20
},
{
  name: 'fouad',
  age: 20
}],(error, data)=>{
  if(error){
    console.log('there is error')
  }else{
    console.log(data.insertedCount)
  }
}
)



//Read data find many
db.collection('users').find({age: 27}).limit(4).toArray((error, user)=>{
  if(error){
    console.log('there is error')
  }else{
    console.log(user)
  }
})


//// update many
db.collection('users').updateMany({},{
  $set: {name: 'new name'},
  $inc: {age: 4}
}).then((data)=>{console.log(data.modifiedCount)})
.catch((error)=>{console.log({error})})



// delete many
db.collection('users').deleteMany({age:41})
.then((data)=>{console.log(data.deletedCount)})
.catch((error)=>{console.log({error})})

})




