$('#submit').click(function(){

  let contractNumber = $('#contractNumber').val();
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let dogName = $('#dogName').val();
  let dogWeight = $('#dogWeight').val();
  let dateOfBoarding = $('#dateOfBoarding').val();
  let numberOfDaysOfBoarding = $('#numberOfDaysOfBoarding').val();
  let dailyWalk = $('#dailyWalk').val();
  let dailyIceCream = $('#dailyIceCream').val();
  let bath = $('#bath').val();

  let basePrice = 15 * numberOfDaysOfBoarding;


  if(!(contractNumber >= 10000 && contractNumber <= 99999)){
    alert("Contract number is invalid. Please try again.");
    $('#contractNumber').val("");
  } 
  else{

    var inputDate = new Date(dateOfBoarding);
    var getDay = parseInt(inputDate.getDate());
    var getMonth = parseInt(inputDate.getMonth() + 1);

    if((getMonth == 1 || getMonth == 3 || getMonth == 5 || getMonth == 7 || getMonth == 8 || getMonth == 10 || getMonth == 12) && !(getDay >= 1 && getDay <= 31)){
      invalidDate("Invalid date. Please try again.");
    } else if((getMonth == 2) && !(getDay >= 1 && getDay <= 28)){
      invalidDate("Invalid date. Please try again.");
    } else if((getMonth == 4 || getMonth == 6 || getMonth == 8 || getMonth == 11) && !(getDay >= 1 && getDay <= 30)){
      invalidDate("Invalid date. Please try again.");
    } else{

      if(numberOfDaysOfBoarding == "0" || numberOfDaysOfBoarding == 0){
        alert("Cannot be zero. Please try again.");
        $('#numberOfDaysOfBoarding').val("1");
      }
      else{

        if(dogWeight > 100){
          for(let i = 1; i <= numberOfDaysOfBoarding; i++){
            basePrice = basePrice + 7;
          }
        }
        else if(dogWeight > 50){
          for(let i = 1; i <= numberOfDaysOfBoarding; i++){
            basePrice = basePrice + 4;
          }
        } 

        if(dailyWalk == "Y"){
          basePrice = basePrice + (3 * numberOfDaysOfBoarding);
        } 

        if(dailyIceCream == "Y"){
          basePrice = basePrice + (1 * numberOfDaysOfBoarding);
        }

        if(bath == "Y"){
          basePrice = basePrice + 20;
        }

        $('#barkingLotResult').append(`<p><b>Owner's name: ${firstName} ${lastName}</b></p>`);
        $('#barkingLotResult').append(`<p><b>Dog's name: ${dogName}</b></p>`);
        $('#barkingLotResult').append(`<p><b>Total price: ${basePrice}</b></p>`);


        if(dailyWalk == "Y" && dailyIceCream == "Y" && bath == "Y"){
          $('#barkingLotResult').append(`<p><b>One walk for free!</b></p>`);
        }
        else if(dailyWalk == "Y" && dailyIceCream == "Y"){
          $('#barkingLotResult').append(`<p><b>One treat for free!</b></p>`);
        }

        
      }
      

    }




  }

  // for error message invalid date
  function invalidDate(m){
    alert(m);
    $('#dateOfBoarding').val("");
  }


})