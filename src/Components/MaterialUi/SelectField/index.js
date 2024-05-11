import { Select as GSelect } from '@mantine/core';
import '@mantine/core/styles.css';

export function SelectField(props) {
    let childrenMc = props.children || null;
    return (
        <GSelect outlined enhanced {...props}>
            {childrenMc}
        </GSelect>
    );
}