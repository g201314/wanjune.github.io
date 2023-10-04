var 二级=`js:
  try {
  VOD={};
  let html1 = request(input);
  pdfh = jsp.pdfh;
  VOD.vod_id = input;
  VOD.vod_name = pdfh(html1,"h2&&Text");
  VOD.vod_pic = pdfh(html1,".item-root&&img&&data-src");
  VOD.vod_actor = pdfh(html1,".meta:eq(4)&&Text");
  VOD.vod_area = pdfh(html1,".meta:eq(3)&&Text");
  VOD.vod_year = pdfh(html1,".meta:eq(2)&&Text");
  VOD.vod_remarks = "";
  VOD.vod_director = "";
  VOD.vod_content = "";
  log(VOD);
  var v_tks = '';
  input = "https://www.ikanbot.com/api/getResN?videoId=" + input.split("/").pop() + "&mtype=2"+"&token="+v_tks;
  let html = request(input,{headers:{'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML,like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1','Referer':input}});
  print(html);
  html = JSON.parse(html);
  let episodes = html.data.list;
  let playMap = {};
  if (typeof play_url === "undefined") {var play_url = ""}
  episodes.forEach(function(ep) {
    let playurls = JSON.parse(ep["resData"]);
    playurls.forEach(function(playurl) {
    let source = playurl["flag"];
    if (!playMap.hasOwnProperty(source)) {playMap[source] = []}
    playMap[source].push(playurl["url"].replaceAll('##','#'))
    })
  });
  let playFrom = [];
  let playList = [];
  Object.keys(playMap).forEach(function(key) {
    playFrom.append(key);
    playList.append(playMap[key])
  });
  let vod_play_from = playFrom.join("$$$");
  let vod_play_url = playList.join("$$$");
  VOD["vod_play_from"] = vod_play_from;
  VOD["vod_play_url"] = vod_play_url;
  log(VOD);
  } catch (e) {
  //log("获取二级详情页发生错误:" + e.message)
  }
`;
var rule = {
  title:'爱看机器人',
  host:'https://www.ikanbot.com',
  url:'/hot/index-fyclass-fyfilter-p-fypage.html[/hot/index-fyclass-fyfilter.html]',
  searchUrl:'/search?q=**&p=fypage[/search?q=**]',
  searchable:2,
  quickSearch:0,
  filterable:1,
  filter_url:'{{fl.tag}}',
  图片来源:'@Referer=https://www.ikanbot.com/@User-Agent=Mozilla/5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36',
  filter:{
    "movie":[{"key":"tag","name":"标签","value":[{"n":"热门","v":"热门"},{"n":"最新","v":"最新"},{"n":"经典","v":"经典"},{"n":"豆瓣高分","v":"豆瓣高分"},{"n":"冷门佳片","v":"冷门佳片"},{"n":"华语","v":"华语"},{"n":"欧美","v":"欧美"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"动作","v":"动作"},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"科幻","v":"科幻"},{"n":"悬疑","v":"悬疑"},{"n":"恐怖","v":"恐怖"},{"n":"治愈","v":"治愈"},{"n":"豆瓣top250","v":"豆瓣top250"}]}]
    ,"tv":[{"key":"tag","name":"标签","value":[{"n":"热门","v":"热门"},{"n":"美剧","v":"美剧"},{"n":"英剧","v":"英剧"},{"n":"韩剧","v":"韩剧"},{"n":"日剧","v":"日剧"},{"n":"国产剧","v":"国产剧"},{"n":"港剧","v":"港剧"},{"n":"日本动画","v":"日本动画"},{"n":"综艺","v":"综艺"},{"n":"纪录片","v":"纪录片"}]}]
  },
  filter_def:{
    movie:{tag:'电影'},tv:{tag:'剧集'},
  },
  filter获取方法:`
    let value = [];
    $('ul').eq(2).find('li').each(function() {
      let n = $(this).text().trim();
      value.push({'n':n,'v':n});
    });
    // 电影执行:
    let data = {'movie':[{'key':'tag','name':'标签','value':value}]};
    //console.log(JSON.stringify(data));
    //剧集执行:
    let data = {'tv':[{'key':'tag','name':'标签','value':value}]};
    //console.log(JSON.stringify(data));
  `,
  headers:{'User-Agent':'PC_UA',},
  class_name:'电影&剧集',
  class_url:'movie&tv',
  play_parse:true,
  double:true,
  tab_remove:['wjm3u8','ikm3u8','sdm3u8','M3U8','jinyingm3u8','fsm3u8','ukm3u8'],
  tab_order:['lzm3u8','gsm3u8','zuidam3u8','bjm3u8','snm3u8','wolong','ffm3u8','xlm3u8','yhm3u8'],
  tab_rename:{'lzm3u8':'量子','1080zyk':'1080看','zuidam3u8':'最大资源','kuaikan':'快看','bfzym3u8':'暴风','ffm3u8':'非凡','snm3u8':'索尼','tpm3u8':'淘片','tkm3u8':'天空','wolong':'卧龙'},
  推荐:'.v-list;div.item;*;*;*;*',
  一级:'.v-list&&div.item;p&&Text;img&&data-src;;a&&href',
  二级:二级,
  搜索:'.col-md-8&&.media;h5&&a&&Text;a&&img&&data-src;.label&&Text;a&&href'
}