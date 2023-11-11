<script setup lang="ts">

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  isCompleted: Boolean,
  duration: Number,
  content_url: String,
})

const coursesStore = useCoursesStore()
</script>

<template>
  <div :class="[
      isCompleted ? 'completed' : 'card', 'card p8 gap-8 flex flex-col'
  ]">
    <div>
      <h3 class="text-3xl font-bold">{{props.title}}</h3>
      <p class="opacity-70">{{props.description}}</p>
    </div>

    <div class="flex gap-6 items-center">
      <a :href="props.content_url" class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >Ссылка на курс</a>
      <Dialog
          :preview-url="props.content_url"
          :title="props.title"
      />
      <button
          :disabled="isCompleted"
          @click="coursesStore.completeCourse(id)"
          :class="[isCompleted ? 'opacity-30' : '', 'rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75']">
        Курс пройден
      </button>
    </div>
  </div>
</template>

<style scoped>
.completed {
  background: linear-gradient(88deg, rgba(44, 85, 222, 0.47) 1.32%, rgba(99, 82, 203, 0.00) 98.63%);

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
