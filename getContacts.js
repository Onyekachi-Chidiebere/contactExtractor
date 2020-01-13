const emailRegex1 = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
const emailRegex2 = new RegExp(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\. [a-zA-Z0-9._-]+)/gi);
const phoneNo = new RegExp("\\+?\\(?\\d*\\)? ?\\(?\\d+\\)?\\d*([\\s./-]?\\d{2,})+", "g");

const emails=[]
const numbers=[]

setTimeout(async()=> { 
             
    let data =$('body').text()

      const email1= data.match(emailRegex1)
      if(email1){
      emails.push(email1);
      const newMails =[...new Set(emails[0])]
      console.log(newMails)
      }
     

      const phoneRaw = data.match(phoneNo);
      if(phoneRaw){
      const phone = Array.from(phoneRaw)
      
      const number = phone.filter((no)=>{
        return (no.toString())
      })
      const num = number.filter((no)=>{
        return no.length>10
      })
      if(num){
          numbers.push(num)
          const newNumbers =[...new Set(numbers[0])];
          console.log(newNumbers)
      }}
  }, 100);


