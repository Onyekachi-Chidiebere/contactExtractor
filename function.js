const that = async()=>{
        await chrome.browserAction.onClicked.addListener(async(activeTabs)=>{
            const newUrl = 'https://www.google.co.in/search?q=yoga+gmail+91'
               await chrome.tabs.update({url:newUrl},async(tab)=>{

                //using programmic injection to insert code aginst content script
                await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                chrome.tabs.executeScript(tab.id, {file:'getPage.js'})
              }
               );
                await chrome.tabs.create({url:"http://puregangayoga.com/"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://www.yogaadi.com/"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://www.indianyogaassociation.org/contact.html"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://www.yogaadi.com/event-cat/yoga-classes/"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"http://kriisyoga.com/services"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });
                
                
                await chrome.tabs.create({url:"http://kriisyoga.com/wellness-yoga"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://www.facebook.com/nirvikalpyogaacedemy/posts"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://vishuddhiyoga.com/contact-us/"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"https://ng.linkedin.com/company/spiritual-life-home"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

                await chrome.tabs.create({url:"http://www.rajyogaschool.com/yoga-teacher-training-in-goa/"},async(tab)=>{
                  await chrome.tabs.executeScript(tab.id, {file:'jQuery.js'});
                  chrome.tabs.executeScript(tab.id, {file:'getContacts.js'})
                });

   });
  
   
}

//calling the function
that();
































































































































// const that = async()=>{
//     await chrome.browserAction.onClicked.addListener(async(activeTabs)=>{
//         const newUrl = 'https://www.google.co.in/search?q=yoga+gmail+91'
//            await chrome.tabs.update({url:newUrl})
//            chrome.tabs.executeScript({code:"window.addEventListener('load',()=>{console.log(`hello`)})"});
//             console.log('hi')
//         })
        
            
// }
// that()


// const fetchData = async ()=>{
//     // const url ='https://extractorserver.herokuapp.com/get-data';
//     const url ='http://localhost:3000/get-data';

//     axios.post(url).then((response)=>{
//         $('#emails').empty();
//         $('#numbers').empty();
//         let emails = Array.from(response.data.emails);
//         let phoneNumbers = Array.from(response.data.numbers)
//         console.log(response.data.emails,phoneNumbers)

//         emails.forEach((email)=>{
//             $('#emails').append(`<li>${email}</li>`)
//         })

//         phoneNumbers.forEach((phoneNumber)=>{
//             $('#numbers').append(`<li>${phoneNumber}</li>`)
//         })
//     }).catch((error)=>{
//         console.log(error)
//     })
// }
// document.querySelector('button').addEventListener('click',fetchData)