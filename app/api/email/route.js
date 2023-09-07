import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  const {searchParams} =new URL(req.url)
  toEmail= searchParams.get('email')

}
//transporter 

let transporter=nodemailer.createTransport({
  host:'mail.teamrabbil.com',
  port:25,
  secure:false,
  auth:{
    user:'info@teamrabbil.com',
    pass:'~sR4[bhaC[Qs'
  },
  tls:{rejectUnauthorized:false}
})

// preapre-email

let myEmail ={
    from:"text email <rashedul.alam362@gmail.com>",
    to:toEmail,
    subject:'test mail',
    text:'test mail'
}



try {
 await transporter.sendMail(myEmail)
 
 return NextResponse.json({msg:'success'})
    
} catch (error) {

   return NextResponse.json({msg:'fail'})
}
    


