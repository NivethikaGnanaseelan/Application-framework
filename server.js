const Koa=require('koa');
const bodyParser=require('koa-bodyparser');
const HomeRoutes=require('./routes/home.router');
const postRoutes=require('./routes/post.routes');
const app=new Koa();


app.use(bodyParser());

app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());



app.use(ctx=>{
ctx.body="Hello world ";
});

app.listen(3000);

console.log('Application is running on port 3000');
