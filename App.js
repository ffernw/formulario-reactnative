import { Text, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useState } from 'react';
import styles from './css/estilo';
import dog from './imagem/dog.png';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [resultado, setResultado] = useState('');
  

  function gravar() {
    if (altura === '' || peso === '') {
      alert('Preencha os campos');
      return;
    }

    const alturaFloat = parseFloat(altura);
    const pesoFloat = parseFloat(peso);

    const imcCalculado = pesoFloat / (alturaFloat * alturaFloat);
    setIMC(imcCalculado);

    if (imcCalculado < 18.5) {
      setResultado('Baixo peso');
    } else if (imcCalculado >= 18.5 && imcCalculado <= 24.99) {
      setResultado('Normal');
    } else if (imcCalculado >= 25 && imcCalculado <= 29.99) {
      setResultado('Sobrepeso');
    } else {
      setResultado('Obesidade');
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.paragraph}>IMC</Text>

      <Text style={styles.text}>Peso</Text>
      <TextInput  style={styles.input}
        value={peso}
        onChangeText={setPeso}
        placeholder="Digite seu peso"
        keyboardType="numeric"
      />
  
      <Text style={styles.text}>Altura</Text>
      <TextInput  style={styles.input}
      
        value={altura}
        onChangeText={setAltura}
        placeholder="Digite sua altura"
        keyboardType="numeric"
      />
  
      <TouchableOpacity onPress={gravar}>
        <Text style={styles.text}>Calcular IMC</Text>
      </TouchableOpacity>
  
      {imc !== null && (
        <Text style={styles.text}>IMC: {imc.toFixed(2)}</Text>
      )}

      <Text style={styles.text}>Resultado: {resultado}</Text>
    </SafeAreaView>
    
  );
}
