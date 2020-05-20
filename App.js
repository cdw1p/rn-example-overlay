import React, { PureComponent, memo } from 'react'
import { View, Text } from 'react-native'
import { Button, Overlay } from 'react-native-elements'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      overlayStatus: false
    }
  }

  actHandleShowOverlay = () => {
    this.setState({
      overlayStatus: true
    })
  }

  actHandleHideOverlay = () => {
    this.setState({
      overlayStatus: false
    })
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Open Overlay' onPress={() => this.actHandleShowOverlay()} />
        <Overlay isVisible={this.state.overlayStatus} onBackdropPress={() => this.actHandleHideOverlay()}>
          <Text>Hello from Overlay!</Text>
        </Overlay>
      </View>
    )
  }
}

export default memo(App)