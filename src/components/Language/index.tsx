import React from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native'

import { styles } from './styles'

interface LanguageProps extends TouchableOpacityProps {
  language: 'en' | 'pt' | 'es'
  isSelected: boolean
}

export function Language({
  language,
  isSelected,
  ...restProps
}: LanguageProps) {

  const textLanguage = {
    en: {
      text: 'Inglês',
      icon: '🇺🇸'
    },
    pt: {
      text: 'Português',
      icon: '🇧🇷'
    },
    es: {
      text: 'Espanhol',
      icon: '🇪🇸'
    }
  }

  return (
    <TouchableOpacity style={[
      styles.container, {
        backgroundColor: isSelected ? '#ededed' : '#fff'
      }
    ]}
    {...restProps}
    >
      <Text>
        {textLanguage[language].icon}
      </Text>
      <Text
        style={{
          marginLeft: 5
        }}
      >
        {textLanguage[language].text}
      </Text>
    </TouchableOpacity>
  )
}