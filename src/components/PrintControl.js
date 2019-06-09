import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import PrintTemplate from './PrintTemplate'
import escpos from 'escpos'

const PrintControl = () => {
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>Test Printer</Text>
          <Text>ESCPOS</Text>
        </View>
      </CardSection>

      <CardSection>
        <Button onPress={() =>
          PrintTemplate()
        }>
          Print
        </Button>
      </CardSection>
    </Card>
  );

  const PrintTemplate = () => {
    // Select the adapter based on your printer type
    console.log('This is the Print Template')

    // const device  = new escpos.USB();
    // const device  = new escpos.Network('localhost');
    const device  = new escpos.Serial('/dev/usb/lp0');

    const options = { encoding: "GB18030" /* default */ }
    // encoding is optional

    const printer = new escpos.Printer(device, options);

    device.open(function(){
      printer
      .font('a')
      .align('ct')
      .style('bu')
      .size(1, 1)
      .text('The quick brown fox jumps over the lazy dog')
      .text('敏捷的棕色狐狸跳过懒狗')
      .barcode('1234567', 'EAN8')
      .qrimage('https://github.com/song940/node-escpos', function(err){
        this.cut();
        this.close();
      });
    });
  }

};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};




export default PrintControl;
