import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as e,b as o,d as t,e as i,r as s}from"./app.2de26024.js";const a={},n=t("\u4ECE v1.17.0 \u8D77\u652F\u6301 Scheme URL\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u529F\u80FD\u4ECE\u6D4F\u89C8\u5668\u7B49\u573A\u666F\u4E0B\u8C03\u7528 LX Music\uFF0C\u6211\u4EEC\u5F00\u53D1\u4E86\u4E00\u4E2A"),u={href:"https://github.com/lyswhut/lx-music-script#readme",target:"_blank",rel:"noopener noreferrer"},g=t("\u6CB9\u7334\u811A\u672C"),h=t("\u914D\u5957\u4F7F\u7528"),b=t("\u811A\u672C\u5B89\u88C5\u5730\u5740\uFF1A"),m={href:"https://greasyfork.org/zh-CN/scripts/438148",target:"_blank",rel:"noopener noreferrer"},x=t("https://greasyfork.org/zh-CN/scripts/438148"),p=i('<p>\u4EE5\u4E0B\u662F\u76EE\u524D\u53EF\u7528\u7684 Scheme URL \u8C03\u7528\u65B9\u5F0F\uFF1A</p><ul><li>URL \u7EDF\u4E00\u4EE5<code>lxmusic://</code>\u5F00\u5934</li><li>\u82E5\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u6E90\u7684\u53EF\u7528\u503C\u4E3A\uFF1A<code>kw/kg/tx/wy/mg</code></li><li>\u82E5\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u97F3\u8D28\u7684\u53EF\u7528\u503C\u4E3A\uFF1A<code>128k/320k/flac/flac32bit</code></li></ul><p>\u76EE\u524D\u652F\u6301\u4E24\u79CD\u4F20\u53C2\u65B9\u5F0F\uFF1A</p><ul><li>\u901A\u8FC7<code>data</code>\u4F20\u53C2\uFF0C\u4EE5\u7ECF\u8FC7 URL \u7F16\u7801\u7684 JSON \u6570\u636E\u4F20\u53C2\uFF0C\u4F8B\uFF1A<code>lxmusic://music/play?data=xxxx</code>\uFF0C\u5176\u4E2D<code>xxxx</code>\u4E3A\u7ECF\u8FC7 URL \u7F16\u7801\u540E\u7684 JSON \u6570\u636E\uFF0C\u652F\u6301\u590D\u6742\u7684\u53C2\u6570\u8C03\u7528</li><li>\u901A\u8FC7<code>URL</code>\u4F20\u53C2\uFF0C\u9002\u7528\u4E8E\u7B80\u5355\u4F20\u53C2\u7684\u8C03\u7528\uFF0C\u4E0D\u9700\u8981\u8F6C\u6210 JSON \u683C\u5F0F\uFF0C\u4F8B\uFF1A<code>lxmusic://music/search/xxxx</code>\uFF0C\u4F46\u4ECD\u7136\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C URL \u7F16\u7801\uFF0C\u53EA\u9002\u5E94\u4E8E\u7B80\u5355\u53C2\u6570\u8C03\u7528\uFF08v1.18.0 \u65B0\u589E\uFF09</li></ul><h3 id="data\u65B9\u5F0F\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#data\u65B9\u5F0F\u4F20\u53C2" aria-hidden="true">#</a> <code>data</code>\u65B9\u5F0F\u4F20\u53C2</h3><p>\u4EE5\u7ECF\u8FC7 URL \u7F16\u7801\u7684 JSON \u6570\u636E\u4F20\u53C2\uFF0C\u4F8B\uFF1A<code>lxmusic://music/play?data=xxxx</code>\uFF0C\u5176\u4E2D<code>xxxx</code>\u4E3A\u7ECF\u8FC7 URL \u7F16\u7801\u540E\u7684 JSON \u6570\u636E\uFF0CJSON \u6570\u636E\u5185\u5BB9\u53D6\u51B3\u4E8E\u4E0B\u8868\u7684\u53C2\u6570\u90E8\u5206</p><table><thead><tr><th>\u63CF\u8FF0</th><th>URL</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>\u6253\u5F00\u6B4C\u5355</td><td><code>songlist/open</code></td><td><code>source&lt;String&gt;</code>\uFF08\u6E90\uFF0C\u5FC5\u987B\uFF09<br><code>id&lt;String/Number&gt;</code>\uFF08\u6B4C\u5355 ID\uFF0C\u53EF\u9009\uFF09<br><code>url&lt;String&gt;</code>\uFF08\u6B4C\u5355 URL\uFF0C\u53EF\u9009\uFF09\u5176\u4E2D ID \u4E0E URL \u5FC5\u9700\u4F20\u4E00\u4E2A</td></tr><tr><td>\u64AD\u653E\u6B4C\u5355</td><td><code>songlist/play</code></td><td><code>source&lt;String&gt;</code>\uFF08\u6E90\uFF0C\u5FC5\u987B\uFF09<br><code>id&lt;String/Number&gt;</code>\uFF08\u6B4C\u5355 ID\uFF0C\u53EF\u9009\uFF09<br><code>url&lt;String&gt;</code>\uFF08\u6B4C\u5355 URL\uFF0C\u53EF\u9009\uFF09\u5176\u4E2D<code>id</code>\u4E0E<code>url</code>\u5FC5\u9700\u4F20\u4E00\u4E2A<br><code>index&lt;Number&gt;</code>\uFF08\u64AD\u653E\u7B2C\u51E0\u9996\u6B4C\uFF0C\u53EF\u9009\uFF0C\u4ECE 0 \u5F00\u59CB\uFF09</td></tr><tr><td>\u641C\u7D22\u6B4C\u66F2</td><td><code>music/search</code></td><td><code>keywords&lt;String/Number&gt;</code>\uFF08\u8981\u641C\u7D22\u7684\u5185\u5BB9\uFF0C\u5FC5\u987B\uFF09<br><code>source&lt;String&gt;</code>\uFF08\u6E90\uFF0C\u53EF\u9009\uFF09</td></tr><tr><td>\u64AD\u653E\u6B4C\u66F2</td><td><code>music/play</code></td><td><code>name&lt;String&gt;</code>\uFF08\u6B4C\u66F2\u540D\uFF0C\u5FC5\u4F20\uFF09<br><code>singer&lt;String&gt;</code>\uFF08\u827A\u672F\u5BB6\u540D\uFF0C\u5FC5\u4F20\uFF09<br><code>source&lt;String&gt;</code>\uFF08\u6E90\uFF0C\u5FC5\u4F20\uFF09<br><code>songmid&lt;String/Number&gt;</code>\uFF08\u6B4C\u66F2 ID\uFF0C\u5FC5\u4F20\uFF09<br><code>img&lt;String&gt;</code>\uFF08\u6B4C\u66F2\u56FE\u7247\u94FE\u63A5\uFF0C\u9009\u4F20\uFF09<br><code>albumId&lt;String/Number&gt;</code>\uFF08\u6B4C\u66F2\u4E13\u8F91 ID\uFF0C\u9009\u4F20\uFF09<br><code>interval&lt;String&gt;</code>\uFF08\u683C\u5F0F\u5316\u540E\u7684\u6B4C\u66F2\u65F6\u957F\uFF0C\u9009\u4F20\uFF0C\u4F8B\uFF1A<code>03:55</code>\uFF09<br><code>albumName&lt;String&gt;</code>\uFF08\u6B4C\u66F2\u4E13\u8F91\u540D\u79F0\uFF0C\u9009\u4F20\uFF09<br><code>types&lt;Object&gt;</code>\uFF08\u6B4C\u66F2\u53EF\u7528\u97F3\u8D28\u6570\u7EC4\uFF0C\u5FC5\u4F20\uFF0C<br>\u6570\u7EC4\u683C\u5F0F\uFF1A<code>[{&quot;type&quot;: &quot;&lt;\u97F3\u8D28&gt;&quot;, size: &quot;&lt;\u683C\u5F0F\u5316\u540E\u7684\u6587\u4EF6\u5927\u5C0F\uFF0C\u9009\u4F20&gt;&quot;, hash: &quot;&lt;kg\u6E90\u5FC5\u4F20&gt;&quot;}]</code>\uFF0C<br>\u4F8B\uFF1A<code>[{&quot;type&quot;: &quot;128k&quot;, size: &quot;3.56M&quot;}, {&quot;type&quot;: &quot;320k&quot;, size: null}]</code>\uFF09<br><br>\u4EE5\u4E0B\u4E3A\u5E73\u53F0\u7279\u5B9A\u53C2\u6570\uFF1A<br><code>hash&lt;String&gt;</code>\uFF08\u6B4C\u66F2 hash\uFF0Ckg \u6E90\u5FC5\u4F20\uFF09<br><code>strMediaMid&lt;String&gt;</code>\uFF08\u6B4C\u66F2 strMediaMid\uFF0Ctx \u6E90\u5FC5\u4F20\uFF09<br><code>albumMid&lt;String&gt;</code>\uFF08\u6B4C\u66F2 albumMid\uFF0Ctx \u6E90\u4E13\u7528\uFF0C\u9009\u4F20\uFF09<br><code>copyrightId&lt;String&gt;</code>\uFF08\u6B4C\u66F2 copyrightId\uFF0Cmg \u6E90\u5FC5\u4F20\uFF09<br><code>lrcUrl&lt;String&gt;</code>\uFF08\u6B4C\u66F2 lrcUrl\uFF0Cmg \u6E90\u4E13\u7528\uFF0C\u9009\u4F20\uFF09</td></tr></tbody></table><h3 id="url\u65B9\u5F0F\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#url\u65B9\u5F0F\u4F20\u53C2" aria-hidden="true">#</a> <code>URL</code>\u65B9\u5F0F\u4F20\u53C2</h3><p>\u7531\u4E8E URL \u4F20\u53C2\u53EA\u9002\u7528\u4E8E\u7B80\u5355\u4F20\u53C2\u573A\u666F\uFF0C\u6240\u4EE5\u76EE\u524D\u53EA\u652F\u6301\u4EE5\u4E0B\u529F\u80FD\u7684\u8C03\u7528\uFF1A</p><table><thead><tr><th>\u63CF\u8FF0</th><th>URL</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>\u641C\u7D22\u6B4C\u66F2</td><td><code>music/search/{source}/{keywords}</code></td><td><code>source</code>\uFF08\u6E90\uFF0C\u53EF\u9009\uFF09<br><code>keywords</code>\uFF08\u8981\u641C\u7D22\u7684\u5185\u5BB9\uFF0C\u5FC5\u987B\uFF09<br>\u4F8B\uFF1A<code>music/search/kw/xxx</code>\u3001<code>music/search/xxx</code></td></tr><tr><td>\u6253\u5F00\u6B4C\u5355</td><td><code>songlist/open/{source}/{id/url}</code></td><td><code>source</code>\uFF08\u6E90\uFF0C\u5FC5\u987B\uFF09<br><code>id/url</code>\uFF08\u6B4C\u5355 ID \u6216\u6B4C\u5355 URL\uFF0C\u5FC5\u987B\uFF09<br>\u4F8B\uFF1A<code>songlist/open/kw/123456</code></td></tr></tbody></table>',10);function _(S,k){const d=s("ExternalLinkIcon");return r(),l("div",null,[e("p",null,[n,e("a",u,[g,o(d)]),h]),e("p",null,[b,e("a",m,[x,o(d)])]),p])}const U=c(a,[["render",_],["__file","scheme-url.html.vue"]]);export{U as default};
