const mutations = {
    setLoad(state, show) { //设置loading组件是否显示
        state.isLoad = show;
    },
    setToast(state, show) { //设置toast组件是否显示
        state.isToast = show;
    },
    setCurrentMusic(state, data) { //设置当前播放音乐数据
        state.currentMusic = data;
    },
    setMiniPlayer(state, show) { //设置播放器是否显示
        state.isMiniPlayer = show;
    },
    setListDetail(state, data) { //设置歌单页面数据
        state.listDetail = data;
    },
    setCurrentTime(state, data) { //设置播放进度
        state.currentTime = data;
    },
    changePlayerStatus(state) { //设置播放状态
        if (state.playerStatus) {
            state.playerStatus = false;
        } else {
            state.playerStatus = true;
        }

    }
};

export default mutations