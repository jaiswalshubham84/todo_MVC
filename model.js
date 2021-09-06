 function todoitem(item){
                   this.name=item;
                   this.completed=false;
                   this.iseditable=false;
                   this.show=true;
                   this.toggle=function(){
                       this.completed=!this.completed
                   }
                   this.toggleshow=function(){
                       this.show=!this.show;
                   }
               }

                function todoapp(item){
                   this.collection=[];
                   this.insert=function(item){
                       this.collection.push(new todoitem(item));
                   }
                   this.rendered= function(){
                    $("#iid").attr({value:' hhh ',style:'background-color :white'});  
                    var len=todo.collection.length;
                    var x,task=0;
                    var y=document.getElementById("ide");
                    if(y.childElementCount>0){
                
                      var r=document.getElementById("par");
                      y.removeChild(r);
                  }
                    var pardv=document.createElement("div");
                    pardv.id="par";
                  y.appendChild(pardv);
                  
                
                    for( i=0;i<len;i++){
                x=todo.collection[i]; 
                if(!x.completed){
                            task++;
                        }
                        if(x.show){    
                  var dv=document.createElement("div");
                  dv.className="row cc";
                  pardv.appendChild(dv);
                  var newdiv=document.createElement("div");
                  newdiv.className="nwdiv col-sm-9 col-xs-8 col-md-9 col-lg-9 ";
                  if(x.iseditable){
                  newdiv.style.display="none";
                  }
                  else
                  newdiv.style.display="block";
                  dv.appendChild(newdiv);
                  var nwe=document.createElement("input");
                  $(nwe).attr({onclick: 'chkf('+i+')' , type:'checkbox',checked:x.completed ,class:'round'});
                  newdiv.appendChild(nwe);
                  var edt=document.createElement("input");
                  $(edt).attr({ type: 'text', placeholder: 'edit the text',class:'col-sm-9  col-xs-9 col-md-9 col-lg-9',onkeydown:'setitem('+i+', event)'});
                  if(!x.iseditable){
                  edt.style.display="none";
                  }
                  else{
                      edt.innerHTML=x.name;
                  edt.style.display="inline";
                  }
                  dv.appendChild(edt);
                  var spn=document.createElement("span");                       
                  newdiv.appendChild(spn);
                 spn.innerHTML=x.name;
                 if(x.completed){
                  $(spn).css({'textDecoration':'line-through' , 'color' : 'rgba(15, 15, 15, 0.2)'});
                 }
                 else{
                     $(spn).css({'textDecoration' : 'none' , 'color':'rgba(15, 15, 15, 0.75)'})
                 }
                 var pcdiv=document.createElement("div");
                 pcdiv.className="overlay col-sm-2 col-sm-offset-1 col-xs-3 col-xs-offset-1 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1";
                 dv.appendChild(pcdiv);
                 var iccn=document.createElement("label");
                 $(iccn).attr({class: 'ion-edit editt' , onclick:'edit('+i+')'});
                 pcdiv.appendChild(iccn); 
                var pic=document.createElement("span");
                // pic.setAttribute("data-toggle","modal");
                // pic.setAttribute("data-target","#myModal");
                 $(pic).attr({class:'ion-ios-close-empty closee', onclick:'remove('+i+')'});
                pcdiv.appendChild(pic);
                  }
                  
                    }
                    document.getElementById("dis").innerHTML=task+" Items Left";
                    if(task==0)
                        {    
                            $("#icn").attr({ style:'color:rgba(85, 83, 83,0.7)'  });
                           document.getElementById("icn").value="set";
                        }
                        else{
                       
                            $("#icn").attr({style:'color:rgba(85, 83, 83,0.2)'  });
                            document.getElementById("icn").value="notset";
                        }
                    if(len>0){
                        document.getElementById("icn").style.visibility='visible';
                    document.getElementById("footer").style.display="block";
                    if(task<len){
                    document.getElementById("btn").style.display="inline";
                }
                else document.getElementById("btn").style.display="none";
                    }
                else{
                    
                    document.getElementById("footer").style.display="none";
                   
                    document.getElementById("icn").style.visibility='hidden'; 
                              
                }
                  
                   }



                  
              


               }
