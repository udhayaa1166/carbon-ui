import { Fab as CFab } from "@rmwc/fab";
import '@rmwc/fab/styles';

export function Fab(props){
    let childrenMc = props.children || null;
    return <CFab {...props}>
        {childrenMc}
    </CFab>;
}