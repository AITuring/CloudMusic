# 基于vue的网易云音乐移动端web app

### 📱在线预览

### 🧰主要功能

目前实现的：

- [x] 推荐歌单
- [x] 最新音乐
- [x] 热歌榜
- [x] 搜索歌曲
- [x] 播放音乐
- [x] 歌词滚动
- [x] 查看评论
- [ ] 底部迷你播放器
  
TODO：

### 🎴运行截图

### 🔗技术栈

### 💻运行此项目

### 📚项目结构



* 项目技术都比较简单，适合新手拿来练手的入门级Vue开发实战项目;
* 主要功能有：推荐歌单、搜索歌曲、歌词滚动等;

> 网易云音乐移动官网是使用React构建的, 虽然音乐播放器烂大街了，但心血来潮还是写了一个Vue版本,界面看起来和官网没多大差别;  
>[API来源][2]

## 在线预览效果

* PC端请使用Chrome手机模式[PC端点我预览][1];手机扫下面二维码;

 > ![二维码](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/qrcode.png)

 > <strong>如果喜欢可以右上角给个⭐Star⭐, 谢谢！</strong>
 ---

## 用到的部分技术

* 构建工具：Vue cli3;
* 框架：Vue + Vue router + Vuex;
* http请求：axios;
* 歌词滚动：better-scroll;
* 部分UI组件：Vux;

## 运行此项目
  
  ```git
  git clone https://github.com/janyin/vue-wangyiyun-music.git
  
  cd vue-wangyiyun-music
  
  npm install
  
  npm run serve (开发编译)

  npm run build (打包发布)
  ```

## 效果截图

* ![首页](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/1.png)
![播放](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/2.png)

* ![评论](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/3.png)
![歌单](https://github.com/janyin/vue-wangyiyun-music/blob/master/screenshot/4.png)

## 项目目录

<details>
<summary>展开查看</summary>
<pre><code>

│  App.vue    //根组件
│  main.js    //项目入口
│  router.js  //vue router路由配置
│
├─api                       
│      getData.js           // Api数据请求参数配置
│
├─assets                    // 静态资源
│      disc_default.png
│      disc_plus.png
│      find.svg
│      foot.svg
│      footbg.png
│      hot_bg.jpg
│      hot_icon.png
│      like.svg
│      logo.svg
│      needle_plus.png
│      playbar.png
│      play_btn.png
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

</code></pre>

</details>

[1]: http://music.wanegbt.cn/
[2]: https://binaryify.github.io/NeteaseCloudMusicApi
