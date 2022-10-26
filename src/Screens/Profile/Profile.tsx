import { BText, ProfileData, ProfileImage } from "@components";
import { useAppNavigation } from "@hooks";
import { ColorsEnum } from "@theme";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { users } from "../../Data/Users";

const user = users[0];

export const Profile = () => {

  const auth = getAuth();

  const { navigateToAuth } = useAppNavigation();
  
  const signOutFromApp = () => {
    signOut(auth).then(() => {
      navigateToAuth();
    }).catch((error) => {
      throw new Error(error);
    });
  }

  return <View style={styles.container}>
    <ProfileImage avatar={user.avatar}/>
    <BText size="title" superBold color="secondary">{user.name}, {user.age}</BText>
    <View style={styles.divider} />
    
    
    <ProfileData
      bloodType={user.bloodType}
      location={user.location}
      litersDonated={user.litersDonated}
      contact={user.contact}
    />

    <View style={styles.divider} />
    <View>
      <BText size="title" bold color="secondary">About</BText>
      <BText color="black" style={{ marginTop: 8 }}>{user.description}</BText>
    </View>

    <View style={styles.buttonSection}>
      <Pressable style={styles.contactButton} onPress={() => console.log("Hello")}>
        <BText color="white" bold>I want to donate blood</BText>
      </Pressable>
      <Pressable style={styles.editButton} onPress={() => console.log("Hello")}>
        <BText color="secondary" bold>Edit profile</BText>
      </Pressable>
      <Pressable onPress={signOutFromApp}>
        <BText color="primary" bold style={{ alignSelf: 'center', marginTop: 8 }}>Cerrar sesión</BText>
      </Pressable>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: ColorsEnum.secondary,
    marginVertical: 16,
  },
  contactButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: '100%',
    backgroundColor: ColorsEnum.secondary,
    marginTop: 16,
  },
  editButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: '100%',
    borderColor: ColorsEnum.secondary,
    marginTop: 8,
    borderWidth: 2
  },
  buttonSection: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  }
})