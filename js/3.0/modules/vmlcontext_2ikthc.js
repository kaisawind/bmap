/**/_jsload2&&_jsload2('vmlcontext', 'var yg=10,zg=yg/2; function Ag(a){this.di=[[1,0,0],[0,1,0],[0,0,1]];this.UL=[];this.NI=[];this.ek=[];this.lineWidth=1;this.miterLimit=1*yg;this.canvas=a;var b=O("div");b.style.width=a.clientWidth+"px";b.style.height=a.clientHeight+"px";b.style.position="absolute";a.appendChild(b);this.YJ=b;this.KL=this.Vv=this.Uv=1;document.styleSheets.canvas_style||(a=document.createStyleSheet(),a.owningElement.id="canvas_style",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\\\:shape,g_vml_\\\\:fill,g_vml_\\\\:stroke{behavior:url(#default#VML)}")} function Bg(a,b){for(var c=[[1,0,0],[0,1,0],[0,0,1]],e=0;3>e;e++)for(var f=0;3>f;f++){for(var g=0,i=0;3>i;i++)g+=a[e][i]*b[i][f];c[e][f]=g}return c}var Cg=Ag.prototype;Cg.clearRect=function(){this.YJ.innerHTML=""};Cg.beginPath=function(){this.ek=[]};Cg.moveTo=function(a,b){var c=this.Vh(a,b);this.ek.push({type:"moveTo",x:c.x,y:c.y});this.Kr=c.x;this.Lr=c.y};Cg.lineTo=function(a,b){var c=this.Vh(a,b);this.ek.push({type:"lineTo",x:c.x,y:c.y});this.Kr=c.x;this.Lr=c.y}; Cg.bezierCurveTo=function(a,b,c,e,f,g){Dg(this,this.Vh(a,b),this.Vh(c,e),this.Vh(f,g))};function Dg(a,b,c,e){a.ek.push({type:"bezierCurveTo",UU:b.x,VU:b.y,WU:c.x,XU:c.y,x:e.x,y:e.y});a.Kr=e.x;a.Lr=e.y}Cg.quadraticCurveTo=function(a,b,c,e){a=this.Vh(a,b);c=this.Vh(c,e);e={x:this.Kr+2/3*(a.x-this.Kr),y:this.Lr+2/3*(a.y-this.Lr)};Dg(this,e,{x:e.x+(c.x-this.Kr)/3,y:e.y+(c.y-this.Lr)/3},c)}; Cg.arc=function(a,b,c,e,f,g){var c=c*yg,i=a+Math.cos(e)*c-zg,k=b+Math.sin(e)*c-zg,e=a+Math.cos(f)*c-zg,f=b+Math.sin(f)*c-zg;i==e&&!g&&(i+=0.125);a=this.Vh(a,b);i=this.Vh(i,k);e=this.Vh(e,f);this.ek.push({type:g?"at":"wa",x:a.x,y:a.y,Ca:c,e0:i.x,g0:i.y,d0:e.x,f0:e.y})};Cg.rect=function(a,b,c,e){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+e);this.lineTo(a,b+e);this.closePath()}; Cg.stroke=function(a){var b=[],c=a?this.fillStyle:this.strokeStyle,e=c.color,c=c.alpha;b.push("<g_vml_:shape",\' filled="\',!!a,\'"\',\' style="position:absolute;width:\',10,"px;height:",10,\'px;"\',\' coordorigin="0 0" coordsize="\',10*yg," ",10*yg,\'"\',\' stroked="\',!a,\'"\',\' path="\');for(var f=s,g=s,i=s,k=s,m=0;m<this.ek.length;m++){var n=this.ek[m];switch(n.type){case "moveTo":b.push(" m ",Math.round(n.x),",",Math.round(n.y));break;case "lineTo":b.push(" l ",Math.round(n.x),",",Math.round(n.y));break;case "close":b.push(" x "); n=s;break;case "bezierCurveTo":b.push(" c ",Math.round(n.UU),",",Math.round(n.VU),",",Math.round(n.WU),",",Math.round(n.XU),",",Math.round(n.x),",",Math.round(n.y));break;case "at":case "wa":b.push(" ",n.type," ",Math.round(n.x-this.Uv*n.Ca),",",Math.round(n.y-this.Vv*n.Ca)," ",Math.round(n.x+this.Uv*n.Ca),",",Math.round(n.y+this.Vv*n.Ca)," ",Math.round(n.e0),",",Math.round(n.g0)," ",Math.round(n.d0),",",Math.round(n.f0))}if(n){if(f==s||n.x<f)f=n.x;if(i==s||n.x>i)i=n.x;if(g==s||n.y<g)g=n.y;if(k== s||n.y>k)k=n.y}}b.push(\' ">\');a?b.push(\'<g_vml_:fill color="\',e,\'" opacity="\',c,\'" />\'):(a=this.KL*this.lineWidth,1>a&&(c*=a),b.push("<g_vml_:stroke",\' opacity="\',c,\'"\',\' joinstyle="\',this.lineJoin,\'"\',\' miterlimit="\',this.miterLimit,\'"\',\' endcap="\',"square",\'"\',\' weight="\',a,\'px"\',\' color="\',e,\'" />\'));b.push("</g_vml_:shape>");this.YJ.insertAdjacentHTML("beforeEnd",b.join(""))};Cg.fill=function(){this.stroke(p)};Cg.closePath=function(){this.ek.push({type:"close"})}; Cg.Vh=function(a,b){var c=this.di;return{x:yg*(a*c[0][0]+b*c[1][0]+c[2][0])-zg,y:yg*(a*c[0][1]+b*c[1][1]+c[2][1])-zg}};Cg.save=function(){var a={};copyState(this,a);this.NI.push(a);this.UL.push(this.di);this.di=Bg(createMatrixIdentity(),this.di)};Cg.restore=function(){copyState(this.NI.pop(),this);this.di=this.UL.pop()}; function Eg(a,b,c){var e;a:{for(e=0;3>e;e++)for(var f=0;2>f;f++)if(!isFinite(b[e][f])||isNaN(b[e][f])){e=t;break a}e=p}e&&(a.di=b,c&&(a.KL=Math.sqrt(Math.abs(b[0][0]*b[1][1]-b[0][1]*b[1][0]))))}Cg.translate=function(a,b){Eg(this,Bg([[1,0,0],[0,1,0],[a,b,1]],this.di),t)};Cg.rotate=function(a){var b=Math.cos(a),a=Math.sin(a);Eg(this,Bg([[b,a,0],[-a,b,0],[0,0,1]],this.di),t)};Cg.scale=function(a,b){this.Uv*=a;this.Vv*=b;Eg(this,Bg([[a,0,0],[0,b,0],[0,0,1]],this.di),p)}; Cg.transform=function(a,b,c,e,f,g){Eg(this,Bg([[a,b,0],[c,e,0],[f,g,1]],this.di),p)};Cg.setTransform=function(a,b,c,e,f,g){Eg(this,[[a,b,0],[c,e,0],[f,g,1]],p)};D.TO=Ag; ');
