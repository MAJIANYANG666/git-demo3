# CORS跨域请求

## 运行方式

1. 伪装一个网站（在本地）

    1.1 编辑 hosts 文件
    
     - mac: sudo vi /etc/hosts
     - windows: 用以管理员身份运行 git bash，vi C:/Windows/System32/drivers/etcetc/hosts
     
    1.2. 添加两行 127.0.0.1 qq.com
               127.0.0.1 frank.com
               
    1.3. 保存关闭
2. 监听 80 端口

    - Mac：sudo http-server -c-1 -p 80

    - Windows：
    1. 以管理员身份运行 git bash
    2. http-server -c-1 -p 80
    
## 如何实现跨域

访问"http://127.0.0.1 frank.com/frank.html" ，发送Ajax请求"http://qq.com/qq_private.json" 的数据；

即可实现"http://127.0.0.1 frank.com/frank.html" 对"http://qq.com" 的跨域请求。
