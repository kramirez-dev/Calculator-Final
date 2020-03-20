import emailjs from 'emailjs-com';

const service_id = "smtp_server";//Outlook
const template_id = "template_x6HhnQP3";//Formato de la api
const template_id_scio = "template_x6HhnQP3_clone";//Email de notificaciones de Rod
const user_id = 'user_aF0ezn3c5Qo4mKWiN1kqQ';//Llave de mi correo personal {Se cambiara por otro despues}


////////////////////////////////////////////////////////
const email_scio = "kramirez@sciodev.com"  //CAMBIAR A EMAIL DE ROD O DE ENCARGADO DE EQUIPOS DEDICADOS
/////////////////////////////////////////////////////


export default function sendEmail(e) {//Funcion para mandar email
  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name": e.target.user_name.value,
    "email": e.target.user_email.value,

    "jr": e.target.jr.value,
    "mid": e.target.mid.value,
    "sr": e.target.sr.value,
    "tech": e.target.tech.value,
    "qa": e.target.qa.value,
    "month": e.target.month.value,

    "PTCNear": e.target.PTCNear.value,
    "PTCOff": e.target.PTCOff.value,

    "POCNear": e.target.POCNear.value,
    "POCOff": e.target.POCOff.value,
    "CVANear": e.target.CVANear.value,
    "CVAOff": e.target.CVAOff.value,
    "ORACOff": e.target.ORACOff.value,
    "ORACNear": e.target.ORACNear.value,

    //"LDCNear": e.target.LDCNear.value,
    //"LDCOff": e.target.LDCOff.value,
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

  var template_params2 = {
    "from_name": "TCE Calculation Notification",
    "name": e.target.user_name.value,
    "email": e.target.user_email.value,
    "email_scio": email_scio,

    "jr": e.target.jr.value,
    "mid": e.target.mid.value,
    "sr": e.target.sr.value,
    "tech": e.target.tech.value,
    "qa": e.target.qa.value,
    "month": e.target.month.value,

    "PTCNear": e.target.PTCNear.value,
    "PTCOff": e.target.PTCOff.value,

    "POCNear": e.target.POCNear.value,
    "POCOff": e.target.POCOff.value,
    "CVANear": e.target.CVANear.value,
    "CVAOff": e.target.CVAOff.value,
    "ORACOff": e.target.ORACOff.value,
    "ORACNear": e.target.ORACNear.value,
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

  if (emailjs.send(service_id, template_id, template_params, user_id) && emailjs.send(service_id, template_id_scio, template_params2, user_id))
    return true
}
