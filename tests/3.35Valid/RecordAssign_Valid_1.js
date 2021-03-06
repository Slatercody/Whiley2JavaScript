function f(){//function() -> RecordAssign_Valid_1:tac1tup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(2);
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Record(["f1", "f2"], [r0, r1], new WyJS.Type.Record(["f1", "f2"], '{int f1,int f2}'));
            return r2;//return %2 : {int f1,int f2}
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
            var r2 = f();//invoke %2 = () RecordAssign_Valid_1:f : function() -> RecordAssign_Valid_1:tac1tup
            r1 = r2;//assign %1 = %2  : {int f1,int f2}
            r0 = r1;//assign %0 = %1  : {int f1,int f2}
            var r3 = r0.fieldLoad("f2");//fieldload %3 = %0 f2 : {int f1,int f2}
            var r4 = new WyJS.Integer(2);
            var r5 = r3.sub(r4);//sub %5 = %3, %4 : int
            var r6 = r0.fieldLoad("f2");//fieldload %6 = %0 f2 : {int f1,int f2}
            var r7 = new WyJS.Integer(2);
            var r8 = r6.sub(r7);//sub %8 = %6, %7 : int
            r0.setValue("f1", r8);//update %0.f1 = %8 : {int f1,int f2} -> {int f1,int f2}
            var r9 = r0.fieldLoad("f1");//fieldload %9 = %0 f1 : {int f1,int f2}
            var r10 = r0.fieldLoad("f2");//fieldload %10 = %0 f2 : {int f1,int f2}
            if(WyJS.equals(r9, r10, false)){
               control_flow_pc = 1198;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1198:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Record(["f1", "f2"], [r11, r12], new WyJS.Type.Record(["f1", "f2"], '{int f1,int f2}'));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1199;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1199:
      }
   }
}

