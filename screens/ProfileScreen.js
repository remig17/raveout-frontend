import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavbarScreen from "./NavbarScreen";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { PORT } from "@env";
import EditProfileModal from "../components/EditProfileModal";
import { useNavigation } from "@react-navigation/native";
import { updatePhotoUri } from "../reducers/user";
import { clearEvent, clearTicket } from "../reducers/event";
import UserAvatar from "react-native-user-avatar";


export default function ProfileScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const event = useSelector((state) => state.event.value);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetch(`https://raveout-backend-beige.vercel.app/users/userdata/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.user);
      });
  }, []);

  const logout = () => {
    dispatch(clearEvent())
    dispatch(clearTicket())
    navigation.navigate("SignUpSignIn")
  }

  return (
    <View style={styles.main}>
      <NavbarScreen></NavbarScreen>
      <TouchableOpacity>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.navigate("EditPhoto")}>
            <UserAvatar
              size={75}
              name={user.pseudo}
              src={user.avatar}
              style={styles.avatarPhoto}
              imageStyle={styles.avatarImage}
            />
            <View style={styles.cameraContainer}>
              <FontAwesome
                name={"camera"}
                size={20}
                color={"#7C4DFF"}
                style={styles.camIcon}
              />
            </View>
            {/* <Image
              style={styles.avatarPhoto}
              source={{ uri: user.avatar }}
            ></Image> */}
          </TouchableOpacity>
          <Text style={styles.pseudo}>{user.pseudo}</Text>
          <TouchableOpacity style={styles.modifyBtn} onPress={handleOpenModal}>
            <Text style={styles.textBtn}>Modifier mes informations</Text>
          </TouchableOpacity>
          <Text style={styles.titre}>Description</Text>
          <Text style={styles.description}>{userData.description}</Text>
          <Text style={styles.passedEvents}>Evènements passés</Text>
          <View style={styles.passedEventsContainer}>
            <Image
              style={styles.passedEventPhoto}
              source={require("../assets/events/acontraluz.png")}
            ></Image>
            <Image
              style={styles.passedEventPhoto}
              source={require("../assets/events/organik.png")}
            ></Image>
            <Image
              style={styles.passedEventPhoto}
              source={require("../assets/events/newrave.png")}
            ></Image>
          </View>

          <View style={styles.logoutcontainer}>
            <TouchableOpacity onPress={() => {logout()}}>
              <Text style={styles.logoutText}>Se déconnecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
      <EditProfileModal visible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#262626",
  },
  content: {
    backgroundColor: "#262626",
    marginTop: 10,
  },
  avatarImage: {
    borderRadius: 37.5, // La moitié de la valeur de la taille (75 / 2)
  },
  avatarPhoto: {
    width: 75,
    height: 75,
    marginLeft: 150,
    marginTop: 10,
  },
  cameraContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  camIcon: {},
  pseudo: {
    fontFamily: "PoppinsBold",
    color: "white",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
  modifyBtn: {
    backgroundColor: "#7C4DFF",
    color: "white",
    fontFamily: "PoppinsBold",
    borderRadius: "5%",
    width: "60%",
    marginLeft: 70,
    marginTop: 10,
    alignContent: "center",
  },
  textBtn: {
    fontFamily: "PoppinsRegular",
    color: "white",
    textAlign: "center",
  },
  titre: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    marginLeft: 15,
    marginTop: 30,
  },
  description: {
    fontFamily: "PoppinsRegular",
    color: "white",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    fontSize: 13,
  },
  passedEventsContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "centers",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 10,
  },
  passedEvents: {
    fontFamily: "PoppinsSemiBold",
    color: "white",
    marginLeft: 15,
    marginTop: 30,
  },
  passedEventPhoto: {
    width: 105,
    height: 105,
    marginLeft: 5,
  },
  logoutcontainer: {
    marginTop: 100,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  logoutText: {
    color: "red",
    fontFamily: "PoppinsSemiBold",
    fontSize: 18,
  }
});
