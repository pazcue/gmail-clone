$(".js-checkbox").click(function(event){
      var li = $(event.target).closest('.message')
        li.toggleClass('checked');
});