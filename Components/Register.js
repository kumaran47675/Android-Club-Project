import {useState} from 'react';
import {StyleSheet,Text,View,ToastAndroid,Button,TextInput,Image,Dimensions,TouchableOpacity} from 'react-native';
import {auth} from '../FirebaseConfig';
import {createUserWithEmailAndPassword} from "firebase/auth";
const Register = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
      const SignUp = async () => {
        if (!email || !password) {
          ToastAndroid.show('Please enter both email and password', ToastAndroid.SHORT);
          return;
        }
      
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          ToastAndroid.show('Registered successfully!', ToastAndroid.SHORT);
          navigation.navigate('TabNav');
        } catch (err) {
          console.error(err);
          ToastAndroid.show('Registration failed. Please check your credentials.', ToastAndroid.LONG);
        }
      };
      
    
    return ( 
     <View style={styles.container}>
        <Image
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
       />
        <Image source={require('../assets/logo.jpg')}  style={styles.image}/>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(Email) => setEmail(Email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(Password) => setPassword(Password)}
        /> 
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={SignUp} >
        <Text style={styles.loginText}>Register</Text> 
      </TouchableOpacity>

     </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     image: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3, 
        marginBottom: 20, 
      },
      inputView: {
        backgroundColor: "#C1FFC1",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        marginRight:10,
      },
      loginBtn:
      {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#00A300",
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }
      
  });
export default Register;