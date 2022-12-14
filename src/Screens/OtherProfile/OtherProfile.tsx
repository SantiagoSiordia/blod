import { BText, ProfileData, ProfileImage } from "@components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ColorsEnum } from "@theme";
import React, { FC } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { users } from "../../Data/Users";

export type OtherProfileProps = NativeStackScreenProps<
  RequestStackParamList,
  "OtherProfile"
>;

export const OtherProfile: FC<OtherProfileProps> = () => {
  // const { params } = route;
  // const { userId } = params;

  const user = users[0];

  if (!user) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ProfileImage avatar={user.avatar} />
      <BText size="title" superBold color="secondary">
        {user.name}, {user.age}
      </BText>
      <View style={styles.divider} />

      <ProfileData
        bloodType={user.bloodType}
        location={user.location}
        litersDonated={user.litersDonated}
        contact={user.contact}
      />

      <View style={styles.divider} />
      <View>
        <BText size="title" bold color="secondary">
          About
        </BText>
        <BText color="black" style={{ marginTop: 8 }}>
          {user.description}
        </BText>
      </View>

      <View style={styles.buttonSection}>
        <Pressable
          style={styles.contactButton}
          onPress={() => console.log("Contact")}
        >
          <BText color="white" bold>
            Contact
          </BText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: ColorsEnum.secondary,
    marginVertical: 16,
  },
  contactButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    backgroundColor: ColorsEnum.secondary,
    marginTop: 16,
  },
  editButton: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    width: "100%",
    borderColor: ColorsEnum.secondary,
    marginTop: 8,
    borderWidth: 2,
  },
  buttonSection: {
    position: "absolute",
    width: "100%",
    bottom: 32,
  },
});
