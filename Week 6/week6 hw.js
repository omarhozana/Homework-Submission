function vehicle(color, type, age){
  var code="";
  if (type == 1)
    {
      code ="car";
   }else if(type == 2)
  {
    code ="motorbike";
  }


  var string="";
  if (age<1)
    {
    string ="new";
   }else
  {
     string="used";
  }
    console.log("a " + color + " "+ string +" "+ code);
}
  vehicle("blue", 1, 3);



  function vehicle(color, type, age){
  var vehicles=["track", ""];

  var string="";
  if (age<1)
    {
    string ="new";
   }else
  {
     string="used";
  }
    console.log("a " + color + " "+ string +" "+ vehicles[type-1]);
}
  vehicle("green", 4, 0);



  var teacher1 = {name: "Yousef", helping:"anything"};
  console.log(teacher1.name)
  console.log(teacher1.helping)

  var teacher2 = {name: "Rajie", languages:"css and html"};
  console.log(teacher2.name)
  console.log(teacher2.languages)

  var teacher3 = {name: "Saad", languages:"Javascript"};
console.log(teacher3.name)
console.log(teacher3.languages)
