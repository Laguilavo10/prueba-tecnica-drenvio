# Prueba tecnica NODEJS CHALLENGE 

Prueba tecnica para la empresa DRENVIO. Este proyecto es una API creada en NODEJS y EXPRESS, que tiene como finalidad presentar la solucion al reto propuesto

## Importante

Al URI connection que fue proveido para esta prueba se debe de agregar "challenge" despues del ultimo "/". Esto con la finalidad de usar la base de datos requerida para esta prueba.

## Instalación

1. Clona este repositorio.
```
git clone https://github.com/Laguilavo10/prueba-tecnica-drenvio.git
```
2. Muevete a la carpeta.
```
cd prueba-tecnica-drenvio
```
3. Ejecuta `npm install` para instalar las dependencias.
```
npm install
```

## Uso
1. Agrega las variables de entorno en un archivo .env

2. Ejecuta `npm start` para iniciar el servidor.
```
npm run start
```
3. Abre `http://localhost:3000` en tu navegador.
4. Para ejecutar los test se debe ejecutar `npm run test`
```
npm run test
```

## EndPoints


- /products : Devuelve todos los productos que se encuentran en Stock
- /prices/:id/:productName : Devuelve el precio del producto. SI esta dentro de precios especiales, sino, devuelve el valor normal del producto

### Datos de prueba
- user = 1
- productName = Nike Air Max 90



## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.