import { AppShell } from '@mantine/core';
import '@mantine/core/styles.css';

export function AppShellHeader(props){
    let eChildren = props.children || null;
    return <AppShell.Header {...props}>
        {eChildren}
    </AppShell.Header>;
};

export function AppShellParent(props){
    let eChildren = props.children || null;
    return <AppShell {...props}>
        {eChildren}
    </AppShell>;
};

export function AppShellNavbar(props){
    let eChildren = props.children || null;
    return <AppShell.Navbar {...props}>
        {eChildren}
    </AppShell.Navbar>;
};

export function AppShellMain(props){
    let eChildren = props.children || null;
    return <AppShell.Main {...props}>
        {eChildren}
    </AppShell.Main>;
};