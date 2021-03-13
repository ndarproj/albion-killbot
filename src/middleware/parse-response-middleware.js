module.exports = async (ctx, next) => {

    await next();

    ctx.response.body = {
      data: ctx.body
    } 

};