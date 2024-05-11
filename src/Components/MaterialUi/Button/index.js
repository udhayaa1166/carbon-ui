import { Button as GButton } from '@rmwc/button';
import '@rmwc/button/styles';

export function Button(props){
    let childrenMc = props.children || null;
    return (
        <GButton {...props}>
            {childrenMc}
        </GButton>
    )
    
}