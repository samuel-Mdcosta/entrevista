var fileInput = document.getElementById("arquivo");

function validaDocumento(){
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:8000/uploadfile", {
        method: "POST",
        body: formData
    })
    .then(function(reposnse){
        if(reposnse.ok){
            return reposnse.json();
        }else{
            throw new Error("Erro ao enviar o arquivo");
        }
        return reposnse.json();
    })
    .then(function(data){
        if (file && file.type === "application/pdf") {
            const fileURL = URL.createObjectURL(file);
            const view = document.getElementById('view');
            view.src = fileURL;
            view.style.display = 'block';
            console.log("Arquivo enviado com sucesso:", data);
        } else {
            alert("Por favor, selecione um arquivo PDF válido.");
        }
    })
    .catch(function(error){
        console.error("Erro ao enviar o arquivo:", error);
    });
}