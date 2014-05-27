function SelectImage(id1,id2)
	{
 	   roll1=Math.floor(Math.random()*6) + 1;
	   roll2=Math.floor(Math.random()*6) + 1;
 	  imgName1='http://balance3e.com/Images/die' + roll1 + '.gif';
	  imgName2='http://balance3e.com/Images/die' + roll2 + '.gif';
 	 document.getElementById(id1).src = imgName1;
	 document.getElementById(id2).src = imgName2;
	}