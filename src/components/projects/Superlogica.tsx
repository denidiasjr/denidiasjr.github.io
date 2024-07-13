import React from 'react';
import { Heading, List, ListItem } from '../project-builder';

export const Superlogica = () => (
    <>
        <Heading as='h2'>Mobile Developer</Heading>
        <List>
            <ListItem>
                Work with Mobile technologies for Android/iOS using React
                Native.
            </ListItem>
            <ListItem>Work with Mobile App mockups using Figma.</ListItem>
            <ListItem>
                Experience in push notifications and realtime database using
                Firebase.
            </ListItem>
            <ListItem>
                Experience with monitoring application using New Relic and
                Fabric.
            </ListItem>
        </List>
        <Heading as='h2'>Web Developer</Heading>
        <List>
            <ListItem>
                Work with Web technologies using Zend Framework, PHP, HTML, CSS,
                JS and JQuery.
            </ListItem>
            <ListItem>
                Experience with agile methods as Scrum and Kanban.
            </ListItem>
            <ListItem>Experience with unit test using PHP Unit.</ListItem>
            <ListItem>
                Experience with distributed version controls systems using
                Github and GitFlow.
            </ListItem>
            <ListItem>
                Experience with monitoring application using New Relic.
            </ListItem>
        </List>
    </>
);

export default Superlogica;
