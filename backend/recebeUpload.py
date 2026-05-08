import os

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path

upload_path = Path("C:\\Users\\pc\\Desktop\\ARQUIVOS PROGRAMAÇÃO\\Estudos")
upload_path.mkdir(parents=True, exist_ok=True)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

@app.post("/uploadfile")
async def create_upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(upload_path, file.filename)
    with open(file_path, "wb+") as buffer:
        buffer.write(await file.read())
    return {"filename": file.filename, "url": f"http://localhost:8000/uploads/{file.filename}"}
