# 基于vue的网易云音乐移动端web app

### 📱在线预览
* PC端请使用Chrome手机模式[PC端点我预览](https://music.apoollo.xyz/)
* 手机扫下面二维码:
  ![](/public/qrcode.png)

### 🧰主要功能

目前实现的：

- [x] 推荐歌单
- [x] 最新音乐
- [x] 热歌榜
- [x] 搜索歌曲
- [x] 播放音乐
- [x] 歌词滚动
- [x] 查看评论
- [x] 底部迷你播放器
  
TODO：
- [ ] 底部迷你播放器左右滑动切歌
- [ ] 播放器全屏
- [ ] 音乐播放进度条
- [ ] 进度条拖拽
- [ ] 播放模式切换
- [ ] 播放列表
- [ ] 登录
- [ ] 每日推荐
- [ ] 喜欢歌曲
- [ ] 对歌曲评论
...

### 🎴运行截图

### 🔗技术栈
* 构建工具：Vue cli3;
* 框架：Vue + Vue router + Vuex;
* http请求：axios;
* 歌词滚动：better-scroll;
* 部分UI组件：Vux;

[API](https://binaryify.github.io/NeteaseCloudMusicApi)

### 💻运行此项目

 ```git
  git clone https://github.com/janyin/vue-wangyiyun-music.git
  
  cd vue-wangyiyun-music
  
  npm install
  
  npm run serve (开发编译)

  npm run build (打包发布)
  ```

### 📚项目结构


<details>
  
  <summary><= 点击查看</summary>
  
  
  
```
│  App.vue    //根组件
│  main.js    //项目入口
│  router.js  //vue router路由配置
│
├─api                       
│      getData.js           // Api数据请求参数配置
│
├─assets                    // 静态资源
│      
│
├─components               //组件目录
│  │  comment.vue          //单个评论组件
│  │  header.vue           //首页头部
│  │  miniPlayer.vue       //底部迷你播放器
│  │  song.vue             //单个歌曲组件
│  │  
│  ├─indexTab              //index选项卡
│  │      footer.vue       //index底部
│  │      index.vue        //index选项卡组件入口
│  │      recommendList.vue  //推荐歌单组件
│  │
│  ├─rankTab               //排行榜选项卡
│  │      index.vue        //排行榜组件
│  │      
│  └─searchTab             //搜索选项卡
│          index.vue       //搜索选项卡组件入口
│          trending.vue    //热门搜索词组件
│
├─page                     //页面目录
│      home.vue            //主页
│      player.vue          //播放页面
│      playList.vue        //歌单页面
│
├─store                    //Vuex
│      actions.js
│      getters.js
│      index.js
│      mutations.js
│      state.js
│
├─styles                    //css目录
│      comment.css
│      player.css
│      playlist_page.css
│      remd_list.css
│      song_item.css
│
└─utils                      //公用JS目录
        global.js            //图片懒加载配置
        lrcparse.js          //歌词数据解析
```
</details>



