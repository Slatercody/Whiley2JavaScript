function indexOf$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r5 = new WyJS.Integer(0);
            if(WyJS.gt(r5, r2, false)){
               control_flow_pc = 695;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.length();//lengthof %6 = %0 : [int]
            if(WyJS.lt(r2, r6, true)){
               control_flow_pc = 696;
               control_flow_repeat = true;
               continue outer;
            }
         case 695:
            throw {name: 'Assert Failed', message: 'fail'}
         case 696:
            var r7 = r0.length();//lengthof %7 = %0 : [int]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 697;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            if(WyJS.equals(r8, r1, true)){
               control_flow_pc = 697;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(1);
            var r10 = r2.add(r9);//add %10 = %2, %9 : int
            var r2 = r10;//assign %2 = %10  : int
         case 697:
            return r2;//return %2 : int
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
            var r1 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r2 = new WyJS.Integer(104);
            var r0 = indexOf$Z9dFas1FVYGs(r1, r2);//invoke %0 = (%1, %2) While_Valid_31:indexOf : function([int],int) -> int
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 698;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 698:
            var r5 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r6 = new WyJS.Integer(101);
            var r4 = indexOf$Z9dFas1FVYGs(r5, r6);//invoke %4 = (%5, %6) While_Valid_31:indexOf : function([int],int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 699;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 699:
            var r9 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r10 = new WyJS.Integer(108);
            var r8 = indexOf$Z9dFas1FVYGs(r9, r10);//invoke %8 = (%9, %10) While_Valid_31:indexOf : function([int],int) -> int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 700;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 700:
            var r13 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r14 = new WyJS.Integer(111);
            var r12 = indexOf$Z9dFas1FVYGs(r13, r14);//invoke %12 = (%13, %14) While_Valid_31:indexOf : function([int],int) -> int
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 701;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 701:
            var r17 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r18 = new WyJS.Integer(32);
            var r16 = indexOf$Z9dFas1FVYGs(r17, r18);//invoke %16 = (%17, %18) While_Valid_31:indexOf : function([int],int) -> int
            var r19 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 702;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 702:
            var r21 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r22 = new WyJS.Integer(119);
            var r20 = indexOf$Z9dFas1FVYGs(r21, r22);//invoke %20 = (%21, %22) While_Valid_31:indexOf : function([int],int) -> int
            var r23 = new WyJS.Integer(6);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 703;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 703:
            var r25 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r26 = new WyJS.Integer(114);
            var r24 = indexOf$Z9dFas1FVYGs(r25, r26);//invoke %24 = (%25, %26) While_Valid_31:indexOf : function([int],int) -> int
            var r27 = new WyJS.Integer(8);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 704;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 704:
            var r29 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r30 = new WyJS.Integer(100);
            var r28 = indexOf$Z9dFas1FVYGs(r29, r30);//invoke %28 = (%29, %30) While_Valid_31:indexOf : function([int],int) -> int
            var r31 = new WyJS.Integer(10);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 705;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 705:
            var r33 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r34 = new WyJS.Integer(122);
            var r32 = indexOf$Z9dFas1FVYGs(r33, r34);//invoke %32 = (%33, %34) While_Valid_31:indexOf : function([int],int) -> int
            var r35 = new WyJS.Integer(11);
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 706;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 706:
      }
   }
}

