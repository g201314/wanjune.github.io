var rule = {
  title: '多瑙影视',
  host: 'https://www.duonaovod.com',
  url: '/index.php/vod/show/by/time/id/fyclass/page/fypage.html',
  searchUrl: '/index.php/vod/search/page/1/wd/**.html',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: { 'User-Agent': 'MOBILE_UA' },
  class_name: '动漫&综艺&剧集&+国产&+日韩&+欧美&+海外&电影&纪录',
  class_url: '4&3&2&13&15&16&31&1&20',
  play_parse: true,
  lazy: '',
  limit: 8,
  推荐: 'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
  double: true,
  一级: 'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
  二级: { "title": "h2&&Text;.text-muted:eq(-1)&&Text", "img": ".content_thumb .vodlist_thumb&&data-original", "desc": ".content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(0)&&Text;.content_detail.content_min.fl&&ul&&li:eq(2)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&a&&Text", "content": ".content&&Text", "tabs": ".play_source_tab:eq(0) a", "lists": ".play_list_box:eq(#id)&&.content_playlist li" },
  搜索: 'body .searchlist_item;a&&title;.vodlist_thumb.lazyload&&data-original;.pic_text.text_right&&Text;a&&href',
}

