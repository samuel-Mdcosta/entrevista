function validaDocumento(){
    var arquivo = document.getElementById("arquivo").onclick = function(){
        var fileInput = document.getElementById("arquivo");
        var filePath = fileInput.value;
        fetch('http://localhost:8080/uploadfile', {
            method: 'POST',
            body: JSON.stringify({ filePath: filePath }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(arquivo == ""){
            alert("Selecione um arquivo para upload.");
        return false;
        }else{
            alert("Arquivo selecionado: " + arquivo);
        return true;
    }

    }
}