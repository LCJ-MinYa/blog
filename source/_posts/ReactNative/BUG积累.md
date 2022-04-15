---
title: BUG积累
date: 2018-12-07 23:35:58
categories: reactnative
tags: 
- reactnative
- app
- 跨平台app
---

## 安装
### windows10 所有都安装成功运行react-native run-android报找不到设备问题
> 原因1.如果在windows上初始化的项目，在mac运行安卓会有字符编码的问题.  
> 原因2.java_jdk版本必须为8，如果是java10，无论如何都不能通过命令行启动，只能通过android studio启动  



## 组件
### 子组件阻止父组件点击
```javascript
render() {
    <TouchableOpacity
        style={styles.popupWrapStyle}
        activeOpacity={1}
        onPress={this.closeModalPopup.bind(this)}
        onStartShouldSetResponderCapture={()=> true}
    >
        <View {...this.gestureHandlers} style={styles.popupViewStyle}>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
            <Text>123</Text>
        </View>
    </TouchableOpacity>
}

componentWillMount() {
    this.gestureHandlers = {
        onStartShouldSetResponderCapture: () => true,
    }
}
```
### 调用了一个未安装组件的setState警告
```javascript
Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component.

原因是当离开页面以后，组件已经被卸载，执行setState时无法找到渲染组件。
解决办法特别简单，在离开页面时的周期函数（componentWillUnmount）中：

//组件将被卸载  
componentWillUnmount(){ 
    //重写组件的setState方法，直接返回空
    this.setState = (state,callback)=>{
      return;
    };  
}

再来回切换页面以后，只要页面离开就会执行该方法，当页面再次进入时又会重新挂载父组件的setState方法，从而不影响页面的渲染。
不过该方法不是很严谨，在集成的子组件中能修改父组件的setState方法，不过在javascript的语法中很适用，建议只在出现上述bug的页面中使用。
```

### FlatList或ListView更改数据源视图不更新或者数据显示错乱
```javascript
/*  key如果是用的 item.index().toString()，key一直是0-9，所以数据不刷新
 *  此后，不建议key用数组下标显示
*/
```

### FlatList实现自适应高度
> FlatList默认flexGrow: 1,导致FlatList不能自适应高度，加上样式flexGrow: 0即可

### FlatList性能缓慢
> 警告信息如下: you have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.
```javascript
/*
 * 这是因为renderItemView()中渲染的组件没有继承自React.PureComponent
 * 推荐在FlatList和renderItemView中都继承React.PureComponent而不是React.Component
 */

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class MultiSelectList extends React.PureComponent {
  state = {selected: (new Map(): Map<string, boolean>)};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

/*
React.PureComponent 与 React.Component 几乎完全相同，但 React.PureComponent 通过prop和state的浅对比来实现 shouldComponentUpate()。
如果React组件的 render() 函数在给定相同的props和state下渲染为相同的结果，在某些场景下你可以使用 React.PureComponent 来提升性能。
React.PureComponent 的 shouldComponentUpdate() 只会对对象进行浅对比。如果对象包含复杂的数据结构，它可能会因深层的数据不一致而产生错误的否定判断(表现为对象深层的数据已改变视图却没有更新, 原文：false-negatives)。当你期望只拥有简单的props和state时，才去继承 PureComponent ，或者在你知道深层的数据结构已经发生改变时使用 forceUpate() 。或者，考虑使用 不可变对象 来促进嵌套数据的快速比较。
此外,React.PureComponent 的 shouldComponentUpate() 会忽略整个组件的子级。请确保所有的子级组件也是”Pure”的。
 */
```

### 0.55不能输入中文
```javascript
import React, {Component} from 'react';
import {Platform, TextInput} from 'react-native';

class WPTextInput extends Component {
  shouldComponentUpdate(nextProps){
    return Platform.OS !== 'ios' || (this.props.value === nextProps.value &&  
           (nextProps.defaultValue == undefined || nextProps.defaultValue == '' )) || 
           (this.props.defaultValue === nextProps.defaultValue && (nextProps.value == undefined || nextProps.value == '' ));
  }
  render() {
    return <TextInput {...this.props} />;
  }
};

export default WPTextInput;
```

### 0.55 0.56IOS不能输入中文，更新数据源不能更新界面，clear()方法不生效
```
/*
 * 修改node_modules源文件
 * 位置1: project/node_modules/react-native/Libraries/Text/TextInput/RCTBaseTextInputShadowView.m
 * 位置2: project/node_modules/react-native/Libraries/Text/TextInput/RCTBaseTextInputView.m
 */

  RCTBaseTextInputShadowView.m文件修改
  //26行新增
+   NSString *_text;

  //105行新增
+   - (NSString *)text
+   {
+     return _text;
+   }
+   - (void)setText:(NSString *)text
+   {
+     _text = text;
+     _previousAttributedText = _localAttributedText;
+   }

  RCTBaseTextInputView.m文件修改
  //340行修改
  if (_onChange) {
    ↓↓↓↓
  if (_onChange && backedTextInputView.markedTextRange == nil) {
```

### textinput作为组件，默认值(value为数组中的数据)初次不渲染
```javascript
//强制刷新
componentWillReceiveProps(nextProps) {
    if(nextProps.value && nextProps.isFirstUpdate){
        setTimeout(()=>{
            this.forceUpdate()
        }, 50)
    }
}
```

### Attempted to redefine property "XXXX"(OrderInvoiceMoney=> 自定义变量, width, fontSize等)
> 重新定义属性导致的报错，即一个属性定义多次.  
> 在测试debug模式中不会报错，编译正式包崩溃闪退，查看日志得知.


## 样式

### 安卓低版本borderRadius属性
安卓低版本<4.1.1>Image标签不支持borderRadius属性，需要用view包裹，在view上面设置borderRadius属性

### 字体图标font-weight
字体图标不能设置字体粗细，否则安卓会不识别

### IOS三倍分辨率border问题（设置小数点）
ios设置borderTopWidth: 0.5，在ios上会导致border失真(具体表现为border占据很大一块)
* 1.只有borderTopWidth会有该问题，borderBottomWidth不存在该问题，可将borderTopWidth改为borderBottomWidth
* 2.将borderTopWidth: 0.5改为borderTopWidth: 0.33(比例1/3 == 0.33)
```javascript
/*
 * hairlineWidth:CallExpression
 * 该用来定义当前平台最细的宽度。该属性用来设置边框或者两个组件之间的分割线
 */
{
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
}

```

## 编译

### Mac打包安卓正式包(gradlew相关报错)
执行sudo cd android && ./gradlew assembleRelease,报错信息:-bash: ./gradlew: No such file or directory  
进入android目录，单独执行./gradlew assembleRelease报错(-bash: ./gradlew: Permission denied)  
解决办法: chmod +x gradlew  

### windows运行rn项目报模块找不到(AccessibilityInfo 0.56.0)
> 原因：react-native项目本身版本的问题  
> 解决办法：修改package.json
* "react": "16.3.1"
* "react-native": "0.55.4"
* "babel-preset-react-native": "2.1.0"
* 删除node_modules然后重新安装

### windows中原文件有报错切运行过（修改报错并反复确认没问题还是报相同的错误=>git忽略文件夹大小写变动问题）
> react-native缓存问题  
> react-native start --reset-cache  

### main.jsbundle does not exist引发的惨案
```
这个报错是在安装极光推送之后编译Archive导致的报错.
最开始的猜测，因为测试环境真机和模拟器都没有报错，而正是环境main.jsbundle不存在=》以下尝试
1.尝试手动编译main.jsbundle，
2.下载推送的正式证书（因为极光推送涉及到推送证书，测试和正式又是不同的证书）
3.重新npm install
4.重新react-native link
5.尝试github上各种解决方法
都依然编译不能通过，再纠结一个小时之后，偶然看报错信息

+ DEST=/Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app
+ [[ Release = \D\e\b\u\g ]]
+ BUNDLE_FILE=/Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app/main.jsbundle
+ node /Users/minya/Desktop/zybfapp/Mobile/XZY/node_modules/react-native/local-cli/cli.js bundle --entry-file index.js --platform ios --dev false --reset-cache --bundle-output /Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app/main.jsbundle --assets-dest /Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app
Scanning folders for symlinks in /Users/minya/Desktop/zybfapp/Mobile/XZY/node_modules (12ms)
Scanning folders for symlinks in /Users/minya/Desktop/zybfapp/Mobile/XZY/node_modules (10ms)
warning: the transform cache was reset.
Loading dependency graph, done.

/Users/minya/Desktop/zybfapp/Mobile/XZY/node_modules/react-native-root-siblings/index.js: /Users/minya/Desktop/zybfapp/Mobile/XZY/node_modules/react-native-root-siblings/index.js: Exporting local "_default", which is not declared. (This is an error on an internal node. Probably an internal error.)（===============最后发现是一个第三方库的依赖文件，导出类的问题================）

+ [[ false != true ]]
+ [[ ! -f /Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app/main.jsbundle ]]
+ echo 'error: File /Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app/main.jsbundle does not exist. This must be a bug with'（===============最开始的报错信息，注意力一直在这里================）
error: File /Users/minya/Library/Developer/Xcode/DerivedData/XZY-blohpvcvoaocvvaiiqcahzynwdhp/Build/Intermediates.noindex/ArchiveIntermediates/XZY/BuildProductsPath/Release-iphoneos/XZY.app/main.jsbundle does not exist. This must be a bug with
+ echo 'React Native, please report it here: https://github.com/facebook/react-native/issues'
React Native, please report it here: https://github.com/facebook/react-native/issues
+ exit 2

结论：看报错信息，一定要一层一层往下面跟，因为反馈在表面的问题，往往是很多中错误的相同报错，特别是RN这种依赖IOS和Android原生的框架（看完整报错日志！！！！看完整报错日志！！！！看完整报错日志！！！！看完整报错日志！！！！看完整报错日志！！！！看完整报错日志！！！！看完整报错日志！！！！）
```

## RN项目缺陷（网上资料，备份）
* 1.此为网上看到的资料觉得在理，备份下![image](../../../../../images/rn/quexian.png)










