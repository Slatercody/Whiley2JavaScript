function getField(r0){//function(OpenRecord_Valid_1:OpenRecord) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.field;//fieldload %1 = %0 field : {int field,...}
            return r1;//return %1 : int
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
            var r3 = {field: r2};//newrecord %3 = (%2) : {int field}
            var r1 = r3;//assign %1 = %3  : {int field}
            var r0 = r1;//assign %0 = %1  : {int field,...}
            var r4 = getField(r0);//invoke %4 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 1875;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1875:
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.List([104,101,108,108,111]);
            var r8 = {field: r6, x: r7};//newrecord %8 = (%6, %7) : {int field,[int+] x}
            var r0 = r8;//assign %0 = %8  : {int field,[int+] x}
            var r9 = getField(r0);//invoke %9 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r10 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 1876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1876:
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = {field: r11, x: r12, y: r13};//newrecord %14 = (%11, %12, %13) : {int field,int x,int y}
            var r0 = r14;//assign %0 = %14  : {int field,int x,int y}
            var r15 = getField(r0);//invoke %15 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r16 = new WyJS.Integer(3);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 1877;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1877:
      }
   }
}
