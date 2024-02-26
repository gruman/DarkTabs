import { Text, View, TextInput, ScrollView } from 'react-native';
import styles from '../constants/styles';
import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
import Colors from '../constants/colors'
import { useCustomContext } from '../state/context';
export default function Home() {

  const { user } = useCustomContext()

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.header}>Template</Text>
      <Text style={styles.sub}>{user ? "Logged in" : "Logged out"}</Text>
      <Text style={styles.h2}>
        Header 2
      </Text>
      <Text style={styles.text}>
        Lorem ipsum.
      </Text>
      <Text style={styles.text}>
        Lorem ipsum.
      </Text>
      <Text style={styles.h3}>
        Header 3
      </Text>
      <Text style={styles.label}>
        Email
        </Text>
        <TextInput style={styles.input} />
        <Text style={styles.label}>
          Message
        </Text>
        <TextInput style={[styles.input, {height: 100}]} multiline />
      <Button backgroundColor={Colors.white} color={'#222'} title="Button" />
      <RoundButton title="Rounded Button" />
      <RoundButton title="Rounded Button" outlined={true} backgroundColor={Colors.green} />
      </ScrollView>
    </View>

  )

}