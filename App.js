import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CardList } from 'react-native-card-list';

const cards = [
               {
               id: "0",
               title: " 2018/04/05 ",
               picture: require('./images/4.5.png'),
               content: <Text>"identifier":"20180405023357"
               "caption":"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
               "image":"epic_RGB_20180405023357"
               "version":"02"
               "centroid_coordinates":["lat":7.914899,"lon":134.562132]
               "dscovr_j2000_position":["x":1406380.575,"y":155008.53255,"z":196655.373578]
               "lunar_j2000_position":["x":-136607.546608,"y":-372720.041447,"z":31345.691465]
               "sun_j2000_position":["x":144536246.40002,"y":35562559.902533,"z":15416201.957569]
               "attitude_quaternions":["q0":0.02092,"q1":0.61297,"q2":-0.78518,"q3":0.08558]
               "date":"2018-04-05 02:29:08"
               "coords":["centroid_coordinates":["lat":7.914899,"lon":134.562132]
               "dscovr_j2000_position":["x":1406380.575,"y":155008.53255,"z":196655.373578]
               "lunar_j2000_position":["x":-136607.546608,"y":-372720.041447,"z":31345.691465]
               "sun_j2000_position":["x":144536246.40002,"y":35562559.902533,"z":15416201.957569]
               "attitude_quaternions":["q0":0.02092,"q1":0.61297,"q2":-0.78518,"q3":0.08558]]
               </Text>
               },
               {
               id: "1",
               title: " 2018/04/04 ",
               picture: require('./images/4.4.png'),
               content: <Text>"identifier":"20180404181838"
               "caption":"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
               "image":"epic_RGB_20180404181838"
               "version":"02"
               "centroid_coordinates":["lat":7.683236,"lon":-101.647077]
               "dscovr_j2000_position":["x":1408402.666666,"y":145849.064201,"z":190966.85084]
               "lunar_j2000_position":["x":-163204.197222,"y":-360379.914549,"z":32348.446871]
               "sun_j2000_position":["x":144748327.24526,"y":34774534.712991,"z":15074602.942209]
               "attitude_quaternions":["q0":0.02078,"q1":0.6186,"q2":-0.78116,"q3":0.08183]
               "date":"2018-04-04 18:13:50"
               "coords":["centroid_coordinates":["lat":7.683236,"lon":-101.647077]
               "dscovr_j2000_position":["x":1408402.666666,"y":145849.064201,"z":190966.85084]
               "lunar_j2000_position":["x":-163204.197222,"y":-360379.914549,"z":32348.446871]
               "sun_j2000_position":["x":144748327.24526,"y":34774534.712991,"z":15074602.942209]
               "attitude_quaternions":["q0":0.02078,"q1":0.6186,"q2":-0.78116,"q3":0.08183]]</Text>
               },
               {
               id: "2",
               title: " 2018/04/03 ",
               picture: require('./images/4.3.png'),
               content: <Text>"identifier":"20180403162058"
               "caption":"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
               "image":"epic_RGB_20180403162058"
               "version":"02","centroid_coordinates":["lat":6.953439,"lon":-72.332364]
               "dscovr_j2000_position":["x":1414351.702083,"y":117274.853304,"z":173031.189063]
               "lunar_j2000_position":["x":-240187.804313,"y":-308463.511735,"z":34263.952459]
               "sun_j2000_position":["x":145382354.58081,"y":32288542.57565,"z":13996942.844024]
               "attitude_quaternions":["q0":0.02054,"q1":0.63556,"q2":-0.76856,"q3":0.07041]
               "date":"2018-04-03 16:16:07"
               "coords":["centroid_coordinates":["lat":6.953439,"lon":-72.332364]
               "dscovr_j2000_position":["x":1414351.702083,"y":117274.853304,"z":173031.189063]
               "lunar_j2000_position":["x":-240187.804313,"y":-308463.511735,"z":34263.952459]
               "sun_j2000_position":["x":145382354.58081,"y":32288542.57565,"z":13996942.844024]
               "attitude_quaternions":["q0":0.02054,"q1":0.63556,"q2":-0.76856,"q3":0.07041]]</Text>
               },
               {
               id: "3",
               title: " 2018/04/02 ",
               picture: require('./images/4.2.png'),
               content: <Text>"identifier":"20180402163017"
               "caption":"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
               "image":"epic_RGB_20180402163017"
               "version":"02","centroid_coordinates":["lat":6.281728,"lon":-74.740405]
               "dscovr_j2000_position":["x":1419306.732316,"y":91333.297848,"z":156502.958462]
               "lunar_j2000_position":["x":-298892.184251,"y":-244916.594542,"z":34262.62105]
               "sun_j2000_position":["x":145920469.35221,"y":29995653.466561,"z":13002966.799954]
               "attitude_quaternions":["q0":0.020775,"q1":0.650282,"q2":-0.757008,"q3":0.060277]
               "date":"2018-04-02 16:25:28"
               "coords":["centroid_coordinates":["lat":6.281728,"lon":-74.740405]
               "dscovr_j2000_position":["x":1419306.732316,"y":91333.297848,"z":156502.958462]
               "lunar_j2000_position":["x":-298892.184251,"y":-244916.594542,"z":34262.62105]
               "sun_j2000_position":["x":145920469.35221,"y":29995653.466561,"z":13002966.799954]
               "attitude_quaternions":["q0":0.020775,"q1":0.650282,"q2":-0.757008,"q3":0.060277]]</Text>
               },
               {
               id: "4",
               title: " 2018/04/01 ",
               picture: require('./images/4.1.png'),
               content: <Text> "identifier":"20180401221307"
               "caption":"This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft"
               "image":"epic_RGB_20180401221307"
               "version":"02"
               "centroid_coordinates":["lat":5.765663,"lon":-160.49755]
               "dscovr_j2000_position":["x":1422805.594857,"y":71633.161719,"z":143788.654031]
               "lunar_j2000_position":["x":-333929.790496,"y":-187603.458647,"z":33077.684872]
               "sun_j2000_position":["x":146304363.69227,"y":28231359.000038,"z":12238123.400017]
               "attitude_quaternions":["q0":0.02106,"q1":0.661139,"q2":-0.748149,"q3":0.05206]
               "date":"2018-04-01 22:08:18"
               "coords":["centroid_coordinates":["lat":5.765663,"lon":-160.49755]
               "dscovr_j2000_position":["x":1422805.594857,"y":71633.161719,"z":143788.654031]
               "lunar_j2000_position":["x":-333929.790496,"y":-187603.458647,"z":33077.684872]
               "sun_j2000_position":["x":146304363.69227,"y":28231359.000038,"z":12238123.400017]
               "attitude_quaternions":["q0":0.02106,"q1":0.661139,"q2":-0.748149,"q3":0.05206]]</Text>
               }
               ]

export default class App extends Component<{}> {
    render() {
        return (
                <View style={styles.container}>
                <CardList cards={cards} />
                </View>
                );
    }
}

const styles = StyleSheet.create({
                                 container: {
                                 flex: 1,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 backgroundColor: '#F5FCFF',
                                 }
                                 })
