function g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$ml$kB$Z2$Q$kC$12$uy2(r0){//function([Function_Valid_9:fr6nat]) -> [Function_Valid_9:fr6nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r3 = r4.clone();//assign %3 = %4  : [void]
            r1 = r3.clone();//assign %1 = %3  : [int]
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1874;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = new WyJS.Integer(1);
            if(WyJS.lt(r8, r9, true)){
               control_flow_pc = 1875;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r10 = r0.getValue(r2);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = r1.append(r11);
            r1 = r12.clone();//assign %1 = %12  : [int]
            control_flow_pc = 1875;
            control_flow_repeat = true;
            break;
         case 1875:
            var r13 = new WyJS.Integer(1);
            var r14 = r2.add(r13);//add %14 = %2, %13 : int
            var r2 = r14;//assign %2 = %14  : int
         case 1874:
            return r1;//return %1 : [int]
      }
   }
}

function f$Z9bF1D527RWz(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(12309812);
            var r3 = r2.neg();//neg %3 = %2 : int
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(2987);
            var r7 = new WyJS.Integer(2349872);
            var r8 = new WyJS.Integer(234987234987);
            var r9 = new WyJS.Integer(234987234987234);
            var r10 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            r1 = r10.clone();//assign %1 = %10  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r12 = g$Z9bF1D527oH$4$B1Vu$kC$52$u$7C$T2$r$sA$g1Vk$VC$H2$m$sA$ml$kB$Z2$Q$kC$12$uy2(r0);//invoke %12 = (%0) Function_Valid_9:g : function([Function_Valid_9:fr6nat]) -> [Function_Valid_9:fr6nat]
            var r11 = f$Z9bF1D527RWz(r12);//invoke %11 = (%12) Function_Valid_9:f : function([int]) -> [int]
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(2987);
            var r15 = new WyJS.Integer(2349872);
            var r16 = new WyJS.Integer(234987234987);
            var r17 = new WyJS.Integer(234987234987234);
            var r18 = new WyJS.List([r13, r14, r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r11, r18, true)){
               control_flow_pc = 1876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1876:
      }
   }
}
