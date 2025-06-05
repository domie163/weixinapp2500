const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm71941/",
            name: "ssm71941",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm71941/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的高校课堂教学管理系统"
        } 
    }
}
export default base
