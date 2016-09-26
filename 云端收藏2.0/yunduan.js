// JavaScript Document
	 
	 

 		 
	   
	   function listener(json){
		    var str=[];
		     for(var key in json.obj){
			 
				str.push(json.obj[key].tname);
			 }
			   var oul=document.getElementById('ul');
			for(var i=0;i<str.length;i++){
				
				
				 var oLi=document.createElement('li');
				 var oA=document.createElement('a');
				 /*oA.onclick=function(){
					 
					 }*/
				  oA.innerHTML=str[i];
				  oLi.appendChild(oA);
				  oul.appendChild(oLi);
				
				}
			// document.getElementById('morecontent').innerHTML=str;
		   } 