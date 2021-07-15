import React, { useState } from 'react';
import { Alert } from 'react-native';


const customAlert = (props) => {

        const { titleText } = props;


        const createOneButtonAlert = () => {
                Alert.alert(
                        titleText,
                        " ",
                        [{ text: "OK" }],
                )
        }

        const createTwoButtonAlert = () => {
                Alert.alert(
                        titleText,
                        " ",
                        [
                                {
                                        text: 'Cancel',
                                        onPress: () => console.log("cance pressed"),
                                        style: "cancel"
                                },

                                { text: "OK" }
                        ],
                )
        }


}
export default customAlert;
