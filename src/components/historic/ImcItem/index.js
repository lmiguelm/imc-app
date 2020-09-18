import React, {useRef} from 'react';
import { View, Text, Alert } from 'react-native';
import { ProgressCircle  } from 'react-native-svg-charts';
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import DeleteIcon from '../DeleteItem';

import { useImc } from '../../../contexts/imc';

import styles from './styles';




export default function ImcItem({item: {id, height, weight, title, imc, color, created_at, user_id}}) {

    const { deleteImc } = useImc();

    const swipeable = useRef(null);

    function createButtonAlert(id) {
        Alert.alert(
            "Atenção",
            "Tem certeza que deseja deletar este IMC?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                    onPress: () => {
                        swipeable.current.close();
                    }
                },
                { 
                    text: "OK",
                    onPress: () => handleDeleteImc() 
                }
            ],
            { cancelable: false }
        );
    }

    async function handleDeleteImc() {
       try {
            await deleteImc(id);
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <Swipeable
            renderLeftActions={() => <DeleteIcon/>}
            onSwipeableLeftOpen={createButtonAlert}  
            ref={swipeable}
        >
            <View style={ styles.container }>
                <View style={ styles.chart}>
                    <ProgressCircle 
                        style={{ height: 100, width: 100 }} 
                        progress={1} 
                        progressColor={ color || '#6842C2' }
                        animateDuration={1000}
                        animate={true} 
                    >
                        <View style={ styles.progressContainer}> 
                            <Text style={ styles.progressNumber} >{imc}</Text>
                        </View>
                    </ProgressCircle>
                </View>

                <View style={ styles.infoContainer }>
                    <View style={ styles.header}>
                        <Text style={{
                            fontFamily: 'Roboto_700Bold_Italic',
                            fontSize: 27,
                            color:color || '#6842C2', 
                        }}>
                            {title}
                        </Text>
                    </View>

                    <View style={ styles.content }>
                        
                        <View style={ styles.contentArea}>
                            <MaterialCommunityIcons name="human-male-height" color={ color || '#04D361' } size={20} />
                            <Text style={ styles.contentText }>{height}</Text>
                        </View>

                        <View style={ styles.contentArea}>
                            <MaterialCommunityIcons name="weight-kilogram" color={ color || '#04D361' } size={20} />
                            <Text style={ styles.contentText }>{weight}</Text>
                        </View>

                        <View style={ styles.contentArea}>
                            <Ionicons name="md-body" color={ color || '#04D361' } size={20} />
                            <Text style={ styles.contentText }>{imc}</Text>
                        </View>
                        
                    </View>

                    <View style={ styles.footer}>
                        <AntDesign name="calendar" size={20} color={ color || '#04D361' } />
                        <Text style={ styles.footerText}>
                            {created_at}
                        </Text>
                    </View>
                </View>
            </View>
        </Swipeable>
    );
}