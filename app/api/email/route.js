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
    from:'text email <info@teamrabbil.com>',
    to:toEmail,
    subject:'test mail',
    text:'test mail'
}

// try {
//  await sendMail(myEmail)
 
//  return NextResponse.json({mes:'success'})
    
// } catch (error) {

//     return NextResponse.json({mes:'fail'})
// }
    

result=await transporter.sendMail(myEmail)
console.log(result);
