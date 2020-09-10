import React,{Component} from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {username2} from './loginScreen'
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            dataPeople:[],
            isLoading:true,
            // username:'',
        };
    }
    componentDidMount=()=>{
        this.fetchItem()
    }
    fetchItem=()=>{
        fetch('http://192.168.43.167:8080/ppphp/ownership_chain_imagesearch.php',{method:'POST',header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            username:username2,
        })
    }).then((response)=>response.json()).then((responseJson)=>{
        console.log(responseJson);
        this.setState({
            isLoading:false,
            dataPeople:responseJson.item
        });
    }).catch((error)=>{
        console.error(error)
    })
    };
    itemComponent=({item})=>{
        return(
            <View style={{flex:1,flexDirection:'row',marginBottom:3}}>
                <Image style={{width:80,height:80,margin:5}} source={{uri:item.photo}}/>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text styel={{fontsize:18,color:'green',marginBottom:15}}>
                        {item.description}
                    </Text>
                    <Text styel={{fontsize:16,color:'red'}}>
                        {item.date_time}
                    </Text>
                </View>
            </View>
        )
    }
    seperatorComponent=()=>{
        return(
            <View style={{backgroundColor:'grey',height:0.5}}></View>
        )
    }
    render(){
        return(
            <FlatList
            data={this.state.dataPeople}
            renderItem={this.itemComponent}
            keyExtractor={(item,index)=>index.toString()}
            ItemSeparatorComponent={this.seperatorComponent}/>
        )
    }
}
export default List;