import React, { useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { MaterialIcons } from '@expo/vector-icons'; 
import Button from '../Button';

export default function Modal({ children, open, callback,  modal: { color, text, icon, colorIcon, button } }) {

  const modalizeRef = useRef(null);

  if(open) {
    modalizeRef.current?.open();
    callback(false);
  };
  
  const styles = StyleSheet.create({
      container: {
          height: 250,
          padding: 30,
          
      },
      textContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',  
      },
      text: {
        fontFamily: 'Roboto_700Bold',
        color: '#fff',
        fontSize: 20,
        marginLeft: 5
      },
      buttonContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
      }
  });

  return (
    <>        
      <Modalize ref={modalizeRef} modalHeight={ 250 }  modalStyle={{
          backgroundColor: color,
      }} 
      >
          <View style={ styles.container }>
            <View style={styles.textContainer}>
              <MaterialIcons name={ icon } size={25} color={colorIcon || '#fff'} />
              <Text style={ styles.text } >{ text } </Text>
            </View>
            <View style={{
              marginVertical: 5
            }}>
              {button && (
                <Button
                  text={button.textButton}
                  color={button.backgroundColor}
                  action={button.navigate}
                  enabled={true}
                />
              )}
            </View>
          </View>
      </Modalize>
    </>
  );

    
  };