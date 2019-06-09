const escpos = require('escpos');


const PrintTemplate = () => {
  // Select the adapter based on your printer type
  console.log('This is the Print Template')
  
  const device  = new escpos.USB();
  // const device  = new escpos.Network('localhost');
  // const device  = new escpos.Serial('/dev/usb/lp0');

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

export default PrintTemplate;
