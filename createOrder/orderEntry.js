// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function() {
  function bindEvents() {
    $(".inputPrice").on('input', function () {
      // $(this).closest('.box').children('.something1')
      try {
        var unitPrice = parseFloat(this.value);
        var quantity = parseInt($(this).parent().parent().find('.quantityDiv').children('#inputZip').prop('value'));
        $(this).parent().parent().find('.itemTotalDiv').children('#inputTotal').val((unitPrice * quantity).toFixed(2));
      } catch (error) {
        console.log(error);
      }
    });

    $('.removeTerms').click(function() {
      // $('.card-body').first().children('div').attr('data-itemnumber')
      $(this).parent().remove();
    });

  }
  bindEvents();

  $('#addOneMoreItemBtn').click(function() {
    // $('.card-body').first().children('div').attr('data-itemnumber')
    var lastItemDiv = $(".itemCard:last").clone();
    var lastItemNum = parseInt(lastItemDiv.attr('data-itemnumber')) + 1;
    lastItemDiv.children(".card-title").text("#"+lastItemNum);
    // lastItemDiv.children('div').attr('data-itemnumber', lastItemNum);
    $('.card-body').append('<div class="itemCard" data-itemnumber=\''+lastItemNum+'\'>'+lastItemDiv.html()+'</div>');
    bindEvents();
    // $('.card-body').append(lastItemDiv.html());
  
    // alert('hello!');
  });

  $('#addOneTermsBtn').click(function (e) {
    e.preventDefault();
    var termDivClone = $(".termDiv:first").clone();
    $('#terms').append('<div class="form-group row termDiv">'+termDivClone.html()+'</div>');
    console.log('Before = ' +$(".termDiv:last").find('.form-control').val());
    $(".termDiv:last").find('.form-control').val('');
    bindEvents();
  });

  $('#removeLastItemBtn').click(function() {
    // $('.card-body').first().children('div').attr('data-itemnumber')
    if( $(".itemCard").length > 1) {
      $(".itemCard:last").remove();
    }
  });

  $('.removeTerms').click(function() {
    // $('.card-body').first().children('div').attr('data-itemnumber')
    $(this).parent().remove();
  });

  $("#vendorName").on('input', function () {
    var val = this.value;
    if($('#vendorNameList option').filter(function(){
        return this.value.toUpperCase() === val.toUpperCase();        
    }).length) {
        //send ajax request
        // alert(this.value);
        $('#toAddressTextarea').text(getToAddress(this.value));
    }
  });

  function getToAddress(vendorName) {
    var address;
    switch (vendorName) {
      case "Dalmia Refractories Limited":
        address = "M/s. Dalmia Refractories Limited \nDalmiapuram – 621 651,\nTiruchirapalli District,\nTamil Nadu.";
        break;
      case "Carborundum Universal Limited":
        address = "M/s. Carborundum Universal Limited\nPlot No.35,37,48-51,\nAdhartal Industrial Estate,\nPO Jabalpur - 482004, Madhya Pradesh.";
        break;
      case "Vikas Refractories":
        address = "M/s. Vikas Refractories, \nNH-07, Village - Lakhapateri \nPost - Piprodh, Dist - Katni, Madhya Pradesh";
        break;
      case "Shree Ceramic Fibers Pvt Limited":
        address = "M/s. Shree Ceramic Fibers Private Limited,\n622-626, Sector III, Industrial Area,\nPithampur, Madhya Pradesh.";
        break;
      case "Surya Millboard Industries":
        address = "M/s. Surya Millboard Industries,\nNajafgarh Road, Nangloi, Delhi - 110041.";
        break;
      case "Sai Enterprises":
        address = "M/s. SAI ENTERPRISES,\nNo: 9, Rajarajan Street, Visalakshi Nagar,\nEkkattuthangal, Chennai - 600032.";
        break;
      case "Dalmia Cement (Bharat) Limited":
        address = "M/s. Dalmia Cement (Bharat) Limited,\nRajgangpur - 770 017,\nDist - Sundargarh, Odisha.";
        break;
      case "Nutech Refractories Pvt Limited":
        address = "M/s. Nutech Refractories (P) Limited,\nP.B. No.63, Bazaar No.2,\nBhilwara - 311 001, Rajasthan.";
        break;
      case "Shetty Chemical & Engg works":
        address = "M/s.  Shetty Chemical & Engineering Works Private Limited,\n106, Nai Duniya Apt, Tulshibaugwale Colony,\nPune - 411 009, Maharashtra, India";
        break;
      case "Anchal Refractories":
        address = "M/s. Anchal Refractories,Works:\nSurvey No 224, Sihor Dist,\nGujarat, India.";
        break;
    
      default:
        address = "";
        break;
    }
    return address;
  }


});

// var addOneMoreItem = function() {
//   alert('hello!');
// }

// $('#addOneMoreItemBtn').click(function() {
//   var itemDiv = $('.itemCard').clone();
//   var num = parseInt(itemDiv.attr("data-itemnumber"));
//   itemDiv.attr("data-itemnumber", num+1);
//   itemDiv.children(".card-title").text("#"+num+1);
//   $('#items').append(itemDiv.html());
//   // alert('hello!');
// });






// $(".inputPrice").on('input', function () {
//   // $(this).closest('.box').children('.something1')
//   try {
//     var unitPrice = parseInt(this.value);
//     var quantity = parseInt($(this).parent().parent().find('.quantityDiv').children('#inputZip').prop('value'));
//     $(this).parent().parent().find('.itemTotalDiv').children('#inputTotal').val(unitPrice * quantity);
//   } catch (error) {
//     console.log(error);
//   }
// });


