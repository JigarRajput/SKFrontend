import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import loginStyles from "../styles/LoginScreenStyles";
import images from "../constants/images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";
import { loginSchema } from "../utilities/validationSchemas";

const LoginScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async function (values) {
      const user = {
        mobileNumber: values.mobile,
        password: values.password,
      };

      try {
        const response = await fetch(
          "https://sidekick-e028.onrender.com/user/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...user,
            }),
          }
        );

        const resMessage = await response.json();
        console.log(resMessage);

        const paramsUser = {
          city: resMessage.user.city,
          state: resMessage.user.state,
          mobileNumber: resMessage.user.mobileNumber,
          country: resMessage.user.country,
          fullName: resMessage.user.fullName,
        };

        if (resMessage.success === true && response.status === 200) {
          navigation.replace("BottomTabs", {
            user: paramsUser,
          });
        } else {
          Alert.alert(resMessage.message);
        }
        // console.log("response is", parsedRes);
      } catch (error) {
        console.log("error was", error);
      }
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "height" : "padding"}
      style={{ flex: 1 }}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={loginStyles.topContainer}>
          <Image
            source={images.loginBanner}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          />
        </View>
        <View style={loginStyles.bottom}>
          <Text style={loginStyles.loginContinueText}>Login to Continue</Text>
          <CustomInput formik={formik} name={"mobile"} />
          <CustomInput formik={formik} name={"password"} />
          <TouchableOpacity
            style={loginStyles.loginBtn}
            onPress={formik.handleSubmit}
          >
            <Text style={loginStyles.loginBtnText}>{"Login"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={loginStyles.signupText}>Not a user? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
