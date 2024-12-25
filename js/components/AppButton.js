export default
{
    template: `
        <button :disabled="processing">
            <slot/>
        </button>
    `,
    data() {
        return {
            processing: true
        }
    },
    // mounted() {
    //     alert('Button mounted');
    // },
}