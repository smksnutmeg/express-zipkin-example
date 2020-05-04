
First run Zipkin locally here:
```
http://local.nutmeg.co.uk:9411
```

Then run this app
```
npm i && npm run build && npm run start
```

Make a request to localhost:3000/

Check error logs:

```
ReferenceError: fetchImplementation is not defined
    at Module.<anonymous> (/Users/shaun/nutmeg/express-zipkin-example/build/api.bundle.js:346:1233)
    at a (/Users/shaun/nutmeg/express-zipkin-example/build/api.bundle.js:1:172)
    at Object.<anonymous> (/Users/shaun/nutmeg/express-zipkin-example/build/api.bundle.js:161:21223)
```