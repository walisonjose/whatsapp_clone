import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {

        if(this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Acessar" color='#115E54' onPress={() => this._autenticarUsuario()} />
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
    
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                <Text>Register</Text>
            </TouchableHighlight>
          </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });