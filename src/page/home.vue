<template>
    <div>
      <Header></Header>
      <keep-alive>
        <component :is="tabName"></component>
      </keep-alive>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import IndexTab from "@/components/indexTab/index.vue";
import RankTab from "@/components/rankTab/index.vue";
import SearchTab from "@/components/searchTab/index.vue";

export default {
  data: () => ({
    tabName: "IndexTab"
  }),
  components: {
    Header,
    IndexTab,
    RankTab,
    SearchTab
  }
};
</script>
