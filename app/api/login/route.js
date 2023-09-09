import { SignJWT } from "jose"
import { NextResponse } from "next/server"

export async function POST(req,res){

const jasonBody=req.json()
 const username=jasonBody['user']
 const password=jasonBody['password']

 if(username==='abc' && password==='123'){
  const payload={username:username}
  const key=new TextEncoder().encode(process.env.JWT_KEY)

  const token=await new SignJWT(payload)
  .setProtectedHeader({alg:'HS256'})
  .setIssuedAt()
  .setIssuer('http://localhost:3000/')
  .setExpirationTime('2h')
  .sign(key)

return NextResponse.json({token:token,msg:'login'})   
      

}else{

    return NextResponse.json({status:'failed1', message:'Invalid'})


 }


}