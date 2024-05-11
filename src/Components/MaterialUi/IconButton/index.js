import { IconButton as GIconButton } from '@rmwc/icon-button';
import '@rmwc/icon-button/styles';

export function IconButton(props){
    let childrenMc = props.children || null;
    return (
        <GIconButton {...props}>
            {childrenMc}
        </GIconButton>
    )
}