/**
         * 假装后台代码
         **/
function loginCheck(username, password) {
    const database = [
        { username: 'qiangqiang', password: 'qiang234' },
        { username: 'mumu', password: 'mumu@123' },
        { username: 'xiaoqiang', password: 'xiao33' },
        { username: '1', password: '1' },
    ];
    const user = database.find(temp => {
        return temp.username === username;
    });

    if (!user) {
        return false;
    }

    return user.password === password;
}