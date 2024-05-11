import {
    DataTableContent as GDataTableContent, DataTableHead as GDataTableHead, DataTableRow as GDataTableRow,
    DataTableHeadCell as GDataTableHeadCell, DataTableBody as GDataTableBody, DataTableCell as GDataTableCell,
    DataTable as GDataTable
} from '@rmwc/data-table';
import '@rmwc/data-table/styles';
import '../style.css';

export function DataTableContent(props) {
    let childrenMc = props.children || null;
    return (
        <GDataTableContent {...props}>
            {childrenMc}
        </GDataTableContent>
    )
};

export function DataTableHead(props) {

    let childrenMc = props.children || null;
    return (
        <GDataTableHead {...props}>
            {childrenMc}
        </GDataTableHead>
    );
};

export function DataTableRow(props) {

    let childrenMc = props.children || null;
    return (
        <GDataTableRow {...props}>
            {childrenMc}
        </GDataTableRow>
    );
};

export function DataTableHeadCell(props) {

    let childrenMc = props.children || null;
    return (
        <GDataTableHeadCell className='dataPanelHeader' {...props}>
            {childrenMc}
        </GDataTableHeadCell>
    );
};

export function DataTableBody(props) {

    let childrenMc = props.children || null;
    return (
        <GDataTableBody {...props}>
            {childrenMc}
        </GDataTableBody>
    );
};

export function DataTableCell(props) {

    let childrenMc = props.children || null;
    return (
        <GDataTableCell {...props}>
            {childrenMc}
        </GDataTableCell>
    );
};

export function DataTable(props) {

    let childrenMc = props.children || null;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: 'white',
                      borderRadius: '7px' }}>
            <GDataTable className='dataTable' {...props}>
                {childrenMc}
            </GDataTable>
        </div>
    );
};