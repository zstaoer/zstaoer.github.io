(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{514:function(s,a,e){"use strict";e.r(a);var t=e(2),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("docker相关")])]),s._v(" "),a("h2",{attrs:{id:"docker私有仓库的搭建步骤与上传命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker私有仓库的搭建步骤与上传命令"}},[s._v("#")]),s._v(" Docker私有仓库的搭建步骤与上传命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1、拉取私有仓库镜像 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2、启动私有仓库容器 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("registry "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 registry\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3、修改daemon.json，添加key，用于让 docker 信任私有仓库地址   ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/docker/daemon.json    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure-registries"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"私有仓库服务器ip:5000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4、重启docker 服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#测试：打开浏览器 输入地址http://私有仓库服务器ip:5000/v2/_catalog，看到{"repositories":[]} 表示私有仓库 搭建成功 ')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将镜像上传至私有仓库：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1、标记镜像为私有仓库的镜像     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag centos:7 私有仓库服务器IP:5000/centos:7\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2、上传标记的镜像     ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push 私有仓库服务器IP:5000/centos:7\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"docker的五大部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker的五大部分"}},[s._v("#")]),s._v(" Docker的五大部分")]),s._v(" "),a("ul",[a("li",[s._v("daemon守护进程，监控docker容器运行状态【了解】")]),s._v(" "),a("li",[s._v("docker客户端：用于数据docker指令操作docker的客户端")]),s._v(" "),a("li",[s._v("image（镜像）：是docker容器运行的程序包（类似被人写的jar）")]),s._v(" "),a("li",[s._v("repository（镜像仓库）：用于存放镜像程序包")]),s._v(" "),a("li",[s._v("container（容器）：docker镜像运行后的转态")])]),s._v(" "),a("h2",{attrs:{id:"问2-简述使用dockerfile制作jdk镜像的步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问2-简述使用dockerfile制作jdk镜像的步骤"}},[s._v("#")]),s._v(" 问2:简述使用dockerfile制作jdk镜像的步骤")]),s._v(" "),a("p",[s._v("编写 Dockerfile 文件\n#1.指定基础镜像，并且必须是第一条指令\nRROM centos:7")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.指明该镜像的作者和其电子邮件")]),s._v("\nMAINTAINER zs "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zs@qq.com"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.在构建镜像时，指定镜像的工作目录，之后的命令都是基于此工作目录，如果不存在，则会创建目录")]),s._v("\nWORKDIR /anuo_docker/jdk\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4.一个复制命令，把jdk安装文件复制到镜像中，语法：ADD <src>... <dest>,注意：jdk*.tar.gz使用的是相对路径")]),s._v("\nADD jdk-8u221-linux-x64.tar.gz  /anuo_docker/jdk\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5.配置环境变量")]),s._v("\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/anuo_docker/jdk/jdk1.8.0_221\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/dt.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar\nENV "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#容器启动时需要执行的命令(可以有可以不有)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#CMD ["java","-version"]')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("​\t\n​\t\n,执行dockerfile的命令(最后最后最后注意后面的点)")]),s._v(" "),a("p",[s._v("docker build -t jdk8:v1.0 .")]),s._v(" "),a("h2",{attrs:{id:"_1-查看容器aaa的详细信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看容器aaa的详细信息"}},[s._v("#")]),s._v(" 1.查看容器aaa的详细信息:")]),s._v(" "),a("p",[s._v("Docker inspect aaa")]),s._v(" "),a("h2",{attrs:{id:"_2-docker的核心组件有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker的核心组件有哪些"}},[s._v("#")]),s._v(" 2.Docker的核心组件有哪些?")]),s._v(" "),a("p",[s._v("镜像，容器，仓库")]),s._v(" "),a("h2",{attrs:{id:"问-dockerfile中的命令copy和add命令有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问-dockerfile中的命令copy和add命令有什么区别"}},[s._v("#")]),s._v(" 问：Dockerfile中的命令COPY和ADD命令有什么区别？")]),s._v(" "),a("p",[s._v("答：ADD自动解压,COPY不自动解压")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"问-如何在生产中监控docker运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问-如何在生产中监控docker运行"}},[s._v("#")]),s._v(" 问：如何在生产中监控Docker运行？")]),s._v(" "),a("p",[s._v("答：使用Docker提供docker stats和docker事件工具命令获取重要统计数据的报告来监控生产中的Docker。")]),s._v(" "),a("h2",{attrs:{id:"问1-docker常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问1-docker常用命令"}},[s._v("#")]),s._v(" 问1：docker常用命令")]),s._v(" "),a("p",[s._v("docker pull 拉取或者更新指定镜像\ndocker push 将镜像推送至远程仓库\ndocker rm 删除容器\ndocker rmi 删除镜像\ndocker images 列出所有镜像")]),s._v(" "),a("p",[s._v("docker ps 列出所有容器")]),s._v(" "),a("h2",{attrs:{id:"问2-dockerfile中最常见的指令是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问2-dockerfile中最常见的指令是什么"}},[s._v("#")]),s._v(" 问2：Dockerfile中最常见的指令是什么")]),s._v(" "),a("p",[s._v("FROM：指定基础镜像\nLABEL：功能是为镜像指定标签\nRUN：运行指定的命令")]),s._v(" "),a("p",[s._v("CMD：容器启动时要运行的命令")]),s._v(" "),a("p",[s._v("{补充}")]),s._v(" "),a("p",[s._v("{FROM：我们使用FROM为后续指令设置基本镜像。在每个有效的Dockerfile中，FROM是第一条指令。")]),s._v(" "),a("p",[s._v("LABEL：我们使用LABEL根据项目，模块，许可等组织我们的镜像。我们也可以使用LABEL来帮助实现自动化。在LABEL中，我们指定一个键值对，以后可用于以编程方式处理Dockerfile。")]),s._v(" "),a("p",[s._v("RUN：我们使用RUN命令在当前图像之上的新图层中执行任何指令。使用每个RUN命令，我们在图像上添加一些内容，并在Dockerfile的后续步骤中使用它。")]),s._v(" "),a("p",[s._v("CMD：我们使用CMD命令提供执行容器的默认值。在Dockerfile中，如果我们包含多个CMD命令，则只使用最后一条指令。}")]),s._v(" "),a("h2",{attrs:{id:"docker容器有几种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker容器有几种状态"}},[s._v("#")]),s._v(" Docker容器有几种状态？")]),s._v(" "),a("p",[s._v("Docker容器可以有三种状态：运行、已暂停、已退出")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"容器退出后-通过docker-ps-命令查看不到-数据会丢失么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器退出后-通过docker-ps-命令查看不到-数据会丢失么"}},[s._v("#")]),s._v(" 容器退出后，通过docker ps 命令查看不到，数据会丢失么？")]),s._v(" "),a("p",[s._v("容器退出后会处于终止（exited）状态，此时可以通过 docker ps -a 查看，其中数据不会丢失，还可以通过docker start 来启动，只有删除容器才会清除数据。")]),s._v(" "),a("h2",{attrs:{id:"什么是docker镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker镜像"}},[s._v("#")]),s._v(" "),a("strong",[s._v("什么是Docker镜像？")])]),s._v(" "),a("p",[s._v("Docker镜像是Docker容器的源代码。换句话说，Docker镜像用于创建容器。使用build命令创建镜像，并且在使用run启动时它们将生成容器。")]),s._v(" "),a("h2",{attrs:{id:"什么是docker容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是docker容器"}},[s._v("#")]),s._v(" 什么是Docker容器")]),s._v(" "),a("p",[s._v("Docker容器包括应用程序及其所有依赖项，作为操作系统的独立进程运行。")]),s._v(" "),a("h2",{attrs:{id:"问1-docker-e-命令表示什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问1-docker-e-命令表示什么"}},[s._v("#")]),s._v(" "),a("strong",[s._v("问1")]),s._v(':docker "- e " 命令表示什么')]),s._v(" "),a("p",[a("strong",[s._v("答")]),s._v("设置环境变量")]),s._v(" "),a("h2",{attrs:{id:"问2-docker容器和镜像的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问2-docker容器和镜像的区别"}},[s._v("#")]),s._v(" **问2:**docker容器和镜像的区别")]),s._v(" "),a("p",[s._v("**答:**镜像（Image）就是一个只读的模板。镜像可以用来创建 Docker 容器，一个镜像可以创建很多容器。")]),s._v(" "),a("p",[s._v("Docker 利用容器（Container）独立运行的一个或一组应用。容器是用镜像创建的运行实例。 它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。 可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。")]),s._v(" "),a("p",[s._v("2、如何停止所有正在运行的容器？")]),s._v(" "),a("p",[s._v("docker kill $(docker ps -q)")]),s._v(" "),a("p",[s._v("3、如何清理批量后台停止的容器？")]),s._v(" "),a("p",[s._v("docker rm $（docker ps -a -q）")]),s._v(" "),a("p",[s._v("Docker特点:-\n容器是完全使用沙箱机制，相互隔离")]),s._v(" "),a("ul",[a("li",[s._v("容器性能开销极低（体积小和启动快）")])]),s._v(" "),a("h3",{attrs:{id:"docker服务管理命令【6个】【精通】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker服务管理命令【6个】【精通】"}},[s._v("#")]),s._v(" Docker服务管理命令【6个】【精通】")]),s._v(" "),a("ul",[a("li",[s._v("systemctl start docker 启动")]),s._v(" "),a("li",[s._v("systemctl stop docker 停止")]),s._v(" "),a("li",[s._v("systemctl restart docker 重启")]),s._v(" "),a("li",[s._v("systemctl status docker查看状态")]),s._v(" "),a("li",[s._v("systemctl enable docker 设置开启启动")]),s._v(" "),a("li",[s._v("systemctl disable docker 设置开启不自动启动")])]),s._v(" "),a("h1",{attrs:{id:"只输出最近50条日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只输出最近50条日志"}},[s._v("#")]),s._v(" 只输出最近50条日志")]),s._v(" "),a("p",[s._v("docker logs -f --tail=50 mynginx")]),s._v(" "),a("p",[s._v("bridge模式是Docker默认的网络设置，此模式会为每一个容器分配Network Namespace、设置IP等，并将并将一个主机上的Docker容器连接到一个虚拟网桥上。")]),s._v(" "),a("p",[s._v("如果启动容器的时候使用host模式，那么这个容器将不会获得一个独立的Network Namespace，而是和宿主机共用一个Network Namespace。容器将不会虚拟出自己的网卡，配置自己的IP等，而是使用宿主机的IP和端口。")]),s._v(" "),a("p",[s._v("在none模式下，Docker容器拥有自己的Network Namespace，但是，并不为Docker容器进行任何网络配置。也就是说，这个Docker容器没有网卡、IP、路由等信息。需要我们自己为Docker容器添加网卡、配置IP等。")]),s._v(" "),a("p",[s._v("container模式:::::这个模式指定新创建的容器和已经存在的一个容器共享一个Network Namespace，而不是和宿主机共享。新创建的容器不会创建自己的网卡，配置自己的IP，而是和一个指定的容器共享IP、端口范围等。同样，两个容器除了网络方面，其他的如文件系统、进程列表等还是隔离的。两个容器的进程可以通过lo网卡设备通信。")])])}),[],!1,null,null,null);a.default=r.exports}}]);