<template>
  <div>
    <div><MenuHome /></div>
    <div><Home /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuHome from "@/components/MenuHome.vue";
import Home from "@/components/Home.vue";

export default {
  name: "home",
  components: {
    Home,
    MenuHome,
  },
};
</script>