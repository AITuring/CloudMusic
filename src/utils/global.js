import VueLazyLoad from "vue-lazyload";

const EMPTY_IMG = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default {
    install(Vue) {
        Vue.use(VueLazyLoad, {
            loading: EMPTY_IMG,
            error: EMPTY_IMG,
        });
    },
}