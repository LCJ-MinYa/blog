---
title: git命令
date: 2019-03-19 13:42:53
categories: git
tags:
- git
---

## 提交步骤
* 提交到暂存区<code>git add .</code>
* 提交到本地仓库<code>git commit -m 'xxx'</code>
* 拉取远程仓库<code>git pull</code>
* 提交远程仓库<code>git push</code>

## 查看当前git状态
* <code>git status</code>

## 放弃本地文件
* <code>git checkout fileName</code>放弃fileName文件修改
* <code>git checkout .</code>放弃所有本地文件修改

## 分支
* <code>git branch -a</code>查看所有分支
* <code>git remote prune origin</code>清理本地分支与远程分支同步(sourcetree在git远程删除分支后刷新也不会同步，必须执行git命令才能与远程分支同步)
