function f(r0){//function(RecordAssign_Valid_7:i8) -> RecordAssign_Valid_7:bytes
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Record(["b2", "b1"], [r0, r1], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            return r2;//return %2 : {int b1,int b2}
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
            var r3 = new WyJS.Integer(1);
            r2 = r3;//assign %2 = %3  : int
            r0 = r2;//assign %0 = %2  : int
            var r5 = f(r0);//invoke %5 = (%0) RecordAssign_Valid_7:f : function(RecordAssign_Valid_7:i8) -> RecordAssign_Valid_7:bytes
            r4 = r5;//assign %4 = %5  : {int b1,int b2}
            r1 = r4;//assign %1 = %4  : {int b1,int b2}
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Record(["b2", "b1"], [r6, r7], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            if(WyJS.equals(r1, r8, true)){
               control_flow_pc = 1215;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1215:
            var r9 = new WyJS.Record(["b2", "b1"], [r0, r0], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            r1 = r9;//assign %1 = %9  : {int b1,int b2}
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Record(["b2", "b1"], [r10, r11], new WyJS.Type.Record(["b2", "b1"], '{int b1,int b2}'));
            if(WyJS.equals(r1, r12, true)){
               control_flow_pc = 1216;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1216:
      }
   }
}

