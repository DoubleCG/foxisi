const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');


let info = require("./info");


let index_page = async function (ctx, next) {
  ctx.state = {
    session: this.session,
    title: 'app'
  };
  await ctx.render('index');
}


// 路由汇集
module.exports = function(app){
	app.use(route.get('/userlist',info.userlist))
	app.use(route.get('/pagetest',info.pagetest))

	app.use(route.get('/',index_page))
}