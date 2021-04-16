import styled from 'styled-components';
import { container } from './styles/utils/container';

const Header = styled.header`
  ${container}
`;

function App() {
  return (
    <>
      <Header>
        <h4>Shlack App</h4>
      </Header>
      <main>
        <form action="">
          <label className="flow-content">
            <span className="text-gray-700">Input (email)</span>
            <input
              type="email"
              className="form-input mt-1  w-full"
              placeholder="john@example.com"
            />
          </label>
          <label className="">
            <span className="text-gray-700">Input (email, multiple)</span>
            <input
              type="email"
              multiple
              className="form-input mt-1  w-full"
              placeholder="john@example.com"
            />
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
