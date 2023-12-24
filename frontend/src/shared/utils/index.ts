import { faker } from '@faker-js/faker'

export interface AccuracyMetrics {
  correctChars: number
  incorrectChars: number
  accuracy: number
}

export const isAllowedCode = (code: string): boolean => {
  return (
    code.startsWith('Key') ||
    code === 'Backspace' ||
    code === 'Space' ||
    code === 'Minus'
  )
}

export const generateWord = (n: number): string => {
  return faker.word.words(n)
}

export const calculateAccuracy = (expectedWord: string, typedWord: string) => {
  let correctChars = 0
  for (let i = 0; i < typedWord.length; i++) {
    if (typedWord[i] === expectedWord[i]) {
      correctChars++
    }
  }

  const accuracyMetrics: AccuracyMetrics = {
    correctChars,
    incorrectChars: typedWord.length - correctChars,
    accuracy: (correctChars / typedWord.length) * 100
  }
  return accuracyMetrics
}

export const calculateWPM = (
  typedWord: string,
  accuracy: number,
  time: number
) => {
  const minutes = time / 60000
  const wordsTyped = typedWord.length / 5
  const grossWPM = wordsTyped / minutes
  const netWPM = Math.round(grossWPM * (accuracy / 100))

  const results = {
    wpm: netWPM,
    cpm: typedWord.length / minutes
  }
  return results
}

export const calculateErrorPercentage = (accuracy: number) => {
  return 100 - accuracy
}

export const theme = [
  {
    name: 'Gruvbox',
    background: {
      primary: '#282828',
      secondary: '#3c3836'
    },
    text: {
      primary: '#ebdbb2',
      secondary: '#d5c4a1',
      title: '#fabd2f'
    }
  },
  {
    name: 'Tokyo Night',
    background: {
      primary: '#1A1B26',
      secondary: '#212337'
    },
    text: {
      primary: '#A9B1D6',
      secondary: '#6A6A99',
      title: '#61AFEF'
    }
  },
  {
    name: 'Blue Dolphin',
    background: {
      primary: '#003950',
      secondary: '#014961'
    },
    text: {
      primary: '#6DEAFF',
      secondary: '#FFCEFB',
      title: '#6DEAFF'
    }
  },
  {
    name: 'Aurora',
    background: {
      primary: '#011926',
      secondary: '#000C13'
    },
    text: {
      primary: '#235A68',
      secondary: '#00E980',
      title: '#00E980'
    }
  },
  {
    name: 'Paper',
    background: {
      primary: '#EEEEEE',
      secondary: '#DDDDDD'
    },
    text: {
      primary: '#B4B4B4',
      secondary: '#444444',
      title: '#444444'
    }
  },
  {
    name: 'Cyberspace',
    background: {
      primary: '#181C18',
      secondary: '#131613'
    },
    text: {
      primary: '#9578D3',
      secondary: '#04AF6A',
      title: '#9578D3'
    }
  },
  {
    name: 'Cheesecake',
    background: {
      primary: '#FDF0D5',
      secondary: '#F3E2BF'
    },
    text: {
      primary: '#E14C94',
      secondary: '#3A3335',
      title: '#E14C94'
    }
  },
  {
    name: 'Bouquet',
    background: {
      primary: '#173F35',
      secondary: '#1F4E43'
    },
    text: {
      primary: '#408E7B',
      secondary: '#DBE0D2',
      title: '#DBE0D2'
    }
  },
  {
    name: 'Sapphire',
    background: {
      primary: '#003366',
      secondary: '#004080'
    },
    text: {
      primary: '#66ccff',
      secondary: '#ffccff',
      title: '#66ccff'
    }
  },
  {
    name: 'Crimson',
    background: {
      primary: '#8c001a',
      secondary: '#a6001f'
    },
    text: {
      primary: '#ff4d88',
      secondary: '#00e64d',
      title: '#ff4d88'
    }
  },
  {
    name: 'Sunflower',
    background: {
      primary: '#e68a00',
      secondary: '#ff9933'
    },
    text: {
      primary: '#666633',
      secondary: '#003366',
      title: '#666633'
    }
  },
  {
    name: 'Mystic Blue',
    background: {
      primary: '#152A38',
      secondary: '#1C3445'
    },
    text: {
      primary: '#6FA6C5',
      secondary: '#B8E2FF',
      title: '#6FA6C5'
    }
  },
  {
    name: 'Goldenrod',
    background: {
      primary: '#DAA520',
      secondary: '#FFD700'
    },
    text: {
      primary: '#4B3621',
      secondary: '#1A1A1A',
      title: '#4B3621'
    }
  },
  {
    name: 'Ocean Breeze',
    background: {
      primary: '#2E4A62',
      secondary: '#1F3348'
    },
    text: {
      primary: '#FF8C42',
      secondary: '#5E7F80',
      title: '#FF8C42'
    }
  },
  {
    name: 'Emerald Isle',
    background: {
      primary: '#007959',
      secondary: '#008D6A'
    },
    text: {
      primary: '#C6FFC1',
      secondary: '#284E36',
      title: '#C6FFC1'
    }
  },
  {
    name: 'Midnight Sky',
    background: {
      primary: '#1B1B2F',
      secondary: '#262640'
    },
    text: {
      primary: '#E5E5E5',
      secondary: '#88A2AA',
      title: '#E5E5E5'
    }
  },
  {
    name: 'Cherry Blossom',
    background: {
      primary: '#FFB6C1',
      secondary: '#FF69B4'
    },
    text: {
      primary: '#3B170B',
      secondary: '#A52A2A',
      title: '#3B170B'
    }
  },
  {
    name: 'Lavender Fields',
    background: {
      primary: '#9980FA',
      secondary: '#A3B0F7'
    },
    text: {
      primary: '#311D3F',
      secondary: '#6A0572',
      title: '#311D3F'
    }
  },
  {
    name: 'Tropical Sunset',
    background: {
      primary: '#FF6F61',
      secondary: '#FFC3A0'
    },
    text: {
      primary: '#073B4C',
      secondary: '#2D5E6B',
      title: '#073B4C'
    }
  },
  {
    name: 'Pumpkin Spice',
    background: {
      primary: '#FFAC5E',
      secondary: '#FFD29D'
    },
    text: {
      primary: '#331E16',
      secondary: '#6D3B2D',
      title: '#331E16'
    }
  },
  {
    name: 'Mango Tango',
    background: {
      primary: '#FFA600',
      secondary: '#FFC72C'
    },
    text: {
      primary: '#331E16',
      secondary: '#6D3B2D',
      title: '#331E16'
    }
  },
  {
    name: 'Deep Forest',
    background: {
      primary: '#264653',
      secondary: '#2A9D8F'
    },
    text: {
      primary: '#E9C46A',
      secondary: '#F4A261',
      title: '#E9C46A'
    }
  },
  {
    name: 'Citrus Burst',
    background: {
      primary: '#F9D77E',
      secondary: '#F97B37'
    },
    text: {
      primary: '#303633',
      secondary: '#616E74',
      title: '#303633'
    }
  },
  {
    name: 'Silver Lining',
    background: {
      primary: '#A2A9AF',
      secondary: '#C4CCD9'
    },
    text: {
      primary: '#0D1F2D',
      secondary: '#304D6D',
      title: '#0D1F2D'
    }
  },
  {
    name: 'Harmony',
    background: {
      primary: '#84DCC6',
      secondary: '#A5FFD6'
    },
    text: {
      primary: '#1F2833',
      secondary: '#394240',
      title: '#1F2833'
    }
  },
  {
    name: 'Moonlight Serenade',
    background: {
      primary: '#CAD2C5',
      secondary: '#F0F7F4'
    },
    text: {
      primary: '#414142',
      secondary: '#6A6B6D',
      title: '#414142'
    }
  }
]
