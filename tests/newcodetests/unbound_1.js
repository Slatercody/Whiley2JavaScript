function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(9007199254740991000);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            var r5 = new WyJS.Integer(11);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            var r7 = new WyJS.Integer(9007199254740991011);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            return;
      }
   }
}

