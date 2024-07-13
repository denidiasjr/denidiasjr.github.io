import React from 'react';
import { Heading, List, ListItem, Text } from '../project-builder';

export const BEES = () => (
    <>
        <Text>
            Worked from zero to production of the New Front end Architecture
            project for the BEES application, a B2B e-commerce live in more than
            10 countries.
        </Text>
        <Heading as='h2'>Engineering Coordinator</Heading>
        <List>
            <ListItem>
                Coordinated a team that works in the front end architecture on a
                global solution.
            </ListItem>
            <ListItem>Support team members on their career goals.</ListItem>
            <ListItem>
                Support team members with engineering solutions.
            </ListItem>
            <ListItem>
                Alignments with the stakeholders to define the best scope for
                the team.
            </ListItem>
        </List>
        <Heading as='h2'>Software Engineer</Heading>
        <List>
            <ListItem>
                Work with front end technologies as React JS, Next JS,
                Storybook, Typescript, HTML and CSS.
            </ListItem>
            <ListItem>
                Experience with back end technologies as Node JS.
            </ListItem>
            <ListItem>
                Experience with distributed version controls systems like Git
                and Azure DevOps.
            </ListItem>
            <ListItem>
                Experience working within a Continuous delivery and Agile
                environment.
            </ListItem>
        </List>
    </>
);

export default BEES;
