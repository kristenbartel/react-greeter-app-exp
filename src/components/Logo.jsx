import logo from '../logo.svg';
import Text from './Text'
// functional component example
// div-less wrapper example for multi-element/comp returns
export default function Logo() {
  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <Text />
    </>

  );
}
