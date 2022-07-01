<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "ChatRoom.vue",
  data: function () {
    return {
      ip: "",
      name: "",
    };
  },
  methods: {

  },
  window: onload = function () {
    this.dialogFormVisible = true;
    let ip = sessionStorage.getItem("ip");
    let name = sessionStorage.getItem("name");
    this.ip = ip;
    this.name = name + "-" + this.form.name;
  }
}
</script>


<style scoped>

</style>
