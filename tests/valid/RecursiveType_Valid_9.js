function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(14897);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : X<int|{X left,int op,X right}>
            var r3 = new WyJS.Integer(14897);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2173;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2173:
      }
   }
}

