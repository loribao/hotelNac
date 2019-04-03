#!/bin/bash
#openssl req -nodes -new -x509 -keyout server.key -out server.cert
# Obs: certificados validos com Certbot
# na hora da raiva pode apelar para o terminal "google-chrome --ignore-certificate-errors" 
#Nota: CN é definido para valores diferentes nas seções abaixo
ORG="alunosSenac"

# variaveis para o openssl
validade_DAYS=360
CA_KEY=ca.key
CA_CERT=ca.crt
cliente_KEY=cliente.key
cliente_CERT=cliente.crt
cliente_CSR=cliente.csr
cliente_P12=cliente.p12
SERVER_KEY=server.key
SERVER_CERT=server.crt
SERVER_CSR=server.csr
KEY_BITS=2048


# "Criando o CA certificate..."
CN="ca-certificate"
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:$KEY_BITS -out $CA_KEY
openssl req -new -x509 -days $validade_DAYS -key $CA_KEY -subj "/CN=$CN/O=$ORG" -out $CA_CERT



# "criando certificado do Server ..."
CN="localhost"
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:$KEY_BITS -out $SERVER_KEY
openssl req -new -key $SERVER_KEY -subj "/CN=$CN/O=$ORG" -out $SERVER_CSR
openssl x509 -days $validade_DAYS -req -in $SERVER_CSR -CAcreateserial -CA $CA_CERT -CAkey $CA_KEY -out $SERVER_CERT



# "criando certificado cliente ..."
CN="loribao"
USER_ID="testeuser1"
P12_PASSWORD="senac@2019"
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:$KEY_BITS -out $cliente_KEY
openssl req -new -key $cliente_KEY -subj "/CN=$CN/O=$ORG/UID=$USER_ID" -out $cliente_CSR
openssl x509 -days $validade_DAYS -req -in $cliente_CSR -CAcreateserial -CA $CA_CERT -CAkey $CA_KEY -out $cliente_CERT
openssl pkcs12 -in $cliente_CERT -inkey $cliente_KEY -export -password pass:$P12_PASSWORD -out $cliente_P12



echo "instale o certificado no seu navegador $CA_CERT e $cliente_P12"
