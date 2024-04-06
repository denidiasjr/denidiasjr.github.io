import React from 'react';
import { Link, List, ListItem, Text } from '../project-builder';

export const RecantoCriativo = () => (
    <>
        <Text>
            Worked as a freelancer to support store owners to enhance their
            ecommerce platforms.
            <br />
            <br />
            The portfolio can be found{' '}
            <Link
                target='_blank'
                href='https://www.behance.net/recantocriativo'
                rel='noreferrer'
            >
                here
            </Link>
        </Text>
        <List>
            <ListItem>
                Work with e-commerce layout styling using HTML, CSS, Bootstrap,
                JQuery.
            </ListItem>
            <ListItem>
                Experience with e-commerce platforms as Iluria, E-com.club,
                Minestore and X-Tech.
            </ListItem>
            <ListItem>
                Experience with content production using Photoshop.
            </ListItem>
            <ListItem>Experience with user support.</ListItem>
        </List>
    </>
);

export default RecantoCriativo;
