
(function () {
window.leftPage1 = function(){

	var leftPage1 = this;

	leftPage1.getLeftPage1 = function(myApp, mainView){
	myApp.onPageBeforeAnimation('left-page-1', function(page) {
                    $("#tool-icon-1").removeClass("hidden");
                    $("#tool-icon-1").addClass("tab-link");
                    $("#tool-icon-2").removeClass("hidden");
                    $("#tool-icon-2").addClass("tab-link");
                    $("#tool-icon-3").removeClass("hidden");
                    $("#tool-icon-3").addClass("tab-link");
                    $('#back-button').addClass("invisible");

                $('#zip').attr('checked', false);
                $('#city').attr('checked', false);
                $('#state').attr('checked', false);
                mainView.loadPage('main-page-1.html');
});

$$(document).on('click', '#tool-icon-1', function(e){
  listStatus = 0;
                  $('#zip').attr('checked', false);
                $('#city').attr('checked', false);
                $('#state').attr('checked', false);
  $('#group-list').html("");
  $.ajax({
            url: 'http://192.168.1.70:3000/api/v1/getOrderDetail?orderPartyID='+userKey+'&apiKey=1dca7720-395c-11e4-916c-0800200c9a66&orderStatus=0',       
            dataType:"text",
            beforeSend: function(xhr) {
                myApp.showPreloader();
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        })
        .done(function(data) {
            myApp.hidePreloader();
            orderArray = JSON.parse(data).data;
            if(orderArray == 'NO-ORDER-FOUND'){
              orderArray = [];
            }
             printAllOrders();
        })
        
      });

$$(document).on('click', '#tool-icon-2', function(e){
    listStatus = 1;
                  $('#zip').attr('checked', false);
                $('#city').attr('checked', false);
                $('#state').attr('checked', false);
  $('#group-list').html("");
  $.ajax({
            url: 'http://192.168.1.70:3000/api/v1/getOrderDetail?orderPartyID='+userKey+'&apiKey=1dca7720-395c-11e4-916c-0800200c9a66&orderStatus=1',       
            dataType:"text",
            beforeSend: function(xhr) {
                myApp.showPreloader();
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        })
        .done(function(data) {
            myApp.hidePreloader();
            orderArray = JSON.parse(data).data;
            if(orderArray == 'NO-ORDER-FOUND'){
              orderArray = [];
            }
             printAllOrders();
        })
        
      });

$$(document).on('click', '#tool-icon-3', function(e){
    listStatus = 2;

                $('#zip').attr('checked', false);
                $('#city').attr('checked', false);
                $('#state').attr('checked', false);
  $('#group-list').html("");
  $.ajax({
            url: 'http://192.168.1.70:3000/api/v1/getOrderDetail?orderPartyID='+userKey+'&apiKey=1dca7720-395c-11e4-916c-0800200c9a66&orderStatus=2',       
            dataType:"text",
            beforeSend: function(xhr) {
                myApp.showPreloader();
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        })
        .done(function(data) {
            myApp.hidePreloader();
            orderArray = JSON.parse(data).data;
            if(orderArray == 'NO-ORDER-FOUND'){
              orderArray = [];
            }
             printAllOrders();
        })
        
      });
	

}
    }
})();