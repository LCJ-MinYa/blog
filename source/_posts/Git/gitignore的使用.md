---
title: gitignore的使用
date: 2018-12-08 00:23:59
categories:
- git
tags: 
- js
- git
---

先上配置:  
<pre>
# OSX
#
.DS_Store

# Xcode
#
build/
*.pbxuser
!default.pbxuser
*.mode1v3
!default.mode1v3
*.mode2v3
!default.mode2v3
*.perspectivev3
!default.perspectivev3
xcuserdata
*.xccheckout
*.moved-aside
DerivedData
*.hmap
*.ipa
*.xcuserstate
project.xcworkspace

#CocoaPods
Pods
!Podfile
!Podfile.lock

# Android/IntelliJ
#
build/
.idea
.gradle
local.properties
*.iml

# node.js
#
node_modules/
npm-debug.log
yarn-error.log

# BUCK
buck-out/
\.buckd/
*.keystore

# fastlane
#
# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the
# screenshots whenever they are needed.
# For more information about the recommended setup visit:
# https://github.com/fastlane/fastlane/blob/master/fastlane/docs/Gitignore.md

fastlane/report.xml
fastlane/Preview.html
fastlane/screenshots

</pre>

#CocoaPods ios下cocoapods的忽略配置.  
Pods            #忽略pods文件  
!Podfile        #保留Podfile文件  
!Podfile.lock.  #保留Podfile.lock文件  