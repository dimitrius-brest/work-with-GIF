// работа с GIF-файлами

function openMyFile(myFile) {	
	alert('Имя файла::: ' + myFile.name);
}

/*
var control = document.getElementById("your-file");
control.addEventListener("change", function(event) { 
	var files = control.files;		
	var reader = new FileReader();
	reader.onload = function(event){
		var contents = event.target.result;
		document.getElementById('soderzhimoe').innerHTML = 
								"<br><br><b>Файл:</b> " + files[0].name +
								"<br>Содержимое файла: <br>" + contents.substr(0,1024);
	};
	//reader.readAsText(files[0]);
	//reader.readAsArrayBuffer(files[0]);
	reader.readAsBinaryString(files[0]);
}, false);
*/