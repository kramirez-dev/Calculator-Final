import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const service_id = "outlook";//Gmail
const template_id = "template_x6HhnQP3";//Formato de la api
const template_id_scio = "template_x6HhnQP3_clone";//Email de notificaciones de Rod
const user_id = 'user_aF0ezn3c5Qo4mKWiN1kqQ';//Llave de mi correo personal {Se cambiara por otro despues}
const email_scio="kramirez@sciodev.com"

export default function sendEmail(e) {//Funcion para mandar email
  swal("Email Sent!", "", "success")
  e.preventDefault();

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, 
    
    "PTCNear": e.target.PTCNear.value,
    "PTCOff": e.target.PTCOff.value, 
    
    "POCNear": e.target.POCNear.value, 
    "POCOff": e.target.POCOff.value, 
    "CVANear": e.target.CVANear.value, 
    "CVAOff": e.target.CVAOff.value, 
    "ORACOff": e.target.ORACOff.value, 
    "LDCNear": e.target.LDCNear.value, 
    "LDCOff": e.target.LDCOff.value, 
    "KTCNear": e.target.KTCNear.value, 
    "KTCOff": e.target.KTCOff.value, 
    "PTCostNear": e.target.PTCostNear.value, 
    "PTCostOff": e.target.PTCostOff.value, 
    "PLCNear": e.target.PLCNear.value, 
    "PLCOff": e.target.PLCOff.value, 
    "RMCNear": e.target.RMCNear.value, 
    "RMCOff": e.target.RMCOff.value,

    "PTCInHouse": e.target.PTCInHouse.value, 
    "TCENear": e.target.TCENear.value,
    "TCEOff": e.target.TCEOff.value
   }

   emailjs.send(service_id, template_id, template_params, user_id )
   .then((result) => {
      console.log(result.text);
      window.location.reload();
  }, (error) => {
      console.log(error.text);
      swal("The email hasn't been sent!");
  });


  var template_params2 = {
    "from_name": "TCE Calculation Notification",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, 
    "email_scio": email_scio,
    
    "PTCNear": e.target.PTCNear.value,
    "PTCOff": e.target.PTCOff.value, 
    
    "POCNear": e.target.POCNear.value, 
    "POCOff": e.target.POCOff.value, 
    "CVANear": e.target.CVANear.value, 
    "CVAOff": e.target.CVAOff.value, 
    "ORACOff": e.target.ORACOff.value, 
    "LDCNear": e.target.LDCNear.value, 
    "LDCOff": e.target.LDCOff.value, 
    "KTCNear": e.target.KTCNear.value, 
    "KTCOff": e.target.KTCOff.value, 
    "PTCostNear": e.target.PTCostNear.value, 
    "PTCostOff": e.target.PTCostOff.value, 
    "PLCNear": e.target.PLCNear.value, 
    "PLCOff": e.target.PLCOff.value, 
    "RMCNear": e.target.RMCNear.value, 
    "RMCOff": e.target.RMCOff.value,

    "PTCInHouse": e.target.PTCInHouse.value, 
    "TCENear": e.target.TCENear.value,
    "TCEOff": e.target.TCEOff.value
   }

  emailjs.send(service_id, template_id_scio, template_params2, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
