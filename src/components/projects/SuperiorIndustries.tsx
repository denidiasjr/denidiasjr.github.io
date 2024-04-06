import React from 'react';
import { List, ListItem, Link, Text } from '../project-builder';

export const SuperiorIndustries = () => (
    <>
        <Text>
            Work as an employee from 10i9 in a business project inside the
            Superior Industries. My scope here was to create the first version
            of the web application for the equipments monitoring.
            <br />
            <br />
            More definition about the project can be found{' '}
            <Link
                target='_blank'
                href='https://10i9.com.br/cases/superior-industries'
                rel='noreferrer'
            >
                here
            </Link>
        </Text>
        <List>
            <ListItem>
                Work with front end technologies as React JS, HTML and CSS.
            </ListItem>
            <ListItem>
                Work with distributed version controls systems using BitBucket.
            </ListItem>
        </List>
    </>
);

export default SuperiorIndustries;
