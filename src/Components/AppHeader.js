import React from "react";
import {
    TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarActionItem, TopAppBarNavigationIcon,
    TopAppBarTitle, TopAppBarFixedAdjust
} from "./MaterialUi";
export default function AppHeader() {
    return (
        <>
            <TopAppBar style={{ backgroundColor: '#161616' }}>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarNavigationIcon icon="menu" />
                        <TopAppBarTitle>IBM Carbon Tutorial</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection alignEnd>
                        <TopAppBarActionItem icon="notifications" />
                        <TopAppBarActionItem icon="account_circle" />
                        <TopAppBarActionItem icon="apps" />
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            <TopAppBarFixedAdjust />
        </>
    )
}