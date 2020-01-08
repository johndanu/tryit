SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});


$(document).ready(function() {
  SC.stream('/tracks/277167607',function(sound){
       $('#start8').click(function(e) {
         e.preventDefault();
         sound.start();
       });

       $('#stop8').click(function(e) {
         e.preventDefault();
         sound.stop();
       });
  });

});
