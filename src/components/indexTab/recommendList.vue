<template>
  <div class="song-list">
    <div v-if="loading">loading</div>
    <section v-else>
      <div class="list">
        <a
          href="javascript:void(0)"
          class="remd_li"
          v-for="item in remdList.one"
          :key="item.id"
          @click="gotoListDetail(item)"
        >
          <div class="list-img">
            <img v-lazy="item.imgUrl" alt="pic" />
            <span>{{ item.play }}</span>
          </div>
          <p class="remd-text">{{ item.name }}</p>
        </a>
      </div>
      <div class="list">
        <a
          href="javascript:void(0)"
          class="remd_li"
          v-for="item in remdList.two"
          :key="item.id"
          @click="gotoListDetail(item)"
        >
          <div class="list-img">
            <img v-lazy="item.imgUrl" alt="1" />
            <span>{{ item.play }}</span>
          </div>
          <p class="remd-text">{{ item.name }}</p>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { getRemd } from "@/api/getData";

export default {
  data() {
    return {
      loading: true,
      remdList: "",
      currentID: ""
    };
  },
  methods: {
    ...mapActions(["getListDetail"]),
    ...mapMutations(["setLoad"]),
    async gotoListDetail(item) {
      if (this.currentID != item.id) {
        this.setLoad(true);
        try {
          let res = await this.getListDetail(item.id);
          this.currentID = item.id;
          this.$router.push({
            path: "/playlist/detail",
            query: { id: item.id }
          });
        } catch (err) {
          alert("请求服务器错误");
        } finally {
          this.setLoad(false);
        }
      } else {
        this.$router.push({
          path: "/playlist/detail",
          query: { id: item.id }
        });
      }
    },
    parseData(response) {
      let result = response.data.result.slice(0, 6).map((currentValue) => {
        let obj = {
          id: currentValue.id,
          name: currentValue.name,
          imgUrl: currentValue.picUrl
        };
        let temp = parseInt(currentValue.playCount) + "";
        if (temp.length >= 6) {
          obj.play = temp[0] + temp[1] + "万";
        } else {
          obj.play = temp;
        }
        return obj;
      });
      return {
        one: result.slice(0, 3),
        two: result.slice(3)
      };
    }
  },
  async created() {
    try {
      let response = await getRemd();
      this.remdList = this.parseData(response);
    } catch {
      alert("服务器错误，请重试！");
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style>
@import "~@/styles/remd_list.css";
</style>
