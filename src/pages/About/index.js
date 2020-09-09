import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import ImcInfo from '../../components/about/ImcInfo'

import styles from './styles';

export default function About() {
    return(
        <View style={ styles.container }>
           <Header
                title="Informações sobre IMC"
           />
           <ScrollView
                style={{ marginTop: -40 }} 
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }} 
                >
               <View style={ styles.aboutContainer }>
                    <Text style={ styles.aboutTitle }>Cálculo de indice de massa corporal (IMC)</Text>
                    <Text style={ styles.aboutText }>{'   '}IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</Text>
                    <Text style={ styles.aboutText }>{'   '}O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,50 e 24,99.</Text>
               </View>

               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <ImcInfo  
                         color="#ffa500"
                         imc="Menor que 17"
                         title="Muito abaixo do peso"
                         emoji="emoji-sad"
                    />

                    <ImcInfo  
                         color="#FCCC00"
                         imc="Entre 17 e 18,49"
                         title="Abaixo do peso"
                         emoji="emoji-neutral"
                    />

                    <ImcInfo  
                         color="#04d361"
                         imc="Entre 18,50 e 24,99"
                         title="Peso normal"
                         emoji="emoji-happy"
                    />
                    
                    <ImcInfo  
                         color="#9ACD32"
                         imc="Entre 25 e 29,99"
                         title="Acima do peso"
                         emoji="emoji-neutral"
                    />

                    <ImcInfo  
                         color="#FF4500"
                         imc="Entre 30,0 e 39,99"
                         title="Obesidade I"
                         emoji="emoji-sad"
                    />

                    <ImcInfo  
                         color="#ed1c1c"
                         imc="Entre 35 e 39,99"
                         title="Obesidade II (Severa)"
                         level="III"
                         emoji="emoji-sad"
                    />

                    <ImcInfo  
                         color="#ed1c1c"
                         imc="Maior que 40"
                         title="Obesidade III (Mórbida)"
                         level="III"
                         emoji="emoji-sad"
                    />
               </ScrollView>

               <View style={ styles.aboutContainer }>
                    <Text style={ styles.aboutTitle }>Como calcular?</Text>
                    <Text style={ styles.aboutText }>{'   '}O IMC é determinado pela divisão da massa do indivíduo pelo quadrado de sua altura, em que a massa está em quilogramas e a altura em metros.</Text>
                    <Text style={ [styles.aboutText, styles.calculate] }>
                         IMC = massa / altura²
                    </Text>
               </View>

               <View style={ styles.aboutContainer }>
                    <Text style={ styles.aboutTitle }>Índice considerado ideal</Text>
                    <Text style={ styles.aboutText }>{'   '}Para adultos, um IMC entre 20 e 22 indica a quantidade ideal, saudável de gordura corporal, o que está associado com maior tempo de vida e menor incidência de doenças graves. Coincidentemente, essa relação é o que muitas pessoas consideram ser o mais esteticamente atraente. Entretanto, é importante ressaltar que um índice entre 22 e 25 também é considerado um intervalo bastante aceitável, pois está igualmente associado à boa saúde.</Text>
                    <Text style={ styles.aboutText }>{'   '}Pesquisas recentes apontaram que um IMC entre 23 e 25 é considerado o que garante taxas de sobrevivência mais longas aos indivíduos. O autor Charles E. Phelps corrobora tal informação ao afirmar em um de seus livros:</Text>
                    <Text style={ [styles.aboutText, { marginLeft: 30, color: '#9C98A6' }] }>”Tanto para mulheres como para homens, a melhor taxa de sobrevivência aparece nos grupos de pessoas cujo IMC está entre 23 e 25. O risco relativo aumenta para pessoas com números mais altos ou mais baixos que esse índice massa corporal tido como mais seguro”.</Text>
                   
               </View>
               
           </ScrollView>
        </View>
    );
}