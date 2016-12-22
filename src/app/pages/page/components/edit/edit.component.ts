import { Component } from '@angular/core';

@Component({
  selector: 'page-edit',
  template: require('./edit.html')
})

export class PageEdit {

  // 文章内容
  public page = {
    title: '文章标题',
    slug: 'page1',
    content: '<p>在这里输入文章内容</p>',
    status: 1,
    public: 1,
    publish: 1,
    thumb: 'http://surmon.me/wp-content/uploads/2015/07/surmon.png',
    tag: ['579610183b6d2f7c19ed3e46', '57961c500975a2dc0de4b627'],
    category: ['579610183b6d2f7c19ed3e46', '57961c500975a2dc0de4b627'],
    duoshuo: {
      weibo: true,
      qzone: true,
      renren: false,
      douban: true
    },
    // extend: [{}]
  }

  submitPage(event) {
    console.log('Submit Page', this);
  }

  constructor() {
  }

  ngOnInit() {
  }
}