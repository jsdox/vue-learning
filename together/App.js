const { ref } = Vue;
export default {
    template:`<section v-show="inProgressAssignments.length">
        <h2>In progress</h2>
        <ul>
            <li v-for="assignment in inProgressAssignments" :key="assignment.id">
                <label>
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
        </ul>
    </section>

    <section v-show="completedAssignments.length">
        <h2>Completed</h2>
        <ul>
            <li v-for="assignment in completedAssignments" :key="assignment.id">
                <label>
                    {{ assignment.name }}
                    <input type="checkbox" v-model="assignment.completed">
                </label>
            </li>
        </ul>
    </section>
    `,

    setup() {
        const assignments = ref([
            {id:1, name: 'Finish project', completed: false },
            {id:2, name: 'Read chapter 4', completed: false },
            {id:3, name: 'Turn in homework', completed: false }
        ])
        return {
            assignments
        }
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter(a => a.completed);
        },
        inProgressAssignments() {
            return this.assignments.filter(a => !a.completed);
        }
    }
}