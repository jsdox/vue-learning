const { ref } = Vue;

import Assignment from "./Assignment.js";
export default {
    components: {Assignment},
    template: `<section v-show="assignments.length">
        <h2>{{ title }}</h2>
        <ul>
        <assignment v-for="assignment in assignments" :assignment="assignment"></assignment>
<!--            <li v-for="assignment in assignments" :key="assignment.id">-->
<!--                <label>-->
<!--                    {{ assignment.name }}-->
<!--                    <input type="checkbox" v-model="assignment.completed">-->
<!--                </label>-->
<!--            </li>-->
        </ul>
    </section>`,

    props: {
        assignments: Array,
        title: String
    }
}