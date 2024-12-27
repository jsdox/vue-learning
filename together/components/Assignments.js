const { ref } = Vue;
import AssignmentList from "./AssignmentList.js";
export default {
    components: { AssignmentList },
    template:`
        <div>
            <assignment-list :assignments="filters.inProgressAssignments" title="In Progress"/>
            <assignment-list :assignments="filters.completedAssignments" title="Completed"/>
            <form @submit.prevent="addAssignment">
                <input v-model="newAssignment" placeholder="Add new assignment"/>
                <button type="submit">Add</button>
            </form> 
        </div>   
    `,
    setup() {
        const assignments = ref([
            {id:1, name: 'Finish project', completed: false },
            {id:2, name: 'Read chapter 4', completed: false },
            {id:3, name: 'Turn in homework', completed: false }
        ])
        const newAssignment = ''
        return {
            assignments,
            newAssignment
        }
    },
    computed: {
        // completedAssignments() {
        //     return this.assignments.filter(a => a.completed);
        // },
        // inProgressAssignments() {
        //     return this.assignments.filter(a => !a.completed);
        // },

        filters() {
            return {
                completedAssignments: this.assignments.filter(a => a.completed),
                inProgressAssignments: this.assignments.filter(a => !a.completed)
            }
        },

    },
    methods: {
        addAssignment() {
            if (this.newAssignment && this.newAssignment.trim() !== '') {
                this.assignments.push({
                    id: this.assignments.length + 1,
                    name: this.newAssignment,
                    completed: false
                });
                this.newAssignment = '';
            }
        }
    }
}