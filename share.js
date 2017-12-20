var url1 = window.location.href.split('#')[0];
var url2 = encodeURIComponent(url1);
var img = 'http://192.168.1.221/order/static/img/showimg.jpg';  //分享时缩略图

$.post('./share/wx.php', { url: url2 }, function (data) {
    wx.config({
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        url: data.url,
        jsApiList: [
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
            'onMenuShareQZone',
            'onMenuShareQQ'
        ]
    });
}, "json");


// document.querySelector("#share").onclick = function() {
//   wx.onMenuShareAppMessage({
//     title: "互联网之子",
//     desc:
//       "在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",
//     link: "http://movie.douban.com/subject/25785114/",
//     imgUrl: "http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",
//     trigger: function(res) {
//       // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
//       alert("用户点击发送给朋友");
//     },
//     success: function(res) {
//       alert("已分享");
//     },
//     cancel: function(res) {
//       alert("已取消");
//     },
//     fail: function(res) {
//       alert(JSON.stringify(res));
//     }
//   });
//   alert("已注册获取“发送给朋友”状态事件");
// };

// 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
// document.querySelector("#share").onclick = function() {
//   wx.onMenuShareTimeline({
//     title: "互联网之子",
//     link: "http://movie.douban.com/subject/25785114/",
//     imgUrl: "http://demo.open.weixin.qq.com/jssdk/images/p2166127561.jpg",
//     trigger: function(res) {
//       // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
//       alert("用户点击分享到朋友圈");
//     },
//     success: function(res) {
//       alert("已分享");
//     },
//     cancel: function(res) {
//       alert("已取消");
//     },
//     fail: function(res) {
//       alert(JSON.stringify(res));
//     }
//   });
//   alert("已注册获取“分享到朋友圈”状态事件");
// };



wx.ready(function () {
    var shareData = {
        title: '元旦干啥最好玩？当然来抢单了！',
        desc: '医美视界出品的最新元旦抢单小游戏，预祝大家元旦快乐，新年大单多多！',
        link: url1,
        imgUrl: img, // 分享图标 
        success: function () {
            // 用户确认分享后执行的回调函数 
            alert('分享成功!');
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数  
            alert('取消分享')
        },
        fail: function (res) {
            alert(JSON.stringify(res));
        },
    }

    // 分享给朋友
    //wx.onMenuShareAppMessage(shareData);

    // 分享到朋友圈
    wx.onMenuShareTimeline(shareData);

    //分享到QQ空间
    wx.onMenuShareQZone(shareData);

    // 分享到QQ好友
    wx.onMenuShareQQ(shareData);
});
wx.error(function (res) {
    alert('服务器错误');
    console.log(res)
});