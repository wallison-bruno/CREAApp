import React, { useState, useRef } from "react";

import {
  View,
  Text,
  ScrollView,
  StatusBar,
  FlatList,
  ViewToken,
  Image,
} from "react-native";

import { HeaderBar } from "../../components/HeaderBar";

import { styles } from "./styles";

import { NewsTitle } from "../../components/NewsTitle";
import { theme } from "../../global/theme";
import { ButtonIcon } from "../../components/ButtonIcon";

//Imagens News
import News from "../../assets/news.png";
import iconNext from "../../assets/iconNext.png";

//Imagens dos botões
import Alert from "../../assets/alert.png";
import Arrow from "../../assets/rightarrow.png";
import Search from "../../assets/search.png";
import Statistic from "../../assets/statistic.png";
import Authenticate from "../../assets/authenticate.png";
import Counselors from "../../assets/counselors.png";
import About from "../../assets/about.png";
import Links from "../../assets/links.png";
import Directors from "../../assets/directors.png";
import Entities from "../../assets/entities.png";
import { Circle } from "../../components/Circle";

interface changeNewsProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
interface News {
  id: string;
  title: string;
  image: string;
}

export function AcessoPublico() {
  const [news, setNews] = useState([] as News[]);
  const [newIndex, setNewIndex] = useState(0);

  const indexNew = useRef((info: changeNewsProps) => {
    // console.log(info);
    setNewIndex(info.viewableItems[0].index!);
  });

  const newsMoc = [
    {
      id: "1",
      title: "texto 01",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
    {
      id: "2",
      title: "texto 02",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
    {
      id: "3",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
    {
      id: "4",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
    {
      id: "5",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
    {
      id: "6",
      title: "Lorem ipsum dolor sit amet, consecte adipiscing elit.",
      image:
        "https://ichef.bbci.co.uk/news/640/cpsprodpb/133CB/production/_103759787_gettyimages-949493748.jpg",
    },
  ] as News[];

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={"dark-content"}
        backgroundColor="transparent"
      />

      <HeaderBar title="Acesso Público" />

      <Text style={styles.title}>Novidades</Text>

      {/* CABEI AQUI */}

      <FlatList
        style={styles.content}
        data={newsMoc}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NewsTitle title={item.title} image={item.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexNew.current}
      ></FlatList>

      <View style={styles.newsBar}>
        <View style={styles.newsCircle}>
          {newsMoc.map((_, index) => (
            <Circle key={index} isMarket={index === newIndex ? true : false} />
          ))}
        </View>

        <View style={styles.viewPlus}>
          <Text style={styles.titlePlus}>Ver mais</Text>
          <Image style={styles.imgPlus} source={iconNext} />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.viewButton}>
          <ButtonIcon
            style={styles.buttonAlert}
            color={theme.colors.milk}
            title="Nova denúncia"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Alert}
            iconRight={undefined}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={0}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Consultas"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Search}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Estatísticas"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Statistic}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Autenticar carteira"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Authenticate}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Conselheiros"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Counselors}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Entidades de classe"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Entities}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Sobre o CREA-CE"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={About}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Links"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Links}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
          <ButtonIcon
            style={styles.button}
            color={theme.colors.darkgray}
            title="Diretoria"
            fontSize={14}
            fontFamily={theme.fonts.SemiBold600}
            iconLeft={Directors}
            iconRight={Arrow}
            borderBottomWidth={0}
            marginRight={50}
            marginLeft={70}
            paddingLeft={0}
            marginLeftTitle={0}
          />
        </View>
      </ScrollView>
    </View>
  );
}
