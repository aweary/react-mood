# react-mood 😀😢

Render components based on the mood of the user.

## Usage

Are you tried of being insensitive to the mood of your users? Do you want to reward to the happy and ignore the sad? `react-mood` lets you build a UI tailored specifically to your user's mood! All you have to is import the `Mood` component from `react-mood` and use the `renderIf` prop to decide which mood is appropriate for your beautiful handcrafted React component.

### Example

```jsx
import React from 'react'
import Mood from 'react-mood'

class AnnoyedAlert extends React.Component {
  render() {
    return (
      <Mood renderIf="annoyed">
        <p className="annoyed-alert">
          Hey there! It looks like you're having an annoying day.
          Have you tried adjusting your attitude?
        </p>
      </Mood>
    )
  }
}
```

`react-mood` gives you full control over babysitting your users where you see fit. Gone are the days of insensitive one-size-fits-all approaches to pandering.


## Installation

`react-mood` is only available on the Yarn registry, npm support has been dropped.

```
yarn add react-mood
```
