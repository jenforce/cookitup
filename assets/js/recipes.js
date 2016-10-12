$(document).ready(function() {
  $('#search').on("click", function() {
    console.log("in search")
 

 getRecipe();

   function getRecipe(){
      // var recipe = $(this).attr("searchtxt");
      var url = "http://food2fork.com/api/search?key=781b0d28ced3c3fc106072fc1c859602&q=shredded%20chicken"
      

    
      $.ajax({url: url, method: 'GET'})
        .done(function(response) { 
          var results = response.data;
          
          console.log(result);

        })
      }    
     }); 
   });

