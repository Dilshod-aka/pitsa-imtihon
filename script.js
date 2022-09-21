"use strict";


const types=$
('#types'),
      box=$a('.box'),
      ingredints=$a('.indx'),
      extra=$a('.extr-i'),
      breadType=$('.bread-item'),
      breadSize=$('.size-item'),
      lists=$(".list-item"),
      listsExtra=$('.list-extra'),
      sendBtn=$(".send");


    //   ================ ELEMENTS ================

    const dbPizza={};
    dbPizza.ingredints=[];
    dbPizza.extraIngredonts=[];

  // type selector function

  types.addEventListener("change", (e)=>{

    dbPizza.breadType=e.target.value;

    console.log(dbPizza);
    breadType.innerHTML=dbPizza.breadType;
  })


  // SELECT SIZE

  box[0].addEventListener("click", ()=>{
    dbPizza.breadSize="25cm";
    box[0].style.backgroundColor="seagreen";
    box[1].style.backgroundColor="white";
    box[2].style.backgroundColor="white";
    breadSize.innerHTML="25cm";
  })


  box[1].addEventListener("click", ()=>{
    dbPizza.breadSize="30cm";
    box[1].style.backgroundColor="seagreen";
    box[2].style.backgroundColor="white";
    box[0].style.backgroundColor="white";
    breadSize.innerHTML="30cm";
  })
 


  box[2].addEventListener("click", ()=>{
    dbPizza.breadSize="35cm";
    box[2].style.backgroundColor="seagreen";
    box[1].style.backgroundColor="white";
    box[0].style.backgroundColor="white";
    console.log(dbPizza);
    breadSize.innerHTML="35cm";
  })
    

// SELECTOR INGREDIENTS

ingredints.forEach((elements, i) => {

  elements.addEventListener("input",()=>{
    
    if(i===0){
      lists.innerHTML=""
      dbPizza.ingredints.push("Pomidor");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })

    }else if(i===1){
      lists.innerHTML=""
      dbPizza.ingredints.push("Kurka go'shti");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })

    }else if(i===2){
      lists.innerHTML=""
      dbPizza.ingredints.push("Zaytun");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })
    }
    else if(i===3){
      lists.innerHTML=""
      dbPizza.ingredints.push("Tuzlangan bodring");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })
    }
    else if(i===4){
      lists.innerHTML=""
      dbPizza.ingredints.push("Qo'ziqorin");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })
    }
    else if(i===5){
      lists.innerHTML=""
      dbPizza.ingredints.push("Qazi");
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })
    }
    else{
      dbPizza.ingredints=[]
      dbPizza.ingredints.forEach((ele,ind)=>{
        const li=createElement("li", "list-group", ele)
        lists.appendChild(li)
      })
    }
    console.log(dbPizza);
  
  });

});

// extra ingredients


extra[0].addEventListener(("input"), () => {
  listsExtra.innerHTML=""
  dbPizza.extraIngredonts.push("Achhiq");
  
  dbPizza.extraIngredonts.forEach((ele,ind)=>{
    const li=createElement("li", "list-group", ele)
    listsExtra.appendChild(li)
  })
  
})

extra[1].addEventListener(("input"),()=>{
  listsExtra.innerHTML=""
  dbPizza.extraIngredonts.push("Sosiska");

  dbPizza.extraIngredonts.forEach((ele,ind)=>{
    const li=createElement("li", "list-group", ele)
    listsExtra.appendChild(li)
  })
})