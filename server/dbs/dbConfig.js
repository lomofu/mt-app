module.exports=
{
  mongod:{
    connect:'mongodb://localhost:27017/student',
  },
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return '6379'
    }
  },
  smtp:{

  }
}
