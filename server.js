const Koa=require('koa');

 serve=require('koa-static');
const bodyParser=require('koa-bodyparser');

require('./dal');
const postRoutes=require('./routes/poste.routes.js');
const HomeRoutes=require('./routes/Homerouter.js');
const app=new Koa();

app.use(bodyParser());

app.use(serve('public/'));
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods);


app.use(bodyParser());
app.use(postRoutes.routes())
    .use(postRoutes.allowedMethods);




app.use(ctx=>{
    ctx.body='Hello world';
});
app.listen(3000);

console.log('Application is running on port 3000');