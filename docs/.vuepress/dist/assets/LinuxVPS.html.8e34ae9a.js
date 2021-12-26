import{r as p,o as l,a as r,b as s,d as t,F as c,c as n,e as a}from"./app.e1cbe8dc.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n(`<h1 id="linuxvps" tabindex="-1"><a class="header-anchor" href="#linuxvps" aria-hidden="true">#</a> linuxVPS</h1><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><blockquote><p>touch \u4FEE\u6539\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u65F6\u95F4\u5C5E\u6027</p></blockquote><blockquote><p><strong>\u6E05\u7406\u7F13\u5B58</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5C06\u5B58\u4E8E buffer \u4E2D\u7684\u8D44\u6599\u5F3A\u5236\u5199\u5165\u786C\u76D8\u4E2D\u3002</span>
<span class="token function">sync</span>
<span class="token comment"># \u8868\u793A\u6E05\u9664pagecache \uFF08\u6267\u884C\u540E\u95EE\u9898\u5F97\u4EE5\u89E3\u51B3\uFF09</span>
<span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches

<span class="token comment"># \u8868\u793A\u6E05\u9664\u56DE\u6536slab\u5206\u914D\u5668\u4E2D\u7684\u5BF9\u8C61\uFF08\u5305\u62EC\u76EE\u5F55\u9879\u7F13\u5B58\u548Cinode\u7F13\u5B58\uFF09</span>
<span class="token comment"># slab\u5206\u914D\u5668\u662F\u5185\u6838\u4E2D\u7BA1\u7406\u5185\u5B58\u7684\u4E00\u79CD\u673A\u5236\uFF0C\u5176\u4E2D\u5F88\u591A\u7F13\u5B58\u6570\u636E\u5B9E\u73B0\u90FD\u662F\u7528\u7684pagecache</span>
<span class="token builtin class-name">echo</span> <span class="token number">2</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches

<span class="token comment"># \u8868\u793A\u6E05\u9664pagecache\u548Cslab\u5206\u914D\u5668\u4E2D\u7684\u7F13\u5B58\u5BF9\u8C61 \uFF08\u8FD9\u4E2A\u53EF\u4EE5\u7684\uFF09</span>
<span class="token builtin class-name">echo</span> <span class="token number">3</span> <span class="token operator">&gt;</span> /proc/sys/vm/drop_caches
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><blockquote><p>apt purge \uFF1A\u5378\u8F7D\u5305\u4F1A\u5220\u9664\u8F6F\u4EF6\u53CA\u5176\u914D\u7F6E</p><p>apt remove\uFF1A\u53EA\u5220\u9664\u5305\uFF0C\u4E0D\u5220\u914D\u7F6E</p><p>\u4E5F\u53EF\u4EE5\uFF1Aapt remove --purge</p></blockquote><blockquote><p>\u67E5\u770B\u8FD0\u884C\u72B6\u6001\uFF1Aps -aux</p><p>\u6587\u4EF6\u5939\u6743\u9650\uFF1Als -l</p><p>\u67E5\u770B\u7CFB\u7EDF\uFF1Ahostnamectl</p><p>\u67E5\u770B\u7CFB\u7EDF\u5B50\u7248\u672C\uFF1Acat /etc/debian_version</p><p>\u67E5\u770Bnginx\u7528\u6237\uFF1Aps aux|grep nginx|grep -v grep</p><p>ps aux | grep &quot;nginx: worker process&quot;</p><p>\u68C0\u6D4Bnginx\u914D\u7F6E\u6587\u4EF6\uFF1A/usr/sbin/nginx -t</p></blockquote><ul><li>\u67E5\u770B\u76EE\u524D\u5F00\u653E\u7684\u7AEF\u53E3</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -lnpt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>\u5DF2\u8FD0\u884C\u65F6\u95F4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> /proc/uptime<span class="token operator">|</span> <span class="token function">awk</span> -F. <span class="token string">&#39;{run_days=$1 / 86400;run_hour=($1 % 86400)/3600;run_minute=($1 % 3600)/60;run_second=$1 % 60;printf(&quot;\u7CFB\u7EDF\u5DF2\u8FD0\u884C\uFF1A%d\u5929%d\u65F6%d\u5206%d\u79D2&quot;,run_days,run_hour,run_minute,run_second)}&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>chmod \u6587\u4EF6\u6743\u9650</strong></li></ul><p><code>-R</code> : \u5BF9\u76EE\u524D\u76EE\u5F55\u4E0B\u7684\u6240\u6709\u6587\u4EF6\u4E0E\u5B50\u76EE\u5F55\u8FDB\u884C\u76F8\u540C\u7684\u6743\u9650\u53D8\u66F4(\u5373\u4EE5\u9012\u5F52\u7684\u65B9\u5F0F\u9010\u4E2A\u53D8\u66F4)</p><p>\u6587\u4EF6\u6240\u6709\u8005\uFF08Owner\uFF09\u3001\u7528\u6237\u7EC4\uFF08Group\uFF09\u3001\u5176\u5B83\u7528\u6237\uFF08Other Users\uFF09</p><p>777\uFF1A\u4EE3\u8868\u8BFB\u5199\u6267\u884C\u6700\u9AD8\u6743\u9650</p><p><a href="https://www.runoob.com/linux/linux-comm-chmod.html">\u5177\u4F53\u770B\u6587\u6863</a></p><ul><li><p>chown \u6587\u4EF6\u5939\u6743\u9650</p><ul><li>chown -R root:root</li></ul></li><li><p>\u7F51\u7EDC\u8BF7\u6C42\u76F8\u5173</p><ul><li>1000-1200\uFF08\u8FDB\u4F4D50\uFF09</li><li>v2ray\uFF081000\uFF09</li></ul></li><li><p>\u7F51\u7AD9Nginx</p><ul><li>2142-4142\uFF08\u8FDB\u4F4D100\uFF09</li></ul></li><li><p>FRP</p><ul><li>5142-6142\uFF08\u8FDB\u4F4D100\uFF09</li><li>\u670D\u52A1\u7AEF\u53E3\uFF085242\uFF09</li><li>\u9762\u677F\u7AEF\u53E3\uFF085142\uFF09</li><li>\u7B14\u8BB0\u672C\u7AEF\u53E3\uFF085342\uFF09</li><li>PC\u7AEF\u53E3\uFF085442\uFF09</li></ul></li></ul><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><p>\u627E\u4E0D\u5230ll\u547D\u4EE4</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo vim ~/.bashrc

# \u52A0\u4E0A\u4E0B\u9762\u8FD9\u4E00\u884C\uFF1A
alias ll=&#39;ls -l&#39;

# \u7136\u540E\u91CD\u7F6E
source ~/.bashrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7B14\u8BB0\u672C\u5173\u76D6\u5B50\u4E0D\u8FDB\u5165\u4F11\u7720</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo vim /etc/systemd/logind.conf
HandleLidSwitch=ignore
\u7136\u540E\u91CD\u542F\u670D\u52A1\uFF1A
sudo restart systemd-logind
\u6216\u8005
service systemd-logind restart
\u6216\u8005\u76F4\u63A5\u91CD\u542F
sudo shutdown -r now
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>root\u56FE\u50CF\u754C\u9762\u5931\u8D25</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>cd /etc/pam.d

# \u4FEE\u65392\u4E2A\u6587\u4EF6\uFF0C\u5C06\u7B2C\u4E09\u884C\u4EE3\u7801\u6CE8\u91CA
vim gdm-autologin
vim gdm-password
# auth required pam_succeed_if.so user != root quiet_success

vim /root/.profile
# \u627E\u5230mesg n \u5728\u524D\u9762\u52A0\u4E0Atty -s&amp;&amp;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53CC\u7CFB\u7EDF\u8BBE\u7F6E\u9ED8\u8BA4\u542F\u52A8\u7CFB\u7EDF</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code># \u6253\u5F00\u6587\u4EF6\uFF0C\u5C06GRUB_DEFAULT=0\u8BBE\u7F6E\u4E3A\u5BF9\u5E94\u5F15\u5BFC
gedit /etc/default/grub

# \u6700\u540E\u66F4\u65B0grub\u83DC\u5355
update-grub
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4FEE\u6539\u7F51\u5361\u540D\u79F0\u4E3Aeth0</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>vim /etc/default/grub

GRUB_CMDLINE_LINUX=&quot;net.ifnames=0 biosdevname=0&quot;

sed -i &#39;s/ens3/eth0/g&#39; /etc/network/interfaces
sed -i &#39;s/enp3s0/eth0/g&#39; /etc/network/interfaces

grub-mkconfig -o /boot/grub/grub.cfg
# \u91CD\u542F
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5B89\u88C5deb\u5305\u8F6F\u4EF6</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>sudo dpkg -i \u8F6F\u4EF6\u8DEF\u5F84
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="vscode\u4E00\u76F4\u5728\u5B89\u88C5c-\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#vscode\u4E00\u76F4\u5728\u5B89\u88C5c-\u95EE\u9898" aria-hidden="true">#</a> vscode\u4E00\u76F4\u5728\u5B89\u88C5c++\u95EE\u9898</h3><p>\u4F7F\u7528vscode\u5B89\u88C5c++\u7684\u65F6\u5019\uFF0C\u5982\u679C\u65E0\u6CD5\u5B89\u88C5\u6210\u529F\u5219\u53BB</p><p>https://github.com/microsoft/vscode-cpptools/releases</p><p>\u627E\u5230 <code>cpptools-linux.vsix</code>\uFF0C\u8FDB\u884C\u5B89\u88C5\u3002</p><p>\u6D41\u7A0B\uFF1A<strong>\u70B9\u51FB\u63D2\u4EF6</strong>\uFF0C\u7136\u540E\u70B9\u51FB\u4E0A\u9762\u6269\u5C55<strong>\u6700\u53F3\u8FB9\u7684\u4E09\u4E2A\u70B9</strong>\uFF0C\u9009\u62E9<strong>\u4ECEvsix\u5B89\u88C5</strong></p><h3 id="yarn\u62A5\u9519\u65E0\u6CD5\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#yarn\u62A5\u9519\u65E0\u6CD5\u8BC6\u522B" aria-hidden="true">#</a> yarn\u62A5\u9519\u65E0\u6CD5\u8BC6\u522B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> remove cmdtest
<span class="token function">apt</span> remove <span class="token function">yarn</span>
<span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token function">apt-get</span> update
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span> -y
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a> \u5E94\u7528</h2><ul><li>BBR\u52A0\u901F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget -N --no-check-certificate &quot;https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh&quot;
chmod +x tcp.sh
./tcp.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><ul><li>v2ray\uFF0C233</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bash &lt;(curl -s -L https://233v2.com/v2ray.sh)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><p>\u5B89\u88C5ifconfig\uFF0C\u56E0\u4E3A\u672C\u8EAB\u4E0D\u662F\u5305\u6240\u4EE5\u9700\u8981\u548C\u5176\u4ED6\u8F6F\u4EF6\u5305\u4E00\u8D77\u88C5</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code>apt install net-tools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><p>\u5B89\u88C5\u8FDC\u7A0B\u684C\u9762</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> xrdp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><hr><ul><li>LNMP</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://soft.vpser.net/lnmp/lnmp1.8.tar.gz -cO lnmp1.8.tar.gz &amp;&amp; tar zxf lnmp1.8.tar.gz &amp;&amp; cd lnmp1.8 &amp;&amp; ./install.sh lnmp
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u7F51\u7AD9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lnmp vhost add
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>\u8BC1\u4E66\u5B89\u88C5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/home/1_maocode.cn_bundle.crt
/home/2_maocode.cn.key
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7F51\u7AD9\u914D\u7F6E\u5728\uFF1A/usr/local/nginx/conf/vhost/\u57DF\u540D.conf</p><hr><p>\u5B89\u88C5clash</p><p>https://github.com/yuanlam/Clash-Linux</p><div class="language-SHELL ext-SHELL line-numbers-mode"><pre class="language-SHELL"><code># \u5148\u7528weget\u4E0B\u8F7D\uFF0C\u7136\u540E\u7528gzip\u89E3\u538B
gzip -d clash-linux-amd64-v1.6.5.gz

# \u79FB\u52A8&amp;\u91CD\u547D\u540D
mv clash-linux-amd64-v1.6.5 /usr/bin/clash

# \u8D4B\u4E88\u8FD0\u884C\u6743\u9650
chmod +x /usr/bin/clash

# \u68C0\u67E5\u662F\u5426\u5B89\u88C5\u6210\u529F
clash -v

# \u4E3A clash \u6DFB\u52A0\u7ED1\u5B9A\u4F4E\u4F4D\u7AEF\u53E3\u7684\u6743\u9650\uFF0C\u8FD9\u6837\u8FD0\u884Cclash\u7684\u65F6\u5019\u65E0\u9700root\u6743\u9650
setcap cap_net_bind_service=+ep /usr/bin/clash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>Yum</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> yum
<span class="token function">apt</span> <span class="token function">install</span> yum-utils <span class="token comment"># \u5B89\u88C5yum\u6E90\u914D\u7F6E\u6587\u4EF6</span>
yum-config-manager --add-repo<span class="token operator">=</span>file:///mnt/cdrom/Package
yum listrepo <span class="token comment"># \u68C0\u6D4B\u4E00\u4E0Byum\u6E90</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><p>\u5220\u9664\u963F\u91CC\u4E91\u76FE</p><p>aliyundun</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://update.aegis.aliyun.com/download/uninstall.sh
<span class="token function">chmod</span> +x uninstall.sh
./uninstall.sh
<span class="token function">wget</span> http://update.aegis.aliyun.com/download/quartz_uninstall.sh
<span class="token function">chmod</span> +x quartz_uninstall.sh
./quartz_uninstall.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h3 id="wordpress" tabindex="-1"><a class="header-anchor" href="#wordpress" aria-hidden="true">#</a> wordpress</h3><p>\u4E0B\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget http://cn.wordpress.org/wordpress-3.9-zh_CN.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u89E3\u538B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>unzip wordpress-3.8-zh_CN.zip
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u79FB\u52A8\u5230\u67D0\u4E2A\u4F4D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -rf wordpress/* /home/www/www.maocode.top/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql -u root -p
create database wordpress
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5982\u679C\u6CA1\u6709\u521B\u5EFA\u6587\u4EF6\u5939\u7684\u6743\u9650\uFF0C\u5C31\u5728\u5B89\u88C5\u76EE\u5F55\u4E0A\u8F93\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod -R 777 wp-content/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u514DFTP\u767B\u9646</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi /home/wwwroot/www.maocode.cn/wp-config.php

\u5728\u6700\u540E\u6DFB\u52A0\uFF1A

define(&quot;FS_METHOD&quot;, &quot;direct&quot;);

define(&quot;FS_CHMOD_DIR&quot;, 0777);

define(&quot;FS_CHMOD_FILE&quot;, 0777);

\u66F4\u6539\u63D2\u4EF6\u7684\u6743\u9650\uFF1A

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/plugins/

\u66F4\u6539\u4E3B\u9898\u7684\u6743\u9650\uFF1A

chmod 777 /home/wwwroot/www.maocode.cn/wp-content/themes/

chmod 777 /home/wwwroot/www.maocode.cn/

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u5185\u7F51\u7A7F\u900Ffrp" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F51\u7A7F\u900Ffrp" aria-hidden="true">#</a> \u5185\u7F51\u7A7F\u900Ffrp</h3><p>\u4F7F\u7528FRP\uFF0C\u5F00\u53D1\u6587\u6863\uFF1A</p><p>https://gofrp.org/docs/reference/server-configures/</p><p>frps.ini\uFF1A\u670D\u52A1\u7AEF\uFF0C\u516C\u7F51\u670D\u52A1\u5668</p><p>frpc.ini\uFF1A\u5BA2\u6237\u7AEF\uFF0C\u88AB\u7A7F\u900F\u7684\u5BA2\u6237\u7AEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://github.com/fatedier/frp/releases/download/v0.21.0/frp_0.21.0_linux_amd64.tar.gz

tar -zxvf frp_0.21.0_linux_amd64.tar.gz

cd frp_0.21.0_linux_amd64/

./frps -c ./frps.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>frps.ini</strong></p><ul><li>&quot;bind_addr&quot;\u662F\u670D\u52A1\u5668\u672C\u5730IP\uFF0C\u4E0D\u6539\u3002</li><li>&quot;bind_port&quot;\u662Ffrp\u76D1\u542C\u7AEF\u53E3\u3002</li><li>&quot;token&quot;\u662F\u9A8C\u8BC1token\u5EFA\u8BAE\u8BBE\u7F6E\u4E0A\u3002</li><li>&quot;dashboard_port&quot;\u662Ffrp\u9762\u677F\u7AEF\u53E3\u3002</li><li>&quot;dashboard_user&quot;&quot;dashboard_pwd&quot;\u662F\u9762\u677F\u7684\u8D26\u6237\u5BC6\u7801\u3002</li></ul><p>./frps -c ./frps.ini</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[common]
bind_port = 
token = 

dashboard_port = 
dashboard_user = 
dashboard_pwd = 

subdomail_host = 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>frpc.ini</strong></p><p>windows\u8FDC\u7A0B\u684C\u9762\uFF0C\u4F7F\u75283389\u7AEF\u53E3\uFF0C</p><p>./frpc -c ./frpc.ini</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[common]
server_addr = 
server_port = 
token = 

[RDP]
type = tcp
local_ip = 127.0.0.1
local_port = 
remote_port = 

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5F00\u673A\u81EA\u542F</p><p>vim /lib/systemd/system/frps.service</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=frps service
After=network.target syslog.target
Wants=network.target

[Service]
Type=simple
#\u542F\u52A8\u670D\u52A1\u7684\u547D\u4EE4\uFF08\u6B64\u5904\u5199\u4F60\u7684frps\u7684\u5B9E\u9645\u5B89\u88C5\u76EE\u5F55\uFF09
ExecStart=/home/frp_0.21.0_linux_amd64/frps -c /home/frp_0.21.0_linux_amd64/frps.ini

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u91CD\u8F7D daemon \u751F\u6548
systemctl daemon-reload
\u518D\u6253\u5F00\u81EA\u542F\u52A8
systemctl enable frps
\u5173\u95ED\u5F00\u673A\u81EA\u542F\u52A8
systemctl disable frps

\u7136\u540E\u5C31\u542F\u52A8 frps
systemctl start frps
\u5982\u679C\u8981\u91CD\u542F\u5E94\u7528\uFF0C\u53EF\u4EE5\u8FD9\u6837
systemctl restart frps
\u5982\u679C\u8981\u505C\u6B62\u5E94\u7528\uFF0C\u53EF\u4EE5\u8F93\u5165
systemctl stop frps
\u5982\u679C\u8981\u67E5\u770B\u5E94\u7528\u7684\u65E5\u5FD7\uFF0C\u53EF\u4EE5\u8F93\u5165
systemctl status frps
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="systemctl\u5F00\u673A\u81EA\u542F\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#systemctl\u5F00\u673A\u81EA\u542F\u914D\u7F6E" aria-hidden="true">#</a> systemctl\u5F00\u673A\u81EA\u542F\u914D\u7F6E</h3><p>Centos7\u7684\u670D\u52A1systemctl\u811A\u672C\u5B58\u653E\u5728: /usr/lib/systemd/</p><p>\u6709\u7CFB\u7EDF\uFF08system\uFF09\u548C\u7528\u6237\uFF08user\uFF09\u4E4B\u5206\uFF0C\u9700\u8981\u5F00\u673A\u4E0D\u767B\u9646\u5C31\u80FD\u8FD0\u884C\u7684\u7A0B\u5E8F\uFF0C\u5B58\u4E0B\u7CFB\u7EDF\u670D\u52A1\u91CC\uFF0C\u5373\uFF1A/usr/lib/systemd/system\u76EE\u5F55\u4E0B\u3002</p><p>Centos7\u7684\u6BCF\u4E00\u4E2A\u670D\u52A1\u4EE5.service\u7ED3\u5C3E\uFF0C\u4E00\u822C\u4F1A\u5206\u4E3A3\u90E8\u5206\uFF1A\u3010Unit\u3011\u3010Service\u3011 \u3010Install\u3011</p><ul><li><strong>\u914D\u7F6E\u8BF4\u660E</strong></li></ul><p>\u3010Unit\u3011\u90E8\u5206\u4E3B\u8981\u662F\u5BF9\u8FD9\u4E2A\u670D\u52A1\u7684\u8BF4\u660E\u3002</p><ul><li>Description \u7528\u4E8E\u63CF\u8FF0\u670D\u52A1</li><li>After \u7528\u4E8E\u63CF\u8FF0\u670D\u52A1\u7C7B\u522B</li></ul><p>\u3010Service\u3011\u90E8\u5206\u662F\u670D\u52A1\u7684\u5173\u952E\uFF0C\u662F\u670D\u52A1\u7684\u4E00\u4E9B\u5177\u4F53\u8FD0\u884C\u53C2\u6570\u7684\u8BBE\u7F6E\u3002</p><ul><li><p>Type=simple\uFF08\u9ED8\u8BA4\u503C\uFF09\uFF1Asystemd\u8BA4\u4E3A\u8BE5\u670D\u52A1\u5C06\u7ACB\u5373\u542F\u52A8\u3002\u670D\u52A1\u8FDB\u7A0B\u4E0D\u4F1Afork\u3002\u5982\u679C\u8BE5\u670D\u52A1\u8981\u542F\u52A8\u5176\u4ED6\u670D\u52A1\uFF0C\u4E0D\u8981\u4F7F\u7528\u6B64\u7C7B\u578B\u542F\u52A8\uFF0C\u9664\u975E\u8BE5\u670D\u52A1\u662Fsocket\u6FC0\u6D3B\u578B\u3002</p><ul><li>Type=forking\uFF1Asystemd\u8BA4\u4E3A\u5F53\u8BE5\u670D\u52A1\u8FDB\u7A0Bfork\uFF0C\u4E14\u7236\u8FDB\u7A0B\u9000\u51FA\u540E\u670D\u52A1\u542F\u52A8\u6210\u529F\u3002\u5BF9\u4E8E\u5E38\u89C4\u7684\u5B88\u62A4\u8FDB\u7A0B\uFF08daemon\uFF09\uFF0C\u9664\u975E\u4F60\u786E\u5B9A\u6B64\u542F\u52A8\u65B9\u5F0F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u4F7F\u7528\u6B64\u7C7B\u578B\u542F\u52A8\u5373\u53EF\u3002\u4F7F\u7528\u6B64\u542F\u52A8\u7C7B\u578B\u5E94\u540C\u65F6\u6307\u5B9A PIDFile=\uFF0C\u4EE5\u4FBFsystemd\u80FD\u591F\u8DDF\u8E2A\u670D\u52A1\u7684\u4E3B\u8FDB\u7A0B\u3002</li><li>Type=oneshot\uFF1A\u8FD9\u4E00\u9009\u9879\u9002\u7528\u4E8E\u53EA\u6267\u884C\u4E00\u9879\u4EFB\u52A1\u3001\u968F\u540E\u7ACB\u5373\u9000\u51FA\u7684\u670D\u52A1\u3002\u53EF\u80FD\u9700\u8981\u540C\u65F6\u8BBE\u7F6E RemainAfterExit=yes \u4F7F\u5F97 systemd \u5728\u670D\u52A1\u8FDB\u7A0B\u9000\u51FA\u4E4B\u540E\u4ECD\u7136\u8BA4\u4E3A\u670D\u52A1\u5904\u4E8E\u6FC0\u6D3B\u72B6\u6001\u3002</li><li>Type=notify\uFF1A\u4E0E Type=simple \u76F8\u540C\uFF0C\u4F46\u7EA6\u5B9A\u670D\u52A1\u4F1A\u5728\u5C31\u7EEA\u540E\u5411 systemd \u53D1\u9001\u4E00\u4E2A\u4FE1\u53F7\u3002\u8FD9\u4E00\u901A\u77E5\u7684\u5B9E\u73B0\u7531 libsystemd-daemon.so \u63D0\u4F9B\u3002</li><li>Type=dbus\uFF1A\u82E5\u4EE5\u6B64\u65B9\u5F0F\u542F\u52A8\uFF0C\u5F53\u6307\u5B9A\u7684 BusName \u51FA\u73B0\u5728DBus\u7CFB\u7EDF\u603B\u7EBF\u4E0A\u65F6\uFF0Csystemd\u8BA4\u4E3A\u670D\u52A1\u5C31\u7EEA\u3002</li><li>Type=idle: systemd\u4F1A\u7B49\u5F85\u6240\u6709\u4EFB\u52A1(Jobs)\u5904\u7406\u5B8C\u6210\u540E\uFF0C\u624D\u5F00\u59CB\u6267\u884Cidle\u7C7B\u578B\u7684\u5355\u5143\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u5176\u4ED6\u884C\u4E3A\u548CType=simple \u7C7B\u4F3C\u3002</li></ul></li><li><p>PIDFile\uFF1Apid\u6587\u4EF6\u8DEF\u5F84</p></li><li><p>ExecStart\uFF1A\u6307\u5B9A\u542F\u52A8\u5355\u5143\u7684\u547D\u4EE4\u6216\u8005\u811A\u672C\uFF0CExecStartPre\u548CExecStartPost\u8282\u6307\u5B9A\u5728ExecStart\u4E4B\u524D\u6216\u8005\u4E4B\u540E\u7528\u6237\u81EA\u5B9A\u4E49\u6267\u884C\u7684\u811A\u672C\u3002Type=oneshot\u5141\u8BB8\u6307\u5B9A\u591A\u4E2A\u5E0C\u671B\u987A\u5E8F\u6267\u884C\u7684\u7528\u6237\u81EA\u5B9A\u4E49\u547D\u4EE4\u3002</p></li><li><p>ExecReload\uFF1A\u6307\u5B9A\u5355\u5143\u505C\u6B62\u65F6\u6267\u884C\u7684\u547D\u4EE4\u6216\u8005\u811A\u672C\u3002</p></li><li><p>ExecStop\uFF1A\u6307\u5B9A\u5355\u5143\u505C\u6B62\u65F6\u6267\u884C\u7684\u547D\u4EE4\u6216\u8005\u811A\u672C\u3002</p></li><li><p>PrivateTmp\uFF1ATrue\u8868\u793A\u7ED9\u670D\u52A1\u5206\u914D\u72EC\u7ACB\u7684\u4E34\u65F6\u7A7A\u95F4</p></li><li><p>Restart\uFF1A\u8FD9\u4E2A\u9009\u9879\u5982\u679C\u88AB\u5141\u8BB8\uFF0C\u670D\u52A1\u91CD\u542F\u7684\u65F6\u5019\u8FDB\u7A0B\u4F1A\u9000\u51FA\uFF0C\u4F1A\u901A\u8FC7systemctl\u547D\u4EE4\u6267\u884C\u6E05\u9664\u5E76\u91CD\u542F\u7684\u64CD\u4F5C\u3002</p></li><li><p>RemainAfterExit\uFF1A\u5982\u679C\u8BBE\u7F6E\u8FD9\u4E2A\u9009\u62E9\u4E3A\u771F\uFF0C\u670D\u52A1\u4F1A\u88AB\u8BA4\u4E3A\u662F\u5728\u6FC0\u6D3B\u72B6\u6001\uFF0C\u5373\u4F7F\u6240\u4EE5\u7684\u8FDB\u7A0B\u5DF2\u7ECF\u9000\u51FA\uFF0C\u9ED8\u8BA4\u7684\u503C\u4E3A\u5047\uFF0C\u8FD9\u4E2A\u9009\u9879\u53EA\u6709\u5728Type=oneshot\u65F6\u9700\u8981\u88AB\u914D\u7F6E\u3002</p></li></ul><p><strong>\u3010Install\u3011</strong></p><p>Alias\uFF1A\u4E3A\u5355\u5143\u63D0\u4F9B\u4E00\u4E2A\u7A7A\u95F4\u5206\u79BB\u7684\u9644\u52A0\u540D\u5B57\u3002</p><p>RequiredBy\uFF1A\u5355\u5143\u88AB\u5141\u8BB8\u8FD0\u884C\u9700\u8981\u7684\u4E00\u7CFB\u5217\u4F9D\u8D56\u5355\u5143\uFF0CRequiredBy\u5217\u8868\u4ECERequire\u83B7\u5F97\u4F9D\u8D56\u4FE1\u606F\u3002</p><p>WantBy\uFF1A\u5355\u5143\u88AB\u5141\u8BB8\u8FD0\u884C\u9700\u8981\u7684\u5F31\u4F9D\u8D56\u6027\u5355\u5143\uFF0CWantby\u4ECEWant\u5217\u8868\u83B7\u5F97\u4F9D\u8D56\u4FE1\u606F\u3002</p><p>Also\uFF1A\u6307\u51FA\u548C\u5355\u5143\u4E00\u8D77\u5B89\u88C5\u6216\u8005\u88AB\u534F\u52A9\u7684\u5355\u5143\u3002</p><p>DefaultInstance\uFF1A\u5B9E\u4F8B\u5355\u5143\u7684\u9650\u5236\uFF0C\u8FD9\u4E2A\u9009\u9879\u6307\u5B9A\u5982\u679C\u5355\u5143\u88AB\u5141\u8BB8\u8FD0\u884C\u9ED8\u8BA4\u7684\u5B9E\u4F8B\u3002</p><p><strong>\u91CD\u8F7D\u670D\u52A1</strong></p><p>systemctl daemon-reload</p><p><strong>\u542F\u52A8nginx\u670D\u52A1</strong></p><p>systemctl start xxxx.service</p><p><strong>\u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8</strong></p><p>systemctl enable xxxx.service</p><p><strong>\u505C\u6B62\u5F00\u673A\u81EA\u542F\u52A8</strong></p><p>systemctl disable xxxx.service</p><p><strong>\u67E5\u770B\u670D\u52A1\u5F53\u524D\u72B6\u6001</strong></p><p>systemctl status xxx.service</p><p><strong>\u91CD\u65B0\u542F\u52A8\u670D\u52A1</strong></p><p>systemctl restart xxx.service</p><p><strong>\u67E5\u770B\u6240\u6709\u5DF2\u542F\u52A8\u7684\u670D\u52A1</strong></p><p>systemctl list-units --type=service</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul><li>Unit\u63CF\u8FF0\uFF0C\u4E0D\u7528\u770B</li><li>Service <ul><li>Type\u662F\u7C7B\u578B\uFF0C\u7B80\u5355\u7C7B\u578B</li><li>ExecStart\uFF0C\u670D\u52A1\u7684\u547D\u4EE4\uFF0C\u8FD0\u884C\u5730\u5740\u4E0B\u7684\u6587\u4EF6</li></ul></li></ul><h3 id="dns\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#dns\u670D\u52A1\u5668" aria-hidden="true">#</a> DNS\u670D\u52A1\u5668</h3><ul><li>bind</li></ul><p>10.7.171.230</p><ul><li>dnsmasq</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> /etc/dnsmasq.conf

resolv-file<span class="token operator">=</span>/etc/resolv.conf  <span class="token comment">#\u8BBE\u7F6Eresolv\u76EE\u5F55</span>
strict-order <span class="token comment">#\u4E25\u683C\u6309\u7167\u4ECE\u4E0A\u5230\u4E0B\u7684\u987A\u5E8F</span>
listen-address<span class="token operator">=</span><span class="token number">152.32</span>.189.177 <span class="token comment">#\u8BBE\u7F6E\u670D\u52A1\u4FA6\u542C\u7684IP</span>
<span class="token assign-left variable">address</span><span class="token operator">=</span>/hello.me/127.0.0.1 <span class="token comment">#\u8BBE\u7F6E\u57DF\u540D\u89E3\u6790</span>
<span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">8.8</span>.8.8 <span class="token comment">#\u8BBE\u7F6Egoogle dns\u4E3A\u7B2C\u4E00\u6307\u5B9Adns</span>
<span class="token assign-left variable">server</span><span class="token operator">=</span><span class="token number">114.114</span>.114.114 <span class="token comment">#\u8BBE\u7F6E\u7535\u4FE1dns\u4F4D\u7B2C\u4E8Cdns</span>

<span class="token function">service</span> dnsmasq restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u81EA\u5EFA\u56FE\u5E8Alsky-pro" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5EFA\u56FE\u5E8Alsky-pro" aria-hidden="true">#</a> \u81EA\u5EFA\u56FE\u5E8ALsky-pro</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chown -R www:www /home/wwwroot/doc.zyugat.cn
chattr -i /home/wwwroot/doc.zyugat.cn/.user.ini
chmod -R 777 /home/wwwroot/doc.zyugat.cn
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>-e <span class="token variable">$request_filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /index.php?s<span class="token operator">=</span><span class="token variable">$1</span> last<span class="token punctuation">;</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><hr><h3 id="\u5B89\u88C5ss-ssr\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5ss-ssr\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5B89\u88C5SS/SSR\u5BA2\u6237\u7AEF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y snapd core
snap <span class="token function">install</span> shadowsocks-libev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev
<span class="token function">vim</span> /var/snap/shadowsocks-libev/common/etc/shadowsocks-libev/config.json

<span class="token punctuation">{</span>
    <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;\u670D\u52A1\u5668\u5730\u5740&quot;</span>,
    <span class="token string">&quot;server_port&quot;</span>:\u7AEF\u53E3,
    <span class="token string">&quot;local_port&quot;</span>:1080,
    <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;\u5BC6\u7801&quot;</span>,
    <span class="token string">&quot;timeout&quot;</span>:60,
    <span class="token string">&quot;method&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;aes-256-gcm&quot;</span>,
    <span class="token string">&quot;mode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;tcp_and_udp&quot;</span>,
    <span class="token string">&quot;fast_open&quot;</span>:false
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u81EA\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/shadowsocks-libev-local@.service

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6FC0\u6D3B\u670D\u52A1\uFF1A<code>systemctl enable shadowsocks-libev-local@config</code></p><p>\u542F\u52A8\uFF1A<code>systemctl restart shadowsocks-libev-local@config</code></p><p>\u67E5\u770B\uFF1A<code>systemctl status shadowsocks-libev-local@config</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">&quot;socks5://127.0.0.1:1080&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$ALL_PROXY</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;socks5://127.0.0.1:1080&quot;</span>
<span class="token comment"># export https_proxy=&quot;socks5://127.0.0.1:1080&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">no_proxy</span><span class="token operator">=</span><span class="token string">&quot;*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1&quot;</span>
<span class="token builtin class-name">source</span> ~/.bashrc

<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I http://www.fackbook.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><strong>SSR</strong></p></blockquote><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/
<span class="token function">git</span> clone https://github.com/shadowsocksrr/shadowsocksr
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6E</p><p><code>vim /opt/shadowsocksr/config.json</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;ip address&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;server_ipv6&quot;</span><span class="token operator">:</span> <span class="token string">&quot;::&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;server_port&quot;</span><span class="token operator">:</span> <span class="token number">8388</span><span class="token punctuation">,</span>
    <span class="token property">&quot;local_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;local_port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span><span class="token punctuation">,</span>

    <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auth_chain_a&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;protocol_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;obfs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plain&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;obfs_param&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;speed_limit_per_con&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;speed_limit_per_user&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>

    <span class="token property">&quot;additional_ports&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;additional_ports_only&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
    <span class="token property">&quot;udp_timeout&quot;</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
    <span class="token property">&quot;dns_ipv6&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;connect_verbose_info&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fast_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python /opt/shadowsocksr/shadowsocks/local.py -c /opt/shadowsocksr/config.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6D4B\u8BD5\uFF1A<code>ss -ltn | grep 1080</code></p><p>\u8BBE\u7F6E\u4EE3\u7406</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ALL_PROXY</span><span class="token operator">=</span><span class="token string">&quot;socks5://127.0.0.1:1080&quot;</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$ALL_PROXY</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>\u4E0D\u63A8\u8350\u88C5node\uFF0C\u592A\u5403\u5185\u5B58\u4E86</p></blockquote><p><strong>\u63D2\u4EF6-\u5B89\u88C5SSR Helper</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> ssr-helper
ssr config /opt/shadowsocksr
ssr startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><code>ssr config [path]</code> : \u914D\u7F6EPython Client\u7684\u8DEF\u5F84\uFF0C<strong>\u7EDD\u5BF9\u8DEF\u5F84</strong></li><li><code>ssr add</code> : \u624B\u52A8\u6DFB\u52A0\u670D\u52A1\u5668\uFF0C\u5177\u5907\u53CB\u597D\u7684\u754C\u9762</li><li><code>ssr add [uri]</code> : \u4F7F\u7528SSR URI\u624B\u52A8\u6DFB\u52A0\u670D\u52A1\u5668\u5230\u5217\u8868</li><li><code>ssr connect</code> : \u9009\u62E9\u670D\u52A1\u5668\u8FDE\u63A5\u5E76\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u670D\u52A1\u5668\uFF0C\u5177\u5907\u53CB\u597D\u7684\u754C\u9762</li><li><code>ssr ls</code> : \u663E\u793A\u670D\u52A1\u5668\u4FE1\u606F\uFF0C\u5177\u5907\u53CB\u597D\u7684\u754C\u9762</li><li><code>ssr rm</code> : \u4ECE\u5217\u8868\u5220\u9664\u670D\u52A1\u5668\uFF0C\u5177\u5907\u53CB\u597D\u7684\u754C\u9762\uFF08\u6CE8\uFF1A\u5220\u9664\u540E\u8FDE\u63A5\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u9700\u8FD0\u884C <code>connect</code> \u547D\u4EE4\u91CD\u65B0\u8FDE\u63A5\uFF09</li><li><code>ssr edit</code> : \u7F16\u8F91\u670D\u52A1\u5668\u4FE1\u606F\uFF0C\u5177\u5907\u53CB\u597D\u7684\u754C\u9762</li><li><code>ssr local</code> : \u7F16\u8F91SSR\u672C\u5730\u670D\u52A1\u4FE1\u606F\uFF0C\u7F16\u8F91\u540E\u9700\u8981\u91CD\u65B0\u8FDE\u63A5\u751F\u6548</li><li><code>ssr start</code> : ShadowsocksR Python Client Daemon\u7684 start \u547D\u4EE4,\u542F\u52A8\u8FDE\u63A5\uFF0C\u4F7F\u7528CLI\u914D\u7F6E\u7684\u9ED8\u8BA4\u670D\u52A1\u5668</li><li><code>ssr restart</code> : ShadowsocksR Python Client Daemon\u7684 restart \u547D\u4EE4\uFF0C\u91CD\u65B0\u542F\u52A8\u8FDE\u63A5\uFF0C\u4F7F\u7528CLI\u914D\u7F6E\u7684\u9ED8\u8BA4\u670D\u52A1\u5668</li><li><code>ssr stop</code> : ShadowsocksR Python Client Daemon\u7684 stop \u547D\u4EE4\uFF0C\u505C\u6B62\u670D\u52A1\uFF0C\u4F7F\u7528CLI\u914D\u7F6E\u7684\u9ED8\u8BA4\u670D\u52A1\u5668</li><li><code>ssr status</code> : \u53EF\u67E5\u770B ShadowsocksR Python Client Daemon\u7684 \u8FD0\u884C\u72B6\u6001</li><li><code>ssr startup</code> : \u8BBE\u7F6E\u670D\u52A1\u5F00\u673A\u81EA\u542F\uFF0C\u4EC5\u5728Systemd\u542F\u52A8\u7684Linux\u5E73\u53F0\u4E0B\u6709\u6548</li><li><code>ssr unstartup</code> : \u5173\u95ED\u670D\u52A1\u5F00\u673A\u81EA\u542F\uFF0C\u4EC5\u5728Systemd\u542F\u52A8\u7684Linux\u5E73\u53F0\u4E0B\u6709\u6548</li><li><code>ssr delay</code> : \u6D4B\u8BD5\u670D\u52A1\u5668\u7684\u5EF6\u8FDF</li><li><code>ssr-subscribe add [url]</code> : \u6DFB\u52A0\u65B0\u7684SSR\u8BA2\u9605\u5730\u5740</li><li><code>ssr-subscribe ls</code> : \u5217\u51FA\u6240\u6709SSR\u8BA2\u9605\u5730\u5740\u548C\u4ED6\u4EEC\u7684\u5F53\u524D\u6807\u53F7</li><li><code>ssr-subscribe rm [label]</code> : \u57FA\u4E8E <code>ssr-subscribe ls</code> \u6253\u5370\u7684\u6807\u53F7\u5220\u9664SSR\u8BA2\u9605\u5730\u5740</li><li><code>ssr-subscribe update</code> : \u4ECE\u5DF2\u6DFB\u52A0\u7684SSR\u8BA2\u9605\u5730\u5740\u83B7\u53D6\u670D\u52A1\u5668\u4FE1\u606F</li></ul><blockquote><p>\u914D\u7F6E privoxy \u5B9E\u73B0\u5168\u5C40\u548C\u81EA\u52A8\u4EE3\u7406</p></blockquote><p>https://juejin.cn/post/6844903813393055751</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> privoxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>vim /etc/privoxy/config</code></p><p>privoxy \u6709 filter \uFF08\u8FC7\u6EE4\uFF09\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u7528\u6765\u5B9E\u73B0\u5E7F\u544A\u62E6\u622A\u3002\u4E0D\u8FC7\u8FD9\u91CC\u53EA\u5E0C\u671B\u5B9E\u73B0\u81EA\u52A8\u4EE3\u7406\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u628A filter \u90E8\u5206\u6CE8\u91CA\u6389\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5927\u7EA6\u5728435\u884C
# filterfile default.filter
# filterfile user.filter      # User customizations
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6211\u4EEC\u5C06\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 action \u6587\u4EF6\uFF0C\u6240\u4EE5\u628A\u9ED8\u8BA4\u7684 action \u6587\u4EF6\u6CE8\u91CA\u6389\uFF0C\u5E76\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 386\u884C\u5DE6\u53F3
# \u9ED8\u8BA4\u7684 action \u6587\u4EF6
# actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.
# actionsfile default.action   # Main actions file
# actionsfile user.action      # User customizations
# \u81EA\u5B9A\u4E49 action \u6587\u4EF6
actionsfile gfwlist.action
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EF\u4EE5\u6307\u5B9A\u8F6C\u6362\u540E\u7684 HTTP \u4EE3\u7406\u5730\u5740\uFF0C\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u53E3 <code>8118</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 785\u884C\u5DE6\u53F3
listen-address  127.0.0.1:8118
listen-address  [::1]:8118
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u4EE3\u7406\u89C4\u5219\u76F4\u63A5\u5199\u5728\u914D\u7F6E\u6587\u4EF6 <code>config</code> \u4E2D\uFF0C\u90A3\u4E48\u4EE3\u7406\u89C4\u5219\u548C\u672C\u5730 SS \u4EE3\u7406\u5730\u5740\u662F\u5199\u5728\u4E00\u8D77\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># / \u4EE3\u8868\u5339\u914D\u5168\u90E8 URL\uFF0C\u5373\u5168\u5C40\u4EE3\u7406
forward-socks5 / 127.0.0.1:1080 .
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6216</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># 1389\u884C
# \u6839\u636E\u89C4\u5219\u81EA\u52A8\u4EE3\u7406
forward-socks5 .google.com 127.0.0.1:1080 .
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5168\u5C40\u4EE3\u7406\uFF1A</p><p>\u65B0\u5EFA action \u6587\u4EF6 <code>my.action</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8FD9\u4E00\u884C\u8868\u793A\u672C action \u6587\u4EF6\u4E2D\u6240\u6709\u6761\u76EE\u90FD\u4F7F\u7528\u4EE3\u7406
{+forward-override{forward-socks5 127.0.0.1:1080 .}}
# \u6DFB\u52A0\u4E00\u6761\u89C4\u5219
.google.com
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u628A privoxy \u8F6C\u6362\u540E\u7684\u5730\u5740 <code>http://127.0.0.1:8118</code> \u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u53C2\u7167 polipo \u90E8\u5206\u3002</p><p>\u542F\u52A8 privoxy\uFF0C\u8FD9\u65F6\u5E94\u8BE5\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE Google \u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>service privoxy start
curl www.google.com
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0B\u9762\u770B\u4E00\u4E0B\u600E\u4E48\u7528 gfwlist \u751F\u6210 action \u6587\u4EF6\u3002</p><p>\u5C40\u90E8\u4EE3\u7406\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip2 <span class="token function">install</span> gfwlist2privoxy
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>gfwlist2privoxy <strong>\u4E0D\u652F\u6301 python3.x</strong>\uFF0C\u5B89\u88C5\u65F6\u6CE8\u610F\u4F7F\u7528\u7684\u662F <code>pip2</code> \u8FD8\u662F <code>pip3</code>\u3002</p><p>\u5982\u679C\u6CA1\u6709\u5B89\u88C5PIP2\u5219\u6267\u884C\uFF1A<code>apt install python-pip</code></p><p>\u53C2\u6570\u8BF4\u660E\uFF1A</p>`,191),b=s("code",null,"-i",-1),m=a("/"),d=s("code",null,"--input",-1),g=a(" \u8F93\u5165\uFF0C\u672C\u5730 gfwlist \u6587\u4EF6\u6216\u6587\u4EF6 URL\u3002\u8FD9\u91CC\u4F7F\u7528\u4E0A\u9762\u7684 "),k={href:"https://link.juejin.cn?target=https%3A%2F%2Fraw.githubusercontent.com%2Fgfwlist%2Fgfwlist%2Fmaster%2Fgfwlist.txt",target:"_blank",rel:"noopener noreferrer"},h=a("gfwlist"),v=n("<li><code>-f</code>/ <code>--file</code> \u8F93\u51FA\uFF0C\u5373\u751F\u6210\u7684 action \u6587\u4EF6\u7684\u76EE\u5F55\u3002\u8FD9\u91CC\u8F93\u51FA\u5230 <code>/etc/privoxy/gfwlist.action</code></li><li><code>-p</code>/ <code>--proxy</code> SS \u4EE3\u7406\u5730\u5740\uFF0C\u751F\u6210\u540E\u53EF\u4EE5\u4FEE\u6539\u3002\u8FD9\u91CC\u662F <code>127.0.0.1:1080</code></li><li><code>-t</code>/ <code>--type</code> \u4EE3\u7406\u7C7B\u578B\uFF0C\u751F\u6210\u540E\u4E5F\u53EF\u4EE5\u4FEE\u6539\u3002\u8FD9\u91CC\u662F <code>socks5</code></li><li><code>--user-rule</code> \u7528\u6237\u81EA\u5B9A\u4E49\u89C4\u5219\u6587\u4EF6\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u7684\u89C4\u5219\u4F1A\u88AB\u8FFD\u52A0\u5230 gfwlist \u751F\u6210\u7684\u89C4\u5219\u540E\u9762</li>",4),f=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p <span class="token number">127.0</span>.0.1:1080 -t socks5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6700\u540E\uFF0C\u628A <code>/etc/privoxy/config</code> \u4E2D\u7684 <code>actionsfile my.action</code> \u6539\u4E3A <code>actionsfile gfwlist.action</code> \u5C31\u5B8C\u6210\u4E86\u3002</p><p><code>service privoxy restart</code></p><p><code>vim ~/.bashrc</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:8118&quot;</span>
<span class="token comment"># export https_proxy=&quot;https://127.0.0.1:8118&quot;</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$http_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span>
<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I https://www.google.com
<span class="token function">curl</span> -I https://mirrors.aliyun.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u56FD\u5185\u8BBF\u95EEgithub" tabindex="-1"><a class="header-anchor" href="#\u56FD\u5185\u8BBF\u95EEgithub" aria-hidden="true">#</a> \u56FD\u5185\u8BBF\u95EEGithub</h3><p>1\u3001\u4FEE\u6539hosts</p><p>https://github.com/521xueweihan/GitHub520</p><p>2\u3001\u66F4\u65B0DNS\u7F13\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> nscd
nscd restart
/etc/init.d/nscd restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u514B\u9686\u65B9\u5F0F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://doc.fastgit.org/
https://gitclone.com/
https://github.com.cnpmjs.org/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u88C5\u673A\u6D41\u7A0B\u9632\u5FD8\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u88C5\u673A\u6D41\u7A0B\u9632\u5FD8\u8BB0" aria-hidden="true">#</a> \u88C5\u673A\u6D41\u7A0B\u9632\u5FD8\u8BB0</h2><blockquote><p>0\u3001\u66F4\u65B0</p><p>apt -y update</p><p>apt -y upgrade</p></blockquote><blockquote><p>1\u3001\u514D\u5BC6\u767B\u9646</p></blockquote><ul><li><p>SSH\u514D\u5BC6\u767B\u9646</p></li><li><p>\u672C\u673A\u751F\u6210\u672C\u5730\u5BC6\u94A5\uFF0C\u4E00\u8DEF\u56DE\u8F66</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>\u7136\u540E\u5C06\u516C\u5171\u5BC6\u94A5\u79FB\u5230\u670D\u52A1\u5668\u91CC\u9762\uFF0C\u7136\u540E\u5C06\u5BC6\u94A5\u5185\u5BB9\u5199\u5165</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/id_rsa.pub <span class="token operator">&gt;&gt;</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><p>nano /etc/ssh/sshd_config</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8BBE\u7F6E\u5982\u679C\u7528\u6237\u4E0D\u80FD\u6210\u529F\u767B\u5F55\uFF0C\u5728\u5207\u65AD\u8FDE\u63A5\u4E4B\u524D\u670D\u52A1\u5668\u9700\u8981\u7B49\u5F85\u7684\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002</span>
LoginGraceTime <span class="token number">30</span>
<span class="token comment"># \u5141\u8BB8Root\u7528\u6237</span>
PermitRootLogin <span class="token function">yes</span>
<span class="token comment"># \u6700\u5927\u5C1D\u8BD5\u6B21\u6570</span>
MaxAuthTries <span class="token number">3</span>
<span class="token comment"># \u5F00\u542FRSA\u9A8C\u8BC1</span>
RSAAuthentication <span class="token function">yes</span>
<span class="token comment"># \u662F\u5426\u4F7F\u7528\u516C\u94A5\u9A8C\u8BC1</span>
PubkeyAuthentication <span class="token function">yes</span>
<span class="token comment"># \u7981\u7528\u5BC6\u7801\u767B\u5F55</span>
<span class="token comment"># PasswordAuthentication no</span>
<span class="token comment"># \u516C\u94A5\u4FDD\u5B58\u4F4D\u7F6E</span>
AuthorizedKeysFile      .ssh/authorized_keys .ssh/authorized_keys2

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>service sshd restart</p><blockquote><p>2\u3001\u6539\u4E3B\u673A\u540D</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> /etc/hostname
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>3\u3001\u5B89\u88C5\u5FC5\u88C5\u8F6F\u4EF6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">sudo</span> yum <span class="token function">yarn</span> <span class="token function">npm</span> <span class="token function">wget</span> openjdk-11-jdk python-pip <span class="token function">screen</span> ntpdate vnstat

ntpdate ntp1.aliyun.com
ntpdate ntpupdate.tencentyun.com

<span class="token function">date</span>

<span class="token comment"># \u4FEE\u6539\u65F6\u533A</span>
tzselect
timedatectl set-timezone Asia/Shanghai

<span class="token comment"># \u5B9A\u65F6\u540C\u6B65</span>
<span class="token function">crontab</span> -e
*/60 * * * * /usr/sbin/ntpdate ntpupdate.tencentyun.com
*/60 * * * * /usr/sbin/ntpdate ntp1.aliyun.com
/etc/init.d/cron restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><blockquote><p>4\u3001\u5378\u8F7D\u963F\u91CC\u4E91\u76FE</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> http://update.aegis.aliyun.com/download/uninstall.sh
<span class="token function">chmod</span> +x uninstall.sh
./uninstall.sh
<span class="token function">wget</span> http://update.aegis.aliyun.com/download/quartz_uninstall.sh
<span class="token function">chmod</span> +x quartz_uninstall.sh
./quartz_uninstall.sh
<span class="token function">pkill</span> aliyun-service
<span class="token function">rm</span> -fr /etc/init.d/agentwatch /usr/sbin/aliyun-service
<span class="token function">rm</span> -rf /usr/local/aegis*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>4\u3001SSR\u4EE3\u7406+privoxy\u81EA\u52A8\u4EE3\u7406</p><p><strong>\u8BBE\u7F6E\u4EE3\u7406\u7684\u65F6\u5019\uFF0C\u522B\u7528VSCODE\uFF0C\u4ED6\u4F1A\u81EA\u52A8\u8F6C\u53D1\uFF0C\u4F1A\u51FA\u95EE\u9898\u7684</strong></p><p>\u5982\u679C\u5B89\u88C5yarn\u62A5\u9519\uFF0C\u67E5\u770B\u4E0A\u9762\u7684\u89E3\u51B3\u529E\u6CD5</p><p>\u8BB0\u5F97\u88C5BBR\u52A0\u901F</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> global <span class="token function">add</span> ssr-helper
<span class="token builtin class-name">cd</span> /opt/
<span class="token function">git</span> clone https://github.com/shadowsocksrr/shadowsocksr
ssr config /opt/shadowsocksr

<span class="token comment"># --------------\u8BBE\u7F6E\u8BA2\u9605\u5730\u5740</span>
ssr-subscribe <span class="token function">add</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
ssr-subscribe update
ssr connect
ssr restart
ssr startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y privoxy
<span class="token function">vim</span> /etc/privoxy/config
<span class="token comment"># \u6CE8\u91CA\u4EE5\u4E0B\u4EE3\u7801</span>
<span class="token comment"># \u5927\u7EA6\u5728435\u884C, \u5E7F\u544A\u62E6\u622A</span>
<span class="token comment"># filterfile default.filter</span>
<span class="token comment"># filterfile user.filter      # User customizations</span>

<span class="token comment"># 386\u884C\u5DE6\u53F3</span>
<span class="token comment"># \u9ED8\u8BA4\u7684 action \u6587\u4EF6</span>
<span class="token comment"># actionsfile match-all.action # Actions that are applied to all sites and maybe overruled later on.</span>
<span class="token comment"># actionsfile default.action   # Main actions file</span>
<span class="token comment"># actionsfile user.action      # User customizations</span>
<span class="token comment"># \u81EA\u5B9A\u4E49 action \u6587\u4EF6</span>
actionsfile gfwlist.action

<span class="token comment"># \u786E\u4FDD\u4EE5\u4E0B\u4EE3\u7801\u662F\u6CE8\u91CA\u7684\uFF01\uFF01\uFF01\u5F88\u91CD\u8981</span>
<span class="token comment"># forward-socks5 / 127.0.0.1:1080 .</span>

pip2 <span class="token function">install</span> gfwlist2privoxy
gfwlist2privoxy -i https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt -f /etc/privoxy/gfwlist.action -p <span class="token number">127.0</span>.0.1:1080 -t socks5
<span class="token function">service</span> privoxy restart

<span class="token comment"># https\u5728SSL\u4F1A\u51FA\u95EE\u9898\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528</span>
<span class="token function">vim</span> ~/.bashrc
<span class="token builtin class-name">export</span> <span class="token assign-left variable">http_proxy</span><span class="token operator">=</span><span class="token string">&quot;http://127.0.0.1:8118&quot;</span>
<span class="token comment"># export https_proxy=&quot;https://127.0.0.1:8118&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NO_PROXY</span><span class="token operator">=</span><span class="token string">&quot;*.aliyun.com,10.*.*.*,192.168.*.*,*.local,localhost,127.0.0.1&quot;</span>
<span class="token builtin class-name">source</span> ~/.bashrc
<span class="token builtin class-name">echo</span> <span class="token variable">$http_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$https_proxy</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$NO_PROXY</span>
<span class="token function">curl</span> ip.gs
<span class="token function">curl</span> cip.cc
<span class="token function">curl</span> -I http://www.google.com
<span class="token function">curl</span> -I http://mirrors.aliyun.com
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>\u53EF\u4EE5\u8003\u8651\u5728action\u6587\u4EF6\u4E2D\u52A0\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{{alias}}
direct      = +forward-override{forward .}
shadowsocksr    = +forward-override{forward-socks5 127.0.0.1:1080 .}

# default
{direct}
/

# shadowsocks
{shadowsocksr}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>5\u3001\u88C5Docker\uFF0C\u8BB0\u5F97\u88C5Compose</p><p>\u770B\u9694\u58C1\u6587\u4EF6\uFF0C\u4E0D\u505A\u6D41\u7A0B</p></blockquote><blockquote><p>6\u3001\u81EA\u52A8\u5316</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crontab -e
0 3 */3 * * /home/backup/docker-volume-backup.sh
/etc/init.d/cron restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,33);function x(y,w){const e=p("ExternalLinkIcon");return l(),r(c,null,[u,s("ul",null,[s("li",null,[b,m,d,g,s("a",k,[h,t(e)])]),v]),f],64)}var S=o(i,[["render",x]]);export{S as default};
