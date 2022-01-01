# Git

## SSH密钥链接Github

生成SSH密钥

```sh
ssh-keygen
```

Github添加SSH密钥

在Github头像旁边的菜单中 Settings --> SSH and GPG keys --> SSH keys 中的右上角点击 New SSH key



测试SSH密钥

```shell
ssh -T git@github.com
```

设置Github账号的地址

```shell
git config --global user.name "username"
git config --global user.email "useremail"

# 比如
git config --global user.name "zyugat"
git config --global user.email "zyugatcn@gmail.com"
```

如果成功的话

```shell
Hi Tsanfer! You've successfully authenticated, but GitHub does not provide shell access.
```



## 命令

```sh
echo "# studyGit" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:zyugat/studyGit.git
git push -u origin main

# 自定义文件夹
 git clone git@github.com:zyugat/studyGit.git mystudyGit
```



取消暂存：`git reset HEAD <file>`



别名:

```sh
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.br branch
```



`git fetch [remote-name]`：拉取更新，和不会自动合并到当前工作分支。





分支

```sh
# 创建分支
git branch dev
# 切换分支
git checkout dev

# 新建并切换分支
git branch -b dev

# 合并分支,需先切换到 main 主分支上在执行
git checkout main
git merge dev

# 删除分支
# 如果分支 dev 还未合并到 main 会提示无法删除,需使用 -D 强制删除
git branch -d dev

# 查看本地分支
git branch
# 查看远程分支
git branch -r

# 果远程分支有个 develop ，而本地没有，你想把远程的 develop 分支迁到本地：
git checkout -b develop origin/develop
```



版本

```sh
# 查看 tag
git tag

# 创建 tag
git tag v1.2

git push --tags
```



diff

对比

`git diff a.md b.md`



stash：暂存代码

```sh
# 暂存代码
git stash

# 查看暂存代码
git stash list

# 恢复
git stash apply
# 恢复也可以使用 pop 好处是会自动删除记录
git stash pop

# 恢复完后最好删除那次记录
git stash drop

# 清空所有
git stash clear
```





merge 和 rebase 区别在于：

第一种做法是 merge ，比较粗鲁暴力，就直接腾出一块地方把另一个书架的书全部放进 去，虽然暴力，但是这种做法你可以知道哪些书是来自另一个书架的；第二种做法就是 rebase ，他会把两个书架的书先进行比较，按照购书的时间来给他重新排序，然后重新放置 好，这样做的好处就是合并之后的书架看起来很有逻辑，但是你很难清晰的知道哪些书来自 哪个书架的。



## Git Flow

![image-20211227003017252](http://img.zyugat.cn/zyuimg/2021-12-26_3104c7cea71f3.png)



- master：永远处在即将发布(production-ready)状态 

- develop：最新的开发状态



- feature: 开发新功能的分支, 基于 develop, 完成后 merge 回 develop 

- release: 准备要发布版本的分支, 用来修复 bug，基于 develop，完成后 merge 回 develop 和 master 

- hotfix: 修复 master 上的问题, 等不及 release 版本就必须马上上线. 基于 master, 完成后 merge 回 master 和 develop



https://github.com/nvie/gitflow



举个例子，假设我们已经有 master 和 develop 两个分支了，这个时候我们准备做一个功能 A，第一步我们要做的，就是基于 develop 分支新建个分支： git branch feature/A 

看到了吧，其实就是一个规范，规定了所有开发的功能分支都以 feature 为前缀。 但是这个时候做着做着发现线上有一个紧急的 bug 需要修复，那赶紧停下手头的工作，立刻 切换到 master 分支，然后再此基础上新建一个分支： git branch hotfix/B 

代表新建了一个紧急修复分支，修复完成之后直接合并到 develop 和 master ，然后发布。 然后再切回我们的 feature/A 分支继续着我们的开发，如果开发完了，那么合并回 develop 分 支，然后在 develop 分支属于测试环境，跟后端对接并且测试的差不多了，感觉可以发布到 正式环境了，这个时候再新建一个 release 分支：

```sh
git branch feature/A

git branch hotfix/B

git branch hotfix/B
```

