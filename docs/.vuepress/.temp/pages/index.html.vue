<template><div><h1 id="vue-amap-高德地图" tabindex="-1"><a class="header-anchor" href="#vue-amap-高德地图" aria-hidden="true">#</a> vue-amap 高德地图</h1>
<h2 id="引入地图" tabindex="-1"><a class="header-anchor" href="#引入地图" aria-hidden="true">#</a> 引入地图</h2>
<p>一般项目中，对于 vue-amap 的初始化只需要调用 <code v-pre>initAMapApiLoader</code> 方法即可。</p>
<p>NPM 安装：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> VueAMap <span class="token keyword">from</span> <span class="token string">'vue-amap'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'YOUR_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AMap.Scale'</span><span class="token punctuation">,</span> <span class="token string">'AMap.OverView'</span><span class="token punctuation">,</span> <span class="token string">'AMap.ToolBar'</span><span class="token punctuation">,</span> <span class="token string">'AMap.MapType'</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token string">'1.4.4'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN 引入：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'YOUR_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AMap.Scale'</span><span class="token punctuation">,</span> <span class="token string">'AMap.OverView'</span><span class="token punctuation">,</span> <span class="token string">'AMap.ToolBar'</span><span class="token punctuation">,</span> <span class="token string">'AMap.MapType'</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token string">'1.4.4'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<p>在<strong>定制化程度较高</strong>的项目中，开发者可能只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 <code v-pre>lazyAMapApiLoaderInstance</code>。</p>
<p>NPM 安装：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> VueAMap <span class="token keyword">from</span> <span class="token string">'vue-amap'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> lazyAMapApiLoaderInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-amap'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueAMap<span class="token punctuation">)</span><span class="token punctuation">;</span>
VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'YOUR_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AMap.Scale'</span><span class="token punctuation">,</span> <span class="token string">'AMap.OverView'</span><span class="token punctuation">,</span> <span class="token string">'AMap.ToolBar'</span><span class="token punctuation">,</span> <span class="token string">'AMap.MapType'</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uiVersion</span><span class="token operator">:</span> <span class="token string">'1.0'</span> <span class="token comment">// ui库版本，不配置不加载,</span>
  <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token string">'1.4.4'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">'amapContainer'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CDN 引入：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span><span class="token function">initAMapApiLoader</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'YOUR_KEY'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugin</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AMap.Scale'</span><span class="token punctuation">,</span> <span class="token string">'AMap.OverView'</span><span class="token punctuation">,</span> <span class="token string">'AMap.ToolBar'</span><span class="token punctuation">,</span> <span class="token string">'AMap.MapType'</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">v</span><span class="token operator">:</span> <span class="token string">'1.4.4'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

window<span class="token punctuation">.</span>VueAMap<span class="token punctuation">.</span>lazyAMapApiLoaderInstance<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// your code ...</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">'amapContainer'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AMap<span class="token punctuation">.</span>LngLat</span><span class="token punctuation">(</span><span class="token number">121.59996</span><span class="token punctuation">,</span> <span class="token number">31.197646</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>默认值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>key</td>
<td><code v-pre>String</code></td>
<td>``</td>
<td>高德 Key</td>
</tr>
<tr>
<td>plugin</td>
<td><code v-pre>Array</code></td>
<td><code v-pre>['Autocomplete', 'PlaceSearch', 'PolyEditor', 'CircleEditor']</code></td>
<td>插件</td>
</tr>
<tr>
<td>uiVersion</td>
<td><code v-pre>String</code></td>
<td>``</td>
<td>UI 库 版本</td>
</tr>
<tr>
<td>v</td>
<td><code v-pre>String</code></td>
<td><code v-pre>1.4.4</code></td>
<td>SDK 版本</td>
</tr>
<tr>
<td>protocol</td>
<td><code v-pre>String</code></td>
<td><code v-pre>https</code></td>
<td>引用协议</td>
</tr>
</tbody>
</table>
<h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h2>
<p>仅且可以初始化配置，不支持响应式。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>vid</td>
<td>String</td>
<td>地图容器节点的 ID。</td>
</tr>
<tr>
<td>amapManager</td>
<td>AMapManager</td>
<td>地图管理对象。</td>
</tr>
<tr>
<td>defaultCursor</td>
<td>String</td>
<td>地图默认鼠标样式。参数 defaultCursor 应符合 CSS 的 cursor 属性规范。</td>
</tr>
<tr>
<td>animateEnable</td>
<td>Boolean</td>
<td>地图平移过程中是否使用动画，默认为 true，即使用动画。</td>
</tr>
<tr>
<td>isHotspot</td>
<td>Boolean</td>
<td>是否开启地图热点，默认 false 不打开。</td>
</tr>
<tr>
<td>rotateEnable</td>
<td>Boolean</td>
<td>地图是否可旋转，默认 false。</td>
</tr>
<tr>
<td>resizeEnable</td>
<td>Boolean</td>
<td>是否监控地图容器尺寸变化，默认值为 false。</td>
</tr>
<tr>
<td>showIndoorMap</td>
<td>Boolean</td>
<td>是否在有矢量底图的时候自动展示室内地图，PC 端默认是 true，移动端默认是 false。</td>
</tr>
<tr>
<td>expandZoomRange</td>
<td>Boolean</td>
<td>是否支持可以扩展最大缩放级别.设置为 true 的时候，zooms 的最大级别在 PC 上可以扩大到 20 级，移动端还是高清 19/非高清 20。</td>
</tr>
<tr>
<td>dragEnable</td>
<td>Boolean</td>
<td>地图是否可通过鼠标拖拽平移，默认为 true。</td>
</tr>
<tr>
<td>zoomEnable</td>
<td>Boolean</td>
<td>地图是否可缩放，默认值为 true。</td>
</tr>
<tr>
<td>doubleClickZoom</td>
<td>Boolean</td>
<td>地图是否可通过双击鼠标放大地图，默认为 true。</td>
</tr>
<tr>
<td>keyboardEnable</td>
<td>Boolean</td>
<td>地图是否可通过键盘控制，方向键控制地图平移，&quot;+&quot;和&quot;-&quot;可以控制地图的缩放，Ctrl+“→”顺时针旋转，Ctrl+“←”逆时针旋转，默认为 true。</td>
</tr>
<tr>
<td>jogEnable</td>
<td>Boolean</td>
<td>地图是否使用缓动效果，默认值为 true。</td>
</tr>
<tr>
<td>scrollWheel</td>
<td>Boolean</td>
<td>地图是否可通过鼠标滚轮缩放浏览，默认为 true。</td>
</tr>
<tr>
<td>touchZoom</td>
<td>Boolean</td>
<td>地图在移动终端上是否可通过多点触控缩放浏览地图，默认为 true。</td>
</tr>
<tr>
<td>viewMode</td>
<td>String</td>
<td>默认 2D 显示，3D 状态下 zoom 设定 20 即可显示三维地图，鼠标右键调节三维地图角度</td>
</tr>
<tr>
<td>pitch</td>
<td>String</td>
<td>3D 模式下显示三维地图角度</td>
</tr>
</tbody>
</table>
<h2 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性" aria-hidden="true">#</a> 动态属性</h2>
<p>支持响应式。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>zooms</td>
<td>Array</td>
<td>地图显示的缩放级别范围，在 PC 上，默认范围[3,18]，取值范围[3-18]；在移动设备上，默认范围[3-19]，取值范围[3-19]</td>
</tr>
<tr>
<td>center</td>
<td>Array</td>
<td>地图中心点坐标值</td>
</tr>
<tr>
<td>labelzIndex</td>
<td>Number</td>
<td>地图标注显示顺序</td>
</tr>
<tr>
<td>lang</td>
<td>String</td>
<td>地图语言类型 默认：zh_cn，可选值：zh_cn：中文简体，en：英文，zh_en：中英文对照</td>
</tr>
<tr>
<td>mapStyle</td>
<td>String</td>
<td>设置地图显示样式，目前支持 normal（默认样式）、dark（深色样式）、light（浅色样式）、fresh(osm 清新风格样式)四种</td>
</tr>
</tbody>
</table>
<h2 id="amapmanager" tabindex="-1"><a class="header-anchor" href="#amapmanager" aria-hidden="true">#</a> AmapManager</h2>
<p>用于获取地图实例，以及获得地图内组件的实例。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>参数</th>
<th>返回类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>getMap</td>
<td></td>
<td>AMap.Map</td>
<td>返回地图实例，注入该管理实例的组件的地图实例</td>
</tr>
<tr>
<td>getChildInstance</td>
<td>vid</td>
<td>instance</td>
<td>返回 vid 对应的组件实例</td>
</tr>
</tbody>
</table>
<h2 id="ref-可用方法" tabindex="-1"><a class="header-anchor" href="#ref-可用方法" aria-hidden="true">#</a> ref 可用方法</h2>
<p>提供无副作用的同步帮助方法</p>
<table>
<thead>
<tr>
<th>函数</th>
<th>返回</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>$$getInstance()</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/map" target="_blank" rel="noopener noreferrer">AMap.Map<ExternalLinkIcon/></a></td>
<td>获取地图实例</td>
</tr>
<tr>
<td>$$getCenter()</td>
<td>[lng: Number, lat: Number]</td>
<td>获取地图中心</td>
</tr>
</tbody>
</table>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<table>
<thead>
<tr>
<th>事件</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>complete</td>
<td></td>
<td>地图图块加载完成后触发事件</td>
</tr>
<tr>
<td>click</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标左键单击事件 相关示例</td>
</tr>
<tr>
<td>dblclick</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标左键双击事件</td>
</tr>
<tr>
<td>mapmove</td>
<td></td>
<td>地图平移时触发事件</td>
</tr>
<tr>
<td>hotspotclick</td>
<td>{type,lnglat,name,id}</td>
<td>鼠标点击热点时触发（自 v1.3 新增）</td>
</tr>
<tr>
<td>hotspotover</td>
<td>{type,lnglat,name,id}</td>
<td>鼠标滑过热点时触发（自 v1.3 新增）</td>
</tr>
<tr>
<td>hotspotout</td>
<td>{type,lnglat,name,id}</td>
<td>鼠标移出热点时触发（自 v1.3 新增）</td>
</tr>
<tr>
<td>movestart</td>
<td></td>
<td>地图平移开始时触发</td>
</tr>
<tr>
<td>moveend</td>
<td></td>
<td>地图平移结束后触发。如地图有拖拽缓动效果，则在缓动结束后触发</td>
</tr>
<tr>
<td>zoomchange</td>
<td></td>
<td>地图缩放级别更改后触发</td>
</tr>
<tr>
<td>zoomstart</td>
<td></td>
<td>缩放开始时触发</td>
</tr>
<tr>
<td>zoomend</td>
<td></td>
<td>缩放停止时触发</td>
</tr>
<tr>
<td>mousemove</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标在地图上移动时触发</td>
</tr>
<tr>
<td>mousewheel</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标滚轮开始缩放地图时触发</td>
</tr>
<tr>
<td>mouseover</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标移入地图容器内时触发</td>
</tr>
<tr>
<td>mouseout</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标移出地图容器时触发</td>
</tr>
<tr>
<td>mouseup</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标在地图上单击抬起时触发</td>
</tr>
<tr>
<td>mousedown</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标在地图上单击按下时触发</td>
</tr>
<tr>
<td>rightclick</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>鼠标右键单击事件</td>
</tr>
<tr>
<td>dragstart</td>
<td></td>
<td>开始拖拽地图时触发</td>
</tr>
<tr>
<td>dragging</td>
<td></td>
<td>拖拽地图过程中触发</td>
</tr>
<tr>
<td>dragend</td>
<td></td>
<td>停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发</td>
</tr>
<tr>
<td>resize</td>
<td></td>
<td>地图容器大小改变事件</td>
</tr>
<tr>
<td>touchstart</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>触摸开始时触发事件，仅适用移动设备</td>
</tr>
<tr>
<td>touchmove</td>
<td><a href="http://lbs.amap.com/api/javascript-api/reference/event/#MapsEvent" target="_blank" rel="noopener noreferrer">MapsEvent<ExternalLinkIcon/></a></td>
<td>触摸移动进行中时触发事件，仅适用移动设备</td>
</tr>
<tr>
<td>touchend</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


