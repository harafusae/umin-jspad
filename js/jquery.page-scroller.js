/*  ================================================================================
 *
 *  JavaScript -Default version 3.0.3
 *  (c) 2004-2007 coliss.com
 *
 *  この作品は、クリエイティブ・コモンズの表示 2.1 日本ライセンスの下で
 *  ライセンスされています。
 *  この使用許諾条件を見るには、http://creativecommons.org/licenses/by/2.1/jp/を
 *  チェックするか、クリエイティブ･コモンズに郵便にてお問い合わせください。
 *  住所は：559 Nathan Abbott Way, Stanford, California 94305, USA です。
 *
================================================================================  */


/*  ================================================================================
TOC
============================================================
Set Adjustment
Page Scroller
============================================================
this script requires jQuery 1.2.2(http://jquery.com/)
use $j not $
================================================================================  */


/*  ================================================================================
Set Adjustment
================================================================================  */
var virtualTopId = "top",
    virtualTop,
    adjTraverser,
    adjPosition,
    callExternal = "pSc",
    delayExternal= 200;

/* example
======================================================================  */
//    virtualTop = 0;    // virtual top's left position = 0
//    virtualTop = 1;    // virtual top's left position = vertical movement
//    adjTraverser = 0;  // left position = 0
//    adjTraverser = 1;  // horizontal movement.
//    adjPosition = -26;

/*  ================================================================================
Page Scroller
================================================================================  */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('b $=1g.1O();(d($){b E=$.K.E,F=$.K.F,J=$.K.J,D=$.K.D;$.K.1P({F:d(){3(!9[0])P();3(9[0]==k)c 1p.1M||$.1o&&8.v.1n||8.g.1n;3(9[0]==8)c((8.v&&8.1i=="1l")?8.v.1m:8.g.1m);c F.1v(9,1u)},E:d(){3(!9[0])P();3(9[0]==k)c 1p.1S||$.1o&&8.v.1j||8.g.1j;3(9[0]==8)c((8.v&&8.1i=="1l")?8.v.1k:8.g.1k);c E.1v(9,1u)},J:d(){3(!9[0])P();b m=8.O?8.O(9[0].B):8.1r(9[0].B);b l=1q 1t();l.x=m.1x;1s((m=m.1a)!=18){l.x+=m.1x}3((l.x*0)==0)c(l.x);h c(9[0].B)},D:d(){3(!9[0])P();b m=8.O?8.O(9[0].B):8.1r(9[0].B);b l=1q 1t();l.y=m.1f;1s((m=m.1a)!=18){l.y+=m.1f}3((l.y*0)==0)c(l.y);h c(9[0].B)}})})(1g);$(d(){$(\'a[@I^="#"]\').1c(d(){b i=V.1W+V.1V;b H=((9.I).1U(0,(((9.I).14)-((9.Y).14)))).T((9.I).1e("//")+2);3(i.G("?")!=-1)X=i.T(0,(i.G("?")));h X=i;3(H.G("?")!=-1)W=H.T(0,(H.G("?")));h W=H;3(W==X){f.10((9.Y).1Y(1));c 1Z}});$("g").1c(d(){f.Q()})});9.q=18;b f={12:d(w){3(w=="x")c(($(8).F())-($(k).F()));h 3(w=="y")c(($(8).E())-($(k).E()))},19:d(w){3(w=="x")c(k.17||8.g.C||8.g.L.C);h 3(w=="y")c(k.21||8.g.1G||8.g.L.1G)},U:d(o,n,A,s,r){b q;3(q)R(q);b 1E=16;b N=f.19(\'x\');b S=f.19(\'y\');3(!o||o<0)o=0;3(!n||n<0)n=0;3(!A)A=$.1z.23?7:$.1z.1X?5:6;3(!s)s=0+N;3(!r)r=0+S;s+=(o-N)/A;3(s<0)s=0;r+=(n-S)/A;3(r<0)r=0;b 15=z.1A(s);b 13=z.1A(r);k.22(15,13);3((z.1I(z.1H(N-o))<1)&&(z.1I(z.1H(S-n))<1)){R(9.q);k.1C(o,n)}h 3((15!=o)||(13!=n))9.q=1d("f.U("+o+","+n+","+A+","+s+","+r+")",1E);h R(9.q)},Q:d(){R(9.q)},1R:d(e){f.Q()},10:d(p){f.Q();b u,t;3(!!p){3(p==1T){u=(M==0)?0:(M==1)?k.17||8.g.C||8.g.L.C:$(\'#\'+p).J();t=((M==0)||(M==1))?0:$(\'#\'+p).D()}h{u=(1y==0)?0:(1y==1)?($(\'#\'+p).J()):k.17||8.g.C||8.g.L.C;t=1F?($(\'#\'+p).D())+1F:($(\'#\'+p).D())}b 11=f.12(\'x\');b Z=f.12(\'y\');3(((u*0)==0)||((t*0)==0)){b 1D=(u<1)?0:(u>11)?11:u;b 1B=(t<1)?0:(t>Z)?Z:t;f.U(1D,1B)}h V.Y=p}h f.U(0,0)},1b:d(){b i=V.I;b 1J=i.1e("#",0);b 1h=i.20(1w);3(!!1h){1K=i.T(i.G("?"+1w)+4,i.14);1Q=1d("f.10(1K)",1N)}3(!1J)k.1C(0,0);h c 1L}};$(f.1b);',62,128,'|||if|||||document|this||var|return|function||coliss|body|else|usrUrl||window|tagCoords|obj|toY|toX|idName|pageScrollTimer|frY|frX|anchorY|anchorX|documentElement|type|||Math|frms|id|scrollLeft|top|height|width|lastIndexOf|anchorPath|href|left|fn|parentNode|virtualTop|actX|getElementById|error|stopScroll|clearTimeout|actY|slice|pageScroll|location|anchorPathOmitQ|usrUrlOmitQ|hash|dMaxY|toAnchor|dMaxX|getScrollRange|posY|length|posX||pageXOffset|null|getWindowOffset|offsetParent|initPageScroller|click|setTimeout|indexOf|offsetTop|jQuery|checkPageScroller|compatMode|clientHeight|scrollHeight|CSS1Compat|scrollWidth|clientWidth|boxModel|self|new|all|while|Object|arguments|apply|callExternal|offsetLeft|adjTraverser|browser|ceil|setY|scroll|setX|spd|adjPosition|scrollTop|abs|floor|checkAnchor|anchorId|true|innerWidth|delayExternal|noConflict|extend|timerID|cancelScroll|innerHeight|virtualTopId|substring|pathname|hostname|opera|substr|false|match|pageYOffset|scrollTo|mozilla'.split('|'),0,{}))