// 轮播图
var t1 = 0 ;//点击次数
var t2 = 0 ;//焦点轮回
var timer;

function goright() {
    window.clearInterval(timer)
    var w2 = document.getElementById('list').getElementsByTagName('li');
    t1++;
    t2++;


    if (t2 > 3) {
        t2 = 0
    }

    var timer = window.setInterval(function() {
        goright1()
    }, 10)

    for (var i = 0; i < w2.length; i++) {
        w2[i].style.borderColor = "#fff"
    }
    w2[t2].style.backgroundColor = "gold"

}

//碎步
function goright1() {
   var w1 = document.getElementById('picture')
    var tt = parseInt(w1.style.left)

     tt -= 20
    if (tt <= 4 * -1200) {
        tt = 0
        t1 = 0
        window.clearInterval(timer)
    } else if (tt < t1 * -1200) {
        tt = t1 * -1200
        window.clearInterval(timer)
    }

    w1.style.left = tt + "px"

}


function goleft() {
    window.clearInterval(timer)

    t1--;
    t2--;

    if (t1 < 0) {
        t1 = 3
        tt = 4 * -1200
    }

    if (t2 < 0) {
        t2 = 3
    }

    timer = window.setInterval(function() {
        goleft1()
    }, 10)

    var w2 = document.getElementById('list').getElementsByTagName('li')
    for (var i = 0; i < w2.length; i++) {
        w2[i].style.borderColor = "#fff"
        w2[t2].style.backgroundColor = "gold"
    }

}

//碎步
function goleft1() {
    w1 = document.getElementById('picture')
    // tt=parseInt(w1.style.left)

    tt += 20
    // if (tt>0) {
    //     tt=4*-1200
    // }
    if (tt >= t1 * -1200) {
        tt = t1 * -1200
        window.clearInterval(timer)
    }
    w1.style.left = tt + "px"

}


function foc(gh) {
    w1 = document.getElementById('picture')
    tt = parseInt(w1.style.left)
    window.clearInterval(timer)
    if (tt > gh * -1200) {
        timer = window.setInterval(function() {
            goright2(gh * -1200)
        }, 10)
    } else if (tt < gh * -1200) {
        timer = window.setInterval(function() {
            goleft2(gh * -1200)
        }, 10)
    }else {}

    var w2 = document.getElementById('list').getElementsByTagName('li')
    for (var i = 0; i < w2.length; i++) {
        w2[i].style.borderColor = "#fff"
        w2[gh].style.backgroundColor = "gold"
    }

    t2 = gh
    t1 = gh
}

function goright2(gh1) {
    w1 = document.getElementById('picture')
    tt = parseInt(w1.style.left)
    tt -= 20
    if (tt < gh1) {
        tt = gh1
        window.clearInterval(timer)
    }
    w1.style.left = tt + "px"

}

function goleft2(gh1) {
    w1 = document.getElementById('picture')
    tt = parseInt(w1.style.left)
    tt += 20
    if (tt > gh1) {
        tt = gh1

        window.clearInterval(timer)
    }
    w1.style.left = tt + "px"

}


// 表单
/*选项卡切换功能js实现*/
window.onload = function(){
 var oTab = document.getElementById("nav");
 var liArray = oTab.getElementsByTagName("li");
 var tabList = document.getElementsByClassName("tab"); 
 var btnShow = document.getElementsByClassName("btn-show");
 var btnCollapse = document.getElementsByClassName("btn-collapse");
 for (var i=0; i<liArray.length; i++) {
  liArray[i].onclick = function(){
   for (var j=0; j<liArray.length; j++) {
    //移除class样式
    liArray[j].className = "";
   }
   //添加class样式
   this.className = "active";
   //获取DOM索引值
   var index = this.getAttribute("index");
   btnShow[0].setAttribute("button-index", index);
   btnCollapse[0].setAttribute("button-index", index);
   //内容切换
   for (var t = 0; t<tabList.length; t++) {
    var tableIndex = tabList[t].getAttribute("tab-index");
    if(index === tableIndex){
     tabList[t].style.display = "block";
    }else{
     tabList[t].style.display = "none";
    }
   }
  }
 }
 //显示全部
 btnShow[0].onclick = function(){
  var btnIndex = this.getAttribute("button-index");
  //表格index与按钮btnIndex
  for (var t = 0; t<tabList.length; t++) {
   var tableIndex = tabList[t].getAttribute("tab-index");
   if(btnIndex === tableIndex){
    tabList[t].style.display = "block";
   }
  }
  this.style.display = "none";
  btnCollapse[0].style.display = "block";
 }
 //折叠
 btnCollapse[0].onclick = function(){
  var btnIndex = this.getAttribute("button-index");
  //表格index与按钮btnIndex
  for (var t = 0; t<tabList.length; t++) {
   var tableIndex = tabList[t].getAttribute("tab-index");
   if(btnIndex === tableIndex){
    tabList[t].style.display = "none";
   }
  }
  this.style.display = "none";
  btnShow[0].style.display = "block";
 } 
}