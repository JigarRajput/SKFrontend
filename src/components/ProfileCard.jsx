import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { profileCardStyles } from "../styles/ProfileCardStyles";

const ProfileCard = () => {
  return (
    <View style={profileCardStyles.mainContainer}>
      <View style={profileCardStyles.topContainer}>
        <View style={profileCardStyles.topLeftContainer}>
          <Image
            source={require("../assets/profileImage.jpg")}
            style={{ width: 60, height: 60, borderRadius: 20 }}
          />
          <View style={profileCardStyles.nameServiceContainer}>
            <Text style={profileCardStyles.nameText}>Jason Roy</Text>
            <Text>Home Decor Services</Text>
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
          <Text style={profileCardStyles.areaText}>Delhi</Text>
        </View>
        <TouchableOpacity style={profileCardStyles.contactContainer}>
          <Image
            source={require("../assets/phoneIcon.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={profileCardStyles.numberText}>9012345678</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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
