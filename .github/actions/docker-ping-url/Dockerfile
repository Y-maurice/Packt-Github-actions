FROM python:alpine3.19

WORKDIR /app

COPY requirement.txt .

RUN python -V
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python","/app/main.py" ]