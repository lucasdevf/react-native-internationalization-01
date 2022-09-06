import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { Language } from './src/components/Language';

import { styles } from './src/styles'

import './src/utils/i18n'

interface Language {
  language: 'en' | 'pt' | 'es'
  isSelected: boolean
}

export default function App() {

  const { t, i18n, } = useTranslation()

  const [languages, setLanguages] = useState<Language[]>([
    {
      language: 'en',
      isSelected: false
    },
    {
      language: 'pt',
      isSelected: true
    },
    {
      language: 'es',
      isSelected: false
    }
  ])

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language)

    setLanguages(state => state.map(item => item.language === language ? {...item, isSelected: true} : {...item, isSelected: false}))
  }
  
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.languages}>

        {languages.map(language => (
          <Language 
            key={language.language}
            language={language.language}
            isSelected={language.isSelected}
            onPress={() => handleChangeLanguage(language.language)}
          />
        ))}
      </View>

      <Image 
        source={require('./src/assets/rocket.jpg')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        {t('boas-vindas')}
      </Text>

      <Text style={styles.description}>
        {t('descricao-app')}
      </Text>
      
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInGoogleButton}>
        <Image 
          source={require('./src/assets/google.png')} 
          style={styles.logoGoogle}
        />
        <Text style={styles.signInGoogleButtonText}>Entrar com minha conta Google</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
