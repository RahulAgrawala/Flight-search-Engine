function navbar(a, b) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(b).style.display = "block";
    a.currentTarget.className += " active";
}


function a(){
    var today = new Date().toISOString().split('T')[0];
document.getElementsByName("somedate")[0].setAttribute('min', today);
}


function one(){
    var a=document.form.origin.value;
       var b=document.form.destination.value;
       if(a=="" ){
         document.getElementById('orgn').innerHTML="fill the origin city";
         return false;
     }
   
   
       if( b==""){
    document.getElementById('dst').innerHTML="fill the destination city";
   return false;
   }   
     }