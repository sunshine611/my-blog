# vue-amap 高德地图

## 引入地图

一般项目中，对于 vue-amap 的初始化只需要调用 `initAMapApiLoader` 方法即可。

NPM 安装：

```javascript
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',...],
  v: '1.4.4'
});
```

CDN 引入：

```javascript
window.VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',...],
  v: '1.4.4'
});
```

## Promise

在**定制化程度较高**的项目中，开发者可能只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 `lazyAMapApiLoaderInstance`。

NPM 安装：

```javascript
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',...],
  uiVersion: '1.0' // ui库版本，不配置不加载,
  v: '1.4.4'
});

lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});
```

CDN 引入：

```javascript
window.VueAMap.initAMapApiLoader({
  key: 'YOUR_KEY',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType',...],
  v: '1.4.4'
});

window.VueAMap.lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});
```

## 参数

| 参数名    | 类型     | 默认值                                                          | 描述       |
| --------- | -------- | --------------------------------------------------------------- | ---------- |
| key       | `String` | ``                                                              | 高德 Key   |
| plugin    | `Array`  | `['Autocomplete', 'PlaceSearch', 'PolyEditor', 'CircleEditor']` | 插件       |
| uiVersion | `String` | ``                                                              | UI 库 版本 |
| v         | `String` | `1.4.4`                                                         | SDK 版本   |
| protocol  | `String` | `https`                                                         | 引用协议   |

## 静态属性

仅且可以初始化配置，不支持响应式。

| 名称            | 类型        | 说明                                                                                                                          |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| vid             | String      | 地图容器节点的 ID。                                                                                                           |
| amapManager     | AMapManager | 地图管理对象。                                                                                                                |
| defaultCursor   | String      | 地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。                                                          |
| animateEnable   | Boolean     | 地图平移过程中是否使用动画，默认为 true，即使用动画。                                                                         |
| isHotspot       | Boolean     | 是否开启地图热点，默认 false 不打开。                                                                                         |
| rotateEnable    | Boolean     | 地图是否可旋转，默认 false。                                                                                                  |
| resizeEnable    | Boolean     | 是否监控地图容器尺寸变化，默认值为 false。                                                                                    |
| showIndoorMap   | Boolean     | 是否在有矢量底图的时候自动展示室内地图，PC 端默认是 true，移动端默认是 false。                                                |
| expandZoomRange | Boolean     | 是否支持可以扩展最大缩放级别.设置为 true 的时候，zooms 的最大级别在 PC 上可以扩大到 20 级，移动端还是高清 19/非高清 20。      |
| dragEnable      | Boolean     | 地图是否可通过鼠标拖拽平移，默认为 true。                                                                                     |
| zoomEnable      | Boolean     | 地图是否可缩放，默认值为 true。                                                                                               |
| doubleClickZoom | Boolean     | 地图是否可通过双击鼠标放大地图，默认为 true。                                                                                 |
| keyboardEnable  | Boolean     | 地图是否可通过键盘控制，方向键控制地图平移，"+"和"-"可以控制地图的缩放，Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转，默认为 true。 |
| jogEnable       | Boolean     | 地图是否使用缓动效果，默认值为 true。                                                                                         |
| scrollWheel     | Boolean     | 地图是否可通过鼠标滚轮缩放浏览，默认为 true。                                                                                 |
| touchZoom       | Boolean     | 地图在移动终端上是否可通过多点触控缩放浏览地图，默认为 true。                                                                 |
| viewMode        | String      | 默认 2D 显示，3D 状态下 zoom 设定 20 即可显示三维地图，鼠标右键调节三维地图角度                                               |
| pitch           | String      | 3D 模式下显示三维地图角度                                                                                                     |

## 动态属性

支持响应式。

| 名称        | 类型   | 说明                                                                                                            |
| ----------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| zooms       | Array  | 地图显示的缩放级别范围，在 PC 上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]  |
| center      | Array  | 地图中心点坐标值                                                                                                |
| labelzIndex | Number | 地图标注显示顺序                                                                                                |
| lang        | String | 地图语言类型 默认：zh_cn，可选值：zh_cn：中文简体，en：英文，zh_en：中英文对照                                  |
| mapStyle    | String | 设置地图显示样式，目前支持 normal（默认样式）、dark（深色样式）、light（浅色样式）、fresh(osm 清新风格样式)四种 |

## AmapManager

用于获取地图实例，以及获得地图内组件的实例。

| 名称             | 参数 | 返回类型 | 说明                                         |
| ---------------- | ---- | -------- | -------------------------------------------- |
| getMap           |      | AMap.Map | 返回地图实例，注入该管理实例的组件的地图实例 |
| getChildInstance | vid  | instance | 返回 vid 对应的组件实例                      |

## ref 可用方法

提供无副作用的同步帮助方法

| 函数              | 返回                                                             | 说明         |
| ----------------- | ---------------------------------------------------------------- | ------------ |
| \$\$getInstance() | [AMap.Map](http://lbs.amap.com/api/javascript-api/reference/map) | 获取地图实例 |
| \$\$getCenter()   | [lng: Number, lat: Number]                                       | 获取地图中心 |

## 事件

| 事件         | 参数                                                                           | 说明                                                                 |
| ------------ | ------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| complete     |                                                                                | 地图图块加载完成后触发事件                                           |
| click        | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键单击事件 相关示例                                            |
| dblclick     | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标左键双击事件                                                     |
| mapmove      |                                                                                | 地图平移时触发事件                                                   |
| hotspotclick | {type,lnglat,name,id}                                                          | 鼠标点击热点时触发（自 v1.3 新增）                                   |
| hotspotover  | {type,lnglat,name,id}                                                          | 鼠标滑过热点时触发（自 v1.3 新增）                                   |
| hotspotout   | {type,lnglat,name,id}                                                          | 鼠标移出热点时触发（自 v1.3 新增）                                   |
| movestart    |                                                                                | 地图平移开始时触发                                                   |
| moveend      |                                                                                | 地图平移结束后触发。如地图有拖拽缓动效果，则在缓动结束后触发         |
| zoomchange   |                                                                                | 地图缩放级别更改后触发                                               |
| zoomstart    |                                                                                | 缩放开始时触发                                                       |
| zoomend      |                                                                                | 缩放停止时触发                                                       |
| mousemove    | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在地图上移动时触发                                               |
| mousewheel   | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标滚轮开始缩放地图时触发                                           |
| mouseover    | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移入地图容器内时触发                                             |
| mouseout     | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标移出地图容器时触发                                               |
| mouseup      | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在地图上单击抬起时触发                                           |
| mousedown    | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标在地图上单击按下时触发                                           |
| rightclick   | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 鼠标右键单击事件                                                     |
| dragstart    |                                                                                | 开始拖拽地图时触发                                                   |
| dragging     |                                                                                | 拖拽地图过程中触发                                                   |
| dragend      |                                                                                | 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 |
| resize       |                                                                                | 地图容器大小改变事件                                                 |
| touchstart   | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸开始时触发事件，仅适用移动设备                                   |
| touchmove    | [MapsEvent](http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent) | 触摸移动进行中时触发事件，仅适用移动设备                             |
| touchend     |                                                                                |
