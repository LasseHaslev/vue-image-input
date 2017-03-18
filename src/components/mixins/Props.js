import { Props } from '@lassehaslev/vue-image-picker';
import { DropzoneProps } from '@lassehaslev/vue-image-picker';
export default {

    mixins: [ Props, DropzoneProps ],
     
    props: {
        'images-adaptor': {
            type: Function,
            default( images ) {
                return images;
            },
        },
        name: {
            type: String,
            required: true,
        },
        'value-adaptor': {
            type: Function,
            default( value ) {
                return value;
            },
        }
    },
}
