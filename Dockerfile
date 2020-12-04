FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8

COPY . /app

RUN pip install --upgrade pip -r requirements.txt

EXPOSE 80