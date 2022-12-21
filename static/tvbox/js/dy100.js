var rule = {
  desc: "https://dy100.vip",
  title: '100影视',
  host: 'https://www.dy118.me',
  url: '/vodshow/fyclass--time------fypage---.html',
  searchUrl: '/vodsearch/**----------1---.html',
  searchable: 2,
  quickSearch: 1,
  filterable: 1,
  class_name: '动漫&综艺&剧集&+国产&+日韩&+欧美&电影',
  class_url: '4&3&2&13&15&16&1',
  推荐: '.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  一级: '.module-poster-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
  二级: { "title": "h1&&Text;.module-info-tag-link:eq(2)&&Text", "img": ".lazyload&&data-original", "desc": ".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text;.module-info-content&&.module-info-item:eq(1)&&.module-info-item-content&&Text", "content": ".module-info-introduction-content&&Text", "tabs": ".module-tab-items-box:eq(0)&&.module-tab-item", "lists": ".module-list:eq(#id)&&.module-play-list-content a" },
  搜索: '.module-card-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
}