import React from "react"
import { View, Image, Text } from "react-native";
import styles from "./style";

export default function QuotationItem(){
    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image 
                        style={styles.logoBtc}
                        source={require('../../../img/btc-icon.png')}
                    />
                    <Text style={styles.dayCotation}>06/07/2022</Text>
                </View>
            </View>
            <View style={styles.contextRigth}>
                <Text style={styles.prince}>$ 53331.052</Text> 
            </View>
        </View>
    )
}