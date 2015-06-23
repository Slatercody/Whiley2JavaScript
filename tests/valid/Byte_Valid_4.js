function set(r0, r1){//function(byte,int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 00000001b;//const %4 = 00000001b : byte
            var r5 =             var r3 = r5;//assign %3 = %5  : byte
            var r2 = r3;//assign %2 = %3  : byte
            var r6 =             if(r6  ==  r2){//ifeq %6, %2 goto label109 : byte
               control_flow_pc = 109;
               control_flow_repeat = true;
               continue outer;
            }
            var r7 = false;//const %7 = false : bool
            control_flow_pc = 110;
            control_flow_repeat = true;
            continue outer;//goto label110
         case 109:
            var r7 = true;//const %7 = true : bool
         case 110:
            return r7;//return %7 : bool
      }
   }
}

function xor(r0, r1){//function(byte,byte) -> byte
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = 00000001b;//const %6 = 00000001b : byte
            var r5 = r6;//assign %5 = %6  : byte
            var r2 = r5;//assign %2 = %5  : byte
            var r8 = 00000000b;//const %8 = 00000000b : byte
            var r7 = r8;//assign %7 = %8  : byte
            var r3 = r7;//assign %3 = %7  : byte
            var r10 = 0;//const %10 = 0 : int
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            while(true){//loop (%2, %3, %4, %11, %12, %13, %14, %15, %16, %17, %18)
               var r11 = 8;//const %11 = 8 : int
               if(r4  >=  r11){//ifge %4, %11 goto label111 : int
                  control_flow_pc = 111;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = set(r0, r4);//invoke %12 = (%0, %4) Byte_Valid_4:set : function(byte,int) -> bool
               var r13 = set(r1, r4);//invoke %13 = (%1, %4) Byte_Valid_4:set : function(byte,int) -> bool
               if(r12  ==  r13){
                  var r15 = 1;//const %15 = 1 : int
                  var r16 =                   var r2 = r16;//assign %2 = %16  : byte
                  var r17 = 1;//const %17 = 1 : int
                  var r18 = r4 + r17;//add %18 = %4, %17 : int
                  var r4 = r18;//assign %4 = %18  : int
                  continue;
               }
               var r14 =                var r3 = r14;//assign %3 = %14  : byte
               var r15 = 1;//const %15 = 1 : int
               var r16 =                var r2 = r16;//assign %2 = %16  : byte
               var r17 = 1;//const %17 = 1 : int
               var r18 = r4 + r17;//add %18 = %4, %17 : int
               var r4 = r18;//assign %4 = %18  : int
            }
         case 111:
            return r3;//return %3 : byte
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 0;//const %5 = 0 : int
            var r4 = r5;//assign %4 = %5  : int
            var r0 = r4;//assign %0 = %4  : int
            while(true){//loop (%0, %1, %2, %3, %6, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23)
               var r6 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b];//const %6 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b] : [byte+]
               var r7 = r6.length;//lengthof %7 = %6 : [byte+]
               if(r0  >=  r7){//ifge %0, %7 goto label113 : int
                  control_flow_pc = 113;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r9 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b];//const %9 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b] : [byte+]
               var r10 = r9[r0];
               var r8 = r10;//assign %8 = %10  : byte
               var r1 = r8;//assign %1 = %8  : byte
               var r12 = 0;//const %12 = 0 : int
               var r11 = r12;//assign %11 = %12  : int
               var r2 = r11;//assign %2 = %11  : int
               while(true){//loop (%2, %3, %13, %14, %15, %16, %17, %18, %19, %20, %21)
                  var r13 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b];//const %13 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b] : [byte+]
                  var r14 = r13.length;//lengthof %14 = %13 : [byte+]
                  if(r2  >=  r14){//ifge %2, %14 goto label114 : int
                     control_flow_pc = 114;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r16 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b];//const %16 = [10000000b,10000001b,10000010b,10000011b,10000100b,10000101b,10000110b,10000111b,10001000b,10001001b,10001010b,10001011b,10001100b,10001101b,10001110b,10001111b,10010000b,10010001b,10010010b,10010011b,10010100b,10010101b,10010110b,10010111b,10011000b,10011001b,10011010b,10011011b,10011100b,10011101b,10011110b,10011111b,10100000b,10100001b,10100010b,10100011b,10100100b,10100101b,10100110b,10100111b,10101000b,10101001b,10101010b,10101011b,10101100b,10101101b,10101110b,10101111b,10110000b,10110001b,10110010b,10110011b,10110100b,10110101b,10110110b,10110111b,10111000b,10111001b,10111010b,10111011b,10111100b,10111101b,10111110b,10111111b,11000000b,11000001b,11000010b,11000011b,11000100b,11000101b,11000110b,11000111b,11001000b,11001001b,11001010b,11001011b,11001100b,11001101b,11001110b,11001111b,11010000b,11010001b,11010010b,11010011b,11010100b,11010101b,11010110b,11010111b,11011000b,11011001b,11011010b,11011011b,11011100b,11011101b,11011110b,11011111b,11100000b,11100001b,11100010b,11100011b,11100100b,11100101b,11100110b,11100111b,11101000b,11101001b,11101010b,11101011b,11101100b,11101101b,11101110b,11101111b,11110000b,11110001b,11110010b,11110011b,11110100b,11110101b,11110110b,11110111b,11111000b,11111001b,11111010b,11111011b,11111100b,11111101b,11111110b,11111111b,00000000b,00000001b,00000010b,00000011b,00000100b,00000101b,00000110b,00000111b,00001000b,00001001b,00001010b,00001011b,00001100b,00001101b,00001110b,00001111b,00010000b,00010001b,00010010b,00010011b,00010100b,00010101b,00010110b,00010111b,00011000b,00011001b,00011010b,00011011b,00011100b,00011101b,00011110b,00011111b,00100000b,00100001b,00100010b,00100011b,00100100b,00100101b,00100110b,00100111b,00101000b,00101001b,00101010b,00101011b,00101100b,00101101b,00101110b,00101111b,00110000b,00110001b,00110010b,00110011b,00110100b,00110101b,00110110b,00110111b,00111000b,00111001b,00111010b,00111011b,00111100b,00111101b,00111110b,00111111b,01000000b,01000001b,01000010b,01000011b,01000100b,01000101b,01000110b,01000111b,01001000b,01001001b,01001010b,01001011b,01001100b,01001101b,01001110b,01001111b,01010000b,01010001b,01010010b,01010011b,01010100b,01010101b,01010110b,01010111b,01011000b,01011001b,01011010b,01011011b,01011100b,01011101b,01011110b,01011111b,01100000b,01100001b,01100010b,01100011b,01100100b,01100101b,01100110b,01100111b,01101000b,01101001b,01101010b,01101011b,01101100b,01101101b,01101110b,01101111b,01110000b,01110001b,01110010b,01110011b,01110100b,01110101b,01110110b,01110111b,01111000b,01111001b,01111010b,01111011b,01111100b,01111101b,01111110b] : [byte+]
                  var r17 = r16[r2];
                  var r15 = r17;//assign %15 = %17  : byte
                  var r3 = r15;//assign %3 = %15  : byte
                  var r20 = 1;//const %20 = 1 : int
                  var r21 = r2 + r20;//add %21 = %2, %20 : int
                  var r2 = r21;//assign %2 = %21  : int
               }
               var r22 = 1;//const %22 = 1 : int
               var r23 = r0 + r22;//add %23 = %0, %22 : int
               var r0 = r23;//assign %0 = %23  : int
            }
         case 113:
      }
   }
}

test();
