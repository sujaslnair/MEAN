function emailsend(name,adate){
   //nodemailer for sending email
      
    var nodemailer=require('nodemailer');
    var transport=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'fsdonlinedoc@gmail.com',
        pass:'Fsdadmin@123'
        }
    });
    var mailOptions={
        from:'fsdonlinedoc@gmail.com',
        to:name,
        subject:'sending email using node',
        text:'Your Appointment is fixed on'+adate
    };
    transport.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }
        else{
            console.log("email send"+info.response+mailOptions.to);
        }
    });
}
module.exports.printer=emailsend;

