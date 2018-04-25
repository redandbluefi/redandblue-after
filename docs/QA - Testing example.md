# Example on how to test a React component

Let's stay we have basic component. It has:

* Basic structure (HTML)
* Functionality (JS)
* Styling (CSS)

Obviously if we are to test the whole component, all aspects of it should be tested.

Let's stay we have components as below. One `ThemedButton` which is just a button with custom (also tenant-specific) styles. In addition, we have `FunkyButton` that is using the ThemedButton and also has some additional logic and displays a text.

```js
const ThemedButton = styled.button`
  color: #fff;
  background-color: ${props => props.theme.main};
`;

const FunkyButton = props => {
  return (
    <ThemedButton onClick={() => props.onClick()}>
      Hello {props.message}!
    </ThemedButton>
  );
};
```

Now, the component is very simple but it has some functionality. Testing it should be really simple too – and luckily it is!

To test the above component(s), we create a test file, which would look something like this:

```js
import renderer from 'react-test-renderer';
import 'jest-styled-components';

it('should render correctly', function() {
  // Test that the button renders and the message prop is used correctly
  const component = renderer.create(<FunkyButton message="world!" />);
  let tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();

  // Manually trigger 'onClick' and test that it did something
  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
```

That's all folks! Now get testing.
