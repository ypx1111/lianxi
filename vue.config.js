const bodyParser=require('body-parser');
const userJson =require('./src/data/user.json')
module.exports={
    devServer:{
        before(app){
            /**
             * 登录功能接口
             */
            app.post('/login',bodyParser.json(),(req,res)=>{
                let {username,userpwd}=req.body;
                //从数组中查找username
                let obj=userJson.find(item=>item.name===username);
                if(!obj){
                    res.send({code:0,msg:'用户不存在'})
                }else{
                    if(obj.pwd===userpwd){
                        res.send({code:1,msg:"登录成功",data:obj,token:new Date()*1})
                    }else{
                        res.send({code:0,msg:'密码错误'})
                    }
                }
            })
        }
    }
}