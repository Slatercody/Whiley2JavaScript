function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = true;
            var r3 = false;
            var r4 = true;
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.List('bool'));
            r1 = r5.clone();//assign %1 = %5  : [bool]
            r0 = r1.clone();//assign %0 = %1  : [bool]
            var r6 = true;
            var r7 = false;
            var r8 = true;
            var r9 = new WyJS.List([r6, r7, r8], new WyJS.List('bool'));
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1269;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1269:
            var r10 = new WyJS.Integer(0);
            var r11 = r0.getValue(r10);
            var r12 = true;
            if(r11 === r12){
               control_flow_pc = 1270;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1270:
            var r13 = new WyJS.Integer(1);
            var r14 = r0.getValue(r13);
            var r15 = false;
            if(r14 === r15){
               control_flow_pc = 1271;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1271:
            var r16 = new WyJS.Integer(2);
            var r17 = r0.getValue(r16);
            var r18 = true;
            if(r17 === r18){
               control_flow_pc = 1272;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1272:
            var r19 = false;
            var r20 = new WyJS.Integer(0);
            var r21 = false;
            r0.setValue(r20, r21);//update %0[%20] = %21 : [bool] -> [bool]
            var r22 = new WyJS.Integer(0);
            var r23 = r0.getValue(r22);
            var r24 = false;
            if(r23 === r24){
               control_flow_pc = 1273;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1273:
            var r25 = new WyJS.Integer(1);
            var r26 = r0.getValue(r25);
            var r27 = false;
            if(r26 === r27){
               control_flow_pc = 1274;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1274:
            var r28 = new WyJS.Integer(2);
            var r29 = r0.getValue(r28);
            var r30 = true;
            if(r29 === r30){
               control_flow_pc = 1275;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1275:
      }
   }
}
