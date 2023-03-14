---
title: MongoDB使用技巧
date: 2018-12-07 23:34:42
categories: mongodb
tags:
- mongodb
- 数据库
---

## mongodb连接数据库
>mongo命令默认连接27017端口数据库
>要连接特定端口数据库命令:
```
mongo --port 端口号
```

## mongodb开启密码验证怎么登录
>首先通过上面命令连接数据库，然后use 对应数据库名，比如admin数据库--> use admin
>然后使用 db.auth("账号","密码");  

## mongodb添加新数据库账号
* 1.首先登陆admin账号，保证有创建新数据库账号的权限
```
use admin 
db.auth("userName","password") 
```
* 2.use你要新添加的数据库，然后创建用户(比如创建一个A的数据库)
```
#添加读写权限用户
use A 
db.createUser({user:"Auser",pwd:"password",roles:[{"role":"readWrite","db":"A"}]}) 

#添加超级用户
use admin
db.createUser({user:"root",pwd:"pwd",roles:[{role:"root",db:"admin"}]})

#角色类型
1. 数据库用户角色：read、readWrite;
2. 数据库管理角色：dbAdmin、dbOwner、userAdmin；
3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
4. 备份恢复角色：backup、restore；
5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
6. 超级用户角色：root  
// 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
7. 内部角色：__system
```

## mongodb删除用户
```
db.dropUser("root")
```

## mongodb查看具体数据
* <code>show dbs</code> 查看所有数据库
* <code>use hotel</code> 查看hotel数据库
* <code>show collections</code> 查看hotel数据库下所有集合
* `db.hotel.find()` 查看hotel数据库hotel集合下所有数据
* `db.hotel.find().count()` 查看hotel数据库hotel集合下所有数据条数

## mongodb导入json到数据库（包含密码验证）
* <code>mongoimport --port 9000 --username root --password 123456 --authenticationDatabase admin --db bill --collection bill --file bill.json</code>
* <code>--port</code> 指定端口号
* <code>--username</code> 指定用户名
* <code>--password</code> 指定密码
* <code>--authenticationDatabase</code> 指定用户和密码所存储的数据库
* <code>--db</code> 指定数据库名称
* <code>--collection</code> 指定集合名称
* <code>--file</code> 指定导入的json文件路径

## 查看mongo内存占用
```
top -p $(pidof mongod)
```

## 修改mongo默认占用内存大小(暂未生效，考虑升级版本)
```
storage:
  dbPath: /root/mongodb_data
  journal:
    enabled: true
  mmapv1:
    smallFiles: true
  wiredTiger:
    engineConfig:
      configString: cache_size = 512M //3.0写法
      #cacheSizeGB: 0.5 //3.4以上
尝试通过命令行追加--wiredTigerCacheSizeGB 0.5失败

net:
  port: 自己设置的端口
  bindIp: 127.0.0.1
```

## mongodb删除集合
```
db.collection.drop()
```

## mongodb 索引
* 创建索引（单字段索引）
```
db.collection.createIndex({field: sort})
#field 字段名称
#sort 排序方式1升序，-1降序，2(不常用)

#示例
db.collection.createIndex({name: 1})
```

* 创建索引（复合索引，查询条件不只一个时使用）
```
db.collection.createIndex({field1: sort, field2: sort})

#示例
db.collection.createIndex({name: 1, id: 1})
```

* 查看索引
```
#查看索引大小
db.collection.totalIndexSize()

#查看所有索引
db.collection.getIndexes()
```

* 删除索引
```
#删除指定索引
db.collection.dropIndex("index-name")

#删除所有索引
db.collection.dropIndexes()
```
