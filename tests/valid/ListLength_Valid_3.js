function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = [r2, r3, r4];
            var r1 = r5;//assign %1 = %5  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r6 = new WyJS.Integer(0);
            var r7 = r0[r6];
            var r8 = r0.length;//lengthof %8 = %0 : [int]
            if(WyJS.lt(r7, r8, false)){
               control_flow_pc = 898;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 898:
            var r9 = new WyJS.Integer(1);
            var r10 = r0[r9];
            var r11 = r0.length;//lengthof %11 = %0 : [int]
            if(WyJS.lt(r10, r11, false)){
               control_flow_pc = 899;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 899:
            var r12 = new WyJS.Integer(2);
            var r13 = r0[r12];
            var r14 = r0.length;//lengthof %14 = %0 : [int]
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 900;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 900:
      }
   }
}

