var bmapcfg = {
    imgext: '.jpg',
};

//////////////////加载bmap api,并获取host///////////////////////////////////
var scripts = document.getElementsByTagName("script");
var MapLoadJS = scripts[scripts.length - 1].getAttribute("src");

var jsURL = new URL(MapLoadJS);
bmapcfg.hostname = jsURL.hostname;
bmapcfg.host = jsURL.host;
bmapcfg.port = jsURL.port;
bmapcfg.protocol = jsURL.protocol;
bmapcfg.origin = jsURL.href.replace('/js/map_load.js','');
bmapcfg.pathname = jsURL.pathname.replace('/js/map_load.js','');
if (jsURL.protocol === 'https:') {
    window.HOST_TYPE = 2
}

(function () {
    window.BMap_loadScriptTime = (new Date).getTime();
    //加载地图API主文件
    document.write('<script type="text/javascript" src="' + bmapcfg.origin + '/js/3.0/map_api_full.js"></script>');
})();
///////////////////////////////////////////////////////////////////