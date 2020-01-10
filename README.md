# bmap
百度地图局域网服务

## 1. 使用方法

```bash
docker run -d -p 8080:8080 -v /paht/vtile:/usr/share/nginx/html/vtile kaisawind/bmap
```

引入局域网地图
```html
<script type="text/javascript" src="http://192.168.1.180:8080/js/map_load.js"></script>
```

## 2. 瓦片数据

瓦片数据挂载到vtile目录下,通过水经注或者爬虫的方式获取

```bash
├── 10
│   ├── 173
│   ├── 174
│   ├── 175
│   └── 176
├── 11
│   ├── 347
│   ├── 348
│   ├── 349
│   ├── 350
│   ├── 351
│   └── 352
├── 12
│   ├── 694
│   ├── 695
│   ├── 696
│   ├── 697
│   ├── 698
│   ├── 699
│   ├── 700
│   ├── 701
│   ├── 702
│   ├── 703
│   └── 704
├── 13
│   ├── 1388
│   ├── 1389
│   ├── 1390
│   ├── 1391
│   ├── 1392
│   ├── 1393
│   ├── 1394
│   ├── 1395
│   ├── 1396
│   ├── 1397
│   ├── 1398
│   ├── 1399
│   ├── 1400
│   ├── 1401
│   ├── 1402
│   ├── 1403
│   ├── 1404
│   ├── 1405
│   ├── 1406
│   ├── 1407
│   └── 1408
```
