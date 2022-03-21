export const getHomeIndex = async (context: any) => {
    const user = await context.cookies.get('user');
    if(user){
        context.render('index');
        return;
    }
    
    context.response.redirect('/login')
}