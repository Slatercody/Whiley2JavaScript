function parseWhiteSpace(r0){//function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("pos");//fieldload %1 = %0 pos : {[int] input,int pos}
            var r2 = r0.fieldLoad("input");//fieldload %2 = %0 input : {[int] input,int pos}
            var r3 = r2.length;//lengthof %3 = %2 : [int]
            if(WyJS.gt(r1, r3, true)){
               control_flow_pc = 1364;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.fieldLoad("input");//fieldload %4 = %0 input : {[int] input,int pos}
            var r5 = r0.fieldLoad("pos");//fieldload %5 = %0 pos : {[int] input,int pos}
            var r6 = r4.getValue(r5);
            var r7 = new WyJS.Integer(32);
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 1364;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.fieldLoad("input");//fieldload %9 = %0 input : {[int] input,int pos}
            var r10 = r0.fieldLoad("pos");//fieldload %10 = %0 pos : {[int] input,int pos}
            var r11 = new WyJS.Integer(1);
            var r12 = r10.add(r11);//add %12 = %10, %11 : int
            var r13 = new WyJS.Record(["input", "pos"], [r9, r12], new WyJS.Type.Record(["input", "pos"], '{[int] input,int pos}'));
            var r8 = parseWhiteSpace(r13);//invoke %8 = (%13) ConstrainedRecord_Valid_6:parseWhiteSpace : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            return r8;//return %8 : {[int] input,int pos}
            control_flow_pc = 1365;
            control_flow_repeat = true;
            continue outer;//goto label1365
         case 1364:
            return r0;//return %0 : {[int] input,int pos}
         case 1365:
      }
   }
}

function parseTerm(r0){//function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = parseWhiteSpace(r0);//invoke %1 = (%0) ConstrainedRecord_Valid_6:parseWhiteSpace : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            r0 = r1;//assign %0 = %1  : {[int] input,int pos}
            return r0;//return %0 : {[int] input,int pos}
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
            var r2 = new WyJS.List([32,32,72,101,108,108,111]);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["input", "pos"], [r2, r3], new WyJS.Type.Record(["input", "pos"], '{[int+] input,int pos}'));
            r1 = r4;//assign %1 = %4  : {[int+] input,int pos}
            r0 = r1;//assign %0 = %1  : {[int] input,int pos}
            var r5 = parseTerm(r0);//invoke %5 = (%0) ConstrainedRecord_Valid_6:parseTerm : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            var r6 = new WyJS.Integer(32);
            var r7 = new WyJS.Integer(32);
            var r8 = new WyJS.Integer(72);
            var r9 = new WyJS.Integer(101);
            var r10 = new WyJS.Integer(108);
            var r11 = new WyJS.Integer(108);
            var r12 = new WyJS.Integer(111);
            var r13 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12], new WyJS.List('int'));
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Record(["input", "pos"], [r13, r14], new WyJS.Type.Record(["input", "pos"], '{[int] input,int pos}'));
            if(WyJS.equals(r5, r15, true)){
               control_flow_pc = 1366;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1366:
      }
   }
}

