
import { Application, send } from 'https://deno.land/x/oak/mod.ts'
import * as dejs from "https://deno.land/x/dejs@0.9.3/mod.ts";
import {
  viewEngine, engineFactory,
  adapterFactory
} from "https://deno.land/x/view_engine/mod.ts";
import router from './routes/route.ts';

const ejsEngine = await engineFactory.getEjsEngine();
const oakAdapter = await adapterFactory.getOakAdapter();

const app = new Application();
app.use(viewEngine(oakAdapter, ejsEngine,{
  viewRoot:'./views',
  viewExt:'.ejs'
}));


app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
console.log("server started at http://localhost:8000");