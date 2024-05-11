import React, { useEffect, useCallback, useState } from 'react';
import { GridCell, Grid, Typography, Button } from './MaterialUi';
import imgSrc from './Images/carbon.webp';
import globeSrc from './Images/globe.png';
import userSrc from './Images/user.png';
import scalabilitySrc from './Images/scalability.png';
import AppHeader from './AppHeader';
import { Tabs } from '@mantine/core';

function HomePage() {

    function About() {
        return (
            <>
                <Grid>
                    <GridCell span={6}>
                        <Typography use="headline4" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>What is Carbon?</Typography>
                        <Typography use="headline6" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            Carbon is IBM’s open-source design system for digital products and experiences. With the IBM Design Language as its foundation,
                            the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.
                        </Typography>
                        <Button style={{ backgroundColor: '#0f62fe', margin: '1rem' }} label="Learn More" raised />
                    </GridCell>
                    <GridCell span={6}>
                        <img src={imgSrc} />
                    </GridCell>
                </Grid>
            </>
        )
    };

    function Design() {
        return (
            <>
                <Grid style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                    <GridCell span={12}>
                        <Typography use="headline6" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            Rapidly build beautiful and accessible experiences. The Carbon kit contains all resources you need to get started.
                        </Typography>
                    </GridCell>
                </Grid>
            </>
        )
    };

    function Develop() {
        return (
            <>
                <Grid style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                    <GridCell span={12}>
                        <Typography use="headline6" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            Carbon provides styles and components in Vanilla, React, Next, Angular, and Vue for anyone building on the web
                        </Typography>
                    </GridCell>
                </Grid>
            </>
        )
    };

    function Principals() {
        return (
            <>
                <Grid style={{ backgroundColor: '#f4f4f4' }}>
                    <GridCell span={12}>
                        <Typography use="headline6" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: 'auto' }}>The Principals</Typography>
                    </GridCell>
                    <GridCell span={1} >
                        <img src={userSrc} style={{ width: '86px', height: '86px', margin: '1rem' }} />
                    </GridCell>
                    <GridCell span={11}>
                        <Typography use="headline5" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>Carbon is <b> Open</b> </Typography>
                        <Typography use="subtitle1" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers,
                            and everyone is encouraged to contribute.
                        </Typography>
                    </GridCell>
                    <GridCell span={1} >
                        <img src={scalabilitySrc} style={{ width: '86px', height: '86px', margin: '1rem' }} />
                    </GridCell>
                    <GridCell span={11}>
                        <Typography use="headline5" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>Carbon is <b> Modular</b> </Typography>
                        <Typography use="subtitle1" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user.
                        </Typography>
                    </GridCell>
                    <GridCell span={1} >
                        <img src={globeSrc} style={{ width: '86px', height: '86px', margin: '1rem' }} />
                    </GridCell>
                    <GridCell span={11}>
                        <Typography use="headline5" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>Carbon is <b> Consistent</b> </Typography>
                        <Typography use="subtitle1" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: '1rem' }}>
                            Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences.
                        </Typography>
                    </GridCell>
                </Grid>
            </>
        )
    };

    return (
        <>
            <AppHeader />
            <Grid>
                <GridCell span={12}>
                    <Tabs defaultValue="about">
                        <div style={{ backgroundColor: '#f4f4f4' }}>
                            <GridCell span={12} style={{ padding: '2rem' }}>
                                <Typography use="body2" style={{ textAlign: 'start', color: 'rgb(15 147 250)', margin: 'auto' }}>Getting Started</Typography>
                                <Typography use="headline4" style={{ textAlign: 'start', color: 'rgb(22 22 22)', margin: 'auto' }}>
                                    Design & Build with Carbon
                                </Typography>
                            </GridCell>
                            <div style={{ marginTop: '5rem' }}>
                                <Tabs.List>
                                    <Tabs.Tab value="about">
                                        About
                                    </Tabs.Tab>
                                    <Tabs.Tab value="design">
                                        Design
                                    </Tabs.Tab>
                                    <Tabs.Tab value="develop">
                                        Develop
                                    </Tabs.Tab>
                                </Tabs.List>
                            </div>
                        </div>
                        <Tabs.Panel value="about">
                            {About()}
                        </Tabs.Panel>

                        <Tabs.Panel value="design">
                            {Design()}
                        </Tabs.Panel>

                        <Tabs.Panel value="develop">
                            {Develop()}
                        </Tabs.Panel>
                    </Tabs>
                </GridCell>
                <GridCell span={12}>
                    {Principals()}
                </GridCell>
            </Grid>
        </>
    )
}

export default HomePage
