帮助文档

### 生成密钥和公钥
```
cd config
openssl
genrsa -out private.key 4096
rsa -in private.key -pubout -out public.key
exit
```