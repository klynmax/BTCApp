import React from "react"
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import styles from "./style";

export default function HitoryGraphic(props){
    return(
        <View>
            <LineChart
                data={{
                    datasets: [
                        {
                            data: props.infoDataGraphic
                        },
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#000000",
                backgroundGradientFrom: "#232323",
                backgroundGradientTo: "#3F3F3F",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "1",
                    strokeWidth: "1",
                    stroke: "#b28704"
                }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}