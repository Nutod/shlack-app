import styled from 'styled-components';
import { container } from './styles/utils/container';

const Header = styled.header`
  ${container}

  margin: var(--space-700);
`;

function App() {
  return (
    <>
      <Header>
        <h4>Shlack App</h4>
      </Header>
    </>
  );
}

export default App;
