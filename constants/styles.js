import { StyleSheet, Dimensions } from "react-native";
import Colors from './colors';
const boldFont = 'Lato_700Bold';
const regularFont = 'Lato_400Regular'
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black,
  },
  header: {
    fontSize: 28,
    marginBottom: 5,
    color: Colors.white,
    fontFamily: boldFont
  },
  sub: {
    fontSize: 18,
    marginBottom: 20,
    color: Colors.white,
    fontFamily: regularFont
  },
  h2: {
    color: Colors.white,
    fontSize: 21,
    marginBottom: 20,
    fontFamily: boldFont
  },
  h3: {
    color: Colors.white,
    fontSize: 18,
    marginBottom: 20,
    fontFamily: boldFont,
    textTransform: 'uppercase'
  },
  label: {
    fontSize: 18,
    lineHeight: 20,
    marginBottom: 10,
    color: Colors.white,
    fontFamily: regularFont
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 20,
    color: Colors.white,
    fontFamily: regularFont
  },
  textNoMargin: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 0,
    color: Colors.white,
    fontFamily: regularFont
  },
  statsText: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    color: Colors.white,
    fontFamily: regularFont
  },
  textInputSmall: {
    width: 50,
    borderColor: '#999',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    color: Colors.white
  },
  input: {
    width: '100%',
    color: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: regularFont
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  list: {
    padding: 20,
    paddingTop: 0
  },
  listItem: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999'
  },
  owner: {
    borderRadius: 10
  },
  itemText: {
    fontSize: 18,
    fontFamily: regularFont
  },

  modal: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  bold: {
    fontFamily: boldFont
  },
  justifyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  justifyView :{
    width: '45%'
  }
})

export default styles;