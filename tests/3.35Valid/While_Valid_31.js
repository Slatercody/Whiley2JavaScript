function indexOf(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9, %10)
               var r7 = r0.length;//lengthof %7 = %0 : [int]
               if(WyJS.gt(r2, r7, true)){
                  control_flow_pc = 679;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = r0.getValue(r2);
               if(WyJS.equals(r8, r1, true)){
                  control_flow_pc = 679;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r9 = new WyJS.Integer(1);
               var r10 = r2.add(r9);//add %10 = %2, %9 : int
               r2 = r10;//assign %2 = %10  : int
            }
         case 679:
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
            var r1 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r2 = new WyJS.Integer(104);
            var r0 = indexOf(r1, r2);//invoke %0 = (%1, %2) While_Valid_31:indexOf : function([int],int) -> int
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 680;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 680:
            var r5 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r6 = new WyJS.Integer(101);
            var r4 = indexOf(r5, r6);//invoke %4 = (%5, %6) While_Valid_31:indexOf : function([int],int) -> int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 681;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 681:
            var r9 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r10 = new WyJS.Integer(108);
            var r8 = indexOf(r9, r10);//invoke %8 = (%9, %10) While_Valid_31:indexOf : function([int],int) -> int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 682;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 682:
            var r13 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r14 = new WyJS.Integer(111);
            var r12 = indexOf(r13, r14);//invoke %12 = (%13, %14) While_Valid_31:indexOf : function([int],int) -> int
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r15, true)){
               control_flow_pc = 683;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 683:
            var r17 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r18 = new WyJS.Integer(32);
            var r16 = indexOf(r17, r18);//invoke %16 = (%17, %18) While_Valid_31:indexOf : function([int],int) -> int
            var r19 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r19, true)){
               control_flow_pc = 684;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 684:
            var r21 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r22 = new WyJS.Integer(119);
            var r20 = indexOf(r21, r22);//invoke %20 = (%21, %22) While_Valid_31:indexOf : function([int],int) -> int
            var r23 = new WyJS.Integer(6);
            if(WyJS.equals(r20, r23, true)){
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 685:
            var r25 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r26 = new WyJS.Integer(114);
            var r24 = indexOf(r25, r26);//invoke %24 = (%25, %26) While_Valid_31:indexOf : function([int],int) -> int
            var r27 = new WyJS.Integer(8);
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r29 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r30 = new WyJS.Integer(100);
            var r28 = indexOf(r29, r30);//invoke %28 = (%29, %30) While_Valid_31:indexOf : function([int],int) -> int
            var r31 = new WyJS.Integer(10);
            if(WyJS.equals(r28, r31, true)){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            var r33 = new WyJS.List([104,101,108,108,111,32,119,111,114,108,100]);
            var r34 = new WyJS.Integer(122);
            var r32 = indexOf(r33, r34);//invoke %32 = (%33, %34) While_Valid_31:indexOf : function([int],int) -> int
            var r35 = new WyJS.Integer(11);
            if(WyJS.equals(r32, r35, true)){
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
      }
   }
}

