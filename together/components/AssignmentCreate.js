const { ref } = Vue;
export default {
    template: `<section>
        <h2>Create Assignment</h2>
        <form @submit.prevent="add">
            <input v-model="newAssignment1" placeholder="Add new assignment" :keyup.prevent="keyHandler" @focus="focus"/>
            <button type="submit">Add</button>
        </form> 
            <p v-if="validateNewAssignmentError" class="error">{{ validateNewAssignmentError }}</p>
    </section>`,
    setup() {
        const newAssignment1 = ref('')
        const validateNewAssignmentError = ref('')
        return {
            newAssignment1,
            validateNewAssignmentError,
        }
    },
    methods: {
        add() {
            if (this.newAssignment1 && this.newAssignment1.trim() !== '') {
                this.$emit('add', this.newAssignment1);
                this.newAssignment1 = '';
                this.validateNewAssignmentError = '';
            } else {
                this.validateNewAssignmentError = 'Please enter a valid assignment name';
            }

        },
        keyHandler(event) {
            if (event.key === 'Enter') {
                this.newAssignment1 = ''; // Clear the error message
                this.add();
            }
        },
        focus() {
            this.validateNewAssignmentError = '';
            this.newAssignment1 = ''; // Clear the error message
        }
        // createAssignment() {
        //     this.$emit('create', {
        //         name: this.name,
        //         completed: false
        //     });
        //     this.name = '';
        // }
    }
}