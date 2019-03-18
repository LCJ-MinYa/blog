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
* jcore-react-native版本: 1.3.1 => 降级 1.2.2
> 首先保证rn版本不变动，采用jpush-react-native因为gradle版本过低会有各种问题，在不改变gradle版本的情况下，降级jpush-react-native插件版本

## 安装极光推送

* 1.安装jpush-react-native, jcore-react-native. <code>npm install jpush-react-native@版本号 jcore-react-native@版本号 --save</code>版本号分别为2.1.3和1.2.2
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

## IOS手动配置(重要)
* ios完全可以使用当前最新版本jpush-react-native版本: 2.5.1和jcore-react-native版本: 1.3.1,按照文档配置即可，但是因为andorid的问题降级版本，所以需要特殊配置
* 1.首先按照文档配置
* 2.AppDelegate.m不会自动写入文件，需要手动填写
```
//头部引入
#import <RCTJPushModule.h>
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

//方法引入
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [JPUSHService registerDeviceToken:deviceToken];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
{
  [[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
}

- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
{
  [[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object: notification.userInfo];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)   (UIBackgroundFetchResult))completionHandler
{
  [[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
}

- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler
{
  NSDictionary * userInfo = notification.request.content.userInfo;
  if ([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
    [[NSNotificationCenter defaultCenter] postNotificationName:kJPFDidReceiveRemoteNotification object:userInfo];
  }
  
  completionHandler(UNNotificationPresentationOptionAlert);
}

- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler
{
  NSDictionary * userInfo = response.notification.request.content.userInfo;
  if ([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
    [[NSNotificationCenter defaultCenter] postNotificationName:kJPFOpenNotification object:userInfo];
  }
  
  completionHandler();
}


//调用
  JPUSHRegisterEntity * entity = [[JPUSHRegisterEntity alloc] init];
  entity.types = UNAuthorizationOptionAlert|UNAuthorizationOptionBadge|UNAuthorizationOptionSound;
  [JPUSHService registerForRemoteNotificationConfig:entity delegate:self];(这里是ios弹框让用户允许推送，rn内的initPush在该版本不可用，必须添加到原生中.)
  [JPUSHService setupWithOption:launchOptions appKey:@"3f6a10618e27be707fa06fad"
                        channel:nil apsForProduction:nil];
```


## 错误处理

### Android错误

* 1.sdk相关错误（将android 9.0 = 6.0等都勾选下载sdk）
* 2.':jcore-react-native:verifyReleaseResources'. > com.android.ide.common.process.ProcessException: Failed to execute aap(参考下面问题排查借鉴网址)
> 将node_module中jcore-react-native和jpush-react-native的compileSdkVersion和targetSdkVersion都改为26（目录为/android/build.gradle, buildToolsVersion有些也需要修改为26.0.3）
* 3.错误: 无法将类 JPushPackage中的构造器 JPushPackage应用到给定类型;
> MainApplication.java文件中new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG)必须带参数

### IOS错误
* 1.Module RCTJPushModule requires main queue setup since it overrides `init` but doesn't implement `requiresMainQueueSetup`.
```
目录: /node_modules/jpush-react-native/ios/RCTJPushModule/RCTJPushModule.m 230行处添加

+ (BOOL)requiresMainQueueSetup {
    return YES;
}
```

* 2.ios系统8.0真机运行各种报错，不能使用低版本(纠结了一天。。。)
* 3.ios真机运行提示A valid provisioning profile for this executable was not found错误
```
问题是因为切换不同的team造成的

打开项目里的project.pbxproj工程文件中,把签名TeamID全部手动替换成目标TeamID
```

## JS中使用
* 指定用户推送，服务器提供绑定和解绑RegisterationID接口，需要存储在数据库
* 只有IOS才能设置Badge，IOS的允许推送注册在原生代码中.
* Android原生推送没有角标设置，各个厂商有自己的集成
* Android推送必须自启动（默认未开启自启动，需要用户手动开启）
* Android推送消息有延迟
* Android的addReceiveNotificationListener和addReceiveOpenNotificationListener方法可以用，前提是必须先调用initPush和notifyJSDidLoad方法.
```
    componentDidMount() {
        //没有消息中心，所以每次进入默认清除Badge
        if (Platform.OS === 'ios') {
            JPushModule.setBadge(0, success => {});
        } else {
            JPushModule.initPush();
            JPushModule.notifyJSDidLoad((resultCode) => {
                console.log(resultCode);
            });
        }
        AuthStorage.getStorageRegistrationID().then(Registeration_Id => {
            console.log(Registeration_Id);
            if (!Registeration_Id) {
                JPushModule.getRegistrationID(RegisterationID => {
                    this.doPushRegisterWithAuthToken(RegisterationID);
                    AuthStorage.setStorageRegistrationID(RegisterationID);
                })
            } else {
                this.doPushRegisterWithAuthToken(Registeration_Id);
            }
        })

        // JPushModule.addOpenNotificationLaunchAppListener(result => {
        //     console.log('点击推送启动应用事件');
        //     console.log(result);
        //     JPushModule.setBadge(0, success => {})
        // })
        JPushModule.addReceiveNotificationListener(result => {
            console.log('接收推送事件');
            console.log(result);
            if (Platform.OS === 'ios') {
                JPushModule.setBadge(result.aps && result.aps.badge, success => {})
            }
        });
        JPushModule.addReceiveOpenNotificationListener(result => {
            console.log('点击推送事件');
            console.log(result);
            if (Platform.OS === 'ios') {
                JPushModule.setBadge(result.aps && result.aps.badge - 1, success => {})
            }
        });
        // JPushModule.addnetworkDidLoginListener(result => {
        //     console.log('添加网络已登录事件回调');
        //     console.log(result);
        // })
    }
    componentWillUnmount() {
        // JPushModule.removeOpenNotificationLaunchAppEventListener();
        JPushModule.removeReceiveNotificationListener();
        JPushModule.removeReceiveOpenNotificationListener();
    }
```

## 问题排查借鉴网址
[Execution failed for task ':jcore-react-native:verifyReleaseResources'.](https://github.com/jpush/jpush-react-native/issues/541)
[错误: 无法将类 JPushPackage中的构造器 JPushPackage应用到给定类型](https://github.com/jpush/jpush-react-native/issues/168)
[A valid provisioning profile for this executable was not found真机调试不能运行](https://www.jianshu.com/p/99a7b3fc2ce9)








