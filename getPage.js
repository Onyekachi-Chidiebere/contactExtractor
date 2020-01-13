const getPages = ()=>{
    let div= Array.from(document.querySelectorAll(".r"))
    div.forEach((element)=>{
        let link=element.firstElementChild.href.toString()
        console.log(link)
        // setTimeout(()=>{window.open(link)},100)
        })
 
  
  } 
  getPages();