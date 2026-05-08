import fastapi
from fastapi import FastAPI, File, Path, UploadFile

upload_path = Path("C:\\Users\\pc\\Desktop\\ARQUIVOS PROGRAMAÇÃO\\Estudos")
upload_path.mkdir(parents=True, exist_ok=True)


def getDocument():
    app = FastAPI()

    @app.post("/uploadfile")
    async def create_upload_file(file: UploadFile = File(...)):
        file_location = upload_path / file.filename
        with open(file_location, "wb+") as buffer:
            buffer.write(await file.read())
        return {"filename": file.filename, "status": "armazenado"}
