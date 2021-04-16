$( document ).ready(function() {
  var cardElement= $(".hiddenCard")[0];
 var zipCodeStortingValue=false;
 var lastNameStortingValue=false;

  $(".addNew").hide();

  $( "#create" ).click(function(e) {
    e.preventDefault()
    $(".addNew").slideToggle();
  });

  $( "#sortLastName" ).click(function(e) {
    e.preventDefault()
    lastNameStortingValue=!lastNameStortingValue;
    $('#lasNameSorting').attr('value', lastNameStortingValue)
    
  });
  
  $( "#sortZipCode").click(function(e) {
    e.preventDefault()
    zipCodeStortingValue=!zipCodeStortingValue;
    $('#zipCodeStorting').attr('value', zipCodeStortingValue)
  });

  
$(document).on("change", "#zipCodeStorting" , function() {
 alert("ok")
});
  
 
  $("#myForm").submit((function(e){
  
    e.preventDefault();
  var data = { company:{},address:{}};
 var company = {}
 var address={}
  $("#myForm").serializeArray().map(function(x){
    if(x.name.includes(".")){
        var slitArray= x.name.split(".");
        if(slitArray[0]=="company")
        {
          company[slitArray[1]]=x.value
        }else{
          address[slitArray[1]]=x.value
        }
    }
    else{
      return data[x.name] = x.value;
    }
  });
  data.company=company;
  data.address=address;
  console.log(address)
   appendToRow(data)
  
  }))
  


  function appendToRow(element) {
    $( ".cardRow" ).append( function(){
      var  repalcedCard= cardElement.innerHTML.toString().replace("usernameData",element.username).toString()
     
        repalcedCard= repalcedCard.toString().replace("name",element.name).toString()
        repalcedCard= repalcedCard.toString().replace("emailData",element.email).toString()
     
       repalcedCard= repalcedCard.replace("phone",element.phone).toString()
       repalcedCard= repalcedCard.replace("websitedata",element.website).toString()
       repalcedCard= repalcedCard.replace("companyName",element.company.name).toString()
       repalcedCard= repalcedCard.replace("catchPhrase",element.company.catchPhrase).toString()
       repalcedCard= repalcedCard.replace("bsData",element.company.bs).toString()
       repalcedCard= repalcedCard.replace("streetData",element.address.street).toString()
       repalcedCard= repalcedCard.replace("suiteData",element.address.suite).toString()
       repalcedCard= repalcedCard.replace("city",element.address.city).toString()
       repalcedCard= repalcedCard.replace("zipcode",element.address.zipcode).toString()
       
      
         return repalcedCard 
       } );   // The function returns the product of p1 and p2
  }


  
  $.get( "https://jsonplaceholder.typicode.com/users", function( data ) {
    // $( ".result" ).html( data );
   
    data.forEach(element => {
      appendToRow(element)
    });
   

  });
});