import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import Banner from "../assets/Banner.png";
import Book1 from "../assets/Book1.png";
import Book2 from "../assets/Book2.png";
import Book3 from "../assets/Book3.png";
import Book4 from "../assets/Book4.png";
import Button1 from "../assets/Button1.png";
import Button2 from "../assets/Button2.png";
import { ArLifeInput } from "../component/Global";
import { Title1, Title2, Captions } from "../component/Typography";
import { Button } from "react-native-elements";

export default class BookDirectory extends Component {
  componentDidMount = () => {
    // When the page is loaded
  };

  componentWillUnmount = () => {
    // when the page is leaving
  };

  componentDidUpdate = (newProps) => {
    // when the page props is been updated
  };

  renderContent = () => {
    return (
      <ContentView>
        <Title1>Here is the content</Title1>
      </ContentView>
    );
  };

  renderTop = () => {
    return (
      <TopView>
        <Image
          source={Banner}
          style={{ flex: 1, width: 800, marginTop: -80 }}
          resizeMode={"contain"}
        />
        <View style={{ flexDirection: "row", position: "absolute", right: 25 }}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "column",
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image source={Button1} style={{ width: 70, height: 70 }} />
              <Captions
                style={{
                  marginTop: 10,
                  paddingRight: 8,
                  paddingLeft: 8,
                  backgroundColor: "#39BDA1",
                  color: "#FFF",
                  borderRadius: 10,
                }}
              >
                All My Books
              </Captions>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={{ backgroundColor: "#BABABA", borderRadius: 100 }}>
                <Image source={Button2} style={{ width: 70, height: 70 }} />
              </View>
              <Captions
                style={{
                  marginTop: 10,
                  paddingRight: 8,
                  paddingLeft: 8,
                  backgroundColor: "#BABABA",
                  color: "#FFF",
                  borderRadius: 10,
                }}
              >
                My Favourite
              </Captions>
            </View>
          </TouchableOpacity>
        </View>
      </TopView>
    );
  };

  render() {
    return (
      <FullView>
        {this.renderTop()}
        {this.renderContent()}
      </FullView>
    );
  }
}

const FullView = styled(ScrollView)`
  width: 100%;
  height: 100%;
`;

const ContentView = styled(View)`
  align-items: center;
  justify-content: center;
`;

const TopView = styled(View)`
  align-items: center;
  justify-content: center;
`;

//   handleOnBack = () => {
//     // Navigate
//     this.props.navigation.navigate("Home");
//   };

//   //Object Logo Render
//   renderLogo = () => {
//     return (
//       <TopView>
//         <Image
//           source={Logo}
//           style={{ width: 100, height: 100 }}
//           resizeMode="contain"
//         />
//       </TopView>
//     );
//   };

//   render() {
//     return (
//       <GradientContainer colors={["#BADBFF", "#FADADD"]}>
//         {this.renderLogo()}
//         <BigContainer>
//           <Title1>This is Hotspot</Title1>

//           <Button
//             title="Back to Home"
//             titleStyle={{ color: "#FFF" }}
//             onPress={this.handleOnBack}
//             buttonStyle={{
//               backgroundColor: "#65A76F",
//               width: 150,
//               height: 100,
//               margin: 10,
//             }}
//           />
//           {/* Required render for details */}
//         </BigContainer>
//       </GradientContainer>
//     );
//   }
// }

// const BigContainer = styled(View)`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

// const GradientContainer = styled(LinearGradient)`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
