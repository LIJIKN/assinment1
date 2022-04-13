const form = document.getElementById("forms");

function validate()

{
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var error=document.getElementById("error");

    var regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9])+\.([a-z]{2,3})(.[a-z]{2,3})?$/
    var regexp2 = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    if(email.value=="")

    {
      error.innerHTML="E-mail cannot be empty";
      error.style.color="red";
      return false;
         
     }

         else if(password.value=="")
     {
       error.innerHTML="Password cannot be empty";
       error.style.color="brown";
      return false;
     
      }
      else  if(!regexp1.test(email.value))
                 {
                     error.innerHTML="Invalid Email" ;
                     error.style.color="red";
                    return false;
                 }
                 else  if(!regexp2.test(password.value))
                 {
                     error.innerHTML="Invalid Password.Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" ;
                     error.style.color="red";
                    return false;
                 }
       else  {
             error.innerHTML = "Invalid";
             error.style.color = "red";
             return true;
            } 
          }
            form.addEventListener("submit", function(event)
             {
              if(!validate()){
                event.preventDefault();
              }
              
            });


          
      
      
            
      
    