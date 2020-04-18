import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const home = () => import('@/page/home');
const playList = () => import('@/page/playList');
const player = () => import('@/page/player');

export default new Router({
    routes: [{
        path: '/',
        component: home //主界面
    }, {
        path: '/playlist/detail',
        component: playList //歌单页面
    }, {
        path: '/player',
        component: player //播放页面
    }]
})