export default async function completeCourse(courseId: number) {
    const client = useSupabaseClient()
    const user = useSupabaseUser()

    // @ts-ignore
    await client
        .from('enrollment')
        .upsert({
            user_id: user.value?.id,
            course_id: courseId,
            status_id: 1,
        })
        .select()
}
