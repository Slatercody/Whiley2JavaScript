function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Real(1.20);
            r2 = r3;//assign %2 = %3  : real
            r0 = r2;//assign %0 = %2  : real
            var r5 = new WyJS.Real(2.40);
            r4 = r5;//assign %4 = %5  : real
            r1 = r4;//assign %1 = %4  : real
            var r6 = r0.add(r1);//add %6 = %0, %1 : real
            var r7 = new WyJS.Real(3.6);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1952;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1952:
            var r8 = r1.sub(r0);//sub %8 = %1, %0 : real
            var r9 = new WyJS.Real(1.2);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 1953;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1953:
            var r10 = r0.div(r1);//div %10 = %0, %1 : real
            var r11 = new WyJS.Real(0.5);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 1954;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1954:
            var r12 = r0.mul(r1);//mul %12 = %0, %1 : real
            var r13 = new WyJS.Real(2.88);
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 1955;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1955:
      }
   }
}

