FROM node:20-alpine3.20
LABEL authors="julie"

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

CMD ["sh", "-c", "cp -r /app/dist/* /output"]