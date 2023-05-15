import  express  from "express"
import {createRequire}from 'module';

const require = createRequire(import.meta.url);
 const app=express()
 const port=3000

const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');


app.get('/',(req,res)=>{
sdk.auth('rnd_Uid6VCZB9dYSrtL45XsDC1GP97Ul');
sdk.getServices({limit: '20'})
  .then(({ data }) => res.send(data))
  .catch(err => console.error(err));
console.log('fgf')
})


app.listen(port,()=>{
    console.log(`app listening on http://localhost:${port}`)
})
