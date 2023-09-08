import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function GET(req,res){

  const { searchParams } = new URL(req.url);
  const toEmail = searchParams.get('email');

  // Create a transporter

<<<<<<< HEAD
  const Transporter=nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port:25,
    secure: false,
    auth:{
      user:"info@teamrabbil.com",
      pass: '~sR4[bhaC[Qs'
    },
    tls: { rejectUnauthorized: false },

  })
        // Prepare the email
    let myEmail = {
      from: 'text email <info@teamrabbil.com>',
      to: toEmail,
      subject: 'test mail',
      text: 'test mail'
    }

  // Send the email

  try {
    await Transporter.sendMail(myEmail);
   
   return NextResponse.json({msg:"success"})


  } 
  catch (error) {
    return NextResponse.json({msg:"failed"})
  }
    



}

=======
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
    


>>>>>>> 1f11f29ceb89cb574768af928134fe80d0b3073a
