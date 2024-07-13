import React from 'react';
import { List, ListItem, Link, Text } from '../project-builder';

export const Heineken = () => (
    <>
        <Text>
            Work as an employee from 10i9 in a business project inside the
            Heineken Brazil. The goal here was to document all the system
            requirements, present mockups for the web and mobile applications
            and define the database architecture.
            <br />
            <br />
            More definition about the project can be found{' '}
            <Link
                target='_blank'
                href='https://10i9.com.br/cases/heineken'
                rel='noreferrer'
            >
                here
            </Link>
        </Text>
        <List>
            <ListItem>
                Work with Mobile and Web Apps mockups using Figma, HTML, CSS and
                Bootstrap.
            </ListItem>
            <ListItem>Work with Oracle Database.</ListItem>
            <ListItem>
                Experience with system requirements validations with end users.
            </ListItem>
        </List>
    </>
);

export default Heineken;
