var rule = {
  title:'\u732b\u4e86\u4e2a\u54aa',
  host:'http://119.28.59.69:8089',
  homeUrl:'/api/video/index#class=0&page=1',
  url:'/api/video/index#class=fyclass&page=fypage',
  searchUrl:'/api/video/search?params=#keyword=**&page=fypage',
  searchable:1,
  quickSearch:1,
  filterable:1,
  headers:{'User-Agent':'MOBILE_UA'},
  timeout:5000,
  class_name:'\u81ea\u62cd&\u4e0d\u96c5&\u56fd\u4ea7&\u6b27\u7f8e&\u4e2d\u6587&\u5973\u5fe7&\u4e09\u7ea7&\u6210\u4eba&\u6296\u97f3&\u52a8\u6f2b',
  class_url:'42&37&32&16&34&35&39&40&41&31',
  limit:24,
  play_parse:true,
  lazy:'js:log(input);',
  lazy:'js:let VID=input.split(";")[1];let VURL=input.split(";")[0];var fn=rc("maomi_aes.js");let url=VURL+"?params="+fn.En(\'{"id":"\'+VID+\'"}\');input=JSON.parse(fn.De(request(url))).data.video_item[0].file;',
  // 一级:'',
  推荐:'js:let d=[];let bodys={access_token:"",cate_id:MY_CATE,identifier:"ffffffff-c67a-899b-ffff-ffffef05ac4a",page:MY_PAGE,region:0,type_id:0,vip:0,year:""};var fn=rc("maomi_aes.js");bodys=fn.En(stringify(bodys));let obj={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:"params="+bodys+"&version=26&sign="+md5("QEBBQADSwrXIXaNqBmMofjfRY/8Sxaxgparams"+bodys+"version26QEBBQADSwrXIXaNqBmMofjfRY/8Sxaxg")};let api=input.split("#")[0];let html=JSON.parse(fn.De(request(api,obj)));html.data.data.forEach(function(it){d.push({title:it.name,img:it.image,desc:it.rate,url:api.replace("index","detail")+";"+it.id})});setResult(d);',
  一级:'js:let d=[];let bodys={access_token:"",cate_id:MY_CATE,identifier:"ffffffff-c67a-899b-ffff-ffffef05ac4a",page:MY_PAGE,region:0,type_id:0,vip:0,year:""};var fn=rc("maomi_aes.js");bodys=fn.En(stringify(bodys));let obj={headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:"params="+bodys+"&version=26&sign="+md5("QEBBQADSwrXIXaNqBmMofjfRY/8Sxaxgparams"+bodys+"version26QEBBQADSwrXIXaNqBmMofjfRY/8Sxaxg")};let api=input.split("#")[0];let html=JSON.parse(fn.De(request(api,obj)));html.data.data.forEach(function(it){d.push({title:it.name,img:it.image,desc:it.rate,url:api.replace("index","detail")+";"+it.id})});setResult(d);',
  二级:'*',
  搜索:''
}