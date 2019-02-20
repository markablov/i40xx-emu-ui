import React from 'react';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';

import Editor from '../components/Editor/Editor.js';
import Debugger from '../components/Debugger/Debugger.js';
import Footer from '../components/Footer.js';

import './Root.css';

import '../services/compiler.js';

const Root = () => (
  <>
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <Box>
              <Editor />
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <Debugger />
            </Box>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Footer />
  </>
);

export default Root;
