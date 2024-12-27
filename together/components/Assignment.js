export default {
    template: `
<!--        <li v-for="assignment in assignments" :key="assignment.id">-->
<!--            <label>-->
<!--                {{ assignment.name }}-->
<!--                <input type="checkbox" v-model="assignment.completed">-->
<!--            </label>-->
<!--        </li>-->
            <li :key="assignment.id">
                <label>
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
    `,

    props:{
        assignment: Object,
    }
}