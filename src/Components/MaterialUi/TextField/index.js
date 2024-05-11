import { TextInput as GTextField } from '@mantine/core';
import '@mantine/core/styles.css';

export function TextField(props) {

    let childrenMc = props.children || null;
    return (
        <GTextField className='textInput' {...props}>
            {childrenMc}
        </GTextField>
    );
}