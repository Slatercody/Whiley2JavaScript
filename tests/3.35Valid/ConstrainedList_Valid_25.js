function indexOf(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.getValue(r1);
            return r2;//return %2 : int
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
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(6);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(8);
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9, r10], new WyJS.List('int'));
            r2 = r11.clone();//assign %2 = %11  : [int]
            r0 = r2.clone();//assign %0 = %2  : [int]
            var r13 = new WyJS.Integer(0);
            r12 = r13;//assign %12 = %13  : int
            r1 = r12;//assign %1 = %12  : int
            while(true){//loop (%1, %14, %15, %16, %17, %18)
               var r14 = r0.length;//lengthof %14 = %0 : [int]
               if(WyJS.gt(r1, r14, true)){
                  control_flow_pc = 204;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r17 = new WyJS.Integer(1);
               var r18 = r1.add(r17);//add %18 = %1, %17 : int
               r1 = r18;//assign %1 = %18  : int
            }
         case 204:
      }
   }
}
