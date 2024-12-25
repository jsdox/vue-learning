export default
{
    template: `
        <button 
            :class="{ 
                'btn': true,
                'btn-primary': type === 'primary',
                'btn-secondary': type === 'secondary',
                'btn-muted': type === 'muted', 
            }"
            :disabled="processing"
        >
            <slot/>
        </button>
    `,

    props: {
        'type': {
            type: String,
            default: 'primary'
        }
    },
    data() {
        return {
            processing: true
        }
    },
    // mounted() {
    //     alert('Button mounted');
    // },
}