/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {
  Button,
  ButtonText,
  ButtonsContainer,
  Container,
  Title,
  ValueOfCount,
} from './appStyle';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    return console.log('Destruido');
  });

  function handleCount(counter: boolean) {
    if (counter) {
      if (count === 10) return;
      setCount(count + 1);
    } else {
      if (count === 0) return;
      setCount(count - 1);
    }
  }

  return (
    <Container>
      <Title>Contador do Andrew</Title>

      <ButtonsContainer>
        <Button onPress={() => handleCount(false)}>
          <ButtonText>Decrementar</ButtonText>
        </Button>

        <Button onPress={() => handleCount(true)}>
          <ButtonText>Incrementar</ButtonText>
        </Button>
      </ButtonsContainer>
      <ValueOfCount value={count} style={{marginTop: 24}}>
        Valor: {count}
      </ValueOfCount>
    </Container>
  );
};

export default App;
