var rule = {
  title: '看B站',
  host: 'https://kanb.tv',
  url: '/Show/fyclassKtimeKKKKKKfypageKKK.html',
  searchUrl: '/Videosearch/**KKKKKKKKKK1KKK.html',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  headers: { 'User-Agent': 'MOBILE_UA' },
  class_name: '哔哩&综艺&剧集&+国产&+韩国&+日本&+美国&电影',
  class_url: 'bilibiliK&VarietyK&lianxujuK&lianxujuK中国大陆&lianxujuK韩国&lianxujuK日本&lianxujuK美国&MovieK',
  play_parse: true,
  lazy: '',
  limit: 8,
  推荐: 'body&&.hl-list-wrap;ul&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
  double: true,
  一级: '.hl-vod-list&&li;a&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
  二级: { "title": ".hl-dc-title&&Text;.hl-col-xs-12&&em&&.hl-text-muted:eq(-2)&&Text", "img": ".hl-lazy&&data-original", "desc": ";;.hl-col-xs-12:eq(5)&&Text;.hl-col-xs-12:eq(3)&&Text;.hl-col-xs-12:eq(4)&&Text", "content": ".hl-content-text&&Text", "tabs": ".hl-plays-from a", "lists": ".hl-plays-list:eq(#id) li" },
  搜索: '.hl-list-wrap&&ul&&li;.hl-item-thumb&&title;.hl-lazy&&data-original;.hl-pic-text&&Text;a&&href',
}