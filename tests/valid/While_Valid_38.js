function isSorted$_9bF59$0D5ZAw2(r0){//function(int[]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r12 = r0.length();//lengthof %12 = %0 : int[]
            if(WyJS.gt(r1, r12, true)){
               control_flow_pc = 830;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = new WyJS.Integer(1);
            var r14 = r1.sub(r13);//sub %14 = %1, %13 : int
            var r15 = r0.getValue(r14);
            var r16 = r0.getValue(r1);
            if(WyJS.lt(r15, r16, false)){
               control_flow_pc = 831;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r17 = false;
            return r17;//return %17 : bool
            control_flow_pc = 831;
            control_flow_repeat = true;
            break;
         case 831:
            var r18 = new WyJS.Integer(1);
            var r19 = r1.add(r18);//add %19 = %1, %18 : int
            var r1 = r19;//assign %1 = %19  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 830:
            var r20 = true;
            return r20;//return %20 : bool
            return;
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = isSorted$_9bF59$0D5ZAw2(r5);//invoke %0 = (%5) While_Valid_38:isSorted : function(int[]) -> bool
            var r6 = true;
            if(r0 === r6){
               control_flow_pc = 832;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 832:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r8, r9, r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = isSorted$_9bF59$0D5ZAw2(r12);//invoke %7 = (%12) While_Valid_38:isSorted : function(int[]) -> bool
            var r13 = true;
            if(r7 === r13){
               control_flow_pc = 833;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 834;
            control_flow_repeat = true;
            continue outer;//goto label834
         case 833:
            throw {name: 'Assert Failed', message: 'fail'}
         case 834:
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.List([r15, r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = isSorted$_9bF59$0D5ZAw2(r19);//invoke %14 = (%19) While_Valid_38:isSorted : function(int[]) -> bool
            var r20 = true;
            if(r14 === r20){
               control_flow_pc = 835;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 836;
            control_flow_repeat = true;
            continue outer;//goto label836
         case 835:
            throw {name: 'Assert Failed', message: 'fail'}
         case 836:
            var r22 = new WyJS.Integer(0);
            var r23 = new WyJS.Integer(0);
            var r24 = WyJS.ListGen(r22, r23, new WyJS.Type.List(new WyJS.Type.Int()));
            var r21 = isSorted$_9bF59$0D5ZAw2(r24);//invoke %21 = (%24) While_Valid_38:isSorted : function(int[]) -> bool
            var r25 = true;
            if(r21 === r25){
               control_flow_pc = 837;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 837:
            return;
      }
   }
}

