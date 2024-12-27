const { ref } = Vue;
import AssignmentList from "./AssignmentList.js";
export default{
    components: { AssignmentList },
    template:`
        <assignment-list :assignments="inProgressAssignments" title="In Progress"/></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"/></assignment-list>
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