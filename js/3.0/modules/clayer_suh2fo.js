/**/_jsload2&&_jsload2('clayer', 'z.extend(pb.prototype,{Qk:{},tj:[],hu:"",Jp:"",OF:"",Rk:s,Fg:s,Eg:s,Dg:[],NF:0,zy:u(),vy:u(),du:u(),Rd:function(){this.VF()},xa:function(a,b){Mc.prototype.xa.call(this,a,b);this.Qk={};this.tj=[];this.M=a;this.VF()},Os:ea(p),remove:function(){Mc.prototype.remove.call(this);this.LS()},VF:function(){var a=this,b=a.M;b&&(this.zy=function(b){a.dS(b)},this.vy=function(b){a.DR(b)},this.du=function(b){a.CR(b)},b.addEventListener("mousemove",this.zy),b.addEventListener("onhotspotover",this.vy),b.addEventListener("onhotspotout", this.du),b.addEventListener("onzoomstart",this.du))},LS:function(){var a=this.M;a&&(a.removeEventListener("mousemove",this.zy),a.removeEventListener("onhotspotover",this.vy),a.removeEventListener("onhotspotout",this.du))},dS:function(a){var b=this,c=b.M,e=c.va();if(c.ka()<this.hc||c.Od())b.EA();else if(a=e.pk().ug(a.point),e=e.Id(),a=new R(Math.floor(a.x*Math.pow(2,c.ka()-18)),Math.floor(a.y*Math.pow(2,c.ka()-18))),e=new R(Math.floor(a.x/e),Math.floor(a.y/e)),this.Jp=c=e.x+"_"+e.y+"_"+c.ka(),this.Qk[c]){if(this.hu!= c){b.EA();b.UF(this.Qk[c]);this.hu=c;for(var e=-1,a=0,f=this.tj.length;a<f;a++)if(c==this.tj[a]){e=a;break}0<=e&&(this.tj.splice(e,e),this.tj.push(c))}}else if(this.OF!=c){this.OF=c;e=Vc[parseInt(Math.random()*Vc.length)];a=b.$a;c=e+"/data?grids="+c+"&q="+a.ht+"&tags="+a.SE+"&filter="+a.filter+"&sortby="+a.tN+"&ak="+a.oB+"&page_size="+a.FM+"&age="+a.YI;b.yf?c+="&geotable_id="+b.yf:b.ln&&(c+="&databox_id="+b.ln);var g=(1E5*Math.random()).toFixed(0);!D._rd&&(D._rd={});D._rd["_cbk"+g]=function(a){b.vR(a); delete D._rd["_cbk"+g]};pa(c+("&callback=BMap._rd._cbk"+g))}},vR:function(a){var b=this.M,c=a.content;if(!(a.status!=this.NF||!c||1>c.length)){for(var a=[],e=c[0].data,b=b.va().pk(),f=0,g=e.length;f<g;f++){var i=e[f][2].replace(pb.YS,"").split(","),i=b.gh(new J(i[0],i[1]));a.push({pt:i,userdata:{name:e[f][0]||"name",size:e[f][4]?e[f][4].split("|"):[10,13],uid:e[f][1]||"",Vb:e[f][3]||"sid1"}})}c=c[0].grid.join("_");this.Qk[c]=a;this.tj.push(c);30<this.tj.length&&(c=this.tj.shift(),delete this.Qk[c], delete c);this.hu!=this.Jp&&(this.EA(),this.Qk[this.Jp]&&(this.UF(this.Qk[this.Jp]),this.hu=this.Jp))}},UF:function(a){for(var b=this.M,c=0,e=a.length;c<e;c++){var f=a[c].userdata.size,g=f[0]/2,f=f[1]/2,g=new kb(a[c].pt,{offsets:[f,g,f,g],userData:a[c].userdata});b.hB(g,this.$a.qD)}},EA:function(){this.M.fw(this.$a.qD)},DR:function(a){if(a.spots&&!(1>a.spots.length||a.spots[0].tag!=this.$a.qD)){this.Dg=a.spots;var b=this,a=this.Dg[0].getUserData().size[0],c="",e=b.M,f="",g=b.$a.eY;0<this.Dg.length&& (c=this.Dg[0].getUserData().name);if(this.Fg)this.Fg.ua(this.Dg[0].ja()),this.Eg.cd(c),this.Eg.Ld(new P(a,0)),this.Fg.show(),c?this.Eg.show():this.Eg.aa();else{var i=this.Dg[0].getUserData().size,f=this.Dg[0].getUserData().Vb,k=this.yf||this.ln;this.Rk=new qc(H.sa+"blank.gif",new P(i[0],i[1]),{anchor:new P(i[0]/2+1,i[1]/2+1)});this.mR(k,f,function(){b.Fg&&b.Fg.Ub(b.Rk)});this.Fg=new V(this.Dg[0].ja(),{icon:this.Rk,enableMassClear:t});e.Pa(this.Fg);this.Eg=new uc(c,{offset:new P(a,0)});this.Eg.Md({backgroundColor:g.backgroundColor, borderColor:g.borderColor});this.Fg.Gm(this.Eg);c?this.Eg.show():this.Eg.aa();this.Fg.addEventListener("onclick",function(){if(!(b.Dg.length<1)&&b.Dg[0].getUserData().uid){var a=b.$a,c=a.vX;if(b.yf)c=a.wX;a=c+b.Dg[0].getUserData().uid+"?scope=2&ak="+a.oB;b.yf&&(a=a+("&geotable_id="+b.yf));var e=(Math.random()*1E5).toFixed(0);!D._rd&&(D._rd={});D._rd["_cbk"+e]=function(a){b.lR(a);delete D._rd["_cbk"+e]};pa(a+("&callback=BMap._rd._cbk"+e))}})}}},lR:function(a){var b=a.content;this.yf&&(b=a.contents[0]); if(a&&a.status==this.NF&&b){var a={poiId:b.uid||"",databoxId:b.databox_id||"",title:this.yf?b.title:b.name,address:this.yf?b.address:b.addr,phoneNumber:b.tel||"",postcode:b.zip||"",provinceCode:1*b.province_id||-1,province:b.province||"",cityCode:1*b.city_id||-1,city:b.city||"",districtCode:1*b.district_id||-1,district:b.district||"",point:this.yf?new J(b.location[0],b.location[1]):new J(b.longitude,b.latitude),tags:b.tag&&b.tag.replace(pb.aT,"").split(pb.ZS),typeId:1*b.cla||-1,extendedData:b.ext|| {}},c=new z.lang.cu("onhotspotclick");c.customPoi=a;c.content=b;this.dispatchEvent(c)}},CR:function(){this.Fg&&this.Fg.aa();this.Eg&&this.Eg.aa()},mR:function(a,b,c){var e=this,f=Wc+"?method=getstyle&databox="+a+"&sid="+b,g=(1E5*Math.random()).toFixed(0);if(!e.Rk||!(e.Rk.databoxid==a&&e.Rk.sid==b))!D._rd&&(D._rd={}),D._rd["_cbk"+g]=function(a){var b="";0==a.status&&(b="data:image/png;base64,"+a.content.sid1);0<b.length&&(e.Rk.fN(b),c&&c(a));delete D._rd["_cbk"+g]},pa(f+("&callback=BMap._rd._cbk"+ g))}}); ');
