---
title: javascript面试知识点
date: 2020-12-2 16:52:45
categories: js
tags:
- 前端
- javascript
- 面试
---

# html部分

## html语义化标签的理解
* 什么是语义化，语义化之后文档会有什么效果呢？
{% note %}
1. 首先，语义化，顾名思义，就是你写的HTML结构，是用相对应的有一定语义的英文字母（标签）表示的，标记的，因为HTML本身就是标记语言。不仅对自己来说，容易阅读，书写。别人看你的代码和结构也容易理解，甚至对一些不是做网页开发的人来说，也容易阅读。那么，我们以后再开发的过程中，一定要注意了，尽量使用官方的有语义的标签，不要再使用一堆无意义的标签去堆你的结构。怎么知道，自己的页面结构是否语义化，那就要看你的HTML结构，在去掉CSS样式表之后，是否，依然能很好的呈现内容的结构，代码结构。也就是说，脱掉css的外衣，依然头是头，脚是脚。赤裸裸的完整的一篇文档。这也就是，语义化之后文档的效果。

2. 其实语义化，也无非就是自己在使用标签的时候多使用有英文语义的标签，比如h标签，在HTML中就是就是用来定义标题，还有p标签，英文是paragraph段落，table表格标签,等等。
{% endnote %}

* 为什么要语义化?
{% note %}
1. 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看；
2. 用户体验：例如title、alt用于解释名词或解释图片信息的标签尽量填写有含义的词语、label标签的活用；
3. 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
4. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以有意义的方式来渲染网页；
5. 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
{% endnote %}

* html5新增的语义化标签
{% note %}
1. header元素
2. footer元素
3. hgroup元素
hgroup元素代表“网页”或“section”的标题，当元素有多个层级时，该元素可以将h1到h6元素放在其内，譬如文章的主标题和副标题的组合
4. nav元素
5. aside元素
aside元素被包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名词解释等。
6. article元素
7. section元素
是一个主题性的内容分组，通常用于对页面进行分块或者对文章等进行分段
{% endnote %}

## DOCTYPE
* DOCTYPE有什么作用？标准模式与混杂模式如何区分？它们有何意义?
{% note %}
告诉浏览器使用哪个版本的HTML规范来渲染文档。DOCTYPE不存在或形式不正确会导致HTML文档以混杂模式呈现。
标准模式（Standards mode）以浏览器支持的最高标准运行；混杂模式（Quirks mode）中页面是一种比较宽松的向后兼容的方式显示。
{% endnote %}

* HTML5的DOCTYPE格式
{% note %}
 <!DOCTYPE HTML>
{% endnote %}

* HTML5为什么只需要写 <!DOCTYPE HTML>？
{% note %}
HTML5不基于SGML（Standard Generalized Markup Language 标准通用标记语言），因此不需要对DTD（DTD 文档类型定义）进行引用，但是需要DOCTYPE来规范浏览器行为。

HTML4.01基于SGML，所以需要引用DTD。才能告知浏览器文档所使用的文档类型，如下：
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
{% endnote %}

## 行内元素与块级元素
* 含义
{% note %}
1. 行内元素 -> 一个行内元素只占据它对应标签的边框所包含的空间。
2. 块级元素 -> 块级元素占据其父元素（容器）的整个空间，因此创建了一个“块”。通常浏览器会在块级元素前后另起一个新行。
{% endnote %}

* 区别
{% note %}
1. 块元素，总是在新行上开始；内联元素，和其他元素在一行；
2. 块元素，能容纳其他块元素或者内联元素；内联元素，只能容纳文本或其他内联元素；
3. 块元素中高度，行高以及顶和底边距都可以控制；内联元素中高，行高及顶和底边距不可改变。
{% endnote %}

* 块级元素
{% note %}
address - 地址
blockquote - 块引用
center - 举中对齐块
dir - 目录列表
div - 常用块级容易，也是css layout的主要标签
dl - 定义列表
fieldset - form控制组
form - 交互表单
h1 - 大标题
h2 - 副标题
h3 - 3级标题
h4 - 4级标题
h5 - 5级标题
h6 - 6级标题
hr - 水平分隔线
isindex - input prompt
menu - 菜单列表
noframes - frames可选内容（对于不支持frame的浏览器显示此区块内容）
noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）
ol - 排序列表
p - 段落
pre - 格式化文本
table - 表格
ul - 非排序列表
{% endnote %}

* 行内元素
{% note %}
a - 锚点
abbr - 缩写
acronym - 首字
b - 粗体（不推荐）
bdo - bidi override
big - 大字体
br - 换行
cite - 引用
code - 计算机代码（在引用源码的时候需要）
dfn - 定义字段
em - 强调
font - 字体设定（不推荐）
i - 斜体
img - 图片
input - 输入框
kbd - 定义键盘文本
label - 表格标签
q - 短引用
s - 中划线（不推荐）
samp - 定义范例计算机代码
select - 项目选择
small - 小字体文本
span - 常用内联容器，定义文本内区块
strike - 中划线
strong - 粗体强调
sub - 下标
sup - 上标
textarea - 多行文本输入框
tt - 电传文本
u - 下划线
var - 定义变量
{% endnote %}

* 如何转换
{% note %}
1. display
2. float
当把行内元素设置完float:left/right后，该行内元素的display属性会被赋予block值，且拥有浮动特性。行内元素去除了之间的莫名空白。
3. position
当为行内元素进行定位时，position:absolute与position:fixed.都会使得原先的行内元素变为块级元素。
{% endnote %}

## 导入样式link和@import区别
{% note %}
1. 从属关系区别
@import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

2. 加载顺序区别
加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

3. 兼容性区别
@import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

4. DOM可控性区别
可以通过 JS 操作 DOM ，插入link标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。
{% endnote %}

## 浏览器内核的理解(低)
{% note %}
主要分成两部分：渲染引擎(Layout Engine或Rendering Engine)和JS引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。
JS引擎：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
{% endnote %}

## 常见的浏览器内核有哪些？(低)
{% note %}
Trident( MSHTML )：IE MaxThon TT The World 360 搜狗浏览器
Geckos：Netscape6及以上版本 FireFox Mozilla Suite/SeaMonkey
Presto：Opera7及以上(Opera内核原为：Presto，现为：Blink)
Webkit：Safari Chrome 微软Edge
{% endnote %}

## HTML5新特性
{% note %}
1. canvas
2. 用于媒介回放的video和audio元素
3. 本地离线存储。localStorage长期存储数据，浏览器关闭后数据不丢失;sessionStorage的数据在浏览器关闭后自动删除
4. 语意化更好的内容元素，比如 article footer header nav section
5. 位置API：Geolocation
6. 表单控件，calendar date time email url search
7. 新的技术：web worker(web worker是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 在后台运行) web socket
拖放API：drag、drop
{% endnote %}

## iframe框架有那些优缺点？(低)
* 优点
{% note %}
1. iframe能够原封不动的把嵌入的网页展现出来。
2. 如果有多个网页引用iframe，那么你只需要修改iframe的内容，就可以实现调用的每一个页面内容的更改，方便快捷。
3. 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用iframe来嵌套，可以增加代码的可重用。
4. 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由iframe来解决。
{% endnote %}

* 缺点
{% note %}
1. 搜索引擎的爬虫程序无法解读这种页面
2. 框架结构中出现各种滚动条
3. 使用框架结构时，保证设置正确的导航链接。
4. iframe页面会增加服务器的http请求
{% endnote %}

## 页面可见性（Page Visibility）API 可以有哪些用途？(低)
{% note %}
1. 通过visibility state的值得检测页面当前是否可见，以及打开网页的时间。
2. 在页面被切换到其他后台进程时，自动暂停音乐或视频的播放。
{% endnote %}

# css部分

## css权重
{% note %}
CSS 权重优先级顺序简单表示为：
!important > 行内样式 > ID > 类、伪类、属性 > 标签名 > 继承 > 通配符
{% endnote %}
| 选择器 | 权重 |
| ---- | ---- |
| 通配符 | 0 |
| 标签  | 1 |
| 类/伪类/属性 | 10 |
| ID  | 100 |
| 行内样式  | 1000 |
| important  | 1/0(无穷大) |

## 移动端1px实现
* 问题根源
{% note %}
从移动端的角度说个具体的场景，以iphone6为例。

iphone6的屏幕宽度为375px，设计师做的视觉稿一般是750px，也就是2x，这个时候设计师在视觉稿上画了1px的边框，于是你就写了“border-width:1px”，so...1px边框问题产生了。

对设计师来说它的1px是相对于750px的（物理像素），对你来说你的1px是相对于375px的（css像素）“实际上你应该是border-width:0.5px”。
{% endnote %}
* 使用伪类 + transform实现
```css
div:before{
    content: "";
    display: block;
    position: absolute;
    left: -50%;
    width: 200%;
    height: 1px;
    background: #eaeaea;
    bottom: 0;
    -webkit-transform:scale(0.5);
    transform: scale(0.5);
}
```

* 通过 viewport + rem 实现
{% note %}
将border设置为1px,然后将页面根据设备的dpr缩小相应的倍数，接着将rem放大相应的倍数，这样页面中只有1px的边框缩小了，而其他内容经过缩小和扩大，还是原来的状态。(rem元素大小不变，仅仅是px元素会根据dpr进行缩放)。
{% endnote %}

## 垂直居中
* transform
```css
.father-box{
    display: none;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
}
.child-box{
    position: absolute;
    width: 240px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    -o-transform: translate3d(-50%,-50%,0);
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
}
```
* flex布局实现
* 绝对定位
```css
.use-absolute{
    position: relative;
    width:200px;
    height:150px;
    border:1px solid #000;
}
.use-absolute div{
    position: absolute;
    width:100px;
    height:50px;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background:#f60;
}
```
## 盒子模型
* 标准盒模型
{% note %}
标准盒模型：W3C标准
定义：一个块的总宽度=width+margin(左右)+padding(左右)+border(左右)
{% endnote %}
* 怪异盒模型
{% note %}
怪异盒模型：IE标准盒子模型
定义：一个块的总宽度=width+margin（左右）（既width已经包含了padding和border值）
{% endnote %}
* 怪异盒模型用处
{% note %}
box-sizing:content-box || border-box || inherit;
当设置为box-sizing:border-box时，将采用怪异模式解析计算；好处是便于整体计算，例如一个页面1000px，指定左右各500px，如果采用怪异模式，不需要care宽度和border，padding的影响，因为border,padding都归属于width。
{% endnote %}

## 隐藏元素方法
* `visibility: hidden`
{% note %}
使对象在网页上不可见，但该对象在网页上所占的空间没有改变，通俗来说就是看不见但摸得到。具体表现如下：
1. DOM结构：被渲染，但是被隐藏，会占据空间；
2. 事件监听：无法进行DOM事件监听；
3. 性能：动态改变此属性会引起重绘，性能较高；
4. 继承：会被子元素继承，子元素可以通过设置visibility:visible来取消隐藏；
5. transition：visibility会立即显示，隐藏时会延时。
{% endnote %}
* `display: none`
{% note %}
不为被隐藏的对象保留其物理空间，即该对象在页面上彻底消失，通俗来说就是看不见也摸不到。具体表现如下：
1. DOM结构，浏览器不会渲染display:none的元素，不占据空间；
2. 事件监听：无法进行DOM事件监听；
3. 性能：动态改变此属性会引起重排，性能较差；
4. 继承：不会被子元素继承，毕竟子类也不会渲染；
5. transition：transition不支持display。
{% endnote %}
* `opacity: 0`
{% note %}
与visibility: hidden相似，使对象在网页上不可见，但该对象在网页上所占的空间没有改变，但是可以进行DOM事件监听，visibility：hidden不可以,通俗来说就是看不见但是摸得着。具体表现如下：
1. DOM结构：透明度为100%，元素被隐藏，会占据空间；
2. 事件监听：可以进行DOM事件监听；
3. 性能：提升为合成层，不会引起重绘，性能较高；
4. 继承：会被子元素继承，子元素并不能通过opacity:1来取消隐藏；
5. transition：opacity可以延迟显示和隐藏。
{% endnote %}
* `position: absolute`通过使用绝对定位将元素移除可视区域内
* `z-index: -999`来使其他元素遮盖住该元素
* `clip/clip-path`使用元素裁剪,元素仍在页面中占据位置，但是不会响应绑定的监听事件。
* `transform: scale(0,0)`将元素缩放为 0，元素仍在页面中占据位置，但是不会响应绑定的监听事件。

## transition和animation的区别
{% note %}
* transition是过度属性，强调过度，它的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。
* animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。
{% endnote %}

## css3新特性
{% note %}
新增各种CSS选择器 （: not(.input)：所有 class 不是“input”的节点）
多列布局 （multi-column layout）
阴影和反射 （Shadoweflect）
文字特效 （text-shadow）
文字渲染 （Text-decoration）
线性渐变 （gradient）
旋转 （transform）增加了旋转,缩放,定位,倾斜,动画,多背景
边框新增属性 border-radius、box-shadow和border-image
box-sizing
{% endnote %}

## CSS Sprites 雪碧图
{% note %}
将一个页面涉及到的所有图片都包含到一张大图中去，然后利用CSS的 background-image，background-repeat，background-position属性的组合进行背景定位。

* 优点
能很好地减少网页的http请求，从而大大提高了页面的性能
能减少图片的字节，把3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

* 缺点
在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
在开发的时候相对来说有点麻烦，需要借助photoshop或其他工具来对每个背景单元测量其准确的位置
在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的CSS，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动CSS
{% endnote %}

## ::before 和 :after 的双冒号和单冒号有什么区别？(低)
{% note %}
1. 冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
2. ::before就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于dom之中，只存在在页面之中。

注意： :before 和 :after 这两个伪元素，是在CSS2.1里新出现的。起初，伪元素的前缀使用的是单冒号语法，但随着Web的进化，在CSS3的规范里，伪元素的语法被修改成使用双冒号，成为::before、::after。
{% endnote %}

## 移动端适配方法
* viewport适配
```js
//原理：通过设置 initial-scale , 将所有设备布局视口的宽度调整为设计图的宽度.

//获取meta节点
var metaNode = document.querySelector('meta[name=viewport]');
 
//定义设计稿宽度为375
var designWidth = 375;
 
//计算当前屏幕的宽度与设计稿比例
var scale = document.documentElement.clientWidth/designWidth;
 
//通过设置meta元素中content的initial-scale值达到移动端适配
meta.content="initial-scale="+scale+",minimum-scale="+scale+",maximum-scale="+scale+",user-scalable=no";
```

* 借助media实现rem适配
```css
//对屏幕大小划分了html不同的font-size
@media screen and (min-width: 320px) {html{font-size:50px;}}
@media screen and (min-width: 360px) {html{font-size:56.25px;}}
@media screen and (min-width: 375px) {html{font-size:58.59375px;}}
@media screen and (min-width: 400px) {html{font-size:62.5px;}}
@media screen and (min-width: 414px) {html{font-size:64.6875px;}}
@media screen and (min-width: 440px) {html{font-size:68.75px;}}
@media screen and (min-width: 480px) {html{font-size:75px;}}
@media screen and (min-width: 520px) {html{font-size:81.25px;}}
@media screen and (min-width: 560px) {html{font-size:87.5px;}}
@media screen and (min-width: 600px) {html{font-size:93.75px;}}
@media screen and (min-width: 640px) {html{font-size:100px;}}
@media screen and (min-width: 680px) {html{font-size:106.25px;}}
@media screen and (min-width: 720px) {html{font-size:112.5px;}}
@media screen and (min-width: 760px) {html{font-size:118.75px;}}
@media screen and (min-width: 800px) {html{font-size:125px;}}
@media screen and (min-width: 960px) {html{font-size:150px;}}
```
    {% note %}
rem：CSS的长度单位， 根元素字体大小的倍数，只有根元素字体大小有关； html 中的根元素即 html 元素。

大部分浏览器的默认字体大小都是16px，所以1rem = 16px；

rem适配原理:
长度单位都是用 rem 设置
当屏幕尺寸改变时，只需要修改 html 元素的 font-size 即可实现等比适配
我们在制作页面的时候，只考虑跟设计稿相同的屏幕尺寸即可，其他尺寸屏幕自动适配
{% endnote %}

* Flex弹性布局
```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"> 
```
    {% note %}
高度定死，宽度自适应，元素都采用px做单位。

随着屏幕宽度变化，页面也会跟着变化，效果就和PC页面的流体布局差不多，在哪个宽度需要调整的时候使用响应式布局调调就行（比如网易新闻），这样就实现了『适配』。
{% endnote %}

## px、em、rem的区别及使用场景
{% note %}
* px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
* em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
* em是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。
{% endnote %}

## 为什么需要清除浮动？清除浮动的方式
* 浮动的定义
{% note %}
非IE浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。
{% endnote %}

* 浮动的工作原理：
{% note %}
浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）
浮动元素碰到包含它的边框或者其他浮动元素的边框停留

浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”。
{% endnote %}

* 浮动元素引起的问题？
{% note %}
父元素的高度无法被撑开，影响与父元素同级的元素
与浮动元素同级的非浮动元素会跟随其后
若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构
{% endnote %}

* 清除浮动的方式如下：
{% note %}
给父级div定义height属性
最后一个浮动元素之后添加一个空的div标签，并添加clear:both样式
包含浮动元素的父级标签添加overflow:hidden或者overflow:auto
使用 :after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout**
{% endnote %}

## BFC(待)

## 设置小于12px的字体(低)
{% note %}
在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。

解决办法：
使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。
使用css3的transform缩放属性-webkit-transform:scale(0.5); 注意-webkit-transform:scale(0.75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/inline-block/...；
使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
{% endnote %}


# js部分
## js数据类型
根据ES6规范，共7种数据类型，分为基本数据类型（值类型）和对象数据类型（引用类型）
> 不能按照typeof函数的返回值划分简单类型：string,number,boolean,undefined; 复杂类型：object,function, typeof只是作为判断数据类型的存在

+ 基本数据类型（值类型）
    * 数字`number`
    * 字符串`string`
    * 布尔值`boolean`
    * 空值`null`
    * 未定义`undefined`
    * 符号`symbol`
+ 对象数据类型（引用类型）：   
    * 对象`object`
---

## undefined和null的区别
`null`表示没有对象，即该处不应该有值,`undefined`表示缺少值，即此处应该有值，但没有定义
```js
console.log(null == undefined);     //true  因为两者都默认转换成了false
console.log(typeof undefined);      //"undefined"  
console.log(typeof null);           //"object"  
console.log(null === undefined);    //false   "==="表示绝对相等，null和undefined类型是不一样的，所以输出“false”
```

---
## 扁平化数组
* toString

## 闭包
* 概念
{% note %}
闭包就是能够读取其他函数内部变量的函数。
由于在Javascript语言中，只有函数内部的子函数才能读取局部变量，因此可以把闭包简单理解成"定义在一个函数内部的函数"。
所以，在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
{% endnote %}

* 用途
{% note %}
1. 可以读取函数内部的变量
2. 让这些变量的值始终保持在内存中。
{% endnote %}

## 原型链与继承

## this指向

## es6新特性
{% note %}
字符串, 数组, 对象 扩展的api
变量扩展: let const 解构赋值 块级作用域
函数扩展: 箭头函数 默认参数, rest参数
展开运算符, 模板字符串
set 和 map数据结构
迭代器和生成器函数 next 和 yield的理解
proxy对象 属性代理器: 属性的读取（get）和设置（set）相关操作
promise对象, 异步编程的解决方案
async + await: 异步编程的终极方案 promise + generator的语法糖
class语法 构造函数的语法糖
模块化编程 export + import 的 导出和导入
{% endnote %}

## 箭头函数与函数区别

## http状态码
## cookie,session,token
{% note %}
Cookie：cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下,存储的大小很小只有4K左右。（key：可以在浏览器和服务器端来回传递，存储容量小，只有大约4K左右）

sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持，localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。（key：本身就是一个回话过程，关闭浏览器后消失，session为一个回话，当页面不同即使是同一页面打开两次，也被视为同一次回话）

localStorage：localStorage 在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。（key：同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效）
{% endnote %}

## 前端性能优化

## js运行机制，事件队列和循环

## 异步编程
* callback
* Promises
* async await
* 事件监听,发布订阅
## setTimeout、Promise、Async/Await 的区别
{% note %}
事件循环中分为宏任务队列和微任务队列。
其中settimeout的回调函数放到宏任务队列里，等到执行栈清空以后执行；
promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；async函数表示函数里面可能会有异步方法，await后面跟一个表达式，async方法执行时，遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。
{% endnote %}

## Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
{% note %}
promise构造函数是同步执行的，then方法是异步执行的
{% endnote %}

## new关键字做了什么
{% note %}
1.声明一个中间对象
2.将该中间对象的proto指向构造函数的原型
3.将构造函数的this通过apply指向中间对象
4.返回该中间对象,也就是返回了实例对象
{% endnote %}

## 深拷贝和浅拷贝
* 概念
{% note %}
如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。
{% endnote %}

* 深拷贝实现方式
1. 递归递归去复制所有层级属性(PS：只是一个基本实现的展示，并非最佳实践)
```js
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
```

2. 通过JSON对象来实现深拷贝
```js
//缺点： 无法实现对对象中方法的深拷贝，会显示为undefined
function deepClone2(obj) {
    var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
    return objClone;
}
```

3. 通过jQuery的extend方法实现深拷贝
```js
var array = [1,2,3,4];
var newArray = $.extend(true,[],array); // true为深拷贝，false为浅拷贝
```

4. lodash函数库实现深拷贝
```js
let result = _.cloneDeep(test)
```

5. 如果对象的value是基本类型的话，也可以用Object.assign来实现深拷贝，但是要把它赋值给一个空对象
```js
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({}, obj); // obj赋值给一个空{}
obj1.a = 3;
console.log(obj.a)；// 1
```

## 跨域解决方案
* 通过jsonp跨域
* postMessage跨域
{% note %}
postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
a.） 页面和其打开的新窗口的数据传递
b.） 多窗口之间消息传递
c.） 页面与嵌套的iframe消息传递
d.） 上面三个场景的跨域数据传递

用法：postMessage(data,origin)方法接受两个参数
data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。
{% endnote %}
* 跨域资源共享（CORS）
{% note %}
普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。
{% endnote %}
* nodejs中间件代理跨域
* nginx代理跨域
* WebSocket协议跨域

## 如果通过点击空白区域关闭一个弹窗
```js
window.addEventListener('click', bodyClosePopup);

function bodyClosePopup(event) {
    let selectBox = document.querySelector('.ant-select-dropdown');
    let modalBox = document.querySelector('.ant-modal-root');
    const path = event.path || (event.composedPath && event.composedPath());
    if (path.includes(modalBox) || path.includes(selectBox)) {
        return;
    }
    if (!this.dataSource.length) {
        return;
    }
    //符合条件,关闭弹窗
    this.popup = false;
},
```

# vue部分

## vue的生命周期

## Vue 的父组件和子组件生命周期钩子执行顺序是什么
{% note %}
加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
父组件更新过程
父beforeUpdate->父updated
销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
{% endnote %}

## vue响应式实现原理
* Object.defineProperty
* Object.defineProperty的缺陷
{% note %}
Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应; 为了解决这个问题，经过vue内部处理后可以使用以下几种方法来监听数组
push()
pop()
shift()
unshift()
splice()
sort()
reverse()

Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。


{% endnote %}

## 写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？
{% note %}
不用 key：
就地复用节点。在比较新旧两个节点是否是同一个节点的过程中会判断成新旧两个节点是同一个节点，因为 a.key 和 b.key 都是 undefined。所以不会重新创建节点和删除节点，只会在节点的属性层面上进行比较和更新。所以可能在某种程度上（创建和删除节点方面）会有渲染性能上的提升；

无法维持组件的状态。由于就地复用节点的关系，可能在维持组件状态方面会导致不可预知的错误，比如无法维持改组件的动画效果、开关等状态；

也有可能会带来性能下降。因为是直接就地复用节点，如果修改的组件，需要复用的很多节点，顺序又和原来的完全不同的话，那么创建和删除的节点数量就会比带 key 的时候增加很多，性能就会有所下降；

用 key：
维持组件的状态，保证组件的复用。因为有 key 唯一标识了组件，不会在每次比较新旧两个节点是否是同一个节点的时候直接判断为同一个节点，而是会继续在接下来的节点中找到 key 相同的节点去比较，能找到相同的 key 的话就复用节点，不能找到的话就增加或者删除节点。

查找性能上的提升。有 key 的时候，会生成 hash，这样在查找的时候就是 hash 查找了，基本上就是 O(1) 的复杂度。

节点复用带来的性能提升。因为有 key 唯一标识了组件，所以会尽可能多的对组件进行复用（尽管组件顺序不同），那么创建和删除节点数量就会变少，这方面的消耗就会下降，带来性能的提升。

总结：性能提升不能只考虑一方面，不是 diff 快了性能就快，不是增删节点少了性能就快，不考虑量级的去评价性能，都只是泛泛而谈。
说明：以上描述的「节点」和「组件」其实是同一个东西，只是表达上不同而已。
{% endnote %}

## 为什么 Vuex 的 mutation中不能做异步操作
{% note %}
因为异步操作是成功还是失败不可预测，什么时候进行异步操作也不可预测；当异步操作成功或失败时，如果不 commit(mutation) 或者 dispatch(action)，Vuex 和 Redux 就不能捕获到异步的结果从而进行相应的操作

因为更改state的函数必须是纯函数，纯函数既是统一输入就会统一输出，没有任何副作用；如果是异步则会引入额外的副作用，导致更改后的state不可预测

Vuex的异步操作可以放在action里面
{% endnote %}

## vue 不推荐for和if嵌套使用原因
{% note %}
原因：v-for比v-if优先级高，所以嵌套使用的的话，每次v-for都会执行v-if，造成不必要的计算，影响性能，尤其是当之需要渲染很小一部分的时候。
{% endnote %}

## v-show 与 v-if 有什么区别？
{% note %}
v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。
所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
{% endnote %}

## vue组件通信方式
* props / $emit 适用 父子组件通信
* ref 与 $parent / $children 适用 父子组件通信
* EventBus （$emit / $on） 适用于 父子、隔代、兄弟组件通信
* $attrs/$listeners 适用于 隔代组件通信
* provide / inject 适用于 隔代组件通信
* Vuex 适用于 父子、隔代、兄弟组件通信

## vue组件封装方式

## 全局price价格显示处理方式

## vue单页应用spa理解，优缺点
{% note %}
SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。
优点：

用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
基于上面一点，SPA 相对对服务器压力小；
前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
{% endnote %}

## 怎么监听对象某个属性更改
* 深度监测
```vue
new Vue({
  data: {
    count: 10，
    blog:{
        title:'my-blog',
        categories:[]
    }
  },
  watch: {
    blog:{
        handler(newVal,oldVal){
            console.log(`new: ${newVal}, old: ${oldVal}`);
        },
        deep:true
    }
  }
})
```
    {% note %}
里面的deep设为了true，这样的话，如果修改了这个blog中的任何一个属性，都会执行handler这个方法。不过这样会造成更多的性能开销，尤其是对象里面属性过多，结构嵌套过深的时候。而且有时候我们就只想关心这个对象中的某个特定属性，这个时候可以这样
{% endnote %}

* 用字符串来表示对象的属性调用
```vue
new Vue({
  data: {
    count: 10，
    blog:{
        title:'my-blog',
        categories:[]
    }
  },
  watch: {
    'blog.categories'(newVal, oldVal) {
        console.log(`new:${newVal}, old:${oldVal}`);
    }, 
  }
})
```

* 使用computed计算属性
```vue
new Vue({
  data: {
    count: 10，
    blog:{
        title:'my-blog',
        categories:[]
    }
  },
  computed: {
    categories() {
      return this.blog.categories;
    }
  },
  watch: {
    categories(newVal, oldVal) {
      console.log(`new:${newVal}, old:${oldVal}`);
    }, 
  },
})
```

## computed 和 watch 的区别和运用的场景？
{% note %}
computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；
watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；
运用场景：


当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；


当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
{% endnote %}

## Vue 获取初始化数据是放在created还是mounted
{% note %}
一般来说，可以在，created，mounted中都可以发送数据请求，但是，大部分时候，会在created发送请求。
Created的使用场景：如果页面首次渲染的就来自后端数据。因为，此时data已经挂载到vue实例了。
在 created（如果希望首次选的数据来自于后端，就在此处发请求）（只发了异步请求，渲染是在后端响应之后才进行的）、beforeMount、mounted（在mounted中发请求会进行二次渲染） 这三个钩子函数中进行调用。
因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是最常用的是在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求

有两个优点：
第一点：能更快获取到服务端数据，减少页面 loading 时间；
第二点：放在 created 中有助于一致性，因为ssr 不支持 beforeMount 、mounted 钩子函数。
{% endnote %}
{% note %}
也就是说Vue实例中的data和methods已经可以使用了。但是还没有挂载到页面上。可以在created里面去后端获取数据。

当进入mounted这个生命周期函数。此时页面已经渲染出来，可以进行dom操作。

总而言之。created生命周期函数，可以去后端异步获取数据，并保存到data里面。
mounted的话，如果需要在页面上操作dom，就要在这个函数执行。但是注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，那就需要使用到vm.$nextTick
{% endnote %}

## 组件中 data 为什么是一个函数？
{% note %}
因为组件是用来复用的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，组件实例之间的 data 属性值不会互相影响；而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。
{% endnote %}

## v-model 的原理？
{% note %}
我们在 vue 项目中主要使用 v-model 指令在表单 input、textarea、select 等元素上创建双向数据绑定，我们知道 v-model 本质上不过是语法糖，v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：

text 和 textarea 元素使用 value 属性和 input 事件；
checkbox 和 radio 使用 checked 属性和 change 事件；
select 字段将 value 作为 prop 并将 change 作为事件。
{% endnote %}
[自定义实现v-model示例](https://codepen.io/lcj-minya/pen/NWXYwLL)

## vue-router 路由模式有几种？
{% note %}
hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；

history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；

abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.
{% endnote %}

## 能说下 vue-router 中常用的 hash 和 history 路由模式实现原理吗？
{% note %}
（1）hash 模式的实现原理
早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
https://www.word.com#search
复制代码hash  路由模式的实现主要是基于下面几个特性：

URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送；
hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制hash 的切换；
可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变；或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值；
我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

（2）history 模式的实现原理
HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：history.pushState() 和 history.repalceState()。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史纪录。唯一不同的是，前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
复制代码history 路由模式的实现主要基于存在下面几个特性：

pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
我们可以使用 popstate  事件来监听 url 的变化，从而对页面进行跳转（渲染）；
history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。
{% endnote %}

## Vue 框架怎么实现对象和数组的监听？
{% note %}
如果被问到 Vue 怎么实现数据双向绑定，大家肯定都会回答 通过 Object.defineProperty() 对数据进行劫持，但是  Object.defineProperty() 只能对属性进行数据劫持，不能对整个对象进行劫持，同理无法对数组进行劫持，但是我们在使用 Vue 框架中都知道，Vue 能检测到对象和数组（部分方法的操作）的变化，那它是怎么实现的呢？我们查看相关代码如下：
复制代码通过以上 Vue 源码部分查看，我们就能知道 Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用  Object.defineProperty() 也能对对象和数组（部分方法的操作）进行监听。
{% endnote %}
```js
/**
* Observe a list of Array items.
*/
observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
        observe(items[i])  // observe 功能为监测数据的变化
    }
}

/**
* 对属性进行递归遍历
*/
let childOb = !shallow && observe(val) // observe 功能为监测数据的变化
```

## Proxy 与 Object.defineProperty 优劣对比
{% note %}
Proxy 的优势如下:

Proxy 可以直接监听对象而非属性；
Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

Object.defineProperty 的优势如下:

兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
{% endnote %}

## 异步路由

# 扩展

## 跨端开发框架，及优劣势

## linux命令

## shell脚本

## git命令

## 一般项目结构怎么划分，自行拓展过什么