const Router=require('@koa/router');

const router=new Router({
    prefix:'/home'
});

router.get('/',ctx=>{
    ctx.body='nivethika';
});

router.post('/',ctx=>{
    ctx.body='Hello';
})

module.exports=router;