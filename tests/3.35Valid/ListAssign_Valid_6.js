function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.List('int'));
            r2 = r6.clone();//assign %2 = %6  : [int]
            r0 = r2.clone();//assign %0 = %2  : [int]
            r7 = r0.clone();//assign %7 = %0  : [int]
            r1 = r7.clone();//assign %1 = %7  : [int]
            var r8 = new WyJS.Integer(3);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            r1.setValue(r9, r10);//update %1[%9] = %10 : [int] -> [int]
            var r11 = new WyJS.Integer(2);
            var r12 = r1.getValue(r11);
            var r13 = r0.length;//lengthof %13 = %0 : [int]
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 2385;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2385:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = new WyJS.Integer(4);
            var r17 = new WyJS.List([r14, r15, r16], new WyJS.List('int'));
            if(WyJS.equals(r0, r17, true)){
               control_flow_pc = 2386;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2386:
            var r18 = new WyJS.Integer(1);
            var r19 = new WyJS.Integer(2);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.List([r18, r19, r20], new WyJS.List('int'));
            if(WyJS.equals(r1, r21, true)){
               control_flow_pc = 2387;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2387:
      }
   }
}

