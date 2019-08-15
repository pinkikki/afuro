import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from '@storybook/react/demo';
import Container, {Direction} from "../src/components/atoms/Layout/Container";

storiesOf('Button', module)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
storiesOf('Container', module)
    .add('row', () => (
        <Container direction={Direction.row}>
            <div>test1</div>
            <div>test2</div>
        </Container>
    ))
    .add('column', () => (
        <Container direction={Direction.column}>
            <div>test1</div>
            <div>test2</div>
        </Container>
    ));
