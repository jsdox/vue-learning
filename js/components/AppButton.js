export default
{
    template: `
        <button 
            :class="{
                'btn': true,
                'btn-primary': type === 'primary',
                'btn-secondary': type === 'secondary',
                'btn-muted': type === 'muted', 
                'is-loading': loading === 'yes'
            }"
        >
            <slot/>
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        loading : {
            type: String,
            default: 'no'
        }
    },
    // data() {
    //     return {
    //         processing: true
    //     }
    // },
    // mounted() {
    //     alert('Button mounted');
    // },
}