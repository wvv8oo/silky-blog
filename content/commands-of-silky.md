
<!--
title: Silky的命令
-->

## 本文目标

* 全面介绍Silky的命令

## 如何使用

* Windows系统中，推荐使用`git bash`或者`power shell`
* *nix系统中，打开终端(Terminal)即可输入命令

## 命令介绍

### silky start

用于启动Silky，如果当前项目不是一个Silky项目，那么启动一个简易的http服务器。 

* `-e`或者`--environment` 用于指定运行环境，默认环境为`development`。例如`silky start -e production`的运行环境为`production`，关于Silky的运行环境，请参考：[Silky的运行环境介绍](running-environment-of-silky.html)
* `-p`或者`--port` 用于指定http服务器的端口，默认端口为`14422`，例如`silky start -p 8000`可以指定silky的端口为`8000`，之后就可以用`http://localhost:8000`访问你的项目了
* `-l`或者`--language`，指定语言，默认为`en`，例如`silky start -l cn`可以指定运行语言为中文。关于多语言，请参考：[在项目中使用多国语言](how-to-use-mutil-language-with-silky.html)
* `-s`或者`--sample`，启动示例项目

### silky build

编译Silky项目，也可以用于编译非Silky项目。

* `-o`或者`--output`，指定输出目录，默认情况下会输出到`./build`
* `-e`或者`--environment`，指定运行环境，build的默认环境为`production`
* `-f`或者`--force`，在非Silky项目中强行编译，如果你要编译的目录是一个非Silky项目，那么需要指定`-f`参数
* `-x`或者`--extra`，扩展参数，此参数提供给插件用，根据具体的插件而定
* `-c`或者`--config`，指定配置文件，默认情况下，配置文件文件为`.silky/config.js`，如果你想单独指定一个配置文件，可以使用此参数

### silky init 

在当前目录初始化silky项目，这将会在当前目录创建一个`.silky`的文件夹，并且会复制默认的配置文件到此目录，但不会删除当前目录的任何文件。

* `-f`或者`--force`，强制清除当前目录并创建一个示例项目，**警告：这将会删除当前目录的所有文件**

### silky install [plugin...]

安装Silky插件，可以指定一个插件名，也可以指定多个插件，插件名之间用空格隔开。如`silky install sample`，或者`silky install sample blog`
注意此功能需要访问`github.com`，由于众所周知的原因，github.com在某些时候可能会无法访问，所以，你需要保持github.com的畅通。

### silky uninstall [plugin...]

删除Silky插件，可以指定一个插件名，也可以指定多个插件，插件名之间用空格隔开。如`silky uninstall sample`，或者`silky uninstall sample blog`


### silky list

列出已经安装的silky插件