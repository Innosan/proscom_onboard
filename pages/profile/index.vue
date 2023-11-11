<script setup lang="ts">
const completedCourses = useCoursesStore()
completedCourses.getCompletedCourses()
</script>

<template>
  <div class="flex gap-8">
    <div
        v-for="course in completedCourses.completedCourses"
        class="card"
    >
      <p class="font-bold">{{course.course_id.title}}</p>
      <p class="opacity-50">{{course.course_id.description}}</p>
    </div>
  </div>
</template>

<style scoped>
iframe {
  height: 1200px;
}
</style>
