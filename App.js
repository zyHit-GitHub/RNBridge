/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var cat = require('react-native').NativeModules.CreatCat;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

constructor(props){
        super(props);

        this.state={
            callBackData:'',
        }

        // this.PromisesCallBack = this.PromisesCallBack.bind(this);
    }
  
show(){
    // alert("aa")
    // cat.cratCat('机器猫', '男', 2);
    // cat.addEvent("血雨声","zaijia")
    cat.whoName("xieyusheng",12,"官渡")
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={()=>this.show()}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
       <TouchableOpacity style={{height:60,marginTop:30}} onPress={()=>{ //此处的(string,array)参数列表要和回调时传的参数列表要一致。位置一样才可以获取正确的数据
                cat.calliOSActionWithCallBack((string,array,end)=>{
                    console.log(string);
                    console.log(array);
                    console.log(end);
                    let data=string+'  '+array[0]+'  '+array[1]+'  '+array[2]+'  '+end;

                    this.setState({
                        callBackData:data,
                    })

                });
            }}>
              <Text>点击调用iOS原生方法,并得到回调</Text>
              <Text>回调结果callBack：{this.state.callBackData}</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
