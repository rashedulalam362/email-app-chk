import { jwtVerify,SignJWT } from "jose";
import { NextResponse } from 'next/server';
export async function GET(req, res) {

const key=new TextEncoder().encode(process.env.JWT_KEY)
const payload={email:'rashed@gmail.com', password:'ab123'}

const token=await new SignJWT(payload)
          .setProtectedHeader({alg:'HS256'})
          .setIssuedAt()
          .setIssuer('http://localhost:3000/')
          .setExpirationTime('2h')
          .sign(key)
          return NextResponse.json({token: token})   

}



export async function POST(req,res){

    const jsonBody=await req.json()
    const token=jsonBody['token']
    const key=new TextEncoder().encode(process.env.JWT_KEY)

    const decoded=await jwtVerify(token,key)


    return NextResponse.json(decoded)


}