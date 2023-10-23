import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { DataTable } from 'react-native-paper';
import { db } from '../FirebaseConfig';
import { getDocs, collection } from 'firebase/firestore';

const ViewDetail = () => {
  const [AndroidClubList, setAndroidClubList] = useState([]);
  const userCollectionRef = collection(db, "AndroidClubMembers");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    let isMounted = true; // Add a flag to check if the component is still mounted
  
    const userList = async () => {
      try {
        setLoading(true);
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
  
        // Check if the component is still mounted before updating the state
        if (isMounted) {
          setAndroidClubList(filteredData);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    // Call userList() only once when the component mounts
    userList();
  
    // Add a cleanup function to set the flag to false when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []);
  

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
      />
      <DataTable style={styles.table}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title style={styles.headerText}>Name</DataTable.Title>
          <DataTable.Title style={styles.headerText}>RegNo</DataTable.Title>
          <DataTable.Title style={styles.headerText}>Email</DataTable.Title>
        </DataTable.Header>
        {loading==false && AndroidClubList.map((user) => {
          return <DataTable.Row style={styles.tableRow} key={user.id}>
            <DataTable.Cell style={styles.cellText}>{user.Name}</DataTable.Cell>
            <DataTable.Cell style={styles.cellText}>{user.RegNo}</DataTable.Cell>
            <DataTable.Cell style={styles.cellText}>{user.Email}</DataTable.Cell>
          </DataTable.Row>
})}
      </DataTable>
    </View>
  );
}


const styles = StyleSheet.create({
  table: {
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tableHeader: {
    backgroundColor: '#006400', // Dark green
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableRow: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cellText: {
    fontSize: 16,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Set the width to cover the entire screen
    height: '100%', // Set the height to cover the entire screen
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  }
});

export default ViewDetail;
