/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入外部的组件
var CommonCell = require('./XMGBottomCommonCell');

// 导入外部的json数据
var youLikeData = require('../../LocalData/like.json');

var GuestYouLike = React.createClass({
    getDefaultProps(){
       return{
           api_url:'http://maqinglong-1253423006.costj.myqcloud.com/rnshop/like.json'
       }
    },

    getInitialState(){
      // 初始化数据源
       return{
           dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
       }
    },

    render() {
        return (
            <View style={styles.container}>
               <CommonCell
                  leftIcon = 'cnxh'
                  leftTitle = '猜你喜欢'
               />
                {/*列表*/}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    },

    renderRow(rowData){
        return(

            <TouchableOpacity onPress={()=>alert(0)}>
               <View style={styles.listViewStyle}>
                   {/*左边*/}
                   <Image source={{uri:this.dealWithImgUrl(rowData.deal.deal_img)}} style={styles.imageViewStyle}/>
                   {/*右边*/}
                   <View style={styles.rightViewStyle}>
                      <View style={styles.rightTopViewStyle}>
                        <Text>{rowData.deal.deal_seller}</Text>
                        <Text>{'评分'+rowData.deal.deal_rating+'分'}</Text>
                      </View>
                       <Text style={{color:'gray'}}>{rowData.deal.deal_title}</Text>
                       <View  style={styles.rightBottomViewStyle}>
                           <Text style={{color:'red'}}>{'售价：¥'+rowData.deal.price}</Text>
                           <Text>{'已售'+rowData.deal.deal_subcate_id}</Text>

                       </View>
                   </View>
               </View>
            </TouchableOpacity>
        )
    },

    // 处理图像的尺寸
    dealWithImgUrl(url){
        if (url.search('w.h') == -1){ // 没有找到,正常返回
            return url;
        }else{
            return url;//.replace('w.h', '120.90');
        }
    },

    componentDidMount(){
        // 从网络上请求数据
        this.loadDataFormNet();
    },

    loadDataFormNet(){
        fetch(this.props.api_url)
            .then((response) => response.json()) // 下一步
            .then((responseData) => {
               // 更新数据源
               // alert(responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                });
            })
            .catch((error)=>{
                //alert(errorror);
                // 更新数据源
                this.setState({
                    //dataSource: this.state.dataSource.cloneWithRows(youLikeData.data)
                });
            })
    }
});


const styles = StyleSheet.create({
    container: {
        marginTop:15
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    listViewStyle:{
       backgroundColor:'white',
       padding:10,
       borderBottomColor:'#e8e8e8',
       borderBottomWidth:0.5,

       flexDirection:'row'
    },

    imageViewStyle:{
        width:120,
        height:90
    },

    rightViewStyle:{
        marginLeft:8,
        width:220,
        justifyContent:'center'
    },

    rightTopViewStyle:{
        flexDirection:'row',
        marginBottom:7,
        justifyContent:'space-between'
    },

    rightBottomViewStyle:{
        flexDirection:'row',
        marginTop:7,
        justifyContent:'space-between'
    }
});

// 输出组件类
module.exports = GuestYouLike;
