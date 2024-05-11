import { MenuSurfaceAnchor as GMenuSurfaceAnchor, Menu as GMenu, 
         MenuItem as GMenuItem, MenuItems as GMenuItems, MenuSurface as GMenuSurface } from "@rmwc/menu";
import '@rmwc/menu/styles';

export function MenuSurfaceAnchor(props){
    let childrenMc = props.children || null;
    return(
        <GMenuSurfaceAnchor {...props}>
            {childrenMc}
        </GMenuSurfaceAnchor>
    );
};

export function Menu(props){
    let childrenMc = props.children || null;
    return(
        <GMenu {...props}>
            {childrenMc}
        </GMenu>
    );
};

export function MenuItem(props){
    let childrenMc = props.children || null;
    return(
        <GMenuItem {...props}>
            {childrenMc}
        </GMenuItem>
    );
};

export function MenuItems(props){
    let childrenMc = props.children || null;
    return(
        <GMenuItems {...props}>
            {childrenMc}
        </GMenuItems>
    );
};

export function MenuSurface(props){
    let childrenMc = props.children || null;
    return(
        <GMenuSurface {...props}>
            {childrenMc}
        </GMenuSurface>
    );
};