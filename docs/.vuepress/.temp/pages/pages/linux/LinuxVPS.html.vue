<template><h1 id="linuxvps" tabindex="-1"><a class="header-anchor" href="#linuxvps" aria-hidden="true">#</a> linuxVPS</h1>
<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3>
<blockquote>
<p>touch 修改文件或目录的时间属性</p>
</blockquote>
<blockquote>
<p><strong>清理缓存</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 将存于 buffer 中的资料强制写入硬盘中。</span>
<span class="token function">sync</span>
<span class="token comment"># 表示清除pagecache （执行后问题得以解决）</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">></span> /proc/sys/vm/drop_caches

<span class="token comment"># 表示清除回收slab分配器中的对象（包括目录项缓存和inode缓存）</span>
<span class="token comment"># slab分配器是内核中管理内存的一种机制，其中很多缓存数据实现都是用的pagecache</span>
<span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">></span> /proc/sys/vm/drop_caches

<span class="token comment"># 表示清除pagecache和slab分配器中的缓存对象 （这个可以的）</span>
<span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">></span> /proc/sys/vm/drop_caches
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote>
<blockquote>
<p>apt purge ：卸载包会删除软件及其配置</p>
<p>apt remove：只删除包，不删配置</p>
<p>也可以：apt remove --purge</p>
</blockquote>
<blockquote>
<p>查看运行状态：ps -aux</p>
<p>文件夹权限：ls -l</p>
<p>查看系统：hostnamectl</p>
<p>查看系统子版本：cat /etc/debian_version</p>
<p>查看nginx用户：ps aux|grep nginx|grep -v grep</p>
<p>ps aux | grep &quot;nginx: worker process&quot;</p>
<p>检测nginx配置文件：/usr/sbin/nginx -t</p>
</blockquote>
<ul>
<li>查看目前开放的端口</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>netstat -lnpt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>已运行时间</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> /proc/uptime<span class="token operator">|</span> <span class="token function">awk</span> -F. <span class="token string">'{run_days=$1 / 86400;run_hour=($1 % 86400)/3600;run_minute=($1 % 3600)/60;run_second=$1 % 60;printf("系统已运行：%d天%d时%d分%d秒",run_days,run_hour,run_minute,run_second)}'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li><strong>chmod 文件权限</strong></li>
</ul>
<p><code>-R</code> : 对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)</p>
<p>文件所有者（Owner）、用户组（Group）、其它用户（Other Users）</p>
<p>777：代表读写执行最高权限</p>
<p><a href="https://www.runoob.com/linux/linux-comm-chmod.html">具体看文档</a></p>
<ul>
<li>
<p>chown 文件夹权限</p>
<ul>
<li>chown -R root:root</li>
</ul>
</li>
<li>
<p>网络请求相关</p>
<ul>
<li>1000-1200（进位50）</li>
<li>v2ray（1000）</li>
</ul>
</li>
<li>
<p>网站Nginx</p>
<ul>
<li>2142-4142（进位100）</li>
</ul>
</li>
<li>
<p>FRP</p>
<ul>
<li>5142-6142（进位100）</li>
<li>服务端口（5242）</li>
<li>面板端口（5142）</li>
<li>笔记本端口（5342）</li>
<li>PC端口（5442）</li>
</ul>
</li>
</ul>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2>
<p>找不到ll命令</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>sudo vim ~/.bashrc

# 加上下面这一行：
alias ll='ls -l'

# 然后重置
source ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>笔记本关盖子不进入休眠</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>sudo vim /etc/systemd/logind.conf
HandleLidSwitch=ignore
然后重启服务：
sudo restart systemd-logind
或者
service systemd-logind restart
或者直接重启
sudo shutdown -r now
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>root图像界面失败</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>cd /etc/pam.d

# 修改2个文件，将第三行代码注释
vim gdm-autologin
vim gdm-password
# auth required pam_succeed_if.so user != root quiet_success

vim /root/.profile
# 找到mesg n 在前面加上tty -s&amp;&amp;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>双系统设置默认启动系统</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code># 打开文件，将GRUB_DEFAULT=0设置为对应引导
gedit /etc/default/grub

# 最后更新grub菜单
update-grub
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>修改网卡名称为eth0</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>vim /etc/default/grub

GRUB_CMDLINE_LINUX=&quot;net.ifnames=0 biosdevname=0&quot;

sed -i 's/ens3/eth0/g' /etc/network/interfaces
sed -i 's/enp3s0/eth0/g' /etc/network/interfaces

grub-mkconfig -o /boot/grub/grub.cfg
# 重启
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>安装deb包软件</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>sudo dpkg -i 软件路径
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vscode一直在安装c-问题" tabindex="-1"><a class="header-anchor" href="#vscode一直在安装c-问题" aria-hidden="true">#</a> vscode一直在安装c++问题</h3>
<p>使用vscode安装c++的时候，如果无法安装成功则去</p>
<p>https://github.com/microsoft/vscode-cpptools/releases</p>
<p>找到 <code>cpptools-linux.vsix</code>，进行安装。</p>
<p>流程：<strong>点击插件</strong>，然后点击上面扩展<strong>最右边的三个点</strong>，选择<strong>从vsix安装</strong></p>
<h3 id="yarn报错无法识别" tabindex="-1"><a class="header-anchor" href="#yarn报错无法识别" aria-hidden="true">#</a> yarn报错无法识别</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> remove cmdtest
<span class="token function">apt</span> remove <span class="token function">yarn</span>
<span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">"deb https://dl.yarnpkg.com/debian/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span> -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr>
<h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2>
<ul>
<li>BBR加速</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh"
chmod +x tcp.sh
./tcp.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr>
<ul>
<li>v2ray，233</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash &lt;(curl -s -L https://233v2.com/v2ray.sh)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>
<p>安装ifconfig，因为本身不是包所以需要和其他软件包一起装</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>apt install net-tools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>
<p>安装远程桌面</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> xrdp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr>
<ul>
<li>LNMP</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://soft.vpser.net/lnmp/lnmp1.8.tar.gz -cO lnmp1.8.tar.gz &amp;&amp; tar zxf lnmp1.8.tar.gz &amp;&amp; cd lnmp1.8 &amp;&amp; ./install.sh lnmp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>添加网站</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lnmp vhost add
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>证书安装</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/home/1_maocode.cn_bundle.crt
/home/2_maocode.cn.key
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>网站配置在：/usr/local/nginx/conf/vhost/域名.conf</p>
<hr>
<p>安装clash</p>
<p>https://github.com/yuanlam/Clash-Linux</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code># 先用weget下载，然后用gzip解压
gzip -d clash-linux-amd64-v1.6.5.gz

# 移动&amp;重命名
mv clash-linux-amd64-v1.6.5 /usr/bin/clash

# 赋予运行权限
chmod +x /usr/bin/clash

# 检查是否安装成功
clash -v

# 为 clash 添加绑定低位端口的权限，这样运行clash的时候无需root权限
setcap cap_net_bind_service=+ep /usr/bin/clash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr>
<p>Yum</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> yum
<span class="token function">apt</span> <span class="token function">install</span> yum-utils <span class="token comment"># 安装yum源配置文件</span>
yum-config-manager --add-repo<span class="token operator">=</span>file:///mnt/cdrom/Package
yum listrepo <span class="token comment"># 检测一下yum源</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr>
<p>删除阿里云盾</p>
<p>aliyundun</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://update.aegis.aliyun.com/download/uninstall.sh
<span class="token function">chmod</span> +x uninstall.sh
./uninstall.sh
<span class="token function">wget</span> http://update.aegis.aliyun.com/download/quartz_uninstall.sh
<span class="token function">chmod</span> +x quartz_uninstall.sh
./quartz_uninstall.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr>
<h3 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress" aria-hidden="true">#</a> wordpress</h3>
<p>下载</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget http://cn.wordpress.org/wordpress-3.9-zh_CN.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>解压</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>unzip wordpress-3.8-zh_CN.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>移动到某个位置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cp -rf wordpress/* /home/www/www.maocode.top/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>创建数据库</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mysql -u root -p
create database wordpress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果没有创建文件夹的权限，就在安装目录上输入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chmod -R 777 wp-content/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>免FTP登陆</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vi /home/wwwroot/www.maocode.cn/wp-config.php

在最后添加：

define("FS_METHOD", "direct");

define("FS_CHMOD_DIR", 0777);

define("FS_CHMOD_FILE", 0777);

更改插件的权限：

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/plugins/

更改主题的权限：

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/themes/

chmod 777 /home/wwwroot/www.maocode.cn/

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="内网穿透frp" tabindex="-1"><a class="header-anchor" href="#内网穿透frp" aria-hidden="true">#</a> 内网穿透frp</h3>
<p>使用FRP，开发文档：</p>
<p>https://gofrp.org/docs/reference/server-configures/</p>
<p>frps.ini：服务端，公网服务器</p>
<p>frpc.ini：客户端，被穿透的客户端</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://github.com/fatedier/frp/releases/download/v0.21.0/frp_0.21.0_linux_amd64.tar.gz

tar -zxvf frp_0.21.0_linux_amd64.tar.gz

cd frp_0.21.0_linux_amd64/

./frps -c ./frps.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>frps.ini</strong></p>
<ul>
<li>&quot;bind_addr&quot;是服务器本地IP，不改。</li>
<li>&quot;bind_port&quot;是frp监听端口。</li>
<li>&quot;token&quot;是验证token建议设置上。</li>
<li>&quot;dashboard_port&quot;是frp面板端口。</li>
<li>&quot;dashboard_user&quot;&quot;dashboard_pwd&quot;是面板的账户密码。</li>
</ul>
<p>./frps -c ./frps.ini</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[common]
bind_port = 
token = 

dashboard_port = 
dashboard_user = 
dashboard_pwd = 

subdomail_host = 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>frpc.ini</strong></p>
<p>windows远程桌面，使用3389端口，</p>
<p>./frpc -c ./frpc.ini</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[common]
server_addr = 
server_port = 
token = 

[RDP]
type = tcp
local_ip = 127.0.0.1
local_port = 
remote_port = 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>开机自启</p>
<p>vim /lib/systemd/system/frps.service</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
Description=frps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#启动服务的命令（此处写你的frps的实际安装目录）
ExecStart=/home/frp_0.21.0_linux_amd64/frps -c /home/frp_0.21.0_linux_amd64/frps.ini

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>重载 daemon 生效
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="systemctl开机自启配置" tabindex="-1"><a class="header-anchor" href="#systemctl开机自启配置" aria-hidden="true">#</a> systemctl开机自启配置</h3>
<p>Centos7的服务systemctl脚本存放在: /usr/lib/systemd/</p>
<p>有系统（system）和用户（user）之分，需要开机不登陆就能运行的程序，存下系统服务里，即：/usr/lib/systemd/system目录下。</p>
<p>Centos7的每一个服务以.service结尾，一般会分为3部分：【Unit】【Service】 【Install】</p>
<ul>
<li><strong>配置说明</strong></li>
</ul>
<p>【Unit】部分主要是对这个服务的说明。</p>
<ul>
<li>Description 用于描述服务</li>
<li>After 用于描述服务类别</li>
</ul>
<p>【Service】部分是服务的关键，是服务的一些具体运行参数的设置。</p>
<ul>
<li>
<p>Type=simple（默认值）：systemd认为该服务将立即启动。服务进程不会fork。如果该服务要启动其他服务，不要使用此类型启动，除非该服务是socket激活型。</p>
<ul>
<li>Type=forking：systemd认为当该服务进程fork，且父进程退出后服务启动成功。对于常规的守护进程（daemon），除非你确定此启动方式无法满足需求，使用此类型启动即可。使用此启动类型应同时指定 PIDFile=，以便systemd能够跟踪服务的主进程。</li>
<li>Type=oneshot：这一选项适用于只执行一项任务、随后立即退出的服务。可能需要同时设置 RemainAfterExit=yes 使得 systemd 在服务进程退出之后仍然认为服务处于激活状态。</li>
<li>Type=notify：与 Type=simple 相同，但约定服务会在就绪后向 systemd 发送一个信号。这一通知的实现由 libsystemd-daemon.so 提供。</li>
<li>Type=dbus：若以此方式启动，当指定的 BusName 出现在DBus系统总线上时，systemd认为服务就绪。</li>
<li>Type=idle: systemd会等待所有任务(Jobs)处理完成后，才开始执行idle类型的单元。除此之外，其他行为和Type=simple 类似。</li>
</ul>
</li>
<li>
<p>PIDFile：pid文件路径</p>
</li>
<li>
<p>ExecStart：指定启动单元的命令或者脚本，ExecStartPre和ExecStartPost节指定在ExecStart之前或者之后用户自定义执行的脚本。Type=oneshot允许指定多个希望顺序执行的用户自定义命令。</p>
</li>
<li>
<p>ExecReload：指定单元停止时执行的命令或者脚本。</p>
</li>
<li>
<p>ExecStop：指定单元停止时执行的命令或者脚本。</p>
</li>
<li>
<p>PrivateTmp：True表示给服务分配独立的临时空间</p>
</li>
<li>
<p>Restart：这个选项如果被允许，服务重启的时候进程会退出，会通过systemctl命令执行清除并重启的操作。</p>
</li>
<li>
<p>RemainAfterExit：如果设置这个选择为真，服务会被认为是在激活状态，即使所以的进程已经退出，默认的值为假，这个选项只有在Type=oneshot时需要被配置。</p>
</li>
</ul>
<p><strong>【Install】</strong></p>
<p>Alias：为单元提供一个空间分离的附加名字。</p>
<p>RequiredBy：单元被允许运行需要的一系列依赖单元，RequiredBy列表从Require获得依赖信息。</p>
<p>WantBy：单元被允许运行需要的弱依赖性单元，Wantby从Want列表获得依赖信息。</p>
<p>Also：指出和单元一起安装或者被协助的单元。</p>
<p>DefaultInstance：实例单元的限制，这个选项指定如果单元被允许运行默认的实例。</p>
<p><strong>重载服务</strong></p>
<p>systemctl daemon-reload</p>
<p><strong>启动nginx服务</strong></p>
<p>systemctl start xxxx.service</p>
<p><strong>设置开机自启动</strong></p>
<p>systemctl enable xxxx.service</p>
<p><strong>停止开机自启动</strong></p>
<p>systemctl disable xxxx.service</p>
<p><strong>查看服务当前状态</strong></p>
<p>systemctl status xxx.service</p>
<p><strong>重新启动服务</strong></p>
<p>systemctl restart xxx.service</p>
<p><strong>查看所有已启动的服务</strong></p>
<p>systemctl list-units --type=service</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Unit]
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li>Unit描述，不用看</li>
<li>Service
<ul>
<li>Type是类型，简单类型</li>
<li>ExecStart，服务的命令，运行地址下的文件</li>
</ul>
</li>
</ul>
<h3 id="dns服务器" tabindex="-1"><a class="header-anchor" href="#dns服务器" aria-hidden="true">#</a> DNS服务器</h3>
<ul>
<li>bind</li>
</ul>
<p>10.7.171.230</p>
<ul>
<li>dnsmasq</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/dnsmasq.conf

resolv-file<span class="token operator">=</span>/etc/resolv.conf  <span class="token comment">#设置resolv目录</span>
strict-order <span class="token comment">#严格按照从上到下的顺序</span>
listen-address<span class="token operator">=</span><span class="token number">152.32</span>.189.177 <span class="token comment">#设置服务侦听的IP</span>
<span class="token assign-left variable">address</span><span class="token operator">=</span>/hello.me/127.0.0.1 <span class="token comment">#设置域名解析</span>
<span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">8.8</span>.8.8 <span class="token comment">#设置google dns为第一指定dns</span>
<span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">114.114</span>.114.114 <span class="token comment">#设置电信dns位第二dns</span>

<span class="token function">service</span> dnsmasq restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="自建图床lsky-pro" tabindex="-1"><a class="header-anchor" href="#自建图床lsky-pro" aria-hidden="true">#</a> 自建图床Lsky-pro</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>chown -R www:www /home/wwwroot/doc.zyugat.cn
chattr -i /home/wwwroot/doc.zyugat.cn/.user.ini
chmod -R 777 /home/wwwroot/doc.zyugat.cn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>-e <span class="token variable">$request_filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /index.php?s<span class="token operator">=</span><span class="token variable">$1</span> last<span class="token punctuation">;</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr>
<h3 id="安装ss-ssr客户端" tabindex="-1"><a class="header-anchor" href="#安装ss-ssr客户端" aria-hidden="true">#</a> 安装SS/SSR客户端</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y snapd core
snap <span class="token function">install</span> shadowsocks-libev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> -p /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev
<span class="token function">vim</span> /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev/config.json

<span class="token punctuation">{</span>
    <span class="token string">"server"</span><span class="token builtin class-name">:</span><span class="token string">"服务器地址"</span>,
    <span class="token string">"server_port"</span>:端口,
    <span class="token string">"local_port"</span>:1080,
    <span class="token string">"password"</span><span class="token builtin class-name">:</span><span class="token string">"密码"</span>,
    <span class="token string">"timeout"</span>:60,
    <span class="token string">"method"</span><span class="token builtin class-name">:</span><span class="token string">"aes-256-gcm"</span>,
    <span class="token string">"mode"</span><span class="token builtin class-name">:</span><span class="token string">"tcp_and_udp"</span>,
    <span class="token string">"fast_open"</span>:false
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>自启</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/shadowsocks-libev-local@.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Shadowsocks-Libev Custom Client Service <span class="token keyword">for</span> %I
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/snap run shadowsocks-libev.ss-local -c /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev/%i.json
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">15</span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>激活服务：<code>systemctl enable shadowsocks-libev-local@config</code></p>
<p>启动：<code>systemctl restart shadowsocks-libev-local@config</code></p>
<p>查看：<code>systemctl status shadowsocks-libev-local@config</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">"socks5://127.0.0.1:1080"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$ALL_PROXY</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">"socks5://127.0.0.1:1080"</span>
<span class="token comment"># export https_proxy="socks5://127.0.0.1:1080"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">"*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1"</span>
<span class="token builtin class-name">source</span> ~/.bashrc

<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I http://www.fackbook.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote>
<p><strong>SSR</strong></p>
</blockquote>
<p>安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">git</span> clone https://github.com/shadowsocksrr/shadowsocksr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>配置</p>
<p><code>vim /opt/shadowsocksr/config.json</code></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"server"</span><span class="token operator">:</span> <span class="token string">"&lt;ip address>"</span><span class="token punctuation">,</span>
    <span class="token property">"server_ipv6"</span><span class="token operator">:</span> <span class="token string">"::"</span><span class="token punctuation">,</span>
    <span class="token property">"server_port"</span><span class="token operator">:</span> <span class="token number">8388</span><span class="token punctuation">,</span>
    <span class="token property">"local_address"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
    <span class="token property">"local_port"</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>

    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
    <span class="token property">"method"</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
    <span class="token property">"protocol"</span><span class="token operator">:</span> <span class="token string">"auth_chain_a"</span><span class="token punctuation">,</span>
    <span class="token property">"protocol_param"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"obfs"</span><span class="token operator">:</span> <span class="token string">"plain"</span><span class="token punctuation">,</span>
    <span class="token property">"obfs_param"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"speed_limit_per_con"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"speed_limit_per_user"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token property">"additional_ports"</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"additional_ports_only"</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"timeout"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token property">"udp_timeout"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token property">"dns_ipv6"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">"connect_verbose_info"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"redirect"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token property">"fast_open"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>启动</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>python /opt/shadowsocksr/shadowsocks/local.py -c /opt/shadowsocksr/config.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>测试：<code>ss -ltn | grep 1080</code></p>
<p>设置代理</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">"socks5://127.0.0.1:1080"</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$ALL_PROXY</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote>
<p>不推荐装node，太吃内存了</p>
</blockquote>
<p><strong>插件-安装SSR Helper</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> ssr-helper
ssr config /opt/shadowsocksr
ssr startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li><code>ssr config [path]</code> : 配置Python Client的路径，<strong>绝对路径</strong></li>
<li><code>ssr add</code> : 手动添加服务器，具备友好的界面</li>
<li><code>ssr add [uri]</code> : 使用SSR URI手动添加服务器到列表</li>
<li><code>ssr connect</code> : 选择服务器连接并设置为默认服务器，具备友好的界面</li>
<li><code>ssr ls</code> : 显示服务器信息，具备友好的界面</li>
<li><code>ssr rm</code> : 从列表删除服务器，具备友好的界面（注：删除后连接不会中断，需运行 <code>connect</code> 命令重新连接）</li>
<li><code>ssr edit</code> : 编辑服务器信息，具备友好的界面</li>
<li><code>ssr local</code> : 编辑SSR本地服务信息，编辑后需要重新连接生效</li>
<li><code>ssr start</code> : ShadowsocksR Python Client Daemon的 start 命令,启动连接，使用CLI配置的默认服务器</li>
<li><code>ssr restart</code> : ShadowsocksR Python Client Daemon的 restart 命令，重新启动连接，使用CLI配置的默认服务器</li>
<li><code>ssr stop</code> : ShadowsocksR Python Client Daemon的 stop 命令，停止服务，使用CLI配置的默认服务器</li>
<li><code>ssr status</code> : 可查看 ShadowsocksR Python Client Daemon的 运行状态</li>
<li><code>ssr startup</code> : 设置服务开机自启，仅在Systemd启动的Linux平台下有效</li>
<li><code>ssr unstartup</code> : 关闭服务开机自启，仅在Systemd启动的Linux平台下有效</li>
<li><code>ssr delay</code> : 测试服务器的延迟</li>
<li><code>ssr-subscribe add [url]</code> : 添加新的SSR订阅地址</li>
<li><code>ssr-subscribe ls</code> : 列出所有SSR订阅地址和他们的当前标号</li>
<li><code>ssr-subscribe rm [label]</code> : 基于 <code>ssr-subscribe ls</code> 打印的标号删除SSR订阅地址</li>
<li><code>ssr-subscribe update</code> : 从已添加的SSR订阅地址获取服务器信息</li>
</ul>
<blockquote>
<p>配置 privoxy 实现全局和自动代理</p>
</blockquote>
<p>https://juejin.cn/post/6844903813393055751</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> privoxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>vim /etc/privoxy/config</code></p>
<p>privoxy 有 filter （过滤）的功能，可以用来实现广告拦截。不过这里只希望实现自动代理，在配置文件中把 filter 部分注释掉：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 大约在435行
# filterfile default.filter
# filterfile user.filter      # User customizations
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>我们将使用自定义的 action 文件，所以把默认的 action 文件注释掉，并添加自定义文件：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 386行左右
# 默认的 action 文件
# actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.
# actionsfile default.action   # Main actions file
# actionsfile user.action      # User customizations
# 自定义 action 文件
actionsfile gfwlist.action
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>可以指定转换后的 HTTP 代理地址，这里直接使用默认端口 <code>8118</code>：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 785行左右
listen-address  127.0.0.1:8118
listen-address  [::1]:8118
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果代理规则直接写在配置文件 <code>config</code> 中，那么代理规则和本地 SS 代理地址是写在一起的：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># / 代表匹配全部 URL，即全局代理
forward-socks5 / 127.0.0.1:1080 .
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>或</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 1389行
# 根据规则自动代理
forward-socks5 .google.com 127.0.0.1:1080 .
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>全局代理：</p>
<p>新建 action 文件 <code>my.action</code>，内容如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 这一行表示本 action 文件中所有条目都使用代理
{+forward-override{forward-socks5 127.0.0.1:1080 .}}
# 添加一条规则
.google.com
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>把 privoxy 转换后的地址 <code>http://127.0.0.1:8118</code> 添加到环境变量，可以参照 polipo 部分。</p>
<p>启动 privoxy，这时应该可以正常访问 Google 了：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>service privoxy start
curl www.google.com
复制代码
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>下面看一下怎么用 gfwlist 生成 action 文件。</p>
<p>局部代理：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>pip2 <span class="token function">install</span> gfwlist2privoxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>gfwlist2privoxy <strong>不支持 python3.x</strong>，安装时注意使用的是 <code>pip2</code> 还是 <code>pip3</code>。</p>
<p>如果没有安装PIP2则执行：<code>apt install python-pip</code></p>
<p>参数说明：</p>
<ul>
<li><code>-i</code>/<code>--input</code> 输入，本地 gfwlist 文件或文件 URL。这里使用上面的 <a href="https://link.juejin.cn?target=https%3A%2F%2Fraw.githubusercontent.com%2Fgfwlist%2Fgfwlist%2Fmaster%2Fgfwlist.txt" target="_blank" rel="noopener noreferrer">gfwlist<ExternalLinkIcon/></a></li>
<li><code>-f</code>/ <code>--file</code> 输出，即生成的 action 文件的目录。这里输出到 <code>/etc/privoxy/gfwlist.action</code></li>
<li><code>-p</code>/ <code>--proxy</code> SS 代理地址，生成后可以修改。这里是 <code>127.0.0.1:1080</code></li>
<li><code>-t</code>/ <code>--type</code> 代理类型，生成后也可以修改。这里是 <code>socks5</code></li>
<li><code>--user-rule</code> 用户自定义规则文件，这个文件中的规则会被追加到 gfwlist 生成的规则后面</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p <span class="token number">127.0</span>.0.1:1080 -t socks5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>最后，把 <code>/etc/privoxy/config</code> 中的 <code>actionsfile my.action</code> 改为 <code>actionsfile gfwlist.action</code> 就完成了。</p>
<p><code>service privoxy restart</code></p>
<p><code>vim ~/.bashrc</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">"http://127.0.0.1:8118"</span>
<span class="token comment"># export https_proxy="https://127.0.0.1:8118"</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$http_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span>
<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I https://www.google.com
<span class="token function">curl</span> -I https://mirrors.aliyun.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="国内访问github" tabindex="-1"><a class="header-anchor" href="#国内访问github" aria-hidden="true">#</a> 国内访问Github</h3>
<p>1、修改hosts</p>
<p>https://github.com/521xueweihan/GitHub520</p>
<p>2、更新DNS缓存</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> nscd
nscd restart
/etc/init.d/nscd restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用克隆方式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>https://doc.fastgit.org/
https://gitclone.com/
https://github.com.cnpmjs.org/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="装机流程防忘记" tabindex="-1"><a class="header-anchor" href="#装机流程防忘记" aria-hidden="true">#</a> 装机流程防忘记</h2>
<blockquote>
<p>0、更新</p>
<p>apt -y update</p>
<p>apt -y upgrade</p>
</blockquote>
<blockquote>
<p>1、免密登陆</p>
</blockquote>
<ul>
<li>
<p>SSH免密登陆</p>
</li>
<li>
<p>本机生成本地密钥，一路回车</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
<li>
<p>然后将公共密钥移到服务器里面，然后将密钥内容写入</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">>></span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>
</ul>
<p>nano /etc/ssh/sshd_config</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 设置如果用户不能成功登录，在切断连接之前服务器需要等待的时间（以秒为单位）。</span>
LoginGraceTime <span class="token number">30</span>
<span class="token comment"># 允许Root用户</span>
PermitRootLogin <span class="token function">yes</span>
<span class="token comment"># 最大尝试次数</span>
MaxAuthTries <span class="token number">3</span>
<span class="token comment"># 开启RSA验证</span>
RSAAuthentication <span class="token function">yes</span>
<span class="token comment"># 是否使用公钥验证</span>
PubkeyAuthentication <span class="token function">yes</span>
<span class="token comment"># 禁用密码登录</span>
<span class="token comment"># PasswordAuthentication no</span>
<span class="token comment"># 公钥保存位置</span>
AuthorizedKeysFile      .ssh/authorized_keys .ssh/authorized_keys2

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>service sshd restart</p>
<blockquote>
<p>2、改主机名</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> /etc/hostname
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote>
<p>3、安装必装软件</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">sudo</span> yum <span class="token function">yarn</span> <span class="token function">npm</span> <span class="token function">wget</span> openjdk-11-jdk python-pip <span class="token function">screen</span> ntpdate vnstat

ntpdate ntp1.aliyun.com
ntpdate ntpupdate.tencentyun.com

<span class="token function">date</span>

<span class="token comment"># 修改时区</span>
tzselect
timedatectl set-timezone Asia/Shanghai

<span class="token comment"># 定时同步</span>
<span class="token function">crontab</span> -e
*/60 * * * * /usr/sbin/ntpdate ntpupdate.tencentyun.com
*/60 * * * * /usr/sbin/ntpdate ntp1.aliyun.com
/etc/init.d/cron restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote>
<p>4、卸载阿里云盾</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> http://update.aegis.aliyun.com/download/uninstall.sh
<span class="token function">chmod</span> +x uninstall.sh
./uninstall.sh
<span class="token function">wget</span> http://update.aegis.aliyun.com/download/quartz_uninstall.sh
<span class="token function">chmod</span> +x quartz_uninstall.sh
./quartz_uninstall.sh
<span class="token function">pkill</span> aliyun-service
<span class="token function">rm</span> -fr /etc/init.d/agentwatch /usr/sbin/aliyun-service
<span class="token function">rm</span> -rf /usr/local/aegis*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote>
<p>4、SSR代理+privoxy自动代理</p>
<p><strong>设置代理的时候，别用VSCODE，他会自动转发，会出问题的</strong></p>
<p>如果安装yarn报错，查看上面的解决办法</p>
<p>记得装BBR加速</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> ssr-helper
<span class="token builtin class-name">cd</span> /opt/
<span class="token function">git</span> clone https://github.com/shadowsocksrr/shadowsocksr
ssr config /opt/shadowsocksr

<span class="token comment"># --------------设置订阅地址</span>
ssr-subscribe <span class="token function">add</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
ssr-subscribe update
ssr connect
ssr restart
ssr startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y privoxy
<span class="token function">vim</span> /etc/privoxy/config
<span class="token comment"># 注释以下代码</span>
<span class="token comment"># 大约在435行, 广告拦截</span>
<span class="token comment"># filterfile default.filter</span>
<span class="token comment"># filterfile user.filter      # User customizations</span>

<span class="token comment"># 386行左右</span>
<span class="token comment"># 默认的 action 文件</span>
<span class="token comment"># actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.</span>
<span class="token comment"># actionsfile default.action   # Main actions file</span>
<span class="token comment"># actionsfile user.action      # User customizations</span>
<span class="token comment"># 自定义 action 文件</span>
actionsfile gfwlist.action

<span class="token comment"># 确保以下代码是注释的！！！很重要</span>
<span class="token comment"># forward-socks5 / 127.0.0.1:1080 .</span>

pip2 <span class="token function">install</span> gfwlist2privoxy
gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p <span class="token number">127.0</span>.0.1:1080 -t socks5
<span class="token function">service</span> privoxy restart

<span class="token comment"># https在SSL会出问题，不推荐使用</span>
<span class="token function">vim</span> ~/.bashrc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">"http://127.0.0.1:8118"</span>
<span class="token comment"># export https_proxy="https://127.0.0.1:8118"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NO_PROXY</span><span class="token operator">=</span><span class="token string">"*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1"</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$http_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$NO_PROXY</span>
<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I http://www.google.com
<span class="token function">curl</span> -I http://mirrors.aliyun.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>可以考虑在action文件中加入</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{{alias}}
direct      = +forward-override{forward .}
shadowsocksr    = +forward-override{forward-socks5 127.0.0.1:1080 .}

# default
{direct}
/

# shadowsocks
{shadowsocksr}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote>
<p>5、装Docker，记得装Compose</p>
<p>看隔壁文件，不做流程</p>
</blockquote>
<blockquote>
<p>6、自动化</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>crontab -e
0 3 */3 * * /home/backup/docker-volume-backup.sh
/etc/init.d/cron restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
