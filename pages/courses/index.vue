<script setup lang="ts">
const selectedDep = useDepartmentFilter()
const coursesStore = useCoursesStore()

coursesStore.getCourses()
coursesStore.getCompletedCourses()

const completedCourseIds = coursesStore.completedCourses.map((item) => item.course_id.id);

console.log(completedCourseIds)

function isCourseCompleted(courseId: number) {
  return completedCourseIds.includes(courseId)
}

const client = useSupabaseClient()
const { data: departments } = await useAsyncData('department', async () => {
  const { data } = await client.from('department').select()
  return data
})
</script>

<template>
  <h1 class="text-4xl font-black">Все курсы</h1>
  <Select
      :select-from="departments"
  />
  <div class="flex gap-6 flex-wrap">
    <CourseCard
        v-for="course in coursesStore.courses.filter(({department_id}) => department_id === selectedDep.department.id)"
        :id="course.id"
        :title="course.title"
        :description="course.description"
        :duration="course.duration"
        :content_url="course.content_url"
        :is-completed="isCourseCompleted(course.id)"
    />
  </div>
</template>
