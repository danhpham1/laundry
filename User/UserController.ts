import user from "./UserSchema.ts"

export const getLoginPage = async (context: any) => {
    context.render('login/index');
}

export const login = async (context: any) => {
    const body = context.request.body({ type: 'form' })
    const value = await body.value;
    const username = value.get('username');
    const password = value.get('password');
    const userData:any = await user.aggregate(
        [
            { $match: { username: username } },
            {
                $lookup: {
                    from: "roles",
                    localField: "roleId",
                    foreignField: "_id",
                    as: "role"
                }
            }
        ]
    ).toArray();
    if (userData && userData.length > 0) {
        if (userData[0]['password'] === password) {
            context.cookies.set('user', userData[0]['username']);
            context.cookies.set('role', userData[0]['role'][0]['roleName']);
            context.response.redirect('/');
        } else {
            context.response.redirect('/login');
        }
    } else {
        context.response.redirect('/login');
    }
}