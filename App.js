import { Text, SafeAreaView, StyleSheet, FlatList, Image, Dimensions, View, ImageBackground} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./assets/back01.jpg')} style={styles.back} resizeMode="cover">
     <Text style={styles.bigTitle}>JULY'S PLAYLIST</Text>
     </ImageBackground>
      <FlatList
      data={arrayMusic}
      renderItem={({item}) =>
      <View style={styles.containerFlat}>
      <View style={styles.cont}>
      <Image source={item.image} style={styles.img} resizeMode="center"/>
      <Text style={styles.title}>{item.nome}
      {'\n'}{item.nome2}{'\n'}{item.nome3}
      </Text>
       </View>
      </View>
      }
      />
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    backgroundColor: '#CD950C',
  },
  containerFlat: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CD950C',
    padding: 10,
    marginTop: 45,
  },
  title:{
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    flexWrap: 'wrap',
    left: -8,
    marginTop: 12
  },
  cont:{
    marginTop: 2,
    width: 'auto',
    height: 130,
    backgroundColor: '#8B0000',
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5},
    shadowOpacity: 0.7,
    elevation: 12,
  },
  bigTitle:{
    fontSize: 42,
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    },
  img:{
    width: 110,
    height: 110,
    borderRadius: 15

    },
  back:{
    height: 310,
    justifyContent: 'flex-end',
    },
});

const arrayMusic = [
  {
    nome: "Infrunami",
    nome2: "by Steve Lacy",
    image: require('./assets/infru.jpg'),
  },
  {
    nome: "Pink + White",
    nome2: "by Frank Ocean",
    image: require('./assets/pinkwhite.jpg'),
  },
  {   
    nome: "Dark Red",
    nome2: "by Steve Lacy",
    image: require('./assets/darkred.jpg'),
  },
  {
    nome: "Dead to Me",
    nome2: "by Kali Uchis",
    image: require('./assets/deadtome.jpg'),
  },
  {
    nome: "Cashew by",
    nome2: "Jude York",
    image: require('./assets/cashew.jpg'),
  },
  {
    nome: "Love Me Again",
    nome2: "by V",
    image: require('./assets/lovemeagain2.jpg'),
  },
  {
    nome: "Redbone by",
    nome2: "Childish Gambino",
    image: require('./assets/redbone.jpg'),
  },
  {
    nome: "After The Storm",
    nome2: "by Kali Uchis",
    image: require('./assets/deadtome.jpg'),
  },
  {
    nome: "Super Shy",
    nome2: "by New Jeans",
    image: require('./assets/supershy.jpg'),
  },
  {
    nome: "For Us by V",
    nome2: "by V",
    image: require('./assets/forus.jpg'),
  },

];