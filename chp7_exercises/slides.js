function SelectImage()
	{
 	   rand=Math.floor(Math.random()*4) + 1;
	   
 	  imgName1='number' + rand + '.jpg';
	  
 	 document.getElementById('randImg').src = imgName1;
	 
	}