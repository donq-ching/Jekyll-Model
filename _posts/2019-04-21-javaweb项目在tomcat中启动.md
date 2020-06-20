---
layout: post_layout
title: Javaweb项目在Tomcat中启动步骤
location: 攀枝花
pulished: true
---

### 阿里云服务器
windows server 2012 **JDK** 配置系统环境变量

	JAVA_HOME
	C:\Program Files\Java\jdk1.8.0_181;

	PATH
	%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;

	CLASSPATH
	%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar;

**tomcat** 的项目启动文件

	\bin\startup.bat

### 防火墙打开80端口和21端口

	2019-02-20 12:52:40 星期三
	分别为tomcat服务器端口和ftp端口

### 图片的上传处理

	使用ftp上传
	数据库存放图片路径

### 未完善部分

	评论系统
	背景图的加载时间 大小：5M
	界面的各个美化
### 参考博文

[阿里云服务器搭建ftp（windows server 2012）](https://www.cnblogs.com/xuxiuxiu/p/6725247.html "阿里云服务器搭建ftp（windows server 2012）")

[阿里云服务器的外网访问（windows server 2012)](https://www.cnblogs.com/jepson6669/p/9010036.html "阿里云服务器的外网访问（windows server 2012)")
