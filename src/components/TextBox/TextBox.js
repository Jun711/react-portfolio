import React, { Component } from 'react';
import { Container } from '../../theme/grid';
import { P } from './TextBox.style';

class TextBox extends Component {
  render() {
    return (
      <Container>
        <h1>What'sup Home?</h1>
        <h2>Y What'sup Homieee?</h2>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </P>
      </Container>
    );
  }
}

export default TextBox;