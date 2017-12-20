var url1 = window.location.href.split('#')[0];
var url2 = encodeURIComponent(url1);
var img = '../static/img/showimg.jpg';  //分享时缩略图

$.post('./wx.php', { url: url2 }, function (data) {
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

wx.ready(function () {
    var shareData = {
        title: '元旦干啥最好玩？当然来抢单了！',
        desc: '预祝大家元旦快乐，新年大单多多！',
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
