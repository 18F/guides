FROM --platform=linux/amd64 node:18

ADD ./ZscalerRootCA.pem /usr/local/share/ca-certificates/ZscalerRootCertificate-2048-SHA256.crt
ENV NODE_OPTIONS=--use-openssl-ca
RUN update-ca-certificates

WORKDIR /src

COPY package.json .
COPY package-lock.json .

RUN npm rebuild
RUN npm ci

CMD npm run dev
