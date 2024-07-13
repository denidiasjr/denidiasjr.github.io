import React from 'react';
import { Link, Text } from '../project-builder';

export const SIICUSP = () => (
    <>
        <Text>
            Publication along with PhD Rafael Rossi to the International
            Symposium from University of Sao Paulo (SIICUSP), through the
            article about One Class Classification using supervised learning.
            <br />
            <br />
            The article is written in Portuguese can be found{' '}
            <Link
                target='_blank'
                href='https://www.researchgate.net/publication/321975734_Classificacao_automatica_de_textos_utilizando_aprendizado_supervisionado_baseado_em_uma_unica_classe_-_Trabalho_de_Conclusao_de_Curso_-_UFMSCPTL'
                rel='noreferrer'
            >
                here
            </Link>
        </Text>
    </>
);

export default SIICUSP;
