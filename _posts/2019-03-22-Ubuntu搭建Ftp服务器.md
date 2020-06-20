---
layout: post_layout
title: Ubuntu搭建Ftp服务器
location: 攀枝花
pulished: true
---

### 前言
因为学习了**javawab**，在服务器上搭建了tomcat服务器，
需要解决资源上传的问题。
### 一、安装

	sudo apt-get install vsftpd
	
安装完成后可以察看下服务状态（其实安装完成了就会提示已经在运行了）

	sudo service vsftpd status

### 二、配置文件  
**/etc/vsftpd.config**（主配置文件）

下面是我搭建时修改的内容

	anonymous_enable=NO //设置不允许匿名登陆
	local_enable=YES //设置允许本地登陆
	write_enable=YES //设置FTP可写
	chroot_local_user=YES //设置加入vsftpd.chroot_list中的用户可以通过ftp访问
	chroot_list_enable=YES //设置vsftpd.chroot_list
	chroot_list_file=/etc/vsftpd.chroot_list //指定一下list，文件名是默认的，文件不一定存在，可以自己创建。

/etc/vsftpd.chroot_list（可访问的用户列表，如果没有这个文件可以新建，文件名与配置文件中的选项相对应。）
	
	一行一行存放用户名，例如：
	$ sudo vim /etc/vsftpd.chroot_list
	
	出现一个空文本（应该是吧0_0）...
	键盘点击i，进入-INSERT-模式，左下方应该会有显示。
	然后插入内容。比如：
	
	~root
	~ourftp
	~username
	
	输入完成后，点击键盘Esc键退出-INSERT-模式。
	输入:wq（意思为保存并退出）
	
	如果没有看懂的，可以百度一下vim的使用-_-（在下就不多言了...）。

### 三、ubuntu允许root登录ftp服务器
[参考链接](https://blog.csdn.net/qq_20545159/article/details/47701183)

	vim /etc/ftpusers
	ftpusers文件中列出的是被禁止登录ftp的用户 ，把root注释掉就行
	#root

### 四、如果要新建专用ftp用户链接ftp
[在下只能给个链接了-_-](https://blog.csdn.net/xufei512/article/details/52037497)

### 五、本地链接连接远程Ftp服务器

	fpt
	open 127.0.0.1 21（测试连接）
	成功标志
	220
	登录成功标志
	230 Login successful

	

	
	