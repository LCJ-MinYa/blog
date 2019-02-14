---
title: ReactNative极光推送
date: 2019-02-14 13:53:55
categories: reactnative
tags:
- reactnative
- app
- 跨平台app
---

## 前提条件

* rn版本: 0.56.0
* com.android.tools.build:gradle:2.3.3
* distributionUrl=https\://services.gradle.org/distributions/gradle-3.5.1-all.zip
* 当前时间2019-02-14(最新版本如下)
* jpush-react-native版本: 2.5.1 => 降级 2.1.3
* jcore-react-native版本: 1.3.1 => 降级 1.2.1
> 首先保证rn版本不变动，采用jpush-react-native因为gradle版本过低会有各种问题，在不改变gradle版本的情况下，降级jpush-react-native插件版本

## 安装极光推送

* 1.安装jpush-react-native, jcore-react-native. <code>npm install jpush-react-native@版本号 jcore-react-native@版本号 --save</code>版本号分别为2.1.3和1.2.1
* 2.<code>react-native link jpush-react-native</code>(针对性的link，避免之前手动配置的其它插件重复配置造成报错)
* 3.<code>react-native link jcore-react-native</code>(针对性的link，避免之前手动配置的其它插件重复配置造成报错)

## Android手动配置(重要)
* 1.保证配置/android/app/build.gradle
```
android {
    defaultConfig {
        applicationId "yourApplicationId"
        ...
        manifestPlaceholders = [
                JPUSH_APPKEY: "yourAppKey", //在此替换你的APPKey
                APP_CHANNEL: "default"    //应用渠道号
        ]
    }
}

dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile project(':jpush-react-native')  // 添加 jpush 依赖
    compile project(':jcore-react-native')  // 添加 jcore 依赖
    compile "com.facebook.react:react-native:+"  // From node_modules
}
```

* 2.保证配置/android/settings.gradle
```
include ':jpush-react-native'
project(':jpush-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jpush-react-native/android')
include ':jcore-react-native'
project(':jcore-react-native').projectDir = new File(rootProject.projectDir, '../node_modules/jcore-react-native/android')
```

* 3.保证配置/android/app/src/main/AndroidManifest.xml
```
<application
    ...
    <!-- Required . Enable it you can get statistics data with channel -->
    <meta-data android:name="JPUSH_CHANNEL" android:value="${APP_CHANNEL}"/>
    <meta-data android:name="JPUSH_APPKEY" android:value="${JPUSH_APPKEY}"/>

</application>
```

* 4.保证配置/android/app/src/main/java/com/xzy/MainApplication.java
```
import cn.jpush.reactnativejpush.JPushPackage;   // <--   导入 JPushPackage
public class MainApplication extends Application implements ReactApplication {

    // 设置为 true 将不会弹出 toast
    private boolean SHUTDOWN_TOAST = false;
    // 设置为 true 将不会打印 log
    private boolean SHUTDOWN_LOG = false;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected String getJSMainModuleName() {         // rn 0.49 后修改入口为 index
            return "index";
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG)   //  <-- 添加 JPushPackage
             );
        }
    };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
```

## 错误处理

### Android错误

* 1.sdk相关错误（将android 9.0 = 6.0等都勾选下载sdk）
* 2.Execution failed for task ':jcore-react-native:verifyReleaseResources'. > com.android.ide.common.process.ProcessException: Failed to execute aap(参考下面问题排查借鉴网址)
> 将node_module中jcore-react-native和jpush-react-native的compileSdkVersion和targetSdkVersion都改为26（目录为/android/build.gradle, buildToolsVersion有些也需要修改为26.0.3）
* 3.错误: 无法将类 JPushPackage中的构造器 JPushPackage应用到给定类型;
> MainApplication.java文件中new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG)必须带参数

## 问题排查借鉴网址
[Execution failed for task ':jcore-react-native:verifyReleaseResources'.](https://github.com/jpush/jpush-react-native/issues/541)
[错误: 无法将类 JPushPackage中的构造器 JPushPackage应用到给定类型](https://github.com/jpush/jpush-react-native/issues/168)









