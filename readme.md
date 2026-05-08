# Upload de Arquivos - FullStack

Tesde da entrevista para devFukkStack da AlfaNeo

## Instalação

### 1. Instalar as dependências Python

pip install fastapi uvicorn python-multipart

### 2. Rodar o backend

Dentro da pasta `backend/`:

```bash
uvicorn recebeUpload:app --reload
```

O servidor estará disponível em: `http://localhost:8000`

### 3. Abrir o frontend

Abra o arquivo `frontend/uploadArquivo.html` diretamente no navegador.

## Como usar

1. Clique em **Selecionar Arquivo** e escolha um arquivo PDF
2. Clique em **Enviar**
3. O arquivo será salvo no servidor e exibido na tela

## Observação

O caminho de destino dos uploads está configurado em `backend/recebeUpload.py` na variável `upload_path`. Ajuste conforme necessário para o seu ambiente.
