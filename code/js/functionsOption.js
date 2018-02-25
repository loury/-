function createFri() {
  var main = document.getElementById("mMain");
    var title = createEle("div", "main_tit", "rlt");
    title.id="mainTit";
    title.innerHTML="好友动态";
    var content = createEle("div", "main_content", "rlt"); 
    content.id="mainContent"
  addChilds(main, title,content);
}
function createFriOne(id,uid,headimgurl,username,createtime,tTitle,content,imgsurl,commentNum,thumbupNum,collectionNum) {
  var Mcontent = document.getElementById("mainContent");
    var section = createEle("section", "jo"+id);
    section.id="jo-"+id;
    $(section).attr("data-id",""+id);
      var info = createEle("div", "info");
      info.id="u-"+id ;
      info.uid=""+id;
        var head = createEle("div","in_head");
          var img = createEle("img","in_head_image",);
          img.src=""+headimgurl;
          img.width="50";
          img.height="50";
        addChilds(head, img);
        var text = createEle("div","in_text","rlt");
          var name=createEle("div","in_name");
          name.innerHTML=""+username;
          var data=createEle("div","in_data");
          data.innerHTML=""+createtime;
        addChilds(text, name,data);
      addChilds(info, head,text,);
      var article = createEle("div", "co_article");
        var artText = createEle("div", "co_art_text");
          var artTitle = createEle("div", "co_art_title");
          artTitle.innerHTML=""+tTitle
          var artContent = createEle("div", "co_art_content");
          artContent.innerHTML=""+content;
          var artImg = createEle("div", "co_art_img");
            var artImgI = createEle("img");
            artImgI.src=""+imgsurl;
            artImgI.width="100";
            artImgI.height="100";
          addChilds(artImg, artImgI);
        addChilds(artText, artTitle,artContent,artImg);
      addChilds(article, artText);
      var handle = createEle("div", "co_handle");
        var hr = createEle("hr");
        var comment = createEle("div", "comment");
        comment.id="comment";
        comment.innerHTML="评论"+commentNum+"&nbsp;&nbsp;";
        var collect = createEle("div", "collect");
        collect.id="collect";
        collect.innerHTML="收藏"+collectionNum+"&nbsp;&nbsp;";
        var thumbup = createEle("div", "thumbup");
        thumbup.id="thumbup";
        thumbup.innerHTML="赞"+thumbupNum+"&nbsp;&nbsp;";
        var material = createEle("div", "material");
        material.id="material";
        material.innerHTML="素材获取";
      addChilds(handle, hr,comment,collect,thumbup,material);
    addChilds(section,info,article,handle);
  addChilds(Mcontent, section);
}
