import { Dialog as GDialog, DialogButton as GDialogButton, 
         DialogContent as GDialogContent, DialogActions as GDialogActions, DialogTitle as GDialogTitle 
} from "@rmwc/dialog";
import '@rmwc/dialog/styles';

export function Dialog(props){
    let childrenMc = props.children || null;
    return(
        <GDialog {...props}>
            {childrenMc}
        </GDialog>
    );
};

export function DialogActions(props){
    let childrenMc = props.children || null;
    return(
        <GDialogActions {...props}>
            {childrenMc}
        </GDialogActions>
    );
};

export function DialogButton(props){
    let childrenMc = props.children || null;
    return(
        <GDialogButton {...props}>
            {childrenMc}
        </GDialogButton>
    );
};

export function DialogContent(props){
    let childrenMc = props.children || null;
    return(
        <GDialogContent {...props}>
            {childrenMc}
        </GDialogContent>
    );
};

export function DialogTitle(props){
    let childrenMc = props.children || null;
    return(
        <GDialogTitle {...props}>
            {childrenMc}
        </GDialogTitle>
    );
};
