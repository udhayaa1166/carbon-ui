import { Grid as GGrid, GridCell as GGridCell } from '@rmwc/grid';
import '@rmwc/grid/styles';

export function Grid(props) {

    let childrenMc = props.children || null;
    return (
        <GGrid {...props}>
            {childrenMc}
        </GGrid>
    );
}

export function GridCell(props) {

    let childrenMc = props.children || null;
    return (
        <GGridCell {...props}>
            {childrenMc}
        </GGridCell>
    );
}