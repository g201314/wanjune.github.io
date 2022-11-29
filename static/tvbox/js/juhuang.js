var rule = {
  title: '剧荒TV',
  host: 'https://www.juhuang.tv',
  url: '/type/fyclass_type_fypage.html',
  searchUrl: 'https://so.juhuang.tv/?s=**',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: { 'User-Agent': 'MOBILE_UA' },
  class_name: '动漫&综艺&剧集&+港台&+韩国&+日本&+欧美&电影&记录',
  class_url: '4&3&2&14&13&15&16&1&21',
  play_parse: true,
  lazy: '',
  limit: 8,
  推荐: '.module-list;.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  double: true,
  一级: '.module-items&&.module-item;a&&title;img&&data-src;.module-item-text&&Text;a&&href',
  二级: { "title": "h1&&Text;.video-info-aux&&div&&a:eq(0)&&Text", "img": ".module-item-pic&&img&&data-src", "desc": ";.video-info-aux&&a:eq(1)&&Text;.video-info-aux&&a:eq(2)&&Text;.video-info-items:eq(1) a&&Text;.video-info-items:eq(0) a&&Text", "content": ".video-info-content&&Text", "tabs": ".module-tab-title", "lists": ".module-blocklist&&.sort-item a" },
  搜索: '.module-items .module-search-item;a&&title;img&&data-src;.video-serial&&Text;a&&href',
}
