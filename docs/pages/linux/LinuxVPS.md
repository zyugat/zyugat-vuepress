# linuxVPS

### 命令

> touch 修改文件或目录的时间属性


> **清理缓存**
> 
> ```shell
> # 将存于 buffer 中的资料强制写入硬盘中。
> sync
> # 表示清除pagecache （执行后问题得以解决）
> echo 1 > /proc/sys/vm/drop_caches
> 
> # 表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）
> # slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache
> echo 2 > /proc/sys/vm/drop_caches
> 
> # 表示清除pagecache和slab分配器中的缓存对象 （这个可以的）
> echo 3 > /proc/sys/vm/drop_caches
> ```



> apt purge ：卸载包会删除软件及其配置
>
> apt remove：只删除包，不删配置
>
> 也可以：apt remove --purge 



> 查看运行状态：ps -aux
>
> 文件夹权限：ls -l
>
> 查看系统：hostnamectl
>
> 查看系统子版本：cat /etc/debian_version
>
> 查看nginx用户：ps aux|grep nginx|grep -v grep
>
> ps aux | grep "nginx: worker process"
>
> 检测nginx配置文件：/usr/sbin/nginx -t
>
> 

- 查看目前开放的端口

```
netstat -lnpt
```



- 已运行时间

```shell
cat /proc/uptime| awk -F. '{run_days=$1 / 86400;run_hour=($1 % 86400)/3600;run_minute=($1 % 3600)/60;run_second=$1 % 60;printf("系统已运行：%d天%d时%d分%d秒",run_days,run_hour,run_minute,run_second)}'
```





- **chmod 文件权限**

`-R` : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)

文件所有者（Owner）、用户组（Group）、其它用户（Other Users）

777：代表读写执行最高权限

<a href="https://www.runoob.com/linux/linux-comm-chmod.html">具体看文档</a>

- chown 文件夹权限
  - chown -R root:root



- NPM

```sh
# 更新包
yarn upgrade-interactive --latest
# 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择

# x
npm uninstall -g <packageName>
```









- 网络请求相关
  - 1000-1200（进位50）
  - v2ray（1000）
- 网站Nginx
  - 2142-4142（进位100）
- FRP
  - 5142-6142（进位100）
  - 服务端口（5242）
  - 面板端口（5142）
  - 笔记本端口（5342）
  - PC端口（5442）



## 解决方案

找不到ll命令

```SHELL
sudo vim ~/.bashrc

# 加上下面这一行：
alias ll='ls -l'

# 然后重置
source ~/.bashrc
```



笔记本关盖子不进入休眠

```SHELL
sudo vim /etc/systemd/logind.conf
HandleLidSwitch=ignore
然后重启服务：
sudo restart systemd-logind
或者
service systemd-logind restart
或者直接重启
sudo shutdown -r now
```



root图像界面失败

```SHELL
cd /etc/pam.d

# 修改2个文件，将第三行代码注释
vim gdm-autologin
vim gdm-password
# auth required pam_succeed_if.so user != root quiet_success

vim /root/.profile
# 找到mesg n 在前面加上tty -s&&
```



双系统设置默认启动系统

```SHELL
# 打开文件，将GRUB_DEFAULT=0设置为对应引导
gedit /etc/default/grub

# 最后更新grub菜单
update-grub
```



修改网卡名称为eth0

```SHELL
vim /etc/default/grub

GRUB_CMDLINE_LINUX="net.ifnames=0 biosdevname=0"

sed -i 's/ens3/eth0/g' /etc/network/interfaces
sed -i 's/enp3s0/eth0/g' /etc/network/interfaces

grub-mkconfig -o /boot/grub/grub.cfg
# 重启
```



安装deb包软件

```SHELL
sudo dpkg -i 软件路径
```



### vscode一直在安装c++问题

使用vscode安装c++的时候，如果无法安装成功则去

https://github.com/microsoft/vscode-cpptools/releases

找到 `cpptools-linux.vsix`，进行安装。

流程：**点击插件**，然后点击上面扩展**最右边的三个点**，选择**从vsix安装**



### yarn报错无法识别

```shell
apt remove cmdtest
apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt-get update
apt-get install yarn -y
```



****



## 应用

- BBR加速

```
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
chmod +x tcp.sh
./tcp.sh
```



****



- v2ray，233

```
bash <(curl -s -L https://233v2.com/v2ray.sh)
```



****



安装ifconfig，因为本身不是包所以需要和其他软件包一起装

```SHELL
apt install net-tools
```



****



安装远程桌面

```shell
apt install xrdp
```



****



- LNMP

```
wget http://soft.vpser.net/lnmp/lnmp1.8.tar.gz -cO lnmp1.8.tar.gz && tar zxf lnmp1.8.tar.gz && cd lnmp1.8 && ./install.sh lnmp
```



添加网站

```
lnmp vhost add
```



**证书安装**

```
/home/1_maocode.cn_bundle.crt
/home/2_maocode.cn.key
```



网站配置在：/usr/local/nginx/conf/vhost/域名.conf



****



安装clash

https://github.com/yuanlam/Clash-Linux

```SHELL
# 先用weget下载，然后用gzip解压
gzip -d clash-linux-amd64-v1.6.5.gz

# 移动&重命名
mv clash-linux-amd64-v1.6.5 /usr/bin/clash

# 赋予运行权限
chmod +x /usr/bin/clash

# 检查是否安装成功
clash -v

# 为 clash 添加绑定低位端口的权限，这样运行clash的时候无需root权限
setcap cap_net_bind_service=+ep /usr/bin/clash
```



****



Yum

```shell
apt install yum
apt install yum-utils # 安装yum源配置文件
yum-config-manager --add-repo=file:///mnt/cdrom/Package
yum listrepo # 检测一下yum源
```



****



删除阿里云盾

aliyundun

```shell
wget http://update.aegis.aliyun.com/download/uninstall.sh
chmod +x uninstall.sh
./uninstall.sh
wget http://update.aegis.aliyun.com/download/quartz_uninstall.sh
chmod +x quartz_uninstall.sh
./quartz_uninstall.sh
```





****



### wordpress

下载

```
wget http://cn.wordpress.org/wordpress-3.9-zh_CN.zip
```

解压

```
unzip wordpress-3.8-zh_CN.zip
```

移动到某个位置

```
cp -rf wordpress/* /home/www/www.maocode.top/
```



创建数据库

```
mysql -u root -p
create database wordpress
```



如果没有创建文件夹的权限，就在安装目录上输入

```
chmod -R 777 wp-content/
```



免FTP登陆

```
vi /home/wwwroot/www.maocode.cn/wp-config.php

在最后添加：

define("FS_METHOD", "direct");

define("FS_CHMOD_DIR", 0777);

define("FS_CHMOD_FILE", 0777);

更改插件的权限：

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/plugins/

更改主题的权限：

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/themes/

chmod 777 /home/wwwroot/www.maocode.cn/

```





### 内网穿透frp

使用FRP，开发文档：

https://gofrp.org/docs/reference/server-configures/

frps.ini：服务端，公网服务器

frpc.ini：客户端，被穿透的客户端

```
wget https://github.com/fatedier/frp/releases/download/v0.21.0/frp_0.21.0_linux_amd64.tar.gz

tar -zxvf frp_0.21.0_linux_amd64.tar.gz

cd frp_0.21.0_linux_amd64/

./frps -c ./frps.ini
```

**frps.ini**

- "bind_addr"是服务器本地IP，不改。
- "bind_port"是frp监听端口。
- "token"是验证token建议设置上。
- "dashboard_port"是frp面板端口。
- "dashboard_user""dashboard_pwd"是面板的账户密码。

./frps -c ./frps.ini

```
[common]
bind_port = 
token = 

dashboard_port = 
dashboard_user = 
dashboard_pwd = 

subdomail_host = 
```

**frpc.ini**

windows远程桌面，使用3389端口，

./frpc -c ./frpc.ini

```
[common]
server_addr = 
server_port = 
token = 

[RDP]
type = tcp
local_ip = 127.0.0.1
local_port = 
remote_port = 

```

开机自启

vim /lib/systemd/system/frps.service

```
[Unit]
Description=frps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#启动服务的命令（此处写你的frps的实际安装目录）
ExecStart=/home/frp_0.21.0_linux_amd64/frps -c /home/frp_0.21.0_linux_amd64/frps.ini

[Install]
WantedBy=multi-user.target
```

```
重载 daemon 生效
systemctl daemon-reload
再打开自启动
systemctl enable frps
关闭开机自启动
systemctl disable frps

然后就启动 frps
systemctl start frps
如果要重启应用，可以这样
systemctl restart frps
如果要停止应用，可以输入
systemctl stop frps
如果要查看应用的日志，可以输入
systemctl status frps
```



### systemctl开机自启配置

Centos7的服务systemctl脚本存放在: /usr/lib/systemd/

有系统（system）和用户（user）之分，需要开机不登陆就能运行的程序，存下系统服务里，即：/usr/lib/systemd/system目录下。

Centos7的每一个服务以.service结尾，一般会分为3部分：【Unit】【Service】 【Install】

- **配置说明**

 【Unit】部分主要是对这个服务的说明。

- Description 用于描述服务
- After 用于描述服务类别

 【Service】部分是服务的关键，是服务的一些具体运行参数的设置。

- Type=simple（默认值）：systemd认为该服务将立即启动。服务进程不会fork。如果该服务要启动其他服务，不要使用此类型启动，除非该服务是socket激活型。
  - Type=forking：systemd认为当该服务进程fork，且父进程退出后服务启动成功。对于常规的守护进程（daemon），除非你确定此启动方式无法满足需求，使用此类型启动即可。使用此启动类型应同时指定 PIDFile=，以便systemd能够跟踪服务的主进程。
  - Type=oneshot：这一选项适用于只执行一项任务、随后立即退出的服务。可能需要同时设置 RemainAfterExit=yes 使得 systemd 在服务进程退出之后仍然认为服务处于激活状态。
  - Type=notify：与 Type=simple 相同，但约定服务会在就绪后向 systemd 发送一个信号。这一通知的实现由 libsystemd-daemon.so 提供。
  - Type=dbus：若以此方式启动，当指定的 BusName 出现在DBus系统总线上时，systemd认为服务就绪。
  - Type=idle: systemd会等待所有任务(Jobs)处理完成后，才开始执行idle类型的单元。除此之外，其他行为和Type=simple 类似。

- PIDFile：pid文件路径

- ExecStart：指定启动单元的命令或者脚本，ExecStartPre和ExecStartPost节指定在ExecStart之前或者之后用户自定义执行的脚本。Type=oneshot允许指定多个希望顺序执行的用户自定义命令。

- ExecReload：指定单元停止时执行的命令或者脚本。

- ExecStop：指定单元停止时执行的命令或者脚本。

- PrivateTmp：True表示给服务分配独立的临时空间

- Restart：这个选项如果被允许，服务重启的时候进程会退出，会通过systemctl命令执行清除并重启的操作。

- RemainAfterExit：如果设置这个选择为真，服务会被认为是在激活状态，即使所以的进程已经退出，默认的值为假，这个选项只有在Type=oneshot时需要被配置。

**【Install】**

Alias：为单元提供一个空间分离的附加名字。

RequiredBy：单元被允许运行需要的一系列依赖单元，RequiredBy列表从Require获得依赖信息。

WantBy：单元被允许运行需要的弱依赖性单元，Wantby从Want列表获得依赖信息。

Also：指出和单元一起安装或者被协助的单元。

DefaultInstance：实例单元的限制，这个选项指定如果单元被允许运行默认的实例。

**重载服务**

systemctl daemon-reload

**启动nginx服务**

systemctl start xxxx.service

**设置开机自启动**

systemctl enable xxxx.service

**停止开机自启动**

systemctl disable xxxx.service

**查看服务当前状态**

systemctl status xxx.service

**重新启动服务**

systemctl restart xxx.service

**查看所有已启动的服务**

systemctl list-units --type=service



```
[Unit]
Description=nginx - high performance web server
Documentation=http://nginx.org/en/docs/
After=network.target remote-fs.target nss-lookup.target
 
[Service]
Type=forking
PIDFile=/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -c /etc/nginx/nginx.conf
ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
```

- Unit描述，不用看
- Service
  - Type是类型，简单类型
  - ExecStart，服务的命令，运行地址下的文件



### DNS服务器

- bind

10.7.171.230

- dnsmasq

```shell
vi /etc/dnsmasq.conf

resolv-file=/etc/resolv.conf  #设置resolv目录
strict-order #严格按照从上到下的顺序
listen-address=152.32.189.177 #设置服务侦听的IP
address=/hello.me/127.0.0.1 #设置域名解析
server=8.8.8.8 #设置google dns为第一指定dns
server=114.114.114.114 #设置电信dns位第二dns

service dnsmasq restart
```





### 自建图床Lsky-pro



```
chown -R www:www /home/wwwroot/doc.zyugat.cn
chattr -i /home/wwwroot/doc.zyugat.cn/.user.ini
chmod -R 777 /home/wwwroot/doc.zyugat.cn
```





```shell
location / {
    if (!-e $request_filename) {
    	rewrite ^(.*)$ /index.php?s=$1 last; break;
    }
}
```





****



### 安装SS/SSR客户端

```shell
apt install -y snapd core
snap install shadowsocks-libev
```

配置

```shell
mkdir -p /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev
vim /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev/config.json

{
    "server":"服务器地址",
    "server_port":端口,
    "local_port":1080,
    "password":"密码",
    "timeout":60,
    "method":"aes-256-gcm",
    "mode":"tcp_and_udp",
    "fast_open":false
}
```

自启

```shell
vim /etc/systemd/system/shadowsocks-libev-local@.service

[Unit]
Description=Shadowsocks-Libev Custom Client Service for %I
After=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/snap run shadowsocks-libev.ss-local -c /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev/%i.json
Restart=on-failure
RestartSec=15

[Install]
WantedBy=multi-user.target
```

激活服务：`systemctl enable shadowsocks-libev-local@config`

启动：`systemctl restart shadowsocks-libev-local@config`

查看：`systemctl status shadowsocks-libev-local@config`



```shell
export ALL_PROXY="socks5://127.0.0.1:1080"
echo $ALL_PROXY

export http_proxy="socks5://127.0.0.1:1080"
# export https_proxy="socks5://127.0.0.1:1080"
export no_proxy="*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1"
source ~/.bashrc

curl ip.gs
curl cip.cc
curl -I http://www.fackbook.com
```



> **SSR**

安装

```shell
cd /opt/
git clone https://github.com/shadowsocksrr/shadowsocksr
```



配置

`vim /opt/shadowsocksr/config.json`

```json
{
    "server": "<ip address>",
    "server_ipv6": "::",
    "server_port": 8388,
    "local_address": "127.0.0.1",
    "local_port": 1080,

    "password": "password",
    "method": "none",
    "protocol": "auth_chain_a",
    "protocol_param": "",
    "obfs": "plain",
    "obfs_param": "",
    "speed_limit_per_con": 0,
    "speed_limit_per_user": 0,

    "additional_ports" : {},
    "additional_ports_only" : false,
    "timeout": 120,
    "udp_timeout": 60,
    "dns_ipv6": false,
    "connect_verbose_info": 0,
    "redirect": "",
    "fast_open": false
}
```



启动

```shell
python /opt/shadowsocksr/shadowsocks/local.py -c /opt/shadowsocksr/config.json
```



测试：`ss -ltn | grep 1080`



设置代理

```shell
export ALL_PROXY="socks5://127.0.0.1:1080"
source ~/.bashrc
echo $ALL_PROXY
```



> 不推荐装node，太吃内存了

**插件-安装SSR Helper**

```shell
apt install -y yarn
yarn global add ssr-helper
ssr config /opt/shadowsocksr
ssr startup
```

- `ssr config [path]` : 配置Python Client的路径，**绝对路径**
- `ssr add` : 手动添加服务器，具备友好的界面
- `ssr add [uri]` : 使用SSR URI手动添加服务器到列表
- `ssr connect` : 选择服务器连接并设置为默认服务器，具备友好的界面
- `ssr ls` : 显示服务器信息，具备友好的界面
- `ssr rm` : 从列表删除服务器，具备友好的界面（注：删除后连接不会中断，需运行 `connect` 命令重新连接）
- `ssr edit` : 编辑服务器信息，具备友好的界面
- `ssr local` : 编辑SSR本地服务信息，编辑后需要重新连接生效
- `ssr start` : ShadowsocksR Python Client Daemon的 start 命令,启动连接，使用CLI配置的默认服务器
- `ssr restart` : ShadowsocksR Python Client Daemon的 restart 命令，重新启动连接，使用CLI配置的默认服务器
- `ssr stop` : ShadowsocksR Python Client Daemon的 stop 命令，停止服务，使用CLI配置的默认服务器
- `ssr status` : 可查看 ShadowsocksR Python Client Daemon的 运行状态
- `ssr startup` : 设置服务开机自启，仅在Systemd启动的Linux平台下有效
- `ssr unstartup` : 关闭服务开机自启，仅在Systemd启动的Linux平台下有效
- `ssr delay` : 测试服务器的延迟
- `ssr-subscribe add [url]` : 添加新的SSR订阅地址
- `ssr-subscribe ls` : 列出所有SSR订阅地址和他们的当前标号
- `ssr-subscribe rm [label]` : 基于 `ssr-subscribe ls` 打印的标号删除SSR订阅地址
- `ssr-subscribe update` : 从已添加的SSR订阅地址获取服务器信息



> 配置 privoxy 实现全局和自动代理

https://juejin.cn/post/6844903813393055751

```shell
apt install privoxy
```



`vim /etc/privoxy/config`

privoxy 有 filter （过滤）的功能，可以用来实现广告拦截。不过这里只希望实现自动代理，在配置文件中把 filter 部分注释掉：

```
# 大约在435行
# filterfile default.filter
# filterfile user.filter      # User customizations
```

我们将使用自定义的 action 文件，所以把默认的 action 文件注释掉，并添加自定义文件：

```
# 386行左右
# 默认的 action 文件
# actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.
# actionsfile default.action   # Main actions file
# actionsfile user.action      # User customizations
# 自定义 action 文件
actionsfile gfwlist.action
```

可以指定转换后的 HTTP 代理地址，这里直接使用默认端口 `8118`：

```
# 785行左右
listen-address  127.0.0.1:8118
listen-address  [::1]:8118
复制代码
```

如果代理规则直接写在配置文件 `config` 中，那么代理规则和本地 SS 代理地址是写在一起的：

```
# / 代表匹配全部 URL，即全局代理
forward-socks5 / 127.0.0.1:1080 .
复制代码
```

或

```
# 1389行
# 根据规则自动代理
forward-socks5 .google.com 127.0.0.1:1080 .
复制代码
```



全局代理：

新建 action 文件 `my.action`，内容如下：

```
# 这一行表示本 action 文件中所有条目都使用代理
{+forward-override{forward-socks5 127.0.0.1:1080 .}}
# 添加一条规则
.google.com
复制代码
```

把 privoxy 转换后的地址 `http://127.0.0.1:8118` 添加到环境变量，可以参照 polipo 部分。

启动 privoxy，这时应该可以正常访问 Google 了：

```
service privoxy start
curl www.google.com
复制代码
```

下面看一下怎么用 gfwlist 生成 action 文件。



局部代理：

```shell
pip2 install gfwlist2privoxy
```

gfwlist2privoxy **不支持 python3.x**，安装时注意使用的是 `pip2` 还是 `pip3`。

如果没有安装PIP2则执行：`apt install python-pip`

参数说明：

- `-i`/`--input` 输入，本地 gfwlist 文件或文件 URL。这里使用上面的 [gfwlist](https://link.juejin.cn?target=https%3A%2F%2Fraw.githubusercontent.com%2Fgfwlist%2Fgfwlist%2Fmaster%2Fgfwlist.txt)
- `-f`/ `--file` 输出，即生成的 action 文件的目录。这里输出到 `/etc/privoxy/gfwlist.action`
- `-p`/ `--proxy` SS 代理地址，生成后可以修改。这里是 `127.0.0.1:1080`
- `-t`/ `--type` 代理类型，生成后也可以修改。这里是 `socks5`
- `--user-rule` 用户自定义规则文件，这个文件中的规则会被追加到 gfwlist 生成的规则后面


```shell
gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p 127.0.0.1:1080 -t socks5
```



最后，把 `/etc/privoxy/config` 中的 `actionsfile my.action` 改为 `actionsfile gfwlist.action` 就完成了。



`service privoxy restart`



`vim ~/.bashrc`

```shell
export http_proxy="http://127.0.0.1:8118"
# export https_proxy="https://127.0.0.1:8118"
source ~/.bashrc
echo $http_proxy && echo $https_proxy
curl ip.gs
curl cip.cc
curl -I https://www.google.com
curl -I https://mirrors.aliyun.com
```



### 国内访问Github

1、修改hosts

https://github.com/521xueweihan/GitHub520

2、更新DNS缓存

```shell
apt install nscd
nscd restart
/etc/init.d/nscd restart
```



使用克隆方式

```shell
https://doc.fastgit.org/
https://gitclone.com/
https://github.com.cnpmjs.org/
```



## 装机流程防忘记

> 0、更新
>
> apt -y update
>
> apt -y upgrade

> 1、免密登陆

- SSH免密登陆

- 本机生成本地密钥，一路回车

  ```shell
  ssh-keygen -t rsa
  ```

  

- 然后将公共密钥移到服务器里面，然后将密钥内容写入

  ```shell
  cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
  ```

nano /etc/ssh/sshd_config

```shell
# 设置如果用户不能成功登录，在切断连接之前服务器需要等待的时间（以秒为单位）。
LoginGraceTime 30
# 允许Root用户
PermitRootLogin yes
# 最大尝试次数
MaxAuthTries 3
# 开启RSA验证
RSAAuthentication yes
# 是否使用公钥验证
PubkeyAuthentication yes
# 禁用密码登录
# PasswordAuthentication no
# 公钥保存位置
AuthorizedKeysFile      .ssh/authorized_keys .ssh/authorized_keys2

```

service sshd restart

> 2、改主机名

```shell
nano /etc/hostname
```

> 3、安装必装软件

```shell
apt install -y sudo yum yarn npm wget openjdk-11-jdk python-pip screen ntpdate vnstat

ntpdate ntp1.aliyun.com
ntpdate ntpupdate.tencentyun.com

date

# 修改时区
tzselect
timedatectl set-timezone Asia/Shanghai

# 定时同步
crontab -e
*/60 * * * * /usr/sbin/ntpdate ntpupdate.tencentyun.com
*/60 * * * * /usr/sbin/ntpdate ntp1.aliyun.com
/etc/init.d/cron restart
```

> 4、卸载阿里云盾

```shell
wget http://update.aegis.aliyun.com/download/uninstall.sh
chmod +x uninstall.sh
./uninstall.sh
wget http://update.aegis.aliyun.com/download/quartz_uninstall.sh
chmod +x quartz_uninstall.sh
./quartz_uninstall.sh
pkill aliyun-service
rm -fr /etc/init.d/agentwatch /usr/sbin/aliyun-service
rm -rf /usr/local/aegis*
```

> 4、SSR代理+privoxy自动代理
>
> **设置代理的时候，别用VSCODE，他会自动转发，会出问题的**
>
> 如果安装yarn报错，查看上面的解决办法
>
> 记得装BBR加速

```shell
yarn global add ssr-helper
cd /opt/
git clone https://github.com/shadowsocksrr/shadowsocksr
ssr config /opt/shadowsocksr

# --------------设置订阅地址
ssr-subscribe add [url]
ssr-subscribe update
ssr connect
ssr restart
ssr startup
```

```shell
apt install -y privoxy
vim /etc/privoxy/config
# 注释以下代码
# 大约在435行, 广告拦截
# filterfile default.filter
# filterfile user.filter      # User customizations

# 386行左右
# 默认的 action 文件
# actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.
# actionsfile default.action   # Main actions file
# actionsfile user.action      # User customizations
# 自定义 action 文件
actionsfile gfwlist.action

# 确保以下代码是注释的！！！很重要
# forward-socks5 / 127.0.0.1:1080 .

pip2 install gfwlist2privoxy
gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p 127.0.0.1:1080 -t socks5
service privoxy restart

# https在SSL会出问题，不推荐使用
vim ~/.bashrc
export http_proxy="http://127.0.0.1:8118"
# export https_proxy="https://127.0.0.1:8118"
export NO_PROXY="*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1"
source ~/.bashrc
echo $http_proxy && echo $https_proxy && echo $NO_PROXY
curl ip.gs
curl cip.cc
curl -I http://www.google.com
curl -I http://mirrors.aliyun.com
```

可以考虑在action文件中加入

```
{{alias}}
direct      = +forward-override{forward .}
shadowsocksr    = +forward-override{forward-socks5 127.0.0.1:1080 .}

# default
{direct}
/

# shadowsocks
{shadowsocksr}
```

> 5、装Docker，记得装Compose
>
> 看隔壁文件，不做流程

> 6、自动化

```
crontab -e
0 3 */3 * * /home/backup/docker-volume-backup.sh
/etc/init.d/cron restart
```

> 7、安装PHP 8.1
>
> 

```
# 添加 ondrej/php PPA
apt install apt-transport-https lsb-release ca-certificates wget -y
wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg 
sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
apt update

apt search php8

apt install php8.1 -y
```



