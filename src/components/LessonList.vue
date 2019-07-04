<template>
  <div>
    <LessonItem v-for="lesson in lessons" :key="lesson" :lesson="lesson"></LessonItem>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import LessonItem from "./LessonItem";
export default {
  components: {
    LessonItem
  },
  computed: { ...mapState(["lessons"]) },
  methods: {
    ...mapActions(["fetchLessons"])
  },
  mounted() {
    this.fetchLessons();
  }
};
</script>

<style scoped>
.list {
  padding-top: 30px;
  text-align: center;
}
</style>
