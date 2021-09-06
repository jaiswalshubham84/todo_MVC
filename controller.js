var todo= new todoapp();

var chkf =function (i)
{
    todo.collection[i].toggle();
   todo.rendered();
}
var remove=function(i){
    todo.collection.splice(i,1);
    todo.rendered();

}
 var Allf=function(){
    
    var len=todo.collection.length;
    for(i=0;i<len;i++)
    {
        todo.collection[i].show=true;
    }
    todo.rendered();
}
var activef = function(){
var len=todo.collection.length;
for(i=0;i<len;i++)
    {
        if(!todo.collection[i].completed)
        todo.collection[i].show=true;
        else
        todo.collection[i].show=false;

    }
    todo.rendered();

}
var comp=function(){
var len=todo.collection.length;
for(i=0;i<len;i++)
{
    if(todo.collection[i].completed)
    todo.collection[i].show=true;
    else
    todo.collection[i].show=false;
}
todo.rendered();
}
var cocf=function(){
var len=todo.collection.length;
for(i=0;i<len;i++){
    if(todo.collection[i].completed){
        todo.collection.splice(i,1);
         i=i-1;
         len=len-1;
    }
}
todo.rendered();

} 
 var edit=function(i)
{
   todo.collection[i].iseditable=true;
   todo.rendered();
}
var setitem=function name(i,e) {
   if(e.keyCode==13){
       if(e.target.value!=""){
           todo.collection[i].name=e.target.value;
       }
       todo.collection[i].iseditable=false;
        todo.rendered();
   }
   
}
var select=function(e){
    console.log(e.target);
   var len=todo.collection.length;
   if(e.target.value=="set"){
      
        for(i=0;i<len;i++){
            todo.collection[i].completed=false;
        }
   }
   if(e.target.value=="notset"){
    for(i=0;i<len;i++){
            todo.collection[i].completed=true;
        }

   }
   todo.rendered();

}

    function inp(e){
                  
                if(e.keyCode==13)
                { 
                var item=document.getElementById("in").value;
                if(item!=""){
                    todo.insert(item);
                    document.getElementById("in").value="";
                    todo.rendered(); 
               
                }
               }
               }