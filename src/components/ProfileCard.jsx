import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { profileCardStyles } from "../styles/ProfileCardStyles";
import getFirstLetters from "../utilities/getFirstLetters";
import { Avatar } from "react-native-paper";
import { SaveProfilesContext } from "../../context/SaveProfilesContext";
import { Linking } from "react-native/Libraries/Linking/Linking";

const ProfileCard = ({ profile }) => {
  const avatarLabel = getFirstLetters(profile?.fullName);
  const { savedProfiles, setSavedProfiles } = useContext(SaveProfilesContext);

  const handleCall = async () => {
    try {
      await Linking.openURL(profile?.mobileNumber);
    } catch (e) {}
  };

  const handleSaveProfile = () => {
    const isAlreadyAdded = savedProfiles.filter(
      (savedProfile) => savedProfile._id === profile._id
    );
    isAlreadyAdded.length === 0
      ? setSavedProfiles([...savedProfiles, profile])
      : null;
    console.log("profile clicked", profile);
  };

  return (
    <View style={profileCardStyles.mainContainer}>
      <View style={profileCardStyles.topContainer}>
        <View style={profileCardStyles.topLeftContainer}>
          <Avatar.Text
            size={42}
            label={avatarLabel}
            style={{ backgroundColor: "#000", paddingBottom: 2 }}
          />
          <View style={profileCardStyles.nameServiceContainer}>
            <Text style={profileCardStyles.nameText}>{profile.fullName}</Text>
            <Text>{profile.serviceCategory}</Text>
          </View>
        </View>
        <Image
          source={require("../assets/chatIcon.png")}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <View style={profileCardStyles.bottomContainer}>
        <View style={profileCardStyles.locationContainer}>
          <Image
            source={require("../assets/location.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={profileCardStyles.areaText}>{profile.city}</Text>
        </View>
        <TouchableOpacity
          style={profileCardStyles.contactContainer}
          onPress={handleCall}
        >
          <Image
            source={require("../assets/phoneIcon.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={profileCardStyles.numberText}>
            {profile.mobileNumber}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSaveProfile}>
          <Image
            source={require("../assets/saveIcon.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
