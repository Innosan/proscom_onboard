import { defineStore } from 'pinia'


export const useCoursesStore = defineStore('courses-store', {
    // arrow function recommended for full type inference
    state: () => {
        const courses: never[] = []
        const completedCourses: never[] = []

        return {
            // all these properties will have their type inferred automatically
            courses: courses,
            completedCourses: completedCourses
        }
    },
    actions: {
        async getCourses() {
            const client = useSupabaseClient()

            const { data: dbCourses } = await useAsyncData('courses', async () => {
                const { data } = await client.from('course').select()
                return data
            })

            this.courses = dbCourses.value
        },
        async getCompletedCourses() {
            const client = useSupabaseClient()
            const user = useSupabaseUser()

            const { data: completedCourses } = await useAsyncData('completed-courses', async () => {
                const { data } = await client
                    .from("enrollment")
                    .select("*, course_id(*)")
                    .eq("user_id", user.value?.id)
                return data
            })

            this.completedCourses = completedCourses.value
        },
        async completeCourse(courseId: number) {
            const client = useSupabaseClient()
            const user = useSupabaseUser()

            const { data: completedCourse } = await useAsyncData('courses', async () => {
                // @ts-ignore
                const { data } = await client
                    .from('enrollment')
                    .upsert({
                        user_id: user.value?.id,
                        course_id: courseId,
                        status_id: 1,
                    })
                    .select()
            })

            await this.getCourses()
        }
    },
})
