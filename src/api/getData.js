import axios from 'axios';

const HOST='https://api.mtnhao.com'; /*API服务器地址*/

/**
 * 搜索热词
 */
export const getWord = () => axios.get(`${HOST}/search/hot`);

/**
 * 搜索歌曲
 */
export const getSearchSong = (word) => axios.get(`${HOST}/search?keywords=${word}`);

/**
 * 歌曲排行榜
 */
export const getRank = () => axios.get(`${HOST}/top/list?idx=1`);

/**
 * 推荐歌曲列表
 */
export const getRemd = () => axios.get(`${HOST}/personalized`);

/**
 * 最新歌曲列表
 */
export const getNewSong = () => axios.get(`${HOST}/personalized/newsong`);

/**
 * 音乐播放url
 */
export const getMusicUrl = (id) => axios.get(`${HOST}/song/url?id=${id}`);

/**
 * 推荐歌单
 */
export const getPlaylist = (id) => axios.get(`${HOST}/playlist/detail?id=${id}`);

/**
 * 音乐详情
 */
export const getMusicDetail = (id) => axios.get(`${HOST}/song/detail?ids=${id}`);

/**
 * 检测歌曲是否可播放？（版权/会员限制）
 */
export const checkMusic = (id) => axios.get(`${HOST}/check/music?id=${id}`);

/**
 * 获取歌曲歌词
 */
export const getLrc = (id) => axios.get(`${HOST}/lyric?id=${id}`);

/**
 * 获取歌曲热门评论
 */
export const getComment = (id) => axios.get(`${HOST}/comment/hot?id=${id}&type=0`);
