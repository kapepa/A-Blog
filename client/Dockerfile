FROM node:14.17.5 AS builder

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.21.6
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/client/ .
