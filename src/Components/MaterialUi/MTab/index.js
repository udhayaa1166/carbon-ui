import { Tabs } from '@mantine/core'; 

export function MTab(props) {

    let childrenMc = props.children || null;
    return (
        <Tabs {...props}>
            {childrenMc}
        </Tabs>
    );
}