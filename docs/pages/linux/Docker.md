# Docker

> Linux中buff/caches占用过高
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
>

沙箱：语言沙箱、系统沙箱

统一虚拟成不同的环境运行不同软件，虚拟机方案只能5-10个，但是Docker容器可以50-100个

虚拟机方案，每个方案都有一个独立的系统。

Docker容器，共用一个操作系统内核。

**Docker 不是虚拟机，容器就是进程。**

**安装**

```shell
apt -y update

apt -y upgrade

apt install -y apt-transport-https ca-certificates curl software-properties-common gnupg2

# 配置阿里云gpg
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/debian/gpg | apt-key add -
# 如果安装失败，那么就是开了代理，把代理关了

# apt-get install -y software-properties-common

# 写入阿里云的源镜像
add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/debian $(lsb_release -cs) stable"

# 更新
apt -y update

# 安装
apt install -y docker-ce docker-ce-cli containerd.io

# 重启docker
systemctl restart docker

# 查看版本
docker --version

docker run hello-world
```



镜像加速

```
vim /etc/docker/daemon.json

{
"registry-mirrors": [
 "https://mirror.ccs.tencentyun.com"
]
}

{
"registry-mirrors": ["https://2cbwkcky.mirror.ccs.aliyuncs.com"]
}

systemctl daemon-reload
systemctl restart docker
```







> 删除指令：`-f` 是强制删除，`-r` 递归删除 

## 镜像命令

```shell
# 查看所有镜像
docker images -a -q
# 选择
-a	列出所有
-q	只显示id

# 搜索镜像
docker search mysql
# 选项
--filter=STARS=3000 # 搜索STARS大于3000的

# 获取镜像
# 如果不指定版本，默认获取最新的
docker pull mysql:版本号

# 删除镜像
docker rmi -f ID
# 删除所有镜像
docker rmi -f $(docker images -aq)
```



可以通过URL构建

```shell
docker build -t hello-world https://github.com/docker-library/hello-world.git
```

tar压缩包构建，自动下载解压

```shell
docker build http://server/context.tar.gz
```

标准输入

```shell
docker build - < Dockerfile
cat Dockerfile | docker build -
docker build - < context.tar.gz
```



## 容器命令

拉取镜像：`docker pull centos`

```shell
# 新建并启动
docker run [可选参数] image
# 参数说明
--name="Name"	容器名字
-d	后台运行
-it	交互方式运行,进入容器查看内容
-p	指定端口
	-p 主机端口:容器端口
	-p 容器端口
-P	随机指定

# 运行并进入容器
docker run -it centos /bin/bash
# 退出
exit
# 容器不停止退出
Ctrl + P + Q

# 查看正在运行的容器
docker ps 
-a	当前运行+曾经运行过的容器
-n=?	最近创建的容器
-q	只显示id

# 删除容器
docker rm ID
# 删除所有镜像
docker rm -f $(docker ps -aq)

# 容器操作
docker restart id
docker kill id	# 强制停止当前容器

# 查看日志,只看10条
docker logs -tf --tail 10 ID
--tail number	查看number条日志

# 查看容器中进程信息
docker top ID

# 查看元信息
docker inspect ID

# 进入当前正在运行的容器,启动新的进程
docker exec -it ID /bin/bash

# 进入容器正在执行的终端，不会启动新的进程
docker attach ID

# 查看容器资源占用
docker stats ID
```

导出容器：`docker export ID > ubuntu.tar`

导入容器快照：`cat ubuntu.tar | docker import - test/ubuntu:v1.0`



复制容器文件到主机：`docker cp ID:容器文件路径 主机路径`



提交镜像：`docker commit -m="描述信息" -a="作者" ID 目标镜像名:[TAG]`



## 数据管理

创建数据卷：`docker volume create my-vol`

查看所有数据卷：`docker volume ls`

查看指定数据卷：`docker volume inspect my-vol`

查看web容器的信息：`docker inspect web` 

查看数据卷的信息：`docker volume inspect 数据库名` 



启动挂载数据卷：

通过：`-v` 挂载

```shell
-v 容器内路径      匿名挂载
-v 卷名:容器内路径 具名挂载
-v /主机路径:容器内路径

# 扩展，ro rw 改变读写权限
# 只读、可读可写
docker run -it -v 主机地址:容器地址:ro /bin/bash
docker run -it -v 主机地址:容器地址:rw /bin/bash
```



`docker run -it -v 主机地址:容器地址 /bin/bash`

下面创建一个名为 `web` 的容器，并加载一个 `数据卷` 到容器的 `/usr/share/nginx/html` 目录。

```
$ docker run -d -P \
    --name web \
     -v my-vol:/usr/share/nginx/html \
    --mount source=my-vol,target=/usr/share/nginx/html \
    nginx:alpine
```



**同步mysql数据**

 ```shell
 docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7 -v /home/mysql/conf:/etc/mysqk/conf.d -v /home/mysql/data:/var/lib/mysql
 ```



删除数据卷：` docker volume rm my-vol`

如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用 `docker rm -v` 这个命令。

无主的数据卷可能会占据很多空间，要清理请使用以下命令

```
docker volume prune
```



匿名挂载：

`-v /home/mysql/conf:/etc/mysqk/conf.d`

具名挂载：

`-v my-vol:/usr/share/nginx/html`

具名挂载数据路径：`/var/lib/docker/volumes/卷名/_data`



## 上下文Context

在构建镜像的时候，`docker build` 命令获取到用户指定构建镜像的**上下文路径**，将内容打包上传给Docker引擎。

```shell
COPY ./package.json /app/
```

这并不是要复制执行 `docker build` 命令所在的目录下的 `package.json`，也不是复制 `Dockerfile` 所在目录下的 `package.json`，而是复制 **上下文（context）** 目录下的 `package.json`。

因此，`COPY` 类指令的源文件路径都是相对路径。

 `docker build -t nginx:v3 .` 中的这个 `.`，实际上是在指定上下文的目录。

可以通过 `-f ../Dockerfile.php` 参数指定某个文件作为 `Dockerfile`。



## Dockerfile

创建Dockerfile文件

```dockerfile
FROM centos
VOLUME ["/volume1", "/volume2"]
CMD echo "--end--"
CMD /bin/bash
```



**创建镜像**

`-f`：文件路径

`-t`：镜像名与版本号

```shell
docker build -f dockerfile -t test/centos:1.0 .
```

运行：

```shell
docker run -it --name 容器名字 镜像ID或(名字:版本)
```

运行后，在主机可以通过：`docker inspect ID` 找到容器挂载两个卷的地址。



**数据卷父子共享**

子容器挂载父容器的数据卷

`--volumes-from 父容器名字`



****



常用命令

```dockerfile
FROM				# 基础镜像
MAINTAINER	# 指定维护者信息
ENV				# 环境变量
RUN			 	 # 执行命令

COPY			# 复制文件
ADD				# 复制文件会自动解压，少用

WORKDIR		# 镜像工作目录
VOLUME		# 挂载目录
EXPOSE		# 指定暴露端口

CMD				# 容器启动后执行的命令,只有最后一个生效,会被替换
ENTRYPOINT # 容器启动后执行的命令,追加命令
ONBUILD		# 在当前镜像构建时并**不会被执行**。只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行。
```



构建Tomat镜像

添加PATH路径通过 `:` 隔开

```dockerfile
FROM centos
MAINTAINER bei<123@qq.com>
ADD jdk路径 /usr/local/
ADD apache-tomcat路径 /usr/local/
RUN yum -y install vim

ENV MYPATH /user/local
WORKDIR $MYPATH

ENV JAVA_HOME /docker_home/local/jdk的路径
ENV JRE_HOME=$JAVA_HOME/jre
ENV CATALINA_HOME /docker_home/local/tomcat的路径
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/bin

EXPOSE 8080
CMD tomact路径/bin/startup.sh
```









****



### FROM 指定镜像

指定镜像，必须是第一条指令。

### RUN 执行命令

执行行命令，有两种格式

shell：`RUN <命令>`

exec：`RUN ["可执行文件", "参数N"]`

在需要套多层的时候，建议使用`&&`，不要一行一个RUN。**因为Dockerfile 中每一个指令都会建立一层，**Union FS 是有最大层数限制的，比如 AUFS，曾经是最大不得超过 42 层，现在是不得超过 127 层。

```dockerfile
# 错误的
RUN apt-get update
RUN apt-get update
# 正确的
RUN apt-get update\
		&& apt-get update
```



### COPY 复制命令

```dockerfile
COPY [--chown=<user>:<group>] <源路径>... <目标路径>
COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]
```

用于**构建上下文目录**，源路径可以使用通配符，要要满足 Go 的 `filepath.Match`规则，目标路径是容器绝对路径

如果源路径为文件夹，复制的时候不是直接复制该文件夹，而是将文件夹中的内容复制到目标路径。

### ADD 高级的复制命令

与COPY差不多，能用COPY就用COPY，少用ADD。如果需要自动解压就用ADD，如果源路径是tar压缩格式gzip，bzip2，xz的话文件则会自动解压到目标路径上。

```dockerfile
FROM scratch
ADD ubuntu-xenial-core-cloudimg-amd64-root.tar.gz /
...
```



### CMD 容器启动命令

和RUN差不多

shell：`CMD <命令>`

exec：`CMD ["可执行文件", "参数N"]`

Docker是容器，容器就是进程。启动容器时需要指定所运行程序及参数，`CMD`指令就是指定默认的容器主进程的启动命令。

容器只有前台没有后台，所有应用都应该在前台执行。

如果想启动NGINX写成这样：`CMD service nginx start`

会发现容器执行后立刻退出，就算使用`systemctl`会发现无法使用，因为容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出。

因此应该直接执行 `nginx` 可执行文件，并且要求以前台形式运行。

```dockerfile
CMD ["nginx", "-g", "daemon off;"]
```



### ENTRYPOINT 入口点

格式和CMD一样，不同点在于当指定了 `ENTRYPOINT` 后，`CMD` 的含义就发生了改变，不再是直接的运行其命令，而是将 `CMD` 的内容作为参数传给 `ENTRYPOINT` 指令：`<ENTRYPOINT> "<CMD>"`

**1.让镜像变成像命令一样使用**

如果要获取IP地址：

```dockerfile
CMD [ "curl", "-s", "http://myip.ipip.net" ]
docker build -t myip .
$ docker run myip
当前 IP：61.148.226.66 来自：北京市 联通
```

如果想显示HTTP头信息就需要加上`-i`参数，但是跟在镜像名后面的是`command` 会替换CMD默认值，`-i` 根本不是命令。

```shell
$ docker run myip -i
docker: Error response from daemon: invalid header field value "oci runtime error: container_linux.go:247: starting container process caused \"exec: \\\"-i\\\": executable file not found in $PATH\"\n".
$ docker run myip curl -s http://myip.ipip.net -i
```



因此需要用 `ENTRYPOINT` 实现，将 `CMD` 内容作为参数传给 `ENTRYPOINT`

```dockerfile
ENTRYPOINT [ "curl", "-s", "http://myip.ipip.net" ]
docker run myip -i
```



### ENV 环境变量

设置环境变量

`ENV <key> <value>`

`ENV <key1>=<value1> <key2>=<value2>...`

设置了环境变量`$NODE_VERSION`，作为版本号构建镜像。

```dockerfile
ENV NODE_VERSION 7.2.0
RUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz"
```



### VOLUME 定义匿名卷

`VOLUME ["<路径1>", "<路径2>"...]`
`VOLUME <路径>`

 `mydata` 这个命名卷挂载到了 `/data` 这个位置，替代了 `Dockerfile` 中定义的匿名卷的挂载配置。

```dockerfile
VOLUME /data
$ docker run -d -v mydata:/data xxxx
```



### EXPOSE 暴露端口

 `EXPOSE <端口1> [<端口2>...]`

要将 `EXPOSE` 和在运行时使用 `-p <宿主端口>:<容器端口>` 区分开来。而 `EXPOSE` 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射。



### WORKDIR 指定工作目录

 `WORKDIR <工作目录路径>`

看看下面的错误示例，运行后是找不到`/app/world.txt`文件。因为在shell中是同一个进程执行环境，但是在`docker`中是两个不同的容器。

```dockerfile
RUN cd /app
RUN echo "hello" > world.txt
```

因此如果想改变工作目录则需要，`RUN pwd` 的工作目录为 `/a/b/c`。

```dockerfile
WORKDIR /a
WORKDIR b
WORKDIR c

RUN pwd
```



### USER 指定当前用户

`USER <用户名>[:<用户组>]`

```dockerfile
# 建立 redis 用户
RUN groupadd -r redis && useradd -r -g redis redis
```



### HEALTHCHECK 健康检查

`HEALTHCHECK [选项] CMD <命令>`：设置检查容器健康状况的命令

`HEALTHCHECK NONE`：如果基础镜像有健康检查指令，使用这行可以屏蔽掉其健康检查指令

支持下列选项：

- `--interval=<间隔>`：两次健康检查的间隔，默认为 30 秒；
- `--timeout=<时长>`：健康检查命令运行超时时间，如果超过这个时间，本次健康检查就被视为失败，默认 30 秒；
- `--retries=<次数>`：当连续失败指定次数后，则将容器状态视为 `unhealthy`，默认 3 次。

**和 `CMD`, `ENTRYPOINT` 一样，`HEALTHCHECK` 只可以出现一次，如果写了多个，只有最后一个生效。**



### ONBUILD 为他人作嫁衣裳

格式：`ONBUILD <其它指令>`。

在当前镜像构建时并**不会被执行**。只有当以当前镜像为基础镜像，去构建下一级镜像的时候才会被执行。

流程是初始化环境，等其他项目的`Dockerfile`执行完在回来执行`ONBUILD `的指令运行项目。

```dockerfile
FROM node:slim
RUN mkdir /app
WORKDIR /app
ONBUILD COPY ./package.json /app
ONBUILD RUN [ "npm", "install" ]
ONBUILD COPY . /app/
CMD [ "npm", "start" ]
```

各个项目的Dockerfile：

```dockerfile
FROM my-node
```



### LABEL 为镜像添加元数据

`LABEL` 指令用来给镜像以键值对的形式添加一些元数据（metadata）。

```dockerfile
LABEL <key>=<value> <key>=<value> <key>=<value> ...

LABEL org.opencontainers.image.authors="yeasy"
LABEL org.opencontainers.image.documentation="https://yeasy.gitbooks.io"
```



### SHELL 指令

格式：`SHELL ["executable", "parameters"]`



## Docker 网络

启动一个容器，docker容器就会有一个IP地址，只要装了网卡就有docker0，桥接模式使用的技术是：`evth-pair`

查看IP：`ip addr`

`docker exec -it 容器名 ip addr`

```
容器1：261:eth0@if262
主机：262:veth@if261

容器2：263:eth0@if264
主机：264:veth@if263
```

容器1(261)连着Docker 0(262)

容器2(263)连着Docker 0(264)

Docker 0直连NAT到物理网卡就是主机的网卡。

可以得出结论，容器1与容器2不是直连的，都需要经过Docker 0路由（主机）。

**Docker中的所有网络接口都是虚拟的，转发效率高。**



`--link`：在hosts中添加配置，不推荐使用

`docker network ls`：查看docker网络



网络模式：

none：不配置

bridge：桥接 docker ，默认

host：与主机共享网络

container：容器网络联通，用的少。

自定义网络：

```shell
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet

# 通过--net指定网络
docker run -d -P --name tomcat-net-01 --net mynet tomcat
```



网络连通

将 tomcat01 放在 mynet 网络下

`docker network connect mynet tomcat01`



## Docker Compose

安装

```shell
curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

curl -L "https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
/usr/local/bin/docker-compose --version
```



```shell
mkdir composetest
cd composetest

cat requirements.txt
# requirements.txt
flask
redis
```



配置Compose

`docker-compose.yml`

```yaml
version: "1"
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
```



`docker network ls`

找到`	composetest_default`

查看网络信息：`docker network inspect NAME或ID`

运行：`docker-compose up`

后台运行：`docker-compose up -d`



yaml规则

```yaml
version:	#版本
services:	# 服务
	服务1:
		# 配置
	服务2:
		dockerfile:
volumes:
networks:
configs:
```



**部署wordpress**

`cd my_wordpress/`

> image：镜像
>
> volumes：数据卷
>
> restart：是否重启，总是重启
>
> environment：配置数据库（改root密码就行）

```yaml
version: "3.9"
    
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: somewordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - wordpress_data:/var/www/html
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
  wordpress_data: {}
```

运行：`docker-compose up`

后台运行：`docker-compose up -d`



如果有镜像（`image`）就是这么简单。如果没镜像就要自己写Dockerfile



## 容器备份恢复

`docker ps`

生成Docker镜像的容器快照：

`docker commit -p ID 备份容器名-backup`

通过`docker images`查看镜像

一个是我们可以登录进Docker注册中心，并推送该镜像到自己的Repositories中；另一种选择是是我们可以将Docker镜像打包成tar包备份到本地。

保存到本地：

```shell
 docker save -o ~/备份容器名-backup.tar 备份容器名-backup
```



`docker login`

上传之前，要先对镜像加tag：

`local-image`：本地镜像名

`new-repo`：仓库名

`tagname`：版本号（latest最新）

```shell
docker tag local-image new-repo:tagname
docker push new-repo:tagname
```





恢复镜像：`docker pull 仓库名:tagname`

恢复本地：`docker load -i ~/备份容器名-backup.tar`



## PHP构建加速

```dockerfile
RUN sed -i "s@http://deb.debian.org@http://mirrors.aliyun.com@g" /etc/apt/sources.list && \
    apt-get clean


# https://stephen520.cn/blog/10242
# https://www.stephen520.cn/blog/10252
RUN sed -i "s@http://deb.debian.org@http://mirrors.aliyun.com@g" /etc/apt/sources.list && \
    rm -Rf /var/lib/apt/lists/* && \
    apt-get update && \
    apt-get install -y curl telnet git zlib1g-dev && \
    /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone && \
    docker-php-ext-install zip pdo pdo_mysql opcache mysqli && \
    apt-get install -y nginx supervisor && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    php -r "unlink('composer-setup.php');" && \
    pecl install redis mongodb swoole && \
    rm -rf /tmp/pear && \
    docker-php-ext-enable redis mongodb swoole && \
    apt-get clean && rm -rf /var/cache/apt/*
```

