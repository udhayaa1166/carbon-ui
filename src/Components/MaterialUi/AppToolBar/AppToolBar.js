import { 
         TopAppBar as GTopAppBar, TopAppBarActionItem as GTopAppBarActionItem, TopAppBarRow as GTopAppBarRow,
         TopAppBarSection as GTopAppBarSection, TopAppBarNavigationIcon as GTopAppBarNavigationIcon, TopAppBarTitle as GTopAppBarTitle,
         TopAppBarFixedAdjust  as GTopAppBarFixedAdjust 
       } from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';

export function TopAppBar(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBar {...props}>
            {childrenMc}
        </GTopAppBar>
    )
};

export function TopAppBarActionItem(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarActionItem {...props}>
            {childrenMc}
        </GTopAppBarActionItem>
    )
};

export function TopAppBarRow(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarRow {...props}>
            {childrenMc}
        </GTopAppBarRow>
    )
};

export function TopAppBarSection(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarSection {...props}>
            {childrenMc}
        </GTopAppBarSection>
    )
};

export function TopAppBarNavigationIcon(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarNavigationIcon {...props}>
            {childrenMc}
        </GTopAppBarNavigationIcon>
    )
};

export function TopAppBarTitle(props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarTitle {...props}>
            {childrenMc}
        </GTopAppBarTitle>
    )
};

export function TopAppBarFixedAdjust (props){
    let childrenMc = props.children || null;
    return (
        <GTopAppBarFixedAdjust  {...props}>
            {childrenMc}
        </GTopAppBarFixedAdjust >
    )
};


