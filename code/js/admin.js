// 鼠标移出移入用户框
$("#user").mouseover(function(){
 $("#us_popup").css("display","block");
 // 同时发送请求
});
$("#user").mouseout(function(){
 $("#us_popup").css("display","none");
});

$("#us_popup").mouseover(function(){
 $("#us_popup").css("display","block");
});
$("#us_popup").mouseout(function(){
 $("#us_popup").css("display","none");
});
// 鼠标移出移入消息框
$("#message").mouseover(function(){
 $("#me_popup").css("display","block");
});
$("#message").mouseout(function(){
 $("#me_popup").css("display","none");
});

$("#me_popup").mouseover(function(){
 $("#me_popup").css("display","block");
});
$("#me_popup").mouseout(function(){
 $("#me_popup").css("display","none");
});

// 左侧边栏
// 我的手账
$("#myHomepage").click(function(){
  $("#myHomepage").addClass("m_left_select");
  $("#myFriends").removeClass("m_left_select");  
  $("#atMe").removeClass("m_left_select");
  // 关闭小列表
  $("#atMeM").css("display","none");
});
// 好友动态
$("#myFriends").click(function(){
  $("#myFriends").addClass("m_left_select");
  $("#myHomepage").removeClass("m_left_select");  
  $("#atMe").removeClass("m_left_select");
  // 关闭小列表
  $("#atMeM").css("display","none");
  // 发送请求,获取好友动态即关注者发的 
  
  $.post("${basePath}/techo/search",
    {noticeTechoUid:uid
      page:[currentPage:1]
    } function(data){
      $.each(data, function(idx, obj) {
      var id=obj.id;
      var uid=obj.uid;
      $post("${basePath}/user/show"{id:id} function(data){
        var headimgurl=data.headimgurl;
      })
      var username=obj.username;
      var createtime=obj.createtime;
      var tTitle=obj.title;
      var content=obj.content.substring(0,111)+"...";
      var imgsurl=obj.imgsurl;
      var commentNum=obj.commentNum;
      var thumbupNum=obj.thumbupNum;
      var collectionNum=obj.collectionNum;
      createFri();
      createFriOne(id,uid,headimgurl,username,createtime,tTitle,content,imgsurl,commentNum,thumbupNum,collectionNum);
    })
      
  })
  // 没服务器端测试用
    // var id="1";
    // var uid="u-1";
    // var headimgurl="../images/us_head.jpg";
    // var username="手账小达人";
    // var createtime="2018.02.03";
    // var tTitle="晒一晒自己的手账拼贴";
    // var content="17年的本子，话唠的我在用后面的点阵页做测试~练一练字体大小，省的明年面对A6小可爱无从下笔~手账小白不敢一下子就入A5的本子，那么大怕用不来~话说为啥没有A5.5呢，太好奇了，就没有人主动开发一个尺寸适中的手帐本吗";
    // var imgsurl="../images/shouzhang.jpg";
    // var commentNum="12";
    // var thumbupNum="45";
    // var collectionNum="452";
    // createFri();
    // createFriOne(id,uid,headimgurl,username,createtime,tTitle,content,imgsurl,commentNum,thumbupNum,collectionNum);
});
// 与我相关
$("#atMe").click(function(){
  $("#atMe").addClass("m_left_select");
  $("#myHomepage").removeClass("m_left_select");  
  $("#myFriends").removeClass("m_left_select");
  // 展开小列表
 $("#atMeM").css("display","block");
  // 发送请求
});

// 与我相关
$("#comment").click(function(){
  $("#comment").html("√&nbsp;&nbsp;评论");
  $("#like").html("赞");
  $("#collect").html("收藏");
  $("#fans").html("粉丝");
  // 请求评论列表
})
$("#like").click(function(){
  $("#comment").html("评论");
  $("#like").html("√&nbsp;&nbsp;赞");
  $("#collect").html("收藏");
  $("#fans").html("粉丝");
  // 请求赞列表
})
$("#collect").click(function(){
  $("#comment").html("评论");
  $("#like").html("赞");
  $("#collect").html("√&nbsp;&nbsp;收藏");
  $("#fans").html("粉丝");
  // 请求收藏列表
})
$("#fans").click(function(){
  $("#comment").html("评论");
  $("#like").html("赞");
  $("#collect").html("收藏");
  $("#fans").html("√&nbsp;&nbsp;粉丝");
  // 请求粉丝列表
})