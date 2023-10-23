import {useState} from 'react';
import {StyleSheet,Text,View,ToastAndroid,Button,TextInput,Image,Dimensions,TouchableOpacity} from 'react-native';
import {db} from '../FirebaseConfig';
import {getDocs,collection,addDoc} from 'firebase/firestore';
import ViewDetail from './ViewDetail';
const Form = ({navigation}) => {
    const [Name,setName]=useState('');
    const [RegNo,setRegNo]=useState('');
    const [Email,setEmail]=useState('');
    const [Program,setProgram]=useState('');
    const [Branch,setBranch]=useState('');
    const [School,setSchool]=useState('');
    const [Mobilenumber,setMobilenumber]=useState('');
    const userCollectionRef=collection(db,"AndroidClubMembers");
    const onSubmit = async ()=>{
      try{
       await addDoc(userCollectionRef,{
        Name:Name,
        RegNo:RegNo,
        Email:Email,
        Program:Program,
        Branch:Branch,
        School:School,
        Mobilenumber:Mobilenumber
       })
       ToastAndroid.show('DataSaved!', ToastAndroid.SHORT)
        navigation.navigate('TabNav')
      }
      catch(err)
      {
        console.log(err)
      }
    }
    return(
    <View style={styles.container}>
        
        <Image
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
       />

        
        <Text style={styles.title}>Add New Member</Text>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(Name) => setName(Name)}
        /> 
       </View>

       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Register Number"
          placeholderTextColor="#003f5c"
          onChangeText={(RegNo) => setRegNo(RegNo)}
        /> 
      </View>

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
          placeholder="Program"
          placeholderTextColor="#003f5c"
          onChangeText={(Program) => setProgram(Program)}
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Branch"
          placeholderTextColor="#003f5c"
          onChangeText={(Branch) => setBranch(Branch)}
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="School"
          placeholderTextColor="#003f5c"
          onChangeText={(School) => setSchool(School)}
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Mobile Number"
          placeholderTextColor="#003f5c"
          onChangeText={(Mobilenumber) => setMobilenumber(Mobilenumber)}
        /> 
      </View>
      
      
      <TouchableOpacity style={styles.submitbutton} onPress={onSubmit}> 
        <Text style={styles.loginText}>Login</Text> 
      </TouchableOpacity>

    </View>
    );
}
const styles=StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
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
  submitbutton:
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
    width:'100%',
    height: '100%',
  },
  title: {
    fontSize: 24,  // Adjust the font size as needed
    color: '#00A300', // Change the color as needed
    marginBottom: 20,
  }
});
 
export default Form;