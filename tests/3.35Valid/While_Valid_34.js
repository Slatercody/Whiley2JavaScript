function lastIndexOf(r0, r1){//function([int],int) -> int|null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            r4 = r5;//assign %4 = %5  : int
            r2 = r4;//assign %2 = %4  : int
            var r7 = null;/n            r6 = r7;//assign %6 = %7  : null
            r3 = r6;//assign %3 = %6  : null|int
            while(true){//loop (%2, %3, %8, %9, %10, %11, %12, %13, %14, %15)
               var r12 = r0.length;//lengthof %12 = %0 : [int]
               if(WyJS.gt(r2, r12, true)){
                  control_flow_pc = 712;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r13 = r0.getValue(r2);
               if(WyJS.equals(r13, r1, false)){
                  var r14 = new WyJS.Integer(1);
                  var r15 = r2.add(r14);//add %15 = %2, %14 : int
                  r2 = r15;//assign %2 = %15  : int
                  continue;
               }
               r3 = r2;//assign %3 = %2  : int
            }
         case 712:
            return r3;//return %3 : null|int
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.List('int'));
            r1 = r8.clone();//assign %1 = %8  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r10 = new WyJS.Integer(0);
            var r9 = lastIndexOf(r0, r10);//invoke %9 = (%0, %10) While_Valid_34:lastIndexOf : function([int],int) -> int|null
            var r11 = null;/n            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 714;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 714:
            var r13 = new WyJS.Integer(1);
            var r12 = lastIndexOf(r0, r13);//invoke %12 = (%0, %13) While_Valid_34:lastIndexOf : function([int],int) -> int|null
            var r14 = new WyJS.Integer(4);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 715;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 715:
            var r16 = new WyJS.Integer(2);
            var r15 = lastIndexOf(r0, r16);//invoke %15 = (%0, %16) While_Valid_34:lastIndexOf : function([int],int) -> int|null
            var r17 = new WyJS.Integer(5);
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 716;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 716:
            var r19 = new WyJS.Integer(3);
            var r18 = lastIndexOf(r0, r19);//invoke %18 = (%0, %19) While_Valid_34:lastIndexOf : function([int],int) -> int|null
            var r20 = new WyJS.Integer(3);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 717;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 717:
      }
   }
}

